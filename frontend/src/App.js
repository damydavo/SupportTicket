import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import NavBar from './components/navBar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import NewTicket from './pages/newTicket';
import Tickets from './pages/tickets';
import PrivateRoute from './components/privateRoute';
import Ticket from "./pages/ticket";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>
          </Routes>
        </div>

      </Router>
      <ToastContainer />
    </>
  );
}

export default App;