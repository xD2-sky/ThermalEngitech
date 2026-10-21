#!/usr/bin/env bash
# ============================================================================
# Post-launch verification for thermalengitech.com — READ ONLY.
#
# Every request here is a plain GET/HEAD via curl. Nothing is uploaded,
# nothing is changed, nothing is written anywhere but this terminal. Safe to
# run as many times as you like, any time after launch.
#
# Usage:
#   ./scripts/post-launch-check.sh                  # checks thermalengitech.com
#   ./scripts/post-launch-check.sh https://example.com   # checks a different host (e.g. dry-run against staging)
# ============================================================================
set -uo pipefail

BASE="${1:-https://thermalengitech.com}"
BASE="${BASE%/}"
HOST="${BASE#https://}"
HOST="${HOST#http://}"
TIMEOUT=15

PASS=0
FAIL=0

row() {
  # row <STATUS> <label> <detail>
  printf "%-5s  %-42s  %s\n" "$1" "$2" "$3"
  if [ "$1" = "PASS" ]; then PASS=$((PASS+1)); else FAIL=$((FAIL+1)); fi
}

section() {
  echo
  echo "== $1 =="
}

status_code() {
  curl -s -o /dev/null -w '%{http_code}' --max-time "$TIMEOUT" "$1" 2>/dev/null
}

# Prints the redirect chain for a URL (one line per hop) and leaves
# FINAL_URL / FINAL_CODE / HOP_COUNT set for the caller to check.
follow_chain() {
  local url="$1" max=6 hop=0 code loc headers
  CHAIN=()
  while [ "$hop" -lt "$max" ]; do
    headers=$(curl -s -D - -o /dev/null --max-time "$TIMEOUT" "$url" 2>/dev/null)
    code=$(printf '%s' "$headers" | head -1 | grep -o '[0-9]\{3\}' | head -1)
    code="${code:-000}"
    if [[ "$code" == 3* ]]; then
      loc=$(printf '%s' "$headers" | grep -i '^location:' | tail -1 | sed -E 's/^[Ll]ocation:[[:space:]]*//' | tr -d '\r\n')
      CHAIN+=("$url -> $code -> $loc")
      url="$loc"
      hop=$((hop+1))
    else
      CHAIN+=("$url -> $code (final)")
      break
    fi
  done
  FINAL_URL="$url"
  FINAL_CODE="$code"
  HOP_COUNT="$hop"
}

echo "Post-launch check for $BASE"
echo "(read-only — GET/HEAD requests only)"

# ---------------------------------------------------------------------------
section "1. Sitemap routes (expect 34, all 200)"
sitemap=$(curl -s --max-time "$TIMEOUT" "$BASE/sitemap.xml" 2>/dev/null)
routes=$(printf '%s' "$sitemap" | grep -o '<loc>[^<]*</loc>' | sed -E 's#</?loc>##g' | sed "s#^https\?://[^/]*##")
route_count=$(printf '%s\n' "$routes" | grep -c .)

if [ "$route_count" -eq 34 ]; then
  row PASS "sitemap.xml route count" "$route_count routes (expected 34)"
else
  row FAIL "sitemap.xml route count" "$route_count routes (expected 34)"
fi

while IFS= read -r route; do
  [ -z "$route" ] && continue
  [ "$route" = "" ] && route="/"
  code=$(status_code "$BASE$route")
  if [ "$code" = "200" ]; then
    row PASS "route $route" "$code"
  else
    row FAIL "route $route" "got $code, expected 200"
  fi
done <<< "$routes"

# ---------------------------------------------------------------------------
section "2. Known URL patterns"

code=$(status_code "$BASE/this-url-should-not-exist-xyz")
[ "$code" = "404" ] && row PASS "unknown URL -> 404" "$code" || row FAIL "unknown URL -> 404" "got $code"

