import React from "react";
import { Link } from 'react-router-dom'

function Sidebar(){
   
    return(
    <>
 {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <div className="nav-link" >
                    <Link to='/dashboard'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span  style={{color:"white"}}>Dashboard</span>
                    </Link>
                    </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                  <Link to='/create'>
                  <i className="fas fa-fw fa-cog"></i>
                    <span style={{color:"white"}}>Add User</span>
                  </Link>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                   <Link to="/nested-components">
                   <i className="fas fa-fw fa-wrench"></i>
                    <span  style={{color:"white"}}>Nestedcomponents</span>
                    </Link>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">Hooks</div>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                   <Link to="/use-Ref">
                   <i className="fas fa-fw fa-wrench"></i>
                    <span  style={{color:"white"}}>UseRef</span>
                    </Link>
                </div>
            </li>
        </ul>
  </>
    )
}
export default Sidebar