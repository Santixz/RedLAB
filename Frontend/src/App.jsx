import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegistrarseLogin from './components/RegistrarseLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/RegistrarseLogin" />} />
        <Route path="/RegistrarseLogin" element={<RegistrarseLogin />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;