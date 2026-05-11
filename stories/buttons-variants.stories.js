export default {
  title: 'Components/Buttons/Variants Matrix',
};

const button = (label, classes = 'button button--primary', attrs = '') => `
  <button class="${classes}" ${attrs}><span class="button__content">${label}</span></button>
`;

const linkButton = (label, classes = 'button button--primary', attrs = '') => `
  <a href="#" class="${classes}" ${attrs}><span class="button__content">${label}</span></a>
`;

export const PrimaryAndGhost = () => `
  <div style="display:grid;grid-template-columns:repeat(2,auto);gap:12px;align-items:center;">
    ${button('Primary (button)', 'button button--primary')}
    ${linkButton('Primary (link)', 'button button--primary')}
    ${button('Ghost (button)', 'button button--ghost')}
    ${linkButton('Ghost (link)', 'button button--ghost')}
  </div>
`;

export const DisabledStates = () => `
  <div style="display:grid;grid-template-columns:repeat(2,auto);gap:12px;align-items:center;">
    ${button('Primary disabled', 'button button--primary', 'disabled')}
    ${linkButton('Ghost aria-disabled', 'button button--ghost', 'aria-disabled="true"')}
  </div>
`;

export const WithInlineIcon = () => `
  <div style="display:flex;gap:12px;align-items:center;">
    <a href="#" class="button button--primary">
      <span class="button__content">
        <span class="label">With icon</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </span>
    </a>
    <a href="#" class="button button--ghost">
      <span class="button__content">
        <span class="label">Ghost with icon</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </span>
    </a>
  </div>
`;
