const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

/**
 * Submit a lead to configured backends.
 * Extend this function to add CRM integrations (HubSpot, Salesforce, etc.).
 */
export async function submitLead(leadData) {
  await submitToGoogleSheets(leadData)
}

async function submitToGoogleSheets({ name, email, phone, projectDetails }) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error(
      'Form submission is not configured yet. Please contact us directly by email or phone.'
    )
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    projectDetails: projectDetails.trim(),
  }

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Unable to submit your message. Please try again or contact us directly.')
  }

  let result
  try {
    result = await response.json()
  } catch {
    throw new Error('Received an unexpected response. Please try again or contact us directly.')
  }

  if (!result.success) {
    throw new Error(result.error || 'Unable to submit your message. Please try again.')
  }
}
