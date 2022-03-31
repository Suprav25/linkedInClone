import React from 'react'
import '../Styles/header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import linkedin from '../assets/linkedin.png'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={linkedin}/>
                <div className="header-search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header-right">
            <div className="header-icons">
                    <div className="header-icon-details"><HomeIcon/><div>My Home</div></div>
                    <div className="header-icon-details"><PeopleIcon/><div>My network</div></div>
                    <div className="header-icon-details"><WorkIcon/><div>Jobs</div></div>
                    <div className="header-icon-details"><SmsIcon/><div>Messaging</div></div>
                    <div className="header-icon-details"><NotificationsIcon/><div>Notifications</div></div>
                    <div className="header-icon-details"><AccountCircleIcon/><div>Me</div></div>
                    <div className="header-icon-details"><AppsIcon/><div>Work</div></div>    
                </div>
            </div>
        </div>
    )
}

export default Header
