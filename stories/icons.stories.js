export default {
  title: 'Foundations/Icons',
  parameters: { layout: 'padded' },
};

export const InlineIconExamples = () => `
  <div class="text-segment" style="display:grid;grid-template-columns:repeat(2,minmax(220px,1fr));gap:16px;align-items:center;">
    <div>
      <p>Inline icon with label using <code>svg-icon</code> and <code>inline-icon-container</code>:</p>
      <a class="svg-icon">
        <span aria-hidden="true" class="inline-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-filled" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </span>
        <span>Info note</span>
      </a>
    </div>
    <div>
      <p>Accordion icon example (<code>accordion__icon</code>):</p>
      <span class="accordion__icon" aria-hidden="true"></span>
    </div>
  </div>
`;

export const CloseAndStatusIcons = () => `
  <div class="text-segment" style="display:flex;gap:24px;align-items:center;">
    <a href="#" class="lightbox-close-icon"><span class="visually-hidden">Close</span></a>
    <span class="status-icon" aria-hidden="true"></span>
    <span class="product-icon" aria-hidden="true"></span>
  </div>
`;

export const SocialIcons = () => `
  <div class="wdh-footer">
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
  </div>
`;
