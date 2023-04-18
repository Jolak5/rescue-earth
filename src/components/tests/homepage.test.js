import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Homepage from '../homepage/Homepage';
import { renderItem, filterItem } from '../../redux/homepage/homepageSlice';
import store from '../../redux/store';

afterEach(cleanup);

describe('Homepage', () => {
  it('Homepage to match Snapshot', () => {
    const quotes = render(
      <Router>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </Router>,
    );
    expect(quotes).toMatchSnapshot();
  });
});

describe('renderItem reducers', () => {
  it('should render items', async () => {
    await store.dispatch(renderItem('Algeria'));
    expect(store.getState().Forex.forexItem).toBeDefined();
  });
  it('should filter Item', () => {
    const filtered = store.dispatch(filterItem('Nigeria'));
    expect(filtered).toBeDefined();
  });
});