follow_chain "$BASE/about-us"
if [ "$HOP_COUNT" -le 1 ] && [ "$FINAL_CODE" = "200" ] && [[ "$FINAL_URL" == */about ]]; then
  row PASS "old WP page /about-us -> /about" "${HOP_COUNT} hop(s), final $FINAL_CODE"
else
  row FAIL "old WP page /about-us -> /about" "${HOP_COUNT} hop(s), final $FINAL_URL ($FINAL_CODE)"
fi

code=$(status_code "$BASE/2020/01/sample-demo-post")
[ "$code" = "410" ] && row PASS "demo blog post -> 410" "$code" || row FAIL "demo blog post -> 410" "got $code"

code=$(status_code "$BASE/images/")
[ "$code" = "403" ] && row PASS "/images/ directory listing blocked" "$code" || row FAIL "/images/ directory listing blocked" "got $code"

# ---------------------------------------------------------------------------
section "2b. Legacy .html / pre-WordPress URLs (found in Google/Wayback)"

check_legacy() {
  # check_legacy <path> <expected-final-path-suffix>
  follow_chain "$BASE/$1"
  if [ "$HOP_COUNT" -le 1 ] && [ "$FINAL_CODE" = "200" ] && [[ "$FINAL_URL" == *"$2" ]]; then
    row PASS "/$1 -> $2" "${HOP_COUNT} hop(s), final $FINAL_CODE"
  else
    row FAIL "/$1 -> $2" "${HOP_COUNT} hop(s), final $FINAL_URL ($FINAL_CODE)"
  fi
}

# WordPress-era slugs with a .html suffix (the slash variant already worked;
# Google's cache/sitelinks still point at the .html variant too)
check_legacy "contact-us.html" "/contact"
check_legacy "products.html" "/products"
check_legacy "about-us.html" "/about"
check_legacy "our-profile.html" "/about"
check_legacy "careers.html" "/contact"
check_legacy "infrastructure.html" "/manufacturing"
check_legacy "quality-assurance.html" "/manufacturing"
check_legacy "boilers.html" "/products/category/steam-boilers"

# Older, pre-WordPress ASP-era site (underscored slugs, .html/.aspx)
check_legacy "homepage.html" "/"
check_legacy "aboutus.html" "/about"
check_legacy "contactus.aspx" "/contact"
check_legacy "quality.html" "/manufacturing"
check_legacy "air_pre_heater.html" "/products/air-pre-heater"
check_legacy "combi_design_biomass_boiler.html" "/products/hybrid-combithermal"
check_legacy "hot_water_generator.html" "/products/hot-water-generator-unit"
check_legacy "multi_cyclone_dust_collector.html" "/products/multi-cyclone-dust-collector"
check_legacy "pressure_reducing_station.html" "/products/pressure-reducing-station"
check_legacy "thermal_max.html" "/products/category/steam-boilers"
check_legacy "thermal_sib.html" "/products/category/steam-boilers"
check_legacy "thermic_fluid_heater.html" "/products/category/thermic-fluid-heaters"
check_legacy "v_thermic_fluid_heater.html" "/products/solid-fuel-4pass-vertical-heater"
check_legacy "v4_thermic_fluid_heater.html" "/products/solid-fuel-4pass-vertical-heater"

# Confirmed historical spam/defacement, not real content — must stay 404
for u in "ast.html" "fonts/Boilers.asp"; do
  code=$(status_code "$BASE/$u")
  [ "$code" = "404" ] && row PASS "/$u stays 404 (spam artifact)" "$code" || row FAIL "/$u stays 404 (spam artifact)" "got $code"
done

# ---------------------------------------------------------------------------
section "3. Protocol / host normalization"

