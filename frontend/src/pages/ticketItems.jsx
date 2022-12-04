import { Link } from "react-router-dom";

const TicketItems = ({ ticket }) => {
    return (
        <>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{new Date(ticket.createdAt).toLocaleString('an-US')}</td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{ticket.product}</td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{ticket.status}</td>
            <td><Link to={`/ticket/${ticket._id}`} type="btn" className="border-b border-slate-700	 px-4 py-1 text-sm text-dark font-semibold rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">View</Link></td>
        </>
    );
}

export default TicketItems;
