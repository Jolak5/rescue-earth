import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Search from '../Search/Search';
import store from '../../redux/store';

afterEach(cleanup);

describe('Navbar', () => {
  it('Search to match Snapshot', () => {
    const search = render(<Provider store={store}><Search /></Provider>);
    expect(search).toMatchSnapshot();
  });
});
