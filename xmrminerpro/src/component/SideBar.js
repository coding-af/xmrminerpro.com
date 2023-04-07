import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { logo } from '../assets';

let year = new Date().getFullYear()

class SideBar extends React.Component {
    render(){
        return(
            <Fragment>
                <div id="sidebar">
                    <div className="">
                      <div className="logo hide_logo"><a href="/"> <img src={logo} alt=""/></a>
                      </div>
                    <div className="fixmenu">
                    <nav id="menu">
                      <ul>
                        <li><a href="/"><span className="material-icons">home</span> Home</a></li>
                        <li><a href="/dashboard"><span className="material-icons">dashboard</span>Dashboard</a></li>
                        <li><a href="/getting-started"><span className="material-icons">launch</span>Getting Started</a></li>
                      <li><a href="/rewards"><span className="material-icons">emoji_events</span>Rewards</a></li>
                        <li><a href="/support"><span className="material-icons">group</span>Support</a></li>
                        <li><a href="/faq"><span className="material-icons">help_outline</span>FAQ</a></li>
                      </ul>
                    </nav>

                    <footer id="footer">
                      <p className="copyright">Copyright &copy; {year} XMRMINERPRO</p>
                    </footer>
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default SideBar