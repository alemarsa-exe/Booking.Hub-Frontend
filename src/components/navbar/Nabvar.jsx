import "./navbar.css"
import logo from "../../Images/LogoHub.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">
                    <img src={logo} alt="Logo del Hub"></img>
                </span>
                <div className="navItems">
                    <button className="navButton">INICIO</button>
                    <button className="navButton">EXPLORA</button>
                    <button className="navButton">CONTÁCTANOS</button>
                    <button className="navButton">REGÍSTRATE</button>
                    <button className="navButton">INICIA SESIÓN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar