export default {
  title: 'Foundations/Utilities',
};

export const Visibility = () => `
  <div>
    <p>Normal text visible to everyone.</p>
    <p class="visually-hidden">This text is visually hidden but available to screen readers.</p>
  </div>
`;

export const Spacing = () => `
  <div class="text-segment">
    <div class="margin-bottom-1" style="background:#eee;padding:8px;">margin-bottom-1</div>
    <div class="margin-top-4" style="background:#ddd;padding:8px;">margin-top-4</div>
    <div class="margin-top-9" style="background:#ccc;padding:8px;">margin-top-9</div>
    <div class="margin-bottom-0" style="background:#bbb;padding:8px;">margin-bottom-0</div>
  </div>
`;

export const TextSegment = () => `
  <div class="text-segment">
    <h3>Text segment</h3>
    <p>This block demonstrates the <code>text-segment</code> class formatting for typographic content.</p>
    <a href="#">Example link</a>
  </div>
`;
