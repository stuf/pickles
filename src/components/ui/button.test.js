import * as React from 'karet';
import Button from './button';
import renderer from 'react-test-renderer';

test('Button', () => {
  const component = renderer.create(
    <Button />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
