import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './feature/Home'
import Login from './feature/Login'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
