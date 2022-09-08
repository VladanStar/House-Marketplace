import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/"  element={<Explore/>}/>
      <Route path="/offers"  element={<Offers/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/forgotpassword"  element={<ForgotPassword/>}/>
      <Route path="/signIn"  element={<SignIn/>}/>
      <Route path="/signUp"  element={<SignUp/>}/>

    </Routes>
    </Router>
    {/* // NavBar */}
  </>
  );

}

export default App;
