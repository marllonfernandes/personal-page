/**
 * Utility for tracking lead conversions across Google Ads (gtag.js) and Google Tag Manager (dataLayer).
 * 
 * @param {string} action - The conversion action (e.g. 'whatsapp_click', 'form_submit', 'calendar_click')
 * @param {string} label - Origin or detail of the conversion (e.g. 'hero', 'floating_button', 'service_ia')
 */
export function trackConversion(action = 'whatsapp_click', label = 'geral') {
  if (typeof window === 'undefined') return;

  // Google Ads (gtag.js)
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: action,
      event_label: label,
      send_to: 'AW-18099440512'
    });
  }

  // Google Tag Manager (dataLayer)
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'lead_conversion',
      conversionAction: action,
      conversionLabel: label,
      timestamp: new Date().toISOString()
    });
  }
}
