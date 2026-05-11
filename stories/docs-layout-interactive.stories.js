export default {
  title: 'Layouts/Docs Page (Interactive)',
  parameters: { layout: 'fullscreen' },
};

const Markup = () => `
  <main id="main">
    <div class="navigation-sidebar collapse" role="navigation" aria-label="sidebar">
      <div class="sticky">
        <button class="sidebar-toggle-button" aria-expanded="false" aria-controls="navigation-sidebar-content">
          <span>
            <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
          </span>
        </button>
        <ul class="dropdown-container" id="navigation-sidebar-content">
          <li class="dropdown accordion__section--expanded">
            <button class="dropdown-header accordion__section-header accordion__section-button" aria-expanded="true">
              <span>Documentation</span>
              <span class="dropdown-arrow"><span>
                <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF" width="80%" height="80%"/></svg>
              </span></span>
            </button>
            <ul class="dropdown-list accordion__section-content indented" style="display:block;">
              <li><a href="#">Getting Started</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <button class="dropdown-header accordion__section-header accordion__section-button" aria-expanded="false">
              <span>Atmospheric</span>
              <span class="dropdown-arrow"><span>
                <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF" width="80%" height="80%"/></svg>
              </span></span>
            </button>
            <ul class="dropdown-list accordion__section-content indented" style="display:none;">
              <li><a href="#">Overview</a></li>
              <li><a href="#">How to build your order</a></li>
              <li><a href="#">Sample model data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="container main-content-column column-with-sidebar">
      <div class="text-segment h3-as-h4">
        <h1 class="segment-header">Interactive Docs Sidebar</h1>
        <p>Click the section headers to expand/collapse. Use the top button to toggle the sidebar.</p>
      </div>
    </div>
  </main>
`;

export const Interactive = () => Markup();

Interactive.play = async ({ canvasElement }) => {
  const root = canvasElement;
  const qs = (sel, el = root) => el.querySelector(sel);
  const qsa = (sel, el = root) => Array.from(el.querySelectorAll(sel));

  // Sidebar collapse toggle
  const sidebar = qs('.navigation-sidebar');
  const toggleBtn = qs('.sidebar-toggle-button');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      sidebar.classList.toggle('is-open');
    });
  }

  // Accordion sections
  qsa('.dropdown > .dropdown-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const li = btn.closest('.dropdown');
      if (li) li.classList.toggle('accordion__section--expanded', !expanded);
      const next = btn.nextElementSibling;
      if (next && next.classList.contains('accordion__section-content')) {
        next.style.display = expanded ? 'none' : 'block';
      }
    });
  });
};
