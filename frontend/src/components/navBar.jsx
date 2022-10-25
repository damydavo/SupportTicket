import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <div className="p-6 bg-transparent border-b-2 w-full">
            <div className="container mx-auto flex justify-between">

                <div className="logo">
                    <Link to="/" className="font-semibold hover:text-darkGrayishBlue">
                        Support Ticket
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-darkGrayishBlue">Home</a>
                    <a href="/login" className="hover:text-darkGrayishBlue flex items-center gap-1"><FaSignInAlt /> Login</a>
                    <a href="/register" className="hover:text-darkGrayishBlue flex items-center gap-1"><FaUser /> Register</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;