export default {
  title: 'About/Attribution',
};

export const Notice = () => `
  <div class="text-segment">
    <h1>Attribution and Notice</h1>
    <p>
      This design system is a standalone showcase of HTML/CSS classes and components
      derived from assets downloaded from the Met Office Weather DataHub website
      (datahub.metoffice.gov.uk).
    </p>
    <p>
      The visual styles, class names, images, and fonts included under
      <code>/public/vendor/datahub</code> are vendor-copied for demonstration purposes only.
      They remain the property of their respective owners.
    </p>
    <h2>Credits</h2>
    <ul>
      <li>Design, CSS, and assets: © Met Office (as available on datahub.metoffice.gov.uk)</li>
      <li>Interactive documentation framework: Storybook</li>
    </ul>
    <h2>Usage</h2>
    <p>
      If you intend to reuse, republish, or distribute these styles/assets,
      please review the Met Office Weather DataHub terms and applicable licenses/policies
      and seek appropriate permissions where required.
    </p>
    <p>
      Met Office Weather DataHub: <a href="https://datahub.metoffice.gov.uk/" target="_blank" rel="noopener noreferrer">https://datahub.metoffice.gov.uk/</a>
    </p>
  </div>
`;
