import renderer from 'react-test-renderer';
import Button from '../components/Button'
import Display from '../components/Display'
import React from 'react';

describe('check the rendering of components', () => {
  it('Diplay component renders correctly', () => {
    const tree = renderer
    .create(<Display readOnly={true} value="23" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('Display component renders correctly 2', () => {
    const tree = renderer
      .create(<Display readOnly={true} value="{ButtonClick.clickEvent('2')}" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Display component renders correctly C', () => {
    const tree = renderer
      .create(<Display readOnly={true} value="{ButtonClick.clickEvent('C')}" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button component renders correctly', () => {
    const tree = renderer
    .create(<Button label={{"label" : 4}} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
