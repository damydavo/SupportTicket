import spinner from '../assets/spinner.gif'

const Spinner = () => {
    return ( 
         <div className="w-100">
            <img className="w-14 h-14 text-center" src={ spinner } alt="Spinner-loading" />
         </div>
     );
}
 
export default Spinner;