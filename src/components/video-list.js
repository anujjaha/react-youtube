import React from 'react';
import VideoItem from './video-item'

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.map((video, index) => {
                return  <VideoItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag} video={video} 
                />;
            })}
        </ul>
    );
}

export default VideoList;