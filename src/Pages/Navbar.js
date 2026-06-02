import { AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar(props) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    const departmentData = props.departmentData
    
    return (
        <div>
            <div className={sidebarIsOpen ? 'sidebar-open' : 'sidebar-closed'}>
                <div className="menu-topbar">
                    <h2>Departments</h2>
                </div>

                <div className="department-list">
                    {departmentData && departmentData.map((department) => (
                        <Link to={`departments/${department.displayName}`} onClick={() => setSidebarIsOpen(false)}>
                            <h3>{department.displayName}</h3>
                        </Link>
                    ))}
                </div>
            </div>

            <nav className="navbar">
                <div className='menu-icon-container'>
                    {sidebarIsOpen ? <AiOutlineClose className="sidebar-icon" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}/>
                        : <AiOutlineBars className="sidebar-icon" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}/>
                    } 
                </div>

                <div className='navbar-title-container'>
                    <Link to = "/" style={{color: "white"}}><h1 className='navbar-title'>MET RIG</h1></Link>
                </div>
            </nav>
        </div>
    )
}