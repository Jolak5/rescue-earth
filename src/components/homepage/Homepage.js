import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import { renderItem } from '../../redux/homepage/homepageSlice';
import { openModal } from '../../redux/modal/modalSlice';

export default function Homepage() {
  const dispatch = useDispatch();
  const covid = useSelector((state) => state.Forex.Forex);
  const newCovid = covid.slice(0, 10);
  return (
    <Container className="forex-container">
      {newCovid.map((item) => (
        <Col className="eachItem" key={item.id}>
          <h2>{item.country}</h2>
          <p>{item.death}</p>
          <Button onClick={() => {
            dispatch(renderItem(item.id));
            dispatch(openModal());
          }}
          >
            Kayode

          </Button>
        </Col>
      ))}
    </Container>
  );
}
