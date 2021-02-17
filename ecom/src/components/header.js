import React from "react"

const Header=()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <a className="navbar-brand" href="#">GitHublist</a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <input type="text" className="form-control" placeholder="Search . . ." aria-label="Username" aria-describedby="basic-addon1"/>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/github">Repositories</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
        <ul className="navbar-nav">
            <i className="far fa-bell mr-2"/>
            <li className="fas fa-plus" href="#"/> 
        </ul>
    </div>
</nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //     <div className="navbar-nav">
        //     <a class="navbar-brand mb-0 h1" href="#">GitHublist</a>
        //     <form className="form-inline">
        //     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //     </form>
        //     <a className="nav-item nav-link" href="/signup">SignUp</a>
        //     <a className="nav-item nav-link" href="/">GitHub</a>
        //     <ul className="navbar-nav mr-auto">
        //         <li class="nav-item">
        //         <a class="nav-link" href="#">Features</a>
        //         </li>
        //         <li class="nav-item">
        //         <a class="nav-link" href="#">Pricing</a>
        //          </li>
        //         {/* <i class="far fa-bell"></i>
        //         <i class="fas fa-plus"></i> */}
        //         </ul>
        //     </div>
        // </div>
        // </nav>
    )
}
export default Header;