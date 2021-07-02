import React from 'react';
import './ChannelVideos.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';

function ChannelVideos({ image, title, channel, verified, views, timestamp, channelImage, discription, quality1, quality2}) {
    return(
        <div className="channel_videoCard">
          <img className="channelVideo_thumbnail" src={image} alt=""></img>
          <div className="channelVideo_info">
            <div className="channelVideo_text">
                <h4>{title}</h4>
                <p>{views} • {timestamp}</p>
                <div className="channel_logo" >
                   <Avatar className="channelVideo_avatar" alt={channel} src={channelImage} />
                   <p className="channel_verified" >{channel} {verified && <CheckCircleIcon className="verified" />}</p>
                </div>
                <p>{discription}</p>
                <button className="video_quality" >{quality1}</button>
                <button className="video_quality" >{quality2}</button>
            </div>
          </div>
        </div>
    )
}

export default ChannelVideos;