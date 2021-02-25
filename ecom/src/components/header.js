import React from "react"

const Header=()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <a className="navbar-brand" href="/home">GitHublist</a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <input type="text" className="form-control" placeholder="Search . . ." aria-label="Username" aria-describedby="basic-addon1"/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/github">Repositories</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Issues</a>
            </li>
        </ul>
        <ul className="navbar-nav">
            <i className="far fa-bell mr-2"/>
            <li className="fas fa-plus" href="#"/> 
        </ul>
    </div>
</nav>
    )
}
export default Header;