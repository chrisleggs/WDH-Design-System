export default {
  title: 'Forms/Controls',
};

export const Inputs = () => `
  <div class="form-example text-segment">
    <div class="input-group">
      <label class="label" for="text-input">Text input</label>
      <input class="input" id="text-input" type="text" placeholder="Placeholder" />
    </div>
    <div class="checkboxes__item">
      <input class="checkboxes__input" id="terms-and-conditions-checkbox" name="terms-and-conditions-checkbox" type="checkbox">
      <label class="label checkboxes__label" for="terms-and-conditions-checkbox">Agree to terms</label>
    </div>
    <div class="select-group">
      <label class="label" for="select-input">Select</label>
      <select class="select" id="select-input">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
    <div class="button-bar">
      <a href="#" class="button button--ghost">Cancel</a>
      <button class="button button--primary"><span class="button__content">Submit</span></button>
    </div>
  </div>
`;
