import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import logo from '../src/images/wigilogo.svg';
import {Link} from 'react-router-dom';


const Header = () => {

    const [inputSearch, setInputSearch] = useState(" ");
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon style={{color: 'whitesmoke'}} />
            <Link to="/">
            <img className="header__logo" src={logo} alt="wigiTube" />
            </Link>
            </div>

            <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} 
            value={inputSearch}
            placeholder="Search" 
            type="text" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"  />
            </Link>
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"  />
            <AppsIcon className="header__icon" />
            <NotificationsIcon className="header__icon" />
            <Avatar 
                alt="Meshach"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHThU90d0hHlw/profile-displayphoto-shrink_200_200/0/1607564745353?e=1625097600&v=beta&t=Iw7Dn88KToS6OebQFasIMvDPoN28FxFtpoMkkh6hITs" />
         </div>

        </div>
    )
}

export default Header
