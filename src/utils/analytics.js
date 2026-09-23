/**
 * Utility for tracking lead conversions across Google Ads (gtag.js) and Google Tag Manager (dataLayer).
 * Follows the 'analytics-tracking' standard: decision-grade signals, deduplication awareness, and dev-mode gating.
 */

export const GOOGLE_ADS_ID = 'AW-18099440512';

// Debounce map to prevent accidental double-firing on rapid double-clicks
const recentEvents = new Map();
const DEBOUNCE_WINDOW_MS = 1200;

/**
 * Checks if the current execution context is a local development environment.
 */
function isDevEnvironment() {
  if (typeof window === 'undefined') return false;
  return Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]'
  );
}

/**
 * Extracts and persists campaign attribution parameters (UTMs and Google Click ID)
 * from current URL into sessionStorage for attribution preservation during the session.
 * 
 * @returns {Object} Attribution key-value pairs
 */
export function getAttributionParams() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
  const currentAttribution = {};
  let hasNewAttribution = false;

  attributionKeys.forEach(key => {
    const val = params.get(key);
    if (val) {
      currentAttribution[key] = val;
      hasNewAttribution = true;
    }
  });

  // If found in URL, save to sessionStorage to persist across session navigation
  if (hasNewAttribution) {
    try {
      sessionStorage.setItem('cognitiva_attribution', JSON.stringify(currentAttribution));
    } catch (e) {
      // sessionStorage unavailable
    }
    return currentAttribution;
  }

  // Fallback to persisted session attribution
  try {
    const stored = sessionStorage.getItem('cognitiva_attribution');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // sessionStorage unavailable
  }

  return {};
}

/**
 * Tracks a high-intent lead conversion event.
 * 
 * @param {string} action - Conversion category/action ('whatsapp_click', 'form_submit', 'calendar_click', 'phone_click', 'email_click')
 * @param {string} label - Context/origin of the action (e.g. 'hero', 'floating_button', 'service_juridico', 'contact', 'footer')
 * @param {Object} [extraData={}] - Optional additional context (e.g. segment, challenge)
 */
export function trackConversion(action = 'whatsapp_click', label = 'geral', extraData = {}) {
  if (typeof window === 'undefined') return;

  // Double-click debounce protection
  const eventKey = `${action}_${label}`;
  const now = Date.now();
  if (recentEvents.has(eventKey) && now - recentEvents.get(eventKey) < DEBOUNCE_WINDOW_MS) {
    if (isDevEnvironment()) {
      console.info('[Analytics Dev] Duplicate event suppressed (debounced):', eventKey);
    }
    return;
  }
  recentEvents.set(eventKey, now);

  const attribution = getAttributionParams();
  const eventPayload = {
    event_category: action,
    event_label: label,
    conversion_action: action,
    conversion_label: label,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...attribution,
    ...extraData
  };

  // Development mode: Log clearly and do not pollute production Google Ads
  if (isDevEnvironment()) {
    console.info('[Analytics Dev] Conversion Event Triggered:', {
      action,
      label,
      payload: eventPayload
    });
    return;
  }

  // Google Ads (gtag.js)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      ...eventPayload,
      send_to: GOOGLE_ADS_ID
    });
  }

  // Google Tag Manager / Custom DataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'lead_conversion',
      ...eventPayload,
      timestamp: new Date().toISOString()
    });
  }
}
