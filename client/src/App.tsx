import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/Footer';
import Motivation from './components/animal';
import EnterButton from './components/EnterButton';
// import Loginbutton from './components/Loginbutton';
import Userbody from './components/Userbody';
import ProfilePic from './components/Profilepic';

// Importing styles


import './styles/index.css';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="container pt-5">
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

export default App;

