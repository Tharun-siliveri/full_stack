import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './components/LandingPage';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Page404 from './Page404';
import SlotBookingPage from './SlotBookingPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" exact  element={<LandingPage />}/>
            <Route path="/Registration" exact element={<Registration />}/>
            <Route path="/SlotBookingPage" exact element={<SlotBookingPage/>}/>
            <Route path="*" exact element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
