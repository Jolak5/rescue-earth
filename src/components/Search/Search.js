import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { clearFilteredState, filterItem, renderItem } from '../../redux/homepage/homepageSlice';
import { openModal } from '../../redux/modal/modalSlice';
import { closeSearch } from '../../redux/search/searchSlice';

// Render search
export default function Search() {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.Forex.searchFilter);
  const [filter, setfilter] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterItem(filter));
    setfilter('');
  }

  console.log(filter);

  // function handleChange(e) {
  //   setfilter(e.target.value);
  //   console.log(filter);
  // }
  return (
    <Container className="forex-container">
      <form onSubmit={handleSubmit}>
        <input type="text" id="kayode" value={filter} onChange={(e) => setfilter(e.target.value)} placeholder="country name" />
        <input type="submit" placeholder="submit" />
      </form>
      <button type="button" onClick={() => dispatch(closeSearch(), clearFilteredState())}>close</button>
      {searchFilter.map((item) => (
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
