export default {
  title: 'Layout/WDH Header',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => `
  <div class="wdh-header">
    <div class="header-top">
      <a id="logo-container" href="#">
        <img class="mo-logo" src="vendor/datahub/images/logo-no-background.svg" alt="Met Office CDA Configurator">
      </a>
      <div class="menu-container">
        <button class="header-dropdown-toggle collapse" aria-expanded="false" aria-controls="wdh-main-navigation">MENU</button>
        <div class="controls text-segment">
          <a class="standalone-button" aria-label="Login/Register" href="#">Login/Register</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <nav id="wdh-main-navigation" class="top-navigation">
        <ul class="menu">
          <li><a href="#" class="focus">Home</a></li>
          <li><a href="#">Pricing & Plans</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Glossary</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </div>
  </div>
`;
