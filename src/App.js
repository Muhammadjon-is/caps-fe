import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RoutersApi from './Components/Router/Router';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
     <div className='app'>
        <Header/>
      <Routes>
        {RoutersApi.map((navRouter) => {
          return (
            <Route key={navRouter.id} path={navRouter.path} element={navRouter.element}/>
          )
        })}
      </Routes>
      {/* <Footer/> */}
     </div>
  
  );
}

export default App;