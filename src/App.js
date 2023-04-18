import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './components/homepage/Homepage';
import { getForexData } from './redux/homepage/homepageSlice';
import IndividualCard from './components/individual/IndividualCard';
import Search from './components/Search/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path="Search" index element={<Search />} />
      <Route path="country" index element={<IndividualCard />} />
      <Route path="search/country" index element={<IndividualCard />} />

    </Route>,
  ),
);

function App() {
  const isLoading = useSelector((state) => state.Forex.isLoading);

  const isOpen = useSelector((state) => state.Modal.isOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForexData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="isloading">
        {' '}
        <p className="loading">isLoading...</p>
      </div>
    );
  }

  return (

    <div className="App">
      { isOpen ? <IndividualCard /> : <RouterProvider router={router} />}
    </div>

  );
}

export default App;
