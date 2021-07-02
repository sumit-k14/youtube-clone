import React, {  useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
function Header() {

   const [inputSearch, setInputSeacrh] = useState(" ");

    return (
        <div className = "header">
         <div class="header_left">
         
         <MenuIcon />

         <Link to="/">
            <img class="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                 alt="" title="YouTube Home" ></img>
         </Link>

         </div>
         
         <div class="header_input">
            <input onChange={(e) => setInputSeacrh(e.target.value)} value={ inputSearch } 
                   className="input-box header_search" placeholder="Search" type="text"></input>
           
            <Link to={`/search/${inputSearch}`}>
              <Tooltip className="tooltip" title="Search">
                 <SearchIcon class="header_inputBtn" title="Search" />
              </Tooltip>
            </Link>
            
           </div>
           <Tooltip className="tooltip" title="Search with your voice">
               <KeyboardVoiceIcon className="header_mike" tooltip="Search with your voice" />
           </Tooltip>

         <div class="header_icons">
            <Tooltip className="tooltip" title="Create">
               <VideoCallIcon className="header_icon" title="Create" />
            </Tooltip>
            <Tooltip className="tooltip" title="YouTube apps">
               <AppsIcon className="header_icon" title="YouTube apps" />
            </Tooltip>
            <Tooltip className="tooltip" title="Notifications">
               <NotificationsIcon className="header_icon" title="Notifications" />
            </Tooltip>
            
            <Avatar className="avatar" src="https://i.imgur.com/xVQzehz.png"  alt=""  />
         </div>
        </div>
        
    );
}

export default Header;