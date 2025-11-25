export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
export const FORM_KEY = import.meta.env.VITE_FORM_KEY;

export async function submitContactForm(payload) {
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': FORM_KEY   // or as required by the provider
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to send');
  return res.json();
}
