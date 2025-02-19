import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/header';
import Animal from './components/animal';
import EnterButton from './components/EnterButton';
//import Loginbutton from './components/Loginbutton';
import Userbody from './components/Userbody';
import ProfilePic from './components/Profilepic';
import './styles/header.css'
import './styles/index.css'
import './styles/Users.css'
import './styles/Footer.css'





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
        <Animal />
        
      </main>
    
    </div>
  );
}

export default App
