export default {
  title: 'Layouts/Docs Page',
  parameters: { layout: 'fullscreen' },
};

export const WithSidebar = () => `
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
            <button class="dropdown-header accordion__section-header accordion__section-button">
              <span>Documentation</span>
              <span class="dropdown-arrow"><span>
                <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF" width="80%" height="80%"/></svg>
              </span></span>
            </button>
            <ul class="dropdown-list accordion__section-content indented">
              <li><a href="#">Getting Started</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="container main-content-column column-with-sidebar">
      <div class="text-segment h3-as-h4">
        <h1 class="segment-header">Getting started with Weather DataHub</h1>
        <p>This layout demonstrates the docs page with a collapsible navigation sidebar and a content column.</p>
        <h2 class="segment-header">Section header</h2>
        <p>Body copy styled via <code>text-segment</code>.</p>
      </div>
    </div>
  </main>
`;

export const FullIA = () => `
  <main id=\"main\">
    <div class=\"navigation-sidebar collapse\" role=\"navigation\" aria-label=\"sidebar\">
      <div class=\"sticky\">
        <button class=\"sidebar-toggle-button\" aria-expanded=\"false\" aria-controls=\"navigation-sidebar-content\"> 
          <span>
            <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\"/></svg>
          </span>
        </button>
        <ul class=\"dropdown-container\" id=\"navigation-sidebar-content\">
          <li class=\"dropdown accordion__section--expanded\">
            <button class=\"dropdown-header accordion__section-header accordion__section-button\">
              <span>Documentation</span>
              <span class=\"dropdown-arrow\"><span>
                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
              </span></span>
            </button>
            <ul class=\"dropdown-list accordion__section-content indented\">
              <li><a href=\"#\">Getting Started</a></li>
            </ul>
          </li>
          <li class=\"dropdown\">
            <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
              <span>Atmospheric</span>
              <span class=\"dropdown-arrow\"><span>
                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
              </span></span>
            </button>
            <ul class=\"dropdown-list accordion__section-content indented\">
              <li><a href=\"#\">Overview</a></li>
              <li><a href=\"#\">How to build your order</a></li>
              <li><a href=\"#\">Sample model data</a></li>
              <li>
                <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
                  <span>Atmospheric models</span>
                  <span class=\"dropdown-arrow\"><span>
                    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
                  </span></span>
                </button>
                <ul class=\"dropdown-list accordion__section-content indented\">
                  <li><a href=\"#\">Sample download code</a></li>
                  <li><a href=\"#\">API documentation</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class=\"dropdown\">
            <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
              <span>Site-specific</span>
              <span class=\"dropdown-arrow\"><span>
                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
              </span></span>
            </button>
            <ul class=\"dropdown-list accordion__section-content indented\">
              <li><a href=\"#\">Overview</a></li>
              <li>
                <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
                  <span>Global spot data</span>
                  <span class=\"dropdown-arrow\"><span>
                    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
                  </span></span>
                </button>
                <ul class=\"dropdown-list accordion__section-content indented\">
                  <li><a href=\"#\">Sample data</a></li>
                  <li><a href=\"#\">Sample download code</a></li>
                  <li><a href=\"#\">API documentation</a></li>
                </ul>
              </li>
              <li>
                <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
                  <span>Blended Probabilistic Forecast</span>
                  <span class=\"dropdown-arrow\"><span>
                    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
                  </span></span>
                </button>
                <ul class=\"dropdown-list accordion__section-content indented\">
                  <li><a href=\"#\">Sample data</a></li>
                  <li><a href=\"#\">Sample download code</a></li>
                  <li><a href=\"#\">API documentation</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class=\"dropdown\">
            <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
              <span>Observations</span>
              <span class=\"dropdown-arrow\"><span>
                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
              </span></span>
            </button>
            <ul class=\"dropdown-list accordion__section-content indented\">
              <li><a href=\"#\">Overview</a></li>
              <li>
                <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
                  <span>Land Observations</span>
                  <span class=\"dropdown-arrow\"><span>
                    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
                  </span></span>
                </button>
                <ul class=\"dropdown-list accordion__section-content indented\">
                  <li><a href=\"#\">API documentation</a></li>
                  <li><a href=\"#\">Sample data</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class=\"dropdown\">
            <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
              <span>Map images</span>
              <span class=\"dropdown-arrow\"><span>
                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
              </span></span>
            </button>
            <ul class=\"dropdown-list accordion__section-content indented\">
              <li><a href=\"#\">Overview</a></li>
              <li><a href=\"#\">How to build your order</a></li>
              <li><a href=\"#\">Sample data</a></li>
              <li>
                <button class=\"dropdown-header accordion__section-header accordion__section-button\" aria-expanded=\"false\">
                  <span>Map images data</span>
                  <span class=\"dropdown-arrow\"><span>
                    <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 256 253\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z\" fill=\"#FFF\" width=\"80%\" height=\"80%\"/></svg>
                  </span></span>
                </button>
                <ul class=\"dropdown-list accordion__section-content indented\">
                  <li><a href=\"#\">Sample download code</a></li>
                  <li><a href=\"#\">API documentation</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class=\"container main-content-column column-with-sidebar\">
      <div class=\"text-segment h3-as-h4\">
        <h1 class=\"segment-header\">Documentation</h1>
        <p>This variant mirrors the deeper nesting across product categories.</p>
      </div>
    </div>
  </main>
`;
