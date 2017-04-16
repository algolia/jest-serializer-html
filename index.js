var beautify = require('js-beautify').html;

module.exports = {
  test(object) {
    return typeof object === 'string' && object[0] === '<';
  },
  print(val) {
    return beautify(val, {
      unformatted: [],
      wrap_attributes: 'force-aligned'
    });
  },
};
