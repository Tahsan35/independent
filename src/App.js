import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import HomePart from "./Pages/Home/HomePart/HomePart";
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePart></HomePart>}></Route>
        <Route path='home' element={<HomePart></HomePart>}></Route>
        <Route path='service' element={<Services></Services>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
