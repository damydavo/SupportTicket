import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTicket, reset } from "../features/ticket/ticketSlice";
import { toast } from 'react-toastify';
import Spinner from './../components/assets/spinner';
import BackButton from './../components/backButton';


const NewTicket = () => {
    const { user } = useSelector((state) => state.auth)
    const { isError, isLoading, isSuccess, message } = useSelector((state) => state.tickets)

    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            dispatch(reset())
            navigate('/tickets')
        }
        dispatch(reset())
    }, [isLoading, message, isError, navigate, dispatch, isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTicket({
            product,
            description
        }))
    }

    if (isLoading) return <Spinner />

    return (
        <>
            <div className="mx-auto text-center font-bold mt-4 mb-6">
                <BackButton url='/' />

                <h4 className="text-3xl">Create a New ticket</h4>
                <p className="font-sem33ibold">Please fill out the form below</p>
            </div>
            <section className="w-80 space-y-3 mx-auto mt-8">

                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Customer Name</span>
                    <input type="text"
                        disabled
                        value={name}
                        className="mt-1 w-full px-3 font-bold py-2 bg-white border border-slate-300 rounded-md text-sm" />
                </label>

                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Customer email</span>
                    <input type="text"
                        disabled
                        value={email}
                        className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-bold" />
                </label>
            </section>

            <form onSubmit={handleSubmit} className="mx-auto w-80 space-y-3">

                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Product</span>
                    <select name="product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none">
                        <option value="iPhone">iPhone</option>
                        <option value="Macbook Pro">Mackbook Pro</option>
                        <option value="iMac">iMac</option>
                    </select>
                </label>

                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Description</span>
                    <textarea type="text"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 placeholder-slate-400  rounded-md text-sm font-bold">
                    </textarea>
                </label>

                <button type="submit" className="px-4 py-2 w-full text-sm text-dark font-semibold rounded-lg border border-purple-200 bg-black text-white  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">Send</button>

            </form>
        </>

    );
}

export default NewTicket;