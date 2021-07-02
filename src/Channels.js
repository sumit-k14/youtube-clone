import React from 'react';
import './Channels.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';


function Channels({ channel, channelImage, channelName, verified, subcribers, totalVideos, aboutChannel }) {
    return(
        <div className="channelsCard">
          <div className="channel_info">
            <Avatar className="channel_avatar" alt={channel} src={channelImage} />
            <div className="channel_text">
                <h4>{channelName} {verified && <CheckCircleIcon className="verified_icon" />} </h4>
                <p>{subcribers} • {totalVideos}</p>
                <p>{aboutChannel}</p>
            </div>
          </div>
        </div>
    )
}

export default Channels;