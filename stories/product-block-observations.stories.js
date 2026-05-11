export default {
  title: 'Components/Product Block/Observations',
  parameters: { layout: 'padded' },
};

export const Observations = () => `
  <div class="product-block">
    <img src="vendor/datahub/images/homepage/observations.png" alt="Land observations">
    <div>
      <h2>Observations</h2>
      <p>The Met Office operates an extensive network of synoptic automatic weather stations distributed uniformly across the UK.
        All key meteorological variables are recorded at stations that are routinely inspected and maintained according to international standards.
        Land observations serve many vital purposes and are used in the production of warnings and forecast models, as well for international exchange.</p>
      <h3>Land Observations</h3>
      <p>Our Land Observations API provides access to recent historical weather data from ground-based instruments across UK locations.
        The API is ideal for applications that need accurate, hourly data on key weather parameters observed at the land surface.</p>
    </div>
    <div class="button-container">
      <a class="standalone-button" href="#" aria-label="Find out more - Observations">Find out more</a>
    </div>
    <div class="button-row">
      <a href="#" class="moving-chevron-button" aria-label="Pricing - Observations">
        <span class="label">Pricing</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
      <a href="#" class="moving-chevron-button" aria-label="Try our sample data - Observations">
        <span class="label">Try our sample data</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
      <a href="#" class="moving-chevron-button" aria-label="API documentation - Land observations">
        <span class="label">API documentation</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
    </div>
  </div>
`;
