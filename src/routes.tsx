import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
