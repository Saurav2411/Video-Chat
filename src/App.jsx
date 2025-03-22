import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import JoinMeeting from "./pages/JoinMeeting";
import CreateMeeting from "./pages/CreateMeeting";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VideoC from "./components/VideoC";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join-meeting" element={<JoinMeeting />} />
                <Route path="/create-meeting" element={<CreateMeeting />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/room/:roomID" element={<VideoC />} />
            </Routes>
        </Router>
    );
}

export default App;
