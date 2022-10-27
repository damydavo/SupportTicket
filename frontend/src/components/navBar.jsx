import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (

        <div className="p-6 bg-transparent border-b-2 w-full">
            <div className="container mx-auto flex justify-between">

                <div className="logo">
                    <Link to="/" className="font-semibold hover:text-darkGrayishBlue">
                        Support Ticket
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    {user ? <button onClick={onLogout} type="button" className="flex bg-black text-white px-4 py-2 font-semibold rounded-md border gap-1 items-center"><FaSignOutAlt />Logout</button> :
                        <>
                            <a href="/login" className="hover:text-darkGrayishBlue flex items-center gap-1"><FaSignInAlt /> Login</a>
                            <a href="/register" className="hover:text-darkGrayishBlue flex items-center gap-1"><FaUser /> Register</a>
                        </>
                    }

                </div>
            </div>
        </div>
    );
}

export default NavBar;