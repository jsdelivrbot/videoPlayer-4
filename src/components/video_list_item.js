/**
 * Created by consultadd on 13/6/17.
 */
import React from 'react';

const VideoListItem = ({video,onVideoSelect})=>{
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return(
        <li className="list-group-item" onClick={()=>{onVideoSelect(video)}}>
            <div className="video-list-media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;