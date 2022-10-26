import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from 'react-toastify'

import { useSelector, useDispatch } from 'react-redux';
import { login } from "../features/auth/authSlice";


const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const dispatch = useDispatch()
    const { user, isSuccess, isLoading, message } = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    return (
        <>
            <div className="text-center">
                <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center"><FaSignInAlt />Sign In</h4>
                <p className="flex justify-center font-semibold tracking-tight text-md text-darkGrayishBlue">Please create an account</p>

            </div>
            <section className="flex justify-center items-center mt-4">
                <form onSubmit={handleSubmit} className="w-80 space-y-4">

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Email Address</span>
                        <input type="text"
                            onChange={handleChange}
                            value={email}
                            required
                            name="email"
                            placeholder="Please enter your Email"
                            className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    </label>

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Password</span>
                        <input type="text"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            value={password}
                            name="password"
                            className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    </label>
                    <button className="px-4 py-2 w-full text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-gray-400  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Login</button>

                </form>
            </section>
        </>

    );
}

export default Register;