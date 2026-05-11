export default {
  title: 'Pages/Home Hero',
  parameters: { layout: 'fullscreen' },
};

export const Hero = () => `
  <section class="home-banner">
    <div class="home-banner-content">
      <h3>Met Office</h3>
      <h1>Weather DataHub</h1>
      <a class="standalone-button" href="#">Register</a>
    </div>
  </section>
`;
