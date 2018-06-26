import React from 'react';

const VideoItem = (props) => {

    let video = props.video;
    const onVideoSelect = props.onVideoSelect;
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src="{video.snippet.thumbnails.medium.url}" />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.channelTitle}
                    </div>
                </div>
            </div>

            {props.video.snippet.channelId}
        </li>
    );
};

export default VideoItem;