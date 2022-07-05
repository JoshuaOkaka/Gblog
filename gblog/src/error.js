import { Link } from "react-router-dom";

const Error = () => {
    return (  
        <div className="notfoundpage">
            <h1>Page not found</h1>
            <Link to='/'>
                <button>Wanna hoop back home</button>
            </Link>
        </div>
    );
}
 
export default Error;