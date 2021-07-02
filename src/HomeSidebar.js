import React from 'react';
import HomeSidebarRow from './HomeSidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link } from 'react-router-dom';
import './HomeSidebar.css';

function HomeSidebar() {
  return (
    <div class="sidebar">
      <Link to="/">
        <HomeSidebarRow className="tag" selected Icon={HomeIcon} title="Home" />
      </Link>
      <HomeSidebarRow Icon={WhatshotIcon} title="Explore" />
      <HomeSidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <HomeSidebarRow Icon={VideoLibraryIcon} title="Library" />
    </div>
  )
}

export default HomeSidebar;