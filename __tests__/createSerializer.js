var createSerializer = require('../createSerializer');

test('sorts attributes', () => {
  const serializer = createSerializer({
    print: { sortAttributes: (names) => names.sort() },
  });

  expect(
    serializer.print(`<input name="test" value="true" class="form-control">`)
  ).toMatchSnapshot();
});
