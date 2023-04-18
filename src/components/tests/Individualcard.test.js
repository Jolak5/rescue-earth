import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import IndividualCard from '../individual/IndividualCard';

// Test case for the dynamic component
describe('IndividualCard', () => {
  it('renders IndividualCard data with NavLink components', async () => {
    const homeLink = render(
      <Router>
        <Provider store={store}>
          <IndividualCard />
        </Provider>
      </Router>,
    );
    expect(homeLink).toMatchSnapshot();
  });
});
