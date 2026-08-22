(() => {
  const hasGtag = () => typeof window.gtag === 'function';

  function cleanText(value) {
    return (value || '')
      .toString()
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 100);
  }

  function pathFromUrl(href) {
    try {
      const url = new URL(href, window.location.origin);
      return url.origin === window.location.origin
        ? `${url.pathname}${url.search}`
        : url.hostname.replace(/^www\./, '');
    } catch {
      return href || '';
    }
  }

  function getProjectName(anchor) {
    const card = anchor.closest('.project-card');
    if (!card) return '';
    const heading = card.querySelector('h2, h3, .project-title');
    return cleanText(heading?.textContent || '');
  }

  function classifyAnchor(anchor) {
    const href = anchor.getAttribute('href') || '';
    const text = cleanText(anchor.getAttribute('aria-label') || anchor.textContent || anchor.title || '');
    const normalized = href.toLowerCase();

    if (normalized.startsWith('mailto:')) return 'click_email';
    if (normalized.startsWith('tel:')) return 'click_phone';
    if (normalized.includes('github.com')) return 'click_github';
    if (normalized.includes('linkedin.com')) return 'click_linkedin';
    if (normalized.includes('facebook.com')) return 'click_facebook';
    if (normalized.includes('instagram.com')) return 'click_instagram';
    if (normalized.includes('spotify.com')) return 'click_spotify';
    if (normalized.includes('figma.com')) return 'click_figma';
    if (normalized.endsWith('.docx') || normalized.includes('resume')) return 'click_resume';
    if (anchor.closest('.project-card') && normalized.includes('github.com')) return 'click_project_code';
    if (anchor.closest('.project-card') || normalized.includes('/projects/')) return 'click_project_live';
    if (anchor.closest('.navbar') || anchor.closest('.topnav')) return 'click_navigation';
    if (anchor.classList.contains('btn') || anchor.closest('.cta-buttons')) return 'click_home_cta';
    if (anchor.classList.contains('link-card')) return 'click_link_card';
    if (normalized.startsWith('/') || normalized.startsWith(window.location.origin.toLowerCase()) || normalized.startsWith('#')) return 'click_internal_link';
    return 'click_external_link';
  }

  function sendEvent(eventName, params = {}) {
    if (!hasGtag()) return;
    window.gtag('event', eventName, {
      page_path: window.location.pathname,
      link_url: params.link_url,
      link_text: params.link_text,
      link_target: params.link_target,
      project_name: params.project_name,
      event_category: 'portfolio_click',
      transport_type: 'beacon'
    });
  }

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href') || '';
      sendEvent(classifyAnchor(anchor), {
        link_url: pathFromUrl(href),
        link_text: cleanText(anchor.getAttribute('aria-label') || anchor.textContent || anchor.title || href),
        link_target: anchor.target || '',
        project_name: getProjectName(anchor)
      });
      return;
    }

    const button = event.target.closest('button');
    if (button) {
      const label = cleanText(button.getAttribute('aria-label') || button.textContent || button.name || button.className || 'button');
      let eventName = 'click_button';
      if (button.classList.contains('project-filter-button')) eventName = 'click_project_filter';
      if (button.classList.contains('project-filter-clear-button')) eventName = 'click_clear_filters';
      if (button.type === 'submit' || button.name === 'submit') eventName = 'click_form_submit';
      sendEvent(eventName, { link_text: label });
    }
  }, { capture: true });

  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (form && form.matches('form')) {
      sendEvent('form_submit', {
        link_url: pathFromUrl(form.action || ''),
        link_text: cleanText(form.getAttribute('aria-label') || form.id || form.className || 'form')
      });
    }
  }, { capture: true });
})();
