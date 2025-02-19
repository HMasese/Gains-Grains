import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Animal from './components/Animal';
import EnterButton from './components/EnterButton';
import Loginbutton from './components/Loginbutton';
import Userbody from './components/Userbody';
import ProfilePic from './components/Profilepic';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container pt-5'>
        <EnterButton />
        <Loginbutton />
        <ProfilePic />
        <h1>Profilepic</h1>
        <Userbody />
        <Outlet />
        <Animal />
        
      </main>
      <Footer />
    </div>
  );
}

export default App
