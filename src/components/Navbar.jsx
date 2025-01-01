import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";

const Navbar = () => {

    return ( 
    <div className="navbar">
      <div className="leftSide" id="logo">
        <img src={Logo} alt="logo" />
        
      </div>
      <div className="rightSide">
        <a href="#home"> Home </a>
        <a href="#menu"> Menu </a>
        <a href="#about"> About </a>
        
        </div>
    </div>
        
     );


}


export default Navbar;