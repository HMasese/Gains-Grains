import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Motivation from './components/Animal';
import EnterButton from './components/EnterButton';
import Userbody from './components/Userbody';
import ProfilePic from './components/Profilepic';
// import './header.css';

function App() {
  return (
    <div>
      <Header />
      {/* <Routes>
      <Route path="/nutritional-plans" element={<NutritionalPlans />} />
      </Routes> */}
      <Navbar />
      <main className='container pt-5'>
        <EnterButton />
        {/* <Loginbutton /> */}
        <ProfilePic />
        <h1>Profilepic</h1>
        <Userbody />
        <Outlet />
        <Motivation />

      </main>
      <Footer />
    </div>
  );
}

export default App
