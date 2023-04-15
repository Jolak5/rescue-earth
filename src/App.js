import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import { getForexData } from './redux/homepage/homepageSlice';
import RenderCard from './components/individual/RenderCard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="homepage" index element={<Homepage />} />
      <Route path="items" index element={<RenderCard />} />
    </Route>,
  ),
);

function App() {
  // const isLoading = useSelector((state) => state.isLoading);
  const isOpen = useSelector((state) => state.Modal.isOpen);
  console.log(isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForexData());
  }, [dispatch]);

  return (

    <div className="App">
      { isOpen ? <RenderCard /> : <RouterProvider router={router} />}
    </div>

  );
}

export default App;
