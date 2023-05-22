import { Routes, Route } from 'react-router-dom';
import { Discover } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
    </Routes>
  );
};

export default App;
