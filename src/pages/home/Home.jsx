import Navbar from "../../components/navbar/Nabvar.jsx"
import Header from "../../components/header/Header.jsx"
import PropertyList from "../../components/propertyList/propertyList.jsx"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <h1 className="homeTitle">Software</h1>
                <PropertyList/>
            </div>
        </div>
    )
}

export default Home