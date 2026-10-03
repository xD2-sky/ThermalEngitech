/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface RotatingGlobeProps {
  className?: string;
}

const RENDER_SIZE = 320;
// The source footage has a day/night terminator on the sphere itself — its
// shadowed limb renders almost as dark as the actual black backdrop, so a
// plain global brightness threshold keys out chunks of the globe along
// with the background (a bite taken out of its dark side). The bright
// atmosphere/rim glow that wraps all the way around the sphere's edge
// (even on its dark side) forms a closed ring brighter than FLOOD_THRESHOLD,
// so flood-filling "background" inward from the canvas border — rather
// than thresholding every pixel independently — stops at that ring and
// correctly leaves the enclosed dark terminator opaque.
const FLOOD_THRESHOLD = 40;
// The source video frames the sphere with a visible margin on every side
// (verified by measuring its actual brightness bounding box), so a plain
// center-crop leaves the globe looking small with empty space around it.
// Zooming in to ~99% of the shorter dimension crops tight to the sphere
// (plus its glow) so it fills the canvas edge-to-edge instead.
const ZOOM = 0.99;

/**
 * Plays the rotating-Earth stock video (shot on a plain black background)
 * through an off-screen <video>, then re-draws each frame into a <canvas>
 * with per-pixel alpha derived from brightness — a luma key. CSS
 * mix-blend-mode on a <video> element doesn't reliably key out video
 * content in Chromium, so this does the compositing manually instead of
 * relying on that.
 */
export default function RotatingGlobe({ className }: RotatingGlobeProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = RENDER_SIZE;
    canvas.height = RENDER_SIZE;

    let rafId = 0;
    const draw = () => {
      if (video.readyState >= 2 && video.videoWidth > 0) {
        // Center-crop the source video to a square before scaling (the
        // same effect as CSS object-fit: cover — drawing straight into a
        // square canvas would otherwise squash the globe into an oval),
        // zoomed in so the sphere itself fills the frame edge-to-edge.
        const side = Math.min(video.videoWidth, video.videoHeight) * ZOOM;
        const sx = (video.videoWidth - side) / 2;
        const sy = (video.videoHeight - side) / 2;
        ctx.drawImage(video, sx, sy, side, side, 0, 0, RENDER_SIZE, RENDER_SIZE);
        const frame = ctx.getImageData(0, 0, RENDER_SIZE, RENDER_SIZE);
        const d = frame.data;
        const n = RENDER_SIZE;
        const isBackground = new Uint8Array(n * n);
        const queue = new Int32Array(n * n);
        let qHead = 0;
        let qTail = 0;

        const brightnessAt = (idx: number) => {
          const p = idx * 4;
          return Math.max(d[p], d[p + 1], d[p + 2]);
        };
        const tryEnqueue = (idx: number) => {
          if (isBackground[idx] === 0 && brightnessAt(idx) <= FLOOD_THRESHOLD) {
            isBackground[idx] = 1;
            queue[qTail++] = idx;
          }
        };

        for (let x = 0; x < n; x++) {
          tryEnqueue(x);
          tryEnqueue((n - 1) * n + x);
        }
        for (let y = 0; y < n; y++) {
          tryEnqueue(y * n);
          tryEnqueue(y * n + n - 1);
        }

        while (qHead < qTail) {
          const idx = queue[qHead++];
          const x = idx % n;
          const y = (idx - x) / n;
          if (x > 0) tryEnqueue(idx - 1);
          if (x < n - 1) tryEnqueue(idx + 1);
          if (y > 0) tryEnqueue(idx - n);
          if (y < n - 1) tryEnqueue(idx + n);
        }

        for (let idx = 0; idx < n * n; idx++) {
          d[idx * 4 + 3] = isBackground[idx] ? 0 : 255;
        }
        ctx.putImageData(frame, 0, 0);
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className={className}>
      {/* display:none would stop Chrome from ever advancing playback past
          the first decoded frame (no compositor layer is requesting new
          ones) — keep it laid out but invisible instead, so the video
          actually keeps playing while the canvas re-draws it. */}
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}videos/certifications-globe-rotating.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-px h-px opacity-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      />
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
