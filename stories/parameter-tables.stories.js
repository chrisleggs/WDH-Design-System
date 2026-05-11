export default {
  title: 'Components/Parameter Tables',
  parameters: { layout: 'padded' },
};

export const TimeSteps = () => `
  <div class="parameter-value-table-row">
    <div class="table-title">Time steps</div>
    <div class="parameter-value-table-content">
      <div class="parameter-value-table">
        <div class="tr">
          <div class="th blank"></div>
          <div class="th">Hourly</div>
          <div class="th">3 Hourly</div>
          <div class="th">6 Hourly</div>
          <div class="th">Daily</div>
        </div>
        <div class="time-steps">
          <div class="tr">
            <div class="td">Example</div>
            <div class="td">Yes</div>
            <div class="td">No</div>
            <div class="td">Yes</div>
            <div class="td">No</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const BitsPerValue = () => `
  <div class="bits-per-value-table-row">
    <div class="table-title">
      Bits per value <a class="svg-icon notes-opener"><span aria-hidden="true" class="inline-icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-filled" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      </span>
      <div class="notes-content">
        <p class="note">The bitsPerValue determines the relative size of the data download required for each parameter. The bitsPerValue ranges from 12 to 20 bits for our current parameters.</p>
        <p class="note">Note the data download size is not a direct multiplier of the bitsPerValue as there are standard overheads within the generated GRIB files which are common for all parameters. However, the bitsPerValue is a good guide to the relative cost of each parameter.</p>
      </div></a>
    </div>
    <div class="parameter-value-table-content">
      <div class="parameter-value-table">
        <div class="tr">
          <div class="th blank"></div>
          <div class="th">Bits per value</div>
        </div>
        <div class="bits-per-value">
          <div class="tr">
            <div class="td">Example</div>
            <div class="td">16</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
