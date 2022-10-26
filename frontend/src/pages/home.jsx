import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <section className="text-center my-10 space-y-4">
                <h2 className="text-2xl font-semibold">What do you need help with?</h2>
                <p className="tracking-tight font-md">Please choose from an option below</p>
            </section>

            <div className="space-y-2">
                <Link to='/new-ticket' type="button" className="w-80 flex justify-center mx-auto bg-transparent px-4 py-2 text-dark font-semibold rounded-lg border gap-1 items-center">
                    <FaQuestionCircle /> Create new ticket
                </Link>

                <Link to='/tickets' type="button" className="w-80 flex justify-center bg-black text-white mx-auto px-4 py-2 text-dark font-semibold rounded-lg border gap-1 items-center">
                    <FaTicketAlt /> View my tickets
                </Link>
            </div>

        </>
    );
}

export default Home;