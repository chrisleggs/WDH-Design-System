export default {
  title: 'Navigation/Top Navigation',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => `
  <nav id="wdh-main-navigation" class="top-navigation">
    <ul class="menu">
      <li><a href="#" class="focus">Home</a></li>
      <li><a href="#">Pricing & Plans</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Glossary</a></li>
      <li><a href="#">Support</a></li>
    </ul>
  </nav>
`;
