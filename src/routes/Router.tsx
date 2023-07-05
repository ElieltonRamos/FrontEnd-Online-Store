import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
    </Routes>
  );
}

export default Router;
