import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const APIKEY = 'AIzaSyAYzHHzLMkayjavxtlEzMgUU4N_cqE5-zk';



class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term)
    {
        YTSearch({key: APIKEY, term: term}, (resultVideos) => 
        {
            this.setState({
                videos: resultVideos,
                selectedVideo: resultVideos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} /> 
            <VideoList 
                onVideoSelect = {selectedVideo => this.setState(
                    {selectedVideo: selectedVideo}
                )}
                videos={this.state.videos}
            />
        </div> 
        );
    }
}



ReactDOM.render(<App />, document.querySelector('.container'));