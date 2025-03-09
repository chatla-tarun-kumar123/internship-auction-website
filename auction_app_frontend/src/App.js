import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import NavigationBar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import PostAuction from "./components/PostAuction";
import Dashboard from "./components/Dashboard";
import AuctionItem from "./components/AuctionItem";
import ProtectedRoute from "./components/ProtectedRoute"; // Import Protected Route

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />

                {/*  Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/auction/:id" element={<AuctionItem />} />
                    <Route path="/post-auction" element={<PostAuction />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
