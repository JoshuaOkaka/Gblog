import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>gblog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/Create" > New blog</Link>
            </div>

        </nav>
     );
}
 
export default Navbar;