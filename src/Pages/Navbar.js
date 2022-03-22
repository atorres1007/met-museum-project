import { AiOutlineBars, AiOutlineSearch, AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar() {
    const [menu, setMenu] = useState()
    const open = `translateX(25vw)`
    const close = `translateX(0vw)`
    
        return (
        <div>
            <div style={{
                backgroundColor: "white",
                width: "25vw",
                height: "100%",
                position: "absolute",
                left: "-25vw",
                transform: menu,
                transition: "0.5s",
            }}>
                <div className="menu-topbar">
                    <h2>Departments</h2>
                    <AiOutlineClose className="close-icon" onClick={() => setMenu(close)}/>
                </div>
                <div className="department-list">
                    
                    <Link to ="/AfricanArtPage">
                        <h3>African Art</h3>
                    </Link>
                    <Link to ="/AmericanWingPage">
                        <h3>American Wing</h3>
                    </Link>
                    <Link to ="/AncientNearEasternArtPage">
                        <h3>Ancient Near Eastern Art</h3>
                    </Link>
                    <Link to ="/ArmsAndArmorPage">
                        <h3>Arms and Armor</h3>
                    </Link>
                    <Link to ="/AncientAmericanArtPage">
                        <h3>Ancient American Art</h3>
                    </Link>
                    <Link to ="/AsianArtPage">
                        <h3>Asian Art</h3>
                    </Link>
                    <Link to ="/TheCloistersPage">
                        <h3>The Cloisters</h3>
                    </Link>
                    <Link to ="/CostumeInstitutePage">
                        <h3>Costume Institute</h3>
                    </Link>
                    <Link to ="DrawingsAndPrintsPage/">
                        <h3>Drawings and Prints</h3>
                    </Link>
                    <Link to ="/EgyptianArtPage">
                        <h3>Egyptian Art</h3>
                    </Link>
                    <Link to ="/EuropeanPaintingsPage">
                        <h3>European Paintings</h3>
                    </Link>
                    <Link to ="/EuropeanSculptureAndDecorativeArtsPage">
                        <h3>European Sculpture and Decorative Arts</h3>
                    </Link>
                    <Link to ="/GreekAndRomanArtPage">
                        <h3>Greek and Roman Art</h3>
                    </Link>
                    <Link to ="/IslamicArtPage">
                        <h3>Islamic Art</h3>
                    </Link>
                    <Link to ="/RobertLehmanCollectionPage">
                        <h3>Robert Lehman Collection</h3>
                    </Link>
                    <Link to ="/MedievalArtsPage">
                        <h3>Medieval Arts</h3>
                    </Link>
                    <Link to ="/ModernAndContemporaryArtPage">
                        <h3>Modern and Contemporary Art</h3>
                    </Link>
                    <Link to ="/MusicalInstrumentsPage">
                        <h3>Musical Instruments</h3>
                    </Link>
                    <Link to ="/PhotographsPage">
                        <h3>Photographs</h3>
                    </Link>
                </div>
            </div>

            <nav className="navbar">
                <div className='menu-icon-container'> 
                    <AiOutlineBars className="menu-icon" 
                    onClick={() => setMenu(open)}/>
                </div>
                <div className='navbar-title-container'>
                    <Link to = "/" style={{color: "white"}}><h1 className='navbar-title'>MET RIG</h1></Link>
                </div>
                <div className='search-icon-container'>
                    <AiOutlineSearch className='search-icon'/>
                </div>
            </nav>

        </div>
    )
}