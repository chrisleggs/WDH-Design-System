export default {
  title: 'Components/Product Block',
  parameters: { layout: 'padded' },
};

export const AtmosphericModels = () => `
  <div class="product-block">
    <img src="/vendor/datahub/images/homepage/atmospheric-model-data.jpg" alt="Atmospheric - Data visualisation">
    <div>
      <h2>Atmospheric models</h2>
      <p>We offer GRIB2 data on a range of products that are sub-set by region, parameter, levels, time steps and model run.</p>
      <ul>
        <li>Global deterministic (10 km)</li>
        <li>UK deterministic (2 km) - standard</li>
        <li>UK deterministic (2 km) -  latitude-longitude</li>
        <li>Met Office Global and Regional Ensemble Prediction System - Global</li>
        <li>Met Office Global and Regional Ensemble Prediction System - UK</li>
      </ul>
    </div>
    <div class="button-container">
      <a class="standalone-button" href="#" aria-label="Find out more - Atmospheric">Find out more</a>
    </div>
    <div class="button-row">
      <a href="#" class="moving-chevron-button" aria-label="Pricing - Atmospheric">
        <span class="label">Pricing</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
      <a href="#" class="moving-chevron-button" aria-label="Try our sample data - Atmospheric">
        <span class="label">Try our sample data</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
      <a href="#" class="moving-chevron-button" aria-label="API documentation - Atmospheric">
        <span class="label">API documentation</span>
        <span class="moving-chevron right"><span>
          <svg width="100%" height="100%" viewBox="0 0 256 253" xmlns="http://www.w3.org/2000/svg"><path d="M142.869,146.512l0.003,0.002l-12.62,12.62l-0.002,-0.003l-0.002,0.003l-12.62,-12.62l0.003,-0.002l-40.527,-40.526l12.619,-12.62l40.527,40.527l40.527,-40.527l12.619,12.62l-40.527,40.526Z" fill="#FFF"/></svg>
        </span></span>
      </a>
    </div>
  </div>
`;
