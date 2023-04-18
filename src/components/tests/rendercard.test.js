import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import IndividualCard from '../individual/IndividualCard';
import store from '../../redux/store';

afterEach(cleanup);

describe('RenderCard', () => {
  it('RenderCard to match Snapshot', () => {
    const individual = render(<Provider store={store}><IndividualCard /></Provider>);
    expect(individual).toMatchSnapshot();
  });
});
