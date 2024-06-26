import Student from './MyComponents/Student';
import Bmw from './MyComponents/Bmw';
import Mahindra from './MyComponents/Mahindra';
import Maruthi from './MyComponents/Maruthi';
import Tayota from './MyComponents/Tayota';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div >
      <div className="App">
        <BrowserRouter>
        <nav className='nav'>
          <Link to="/ta">TATA</Link>
          <Link to="/ma">Mahindra</Link>
          <Link to="/sm">Maruthi</Link>
          <Link to="/bm">Bmw</Link>
          <Link to="/yt">Tayota</Link>
        </nav>
        <Routes>
          <Route path='/ta' element ={<Student></Student>}>TATA
            </Route>
            </Routes>
            </BrowserRouter>
            <BrowserRouter>
        <Routes>
          <Route path='/bm' element ={ <Bmw></Bmw>}>TATA
            </Route>
            </Routes>
            </BrowserRouter>
            <BrowserRouter>
        <Routes>
          <Route path='/ma' element ={ <Mahindra></Mahindra>}>TATA
            </Route>
            </Routes>
            </BrowserRouter>
            <BrowserRouter>
        <Routes>
          <Route path='/sm' element ={<Maruthi></Maruthi>}>TATA
            </Route>
            </Routes>
            </BrowserRouter>
            <BrowserRouter>
        <Routes>
          <Route path='/yt' element ={<Tayota></Tayota>}>TATA
            </Route>
            </Routes>
            </BrowserRouter>
     </div>
     </div>
  );
}

export default App;
