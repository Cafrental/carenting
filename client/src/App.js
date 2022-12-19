import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignUp />} />
        <Route path="/SignUp" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App