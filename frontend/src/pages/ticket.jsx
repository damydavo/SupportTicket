import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getTicket, reset } from "../features/ticket/ticketSlice";
import { useParams } from "react-router-dom";
import Spinner from './../components/assets/spinner';
import { toast } from 'react-toastify';
import BackButton from './../components/backButton';


const Ticket = () => {
    const { ticket, isSuccess, isError, isLoading, message } = useSelector((state) => state.tickets)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const params = useParams()

    const { ticketId } = useParams()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        dispatch(getTicket(ticketId))

    }, [isError, ticketId, message])

    if (isLoading) return <Spinner />

    if (isError) return <h2>Something went wrong</h2>

    return (
        <>
            <BackButton url='/tickets' />

            <div className="flex justify-between mx-auto max-w-3xl mt-10 mb-1">
                <h2 className="font-bold text-md">TicketId: {ticket._id}</h2>
                <p>{ticket.status}</p>
            </div>
            <div className="block mx-auto max-w-3xl border-b border-b-slate-400 pb-2">
                <p className="text-sm font-semibold">{new Date(ticket.createdAt).toLocaleString('en-US')}</p>
            </div>
            <div className="mx-auto max-w-3xl px-3 border-none bg-gray-100 mt-4 h-16 space-y-1 py-2">
                <h3 className="font-bold">Description of Issue</h3>
                <p className="text-sm font-neutral">{ticket.description}</p>
            </div>

        </>

    );
}

export default Ticket;
