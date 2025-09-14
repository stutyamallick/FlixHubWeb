import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.less";
import { GiFilmProjector } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { IoIosContact } from "react-icons/io";


export default function Layout() {

    const [username, setUsername ] = useState(null);

    useEffect(() => {
        if(!username){
            let URL = "/api/imbd/user-Info";
            axios.get(URL).then(res => {setUsername(res.data)}).catch(err => {setUsername("NA")});
        };
    }, []);

	return (
		<div className="layout-ct">
		    <aside className="aside-ct">
		        <div className="sidenav-header-ct">
                  <a className="app-name-ct">
                    <GiFilmProjector className="logo-img" />
                    <span className="app-name">FlixHUB</span>
                  </a>
                </div>

                <hr className="horizontal-line"/>
                
                <div className="menu-main-ct">
                    <div className="nav-itm-ct">
                      <a className="nav-link-active">
                        <div className="nv-link-img-active">
                          <AiFillHome/>
                        </div>
                        <span className="nv-link-txt">Dashboard</span>
                      </a>
                    </div>
                    <div className="nav-itm-ct">
                      <a className="nav-link">
                        <div className="nv-link-img">
                          <MdLocalMovies/>
                        </div>
                        <span className="nv-link-txt">Movies</span>
                      </a>
                    </div>
                    <div className="nav-itm-ct">
                      <a className="nav-link">
                        <div className="nv-link-img">
                          <IoIosContact/>
                        </div>
                        <span className="nv-link-txt">Directors</span>
                      </a>
                    </div>
                    <div className="nav-itm-ct">
                      <a className="nav-link">
                        <div className="nv-link-img">
                          <IoIosContact/>
                        </div>
                        <span className="nv-link-txt">Actors</span>
                      </a>
                    </div>
                </div>

                <div className="side-nav-footer-ct">
                    <div className="help-section-card">
                      <div className="help-section-info">
                        <span className="help-text1">Need help?</span>
                        <br/>
                        <span className="help-text2">Please send us an email</span>
                        <br/><br/>
                        <button className="copy-email-btn">Copy Email ID</button>
                      </div>
                    </div>
                    <div className="logout-btn-ct">
                        <button className="logout-btn">Logout</button>
                    </div>
                </div>

		    </aside>

            <main className="main-ct">
                <div className="header-ct">
                    <div className="header-nav-ct">
                        <div className="header-nav-info">
                            <span className="header-page-text">Pages </span>
                            <span>/ Dashboard</span>
                         </div>
                        <div className="header-current-page">Dashboard</div>
                    </div>
                </div>
                <div className="input-group-ct">
                    <div className="input-group">
                      <input type="text" className="global-search-textBox" placeholder="Search here..." />
                      <span className="username-ct">Welcome Stutya</span>
                    </div>
                </div>
            </main>
		</div>
	);
}
