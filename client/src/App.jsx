import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SideBar from "./component/layout/Sidebar";
import Navbar from "./component/layout/Navbar";

import Dashboard from "./component/pages/Dashboard";
import CodingRoom from "./component/pages/CodingRoom";
import PracticeRoom from "./component/pages/PracticeRoom";
import MockInterview from "./component/pages/MockInterview";
import MyProgress from "./component/pages/MyProgress";
import Profile from "./component/pages/Profile";
import Auth from "./Authontication/Auth";

// Dashboard layout
function AppLayout() {
  return (
    <div className="app-layout">
      <SideBar />
      <main className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/coding-rooms" element={<CodingRoom />} />
          <Route path="/practice" element={<PracticeRoom />} />
          <Route path="/interviews" element={<MockInterview />} />
          <Route path="/progress" element={<MyProgress />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

// Main application
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public authentication pages */}
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//         {/* Main dashboard pages */}
//         <Route path="/*" element={<AppLayout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <Auth />
  );
}

export default App;
