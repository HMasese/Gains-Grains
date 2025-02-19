import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/Footer';
import Motivation from './components/animal';
import EnterButton from './components/EnterButton';
import Loginbutton from './components/Loginbutton';
import Userbody from './components/Userbody';
import ProfilePic from './components/Profilepic';
// import './header.css';
// import './index.css';
// import './login.css';
// import './navbar.css';
// import './userinfo.css';
// import './usersettings.css';

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
