export default {
  title: 'Foundations/Colors',
};

// CSS custom properties discovered in the vendored CSS
const vars = [
  '--nav-text-color',
  '--nav-hover-bg-color',
  '--nav--hover-text-color',
  '--nav-bg-color',
  '--nav-scroll-display',
  '--rapi-doc-nav-max-width',
  '--rapi-doc-nav-min-width',
];

const Swatch = (name) => `
  <div style="display:flex;align-items:center;gap:12px;margin:8px 0;">
    <div style="width:48px;height:32px;background:var(${name});border:1px solid #ddd;"></div>
    <code>${name}</code>
  </div>
`;

export const CSSVariables = () => `
  <div class="text-segment">
    <p>CSS custom properties detected in the Datahub CSS.</p>
    ${vars.map(Swatch).join('')}
  </div>
`;
