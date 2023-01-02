import { Route, Routes, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path=':movieId' element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
