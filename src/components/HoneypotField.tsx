/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HoneypotFieldProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// Web3Forms' spam-filtering convention: a checkbox named "botcheck" that a
// real visitor never sees or touches. Simple bots that auto-fill every
// field they find in the markup end up checking it, and Web3Forms silently
// drops submissions where it comes back true — no CAPTCHA step for humans.
export default function HoneypotField({ checked, onChange }: HoneypotFieldProps) {
  return (
    <input
      type="checkbox"
      name="botcheck"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ display: 'none' }}
    />
  );
}
