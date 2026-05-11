export default {
  title: 'Components/Lightbox',
  parameters: { layout: 'fullscreen' },
};

export const Example = () => `
  <div class="lightbox lightbox--parameter-info" style="display:block;position:relative;">
    <div class="lightbox-content">
      <div class="lightbox-content__inner">
        <div class="flexbox-scroll">
          <div class="top">
            <a href="#" class="close-lightbox lightbox-close-icon"><span class="visually-hidden">Close lightbox</span><span class="accordion__icon" aria-hidden="true"></span></a>
            <h3 class="heading-xs title">Lightbox title</h3>
          </div>
          <div class="middle">
            <p class="detailed-message">This is an example of the lightbox component styled by the Datahub CSS.</p>
            <dl class="summary-list">
              <div class="summary-list__row">
                <dt class="summary-list__key">Unit</dt>
                <dd class="summary-list__value">Unit value</dd>
              </div>
            </dl>
          </div>
          <div class="bottom margin-top-8">
            <a href="#" class="button button--primary close-lightbox no-focus">
              <span class="button__content">Ok</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
