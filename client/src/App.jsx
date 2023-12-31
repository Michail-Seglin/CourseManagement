import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;