import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/ticket/ticketSlice'
import Spinner from './../components/assets/spinner';
import BackButton from './../components/backButton';
import TicketItems from './ticketItems';

const Tickets = () => {
    const { tickets, isLoading, isError, message, isSuccess } = useSelector((state) => state.tickets)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if (isLoading) return <Spinner />

    return (
        <>
            <BackButton url='/' />
            <div className="relative overflow-auto max-w-2xl mx-auto">
                <div className="shadow-sm overflow-hidden my-8">
                    <table className="border-collapse table-auto w-full text-sm">
                        <thead>
                            <tr>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">Date</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">Product</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-600 dark:text-slate-200 text-left">Status</th>
                                <th className="border-b"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            {tickets.map((ticket) => {
                                return (
                                    <tr key={ticket._id} className="odd:bg-white even:bg-slate-50">
                                        <TicketItems ticket={ticket} />
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );

}
export default Tickets;