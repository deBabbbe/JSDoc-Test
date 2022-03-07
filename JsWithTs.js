// @ts-check
/**
 * @typedef { import("./JsWithTs").API } API
 * @typedef { import("./JsWithTs").Fields } Fields
 *
 * @param {API} api Customizing Api
 * @param {string} currentField All fields
 * @param {Fields} fields Current field name
 */
function dings(api, currentField, fields) {
  const field = fields["dings"];
  api.exportActions.moveToFolder(field);
  api.utilities.setError(field);
  const dings = currentField;

  const name = api.userInfo.name;
}
