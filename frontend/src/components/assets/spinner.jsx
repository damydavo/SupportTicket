import spinner from '../assets/spinner.gif'

const Spinner = () => {
    return ( 
         <div className="w-100">
            <img className="flex w-44 h-44 mx-auto my-52" src={spinner} alt="Spinner-loading" />
         </div>
     );
}
 
export default Spinner;