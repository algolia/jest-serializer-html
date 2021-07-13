var toDiffableHtml = require('@algolia/diffable-html');

module.exports = {
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
    return toDiffableHtml(val, {
      sortAttributes: (names) => names.sort((a, b) => a.localeCompare(b)),
    }).trim();
  },
};
