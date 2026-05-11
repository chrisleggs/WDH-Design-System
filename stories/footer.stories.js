export default {
  title: 'Layout/WDH Footer',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => `
  <footer class="wdh-footer" role="contentinfo" aria-label="footer">
    <div class="footer-top">
      <img class="mo-logo" src="vendor/datahub/images/logo-no-background.svg" alt="Met Office CDA Configurator">
      <ul class="menu">
        <li><a href="#" target="_blank">Terms and conditions</a></li>
        <li><a href="#" target="_blank">Privacy policy</a></li>
        <li><a title="Weather DataHub Accessibility statement" href="#" target="_blank">Accessibility Statement</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <ul class="icons">
        <li><a data-value="twitter" class="icon" href="#" aria-label="Follow us on X" title="Follow us on X"></a></li>
        <li><a data-value="youtube" class="icon" href="#" aria-label="Follow us on YouTube" title="Follow us on Youtube"></a></li>
        <li><a data-value="facebook" class="icon" href="#" aria-label="Follow us on Facebook" title="Follow us on Facebook"></a></li>
        <li><a data-value="tiktok" class="icon" href="#" aria-label="Follow us on TikTok" title="Follow us on TikTok"></a></li>
        <li><a data-value="instagram" class="icon" href="#" aria-label="Follow us on Instagram" title="Follow us on Instagram"></a></li>
        <li><a data-value="linkedin" class="icon" href="#" aria-label="Follow us on LinkedIn" title="Follow us on LinkedIn"></a></li>
      </ul>
    </div>
  </footer>
`;
