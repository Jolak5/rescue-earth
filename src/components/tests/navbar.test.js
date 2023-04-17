import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import store from '../../redux/store';

afterEach(cleanup);

describe('Navbar', () => {
  it('Navbar to match Snapshot', () => {
    const quotes = render(<BrowserRouter><Provider store={store}><Navbar /></Provider></BrowserRouter>);
    expect(quotes).toMatchSnapshot();
  });
});
