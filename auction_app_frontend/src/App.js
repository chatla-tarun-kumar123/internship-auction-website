import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";
import AboutUs from "./components/AboutUs";
import NavigationBar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import OpenAuctions from "./components/OpenAuctions";
// import OpenItems from "./components/OpenItems";
import OpenBid from "./components/OpenBid";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/openauction" element={<OpenAuctions />} />
                <Route path="/openbid" element={<OpenBid />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
