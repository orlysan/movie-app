import React from 'react';
import FilterInput from './FilterInput';
import GalleryView from './GalleryView';

class ActorsPage extends React.Component{
    render(){
        return (
            <div>actors page
                <GalleryView />
                <FilterInput />
            </div>
        )
    }
}

export default ActorsPage;