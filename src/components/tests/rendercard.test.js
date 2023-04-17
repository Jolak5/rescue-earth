import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RenderCard from '../individual/RenderCard';
import store from '../../redux/store';

afterEach(cleanup);

describe('RenderCard', () => {
  it('RenderCard to match Snapshot', () => {
    const individual = render(<Provider store={store}><RenderCard /></Provider>);
    expect(individual).toMatchSnapshot();
  });
});
