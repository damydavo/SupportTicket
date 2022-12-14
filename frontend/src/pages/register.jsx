import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify'

import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from "../features/auth/authSlice";


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //redirect if it's successful
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [isError, isSuccess, user, navigate, dispatch, message])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }


    return (
        <>
            <div className="text-center">
                <h4 className="flex justify-center mt-6 mb-2 text-2xl font-semibold gap-1 items-center"><FaUser />Register</h4>
                <p className="flex justify-center font-semibold tracking-tight text-md text-darkGrayishBlue">Please create an account</p>

            </div>
            <section className="flex justify-center items-center mt-4">
                <form onSubmit={handleSubmit} className="w-80 space-y-4">
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Name</span>
                        <input type="text"
                            placeholder="Please enter your name"
                            onChange={handleChange}
                            value={name}
                            required
                            name='name'
                            className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm" />
                    </label>

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

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Confirm Password</span>
                        <input type="text"
                            value={confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                    </label>
                    <button className="px-4 py-2 w-full text-sm font-semibold rounded-lg border border-purple-200 bg-black text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Register</button>

                </form>
            </section>
        </>

    );
}

export default Register;