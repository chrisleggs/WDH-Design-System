export default {
  title: 'Components/Buttons',
};

const Template = ({ label, variant = 'primary', href }) => {
  const className = variant === 'ghost' ? 'button button--ghost' : 'button button--primary';
  if (href) {
    return `<a href="#" class="${className}"><span class="button__content">${label}</span></a>`;
  }
  return `<button class="${className}"><span class="button__content">${label}</span></button>`;
};

export const Primary = Template.bind({});
Primary.args = { label: 'Primary button', variant: 'primary' };

export const Ghost = Template.bind({});
Ghost.args = { label: 'Ghost button', variant: 'ghost' };

export const LinkButton = Template.bind({});
LinkButton.args = { label: 'Link as button', variant: 'primary', href: '#' };
