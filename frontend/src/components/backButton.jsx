import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const BackButton = ({ url }) => {
    return (
        <Link to={url}><button className="flex items-center ml-4 my-8 md:ml-80  bg-transparent px-4 py-2 font-semibold rounded-md border gap-1"><FaArrowCircleLeft />Back</button></Link>
    )
}

export default BackButton;