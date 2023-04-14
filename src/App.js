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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Homepage />} />
    </Route>,
  ),
);

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForexData());
  }, [dispatch]);

  return (
    isLoading ? <div>isLoading...</div>
      : (
        <div className="App">
          <RouterProvider router={router} />
        </div>
      )
  );
}

export default App;
