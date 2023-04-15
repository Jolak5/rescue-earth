import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';

import './Homepage.css';

import RenderHome from './renderHome';
import Search from '../Search/Search';

export default function Homepage() {
  const isSearcing = useSelector((state) => state.Search.isSearch);

  return (
    <Container className="forex-container">
      { isSearcing ? <RenderHome /> : <Search /> }
    </Container>
  );
}
