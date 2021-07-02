import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';
import RouterIcon from '@material-ui/icons/Router';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
       <div className="sidebar">
         <Link to="/">
         <SidebarRow selected Icon={HomeIcon} title="Home" />
         </Link>
         <SidebarRow Icon={WhatshotIcon} title="Explore" />
         <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
         <hr />

         <SidebarRow Icon={VideoLibraryIcon} title="Library" />
         <SidebarRow Icon={HistoryIcon} title="History" />
         <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
         <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
         <SidebarRow Icon={ThumbUpIcon} title="Liked videos" />
         <hr />

         <h4>SUBSCRIPTIONS</h4>
         <div className="subscriptions" >
           <div className="channelSub" >
              <Avatar className="avatar" src="https://i.imgur.com/E5dkOnS.jpg"  alt=""  />
              <h5>Clever Programmer</h5>
           </div>
           <div className="channelSub" >
              <Avatar className="avatar" src="https://i.imgur.com/OJQWUKA.jpg"  alt=""  />
              <h5>Sports Tak</h5>
           </div>
           <div className="channelSub" >
              <Avatar className="avatar" src="https://i.imgur.com/FqlR2GU.jpg"  alt=""  />
              <h5>Netflix India</h5>
           </div>
         
         </div>
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
         
         <hr />   
         
         <h4>MORE FROM YOUTUBE</h4>
         <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
         <SidebarRow Icon={TheatersIcon} title="Movies" />
         <SidebarRow Icon={SportsEsportsSharpIcon} title="Gaming" />
         <SidebarRow Icon={RouterIcon} title="Live" />
         <SidebarRow Icon={ShopTwoIcon} title="Fashion & Beauty" />
         <SidebarRow Icon={MenuBookIcon} title="Learning" />
         <SidebarRow Icon={EmojiEventsIcon} title="Sports" />
         <hr />

         <SidebarRow Icon={SettingsIcon} title="Setting" />
         <SidebarRow Icon={FlagIcon} title="Report history" />
         <SidebarRow Icon={HelpIcon} title="Help" />
         <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
         <hr />
         
         <div className="sidebar_footer">
           <ul className="list">
             <li>About</li>
             <li>Press</li>
             <li>Copyright</li>
             <li>Contact us</li>
             <li>Creators</li>
             <li>Advertisement</li>
             <li>Developers</li>
             <li>Terms</li>
             <li>Privacy</li>
             <li>Policy & Safety</li>
             <li>How YouTube works</li>
             <li>Test new features</li>
           </ul>
             <p>© 2021 Google LLC</p>
         </div>
             

       </div>
    ); 
}

export default Sidebar;