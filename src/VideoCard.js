import React from 'react';
import './VideoCard.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ image, title, channel, verified, views, timestamp, channelImage}) {
    return(
        <div className="videoCard">
          <img className="thumbnail" src={image} alt=""></img>
          <div className="video_info">
            <Avatar className="video_avatar" alt={channel} src={channelImage} />
            <div className="video_text">
                <h4>{title}</h4>
                <p className="channel_verified" >{channel} {verified && <CheckCircleIcon className="verified" />}</p>
                <p>{views} • {timestamp}</p>
            </div>
          </div>
        </div>
    )
}

export default VideoCard;