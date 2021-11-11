import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Beats from './pages/Beats';
import Merchandise from './pages/Merchandise';
import ContactUs from './pages/ContactUs';

function AppRouter() {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path="beats/*" element={<Beats />} />
      <Route path="merchandise" element={<Merchandise />} />
      <Route path="contact_us" element={<ContactUs />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter;
