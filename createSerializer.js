var toDiffableHtml = require('diffable-html');

module.exports = function (options = {}) {
  return {
    test(object) {
      if (typeof object !== 'string') {
        return false;
      }

      const trimmed = object.trim();
      return (
        trimmed.length > 2 &&
        trimmed[0] === '<' &&
        trimmed[trimmed.length - 1] === '>'
      );
    },
    print(val) {
      return toDiffableHtml(val, options.print).trim();
    },
  };
};
