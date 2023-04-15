import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { renderItem } from '../../redux/homepage/homepageSlice';
import { openModal } from '../../redux/modal/modalSlice';
import { closeSearch } from '../../redux/search/searchSlice';

// Render search
export default function Search() {
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.Forex.searchFilter);
  return (
    <Container className="forex-container">
      <button type="button" onClick={() => dispatch(closeSearch())}>close</button>
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
