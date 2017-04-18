var toDiffableHtml = require('diffable-html');

module.exports = {
  test(object) {
    return typeof object === 'string' && object[0] === '<';
  },
  print(val) {
    return toDiffableHtml(val);
  },
};
