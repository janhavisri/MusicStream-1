import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  HomeRounded,
  LibraryMusicRounded,
  PlaylistPlayRounded,
  SearchRounded,
} from '@mui/icons-material'
import "../stylesheets/header.css"
import React, { useState } from "react";

const Header = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  // const [List, setList, loading, setLoading] =
  // useContext(Context);
  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("./login");
  };
  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
                   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
    
      <li class="nav-item dropdown">
        <NavLink
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          My Music
        </NavLink>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <NavLink class="dropdown-item" href="#">Action</NavLink>
          </li>
          <li>
            <NavLink class="dropdown-item" href="#">Another action</NavLink>
          </li>
          <li>
            <NavLink class="dropdown-item" href="#">Something else here</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<li class="nav-item me-3 me-lg-0 dropdown">
        <NavLink
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          {/* <i class="fas fa-user"></i> */}
          <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png"></img>
        </NavLink>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <NavLink onClick={logout}  class="dropdown-item" href="#">Logout</NavLink>
          </li>
          
        </ul>
      </li>
          {/* <ul className="nav-item">
              <button onClick={logout} className="btn btn-danger">
                Logout
              </button>
            </ul> */}
          </>
        );
      }else{
        return(
          <>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="./login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./signup" activeClassName="active">
                  Signup
                </NavLink>
              </li> */}
            </>
          );
        }
      };
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <img class="img"src="https://o.remove.bg/downloads/c5f05fbb-c329-407a-8830-5ca68d26f922/music-symbols-logo-and-icons-template-vector-removebg-preview.png"></img>
      <div class="input-group rounded">

<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
  {/* <i class="fas fa-search"></i> */}
  <NavLink   exact
          activeClassName='navItemActive'
          className='navItem'
          to='/search'
        >
  <SearchRounded className='navIcons' /></NavLink> 
  {/* <img class="src"src="https://cdn-icons-png.flaticon.com/128/622/622669.png"></img> */}
    
  </span>
</div>

      <div className="container">
        
        <ul className="navbar-nav">
          <li className="nav-item">

            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/explore" className="nav-link">
              Explore
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/library" className="nav-link">
              Library
            </NavLink>
          </li> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-white cursor-pointer"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
          <li className="nav-item item">
            <NavLink to="/login" className="nav-link">
              LOGIN
            </NavLink>
          </li>
          <li className="nav-item">
            {/* <Switch
              checked={darkTheme}
              onChange={(e, v) => {
                setDarkTheme(v);
              }}
            /> */}
          </li>
        </ul>
      </div>
      {showLoggedIn()}
    </nav>
  )
  return (
    <></>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Cody
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>

        
    //         <li class="nav-item">
    //           <a class="nav-link" href="/list">
    //             Browse Platform
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#pricing">
    //             Comparison
    //           </a>
    //         </li>

    //         {showLoggedIn()}

    //         <NavLink to="/signup" activeClassName="">
    //           Signup
    //         </NavLink>
    //         {signupOpen && <Signup setOpenSignup={setSignupOpen} />}
    //         <a href="/main/signup">
    //       <Button variant="contained">Get Started</Button></a>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};




export default Header;
