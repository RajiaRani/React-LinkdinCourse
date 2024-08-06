import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import "./style/NavBar.css";
const NavBar = () => {
   return (
       <nav className="NavBar">
         <div className="logo">
         <Link to="/" ><h1><IoBookSharp /> My Blogs</h1></Link>
         </div>
        <div className="navbar-link">
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/articles" className="nav-link">Artcles</Link></li>
        </ul>
        </div>
       </nav>
   )
}
export default NavBar;