follow_chain "http://$HOST/"
if [ "$HOP_COUNT" -le 1 ] && [[ "$FINAL_URL" == https://* ]] && [ "$FINAL_CODE" = "200" ]; then
  row PASS "http:// -> https://" "${HOP_COUNT} hop(s) -> $FINAL_URL"
else
  row FAIL "http:// -> https://" "${HOP_COUNT} hop(s) -> $FINAL_URL ($FINAL_CODE)"
fi

follow_chain "https://www.$HOST/"
if [ "$HOP_COUNT" -le 1 ] && [[ "$FINAL_URL" == "https://$HOST"* ]] && [ "$FINAL_CODE" = "200" ]; then
  row PASS "www -> non-www" "${HOP_COUNT} hop(s) -> $FINAL_URL"
else
  row FAIL "www -> non-www" "${HOP_COUNT} hop(s) -> $FINAL_URL ($FINAL_CODE)"
fi

# ---------------------------------------------------------------------------
section "4. robots.txt"

robots=$(curl -s --max-time "$TIMEOUT" "$BASE/robots.txt" 2>/dev/null)
if printf '%s' "$robots" | grep -qi 'googlebot'; then
  row FAIL "robots.txt has no Googlebot block" "found a 'Googlebot' line"
else
  row PASS "robots.txt has no Googlebot block" "clean"
fi
if printf '%s' "$robots" | grep -q '^Allow: /$' && printf '%s' "$robots" | grep -q "Sitemap: $BASE/sitemap.xml"; then
  row PASS "robots.txt is our file" "Allow: / + correct sitemap line present"
else
  row FAIL "robots.txt is our file" "missing expected Allow:/Sitemap lines"
fi

# ---------------------------------------------------------------------------
section "5. Canonical / sitemap domain"

home=$(curl -s --max-time "$TIMEOUT" "$BASE/" 2>/dev/null)
canonical=$(printf '%s' "$home" | grep -o '<link rel="canonical" href="[^"]*"' | sed -E 's/.*href="([^"]*)"/\1/')
if [ "$canonical" = "$BASE/" ]; then
  row PASS "homepage canonical" "$canonical"
else
  row FAIL "homepage canonical" "got '$canonical', expected '$BASE/'"
fi

bad_locs=$(printf '%s' "$sitemap" | grep -o '<loc>[^<]*</loc>' | grep -vc "<loc>$BASE")
if [ "$bad_locs" -eq 0 ]; then
  row PASS "sitemap.xml all URLs on $HOST" "0 mismatches"
else
  row FAIL "sitemap.xml all URLs on $HOST" "$bad_locs entr(y/ies) off-domain"
fi

# ---------------------------------------------------------------------------
section "6. Cache headers"

js_path=$(printf '%s' "$home" | grep -o '/assets/[^"]*\.js' | head -1)
if [ -n "$js_path" ]; then
  cc=$(curl -sI --max-time "$TIMEOUT" "$BASE$js_path" | grep -i '^cache-control:' | tr -d '\r')
  case "$cc" in
    *max-age=31536000*immutable*) row PASS "JS asset cache-control" "$cc" ;;
    *) row FAIL "JS asset cache-control" "got '$cc'" ;;
  esac
else
  row FAIL "JS asset cache-control" "could not find a JS asset path on the homepage"
fi

cc=$(curl -sI --max-time "$TIMEOUT" "$BASE/images/hero-refinery-plant.jpg" | grep -i '^cache-control:' | tr -d '\r')
case "$cc" in
  *max-age=2592000*) row PASS "image cache-control" "$cc" ;;
  *) row FAIL "image cache-control" "got '$cc'" ;;
esac

cc=$(curl -sI --max-time "$TIMEOUT" "$BASE/about" | grep -i '^cache-control:' | tr -d '\r')
case "$cc" in
  *max-age=0*must-revalidate*) row PASS "HTML page cache-control" "$cc" ;;
  *) row FAIL "HTML page cache-control" "got '$cc'" ;;
esac

# ---------------------------------------------------------------------------
echo
echo "============================================================"
echo "  $PASS passed, $FAIL failed"
echo "============================================================"
[ "$FAIL" -eq 0 ]
