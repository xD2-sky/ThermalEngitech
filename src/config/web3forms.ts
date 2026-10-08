/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Web3Forms is a form-backend service for static sites — submissions are
 * posted straight from the browser and relayed to an inbox, with no server
 * of our own needed. The access key is meant to be public (Web3Forms' own
 * docs: "You do not need to hide the access key"), so shipping it in the
 * client bundle is the intended usage, not a leak.
 */

const WEB3FORMS_ACCESS_KEY = 'fa1aad6b-260b-4603-b9af-529324047884';

export interface Web3FormsResult {
  success: boolean;
  message: string;
}

export async function submitToWeb3Forms(data: Record<string, string>): Promise<Web3FormsResult> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...data }),
    });
    const result = await response.json().catch(() => ({}));
    return {
      success: response.ok && result.success !== false,
      message: typeof result.message === 'string' ? result.message : '',
    };
  } catch {
    return { success: false, message: 'Network error — could not reach the notification service.' };
  }
}
