import React from 'react';
import ActorCard from './ActorCard';
import './GalleryView.css';


class GalleryView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const actorCard = this.props.actorsDataArry.map(
            actor => <ActorCard actorInfo = {actor} />
        );
        
    
          return (
            <div className="gallery-container">
              {actorCard}
            </div>
          );
    }
}

export default GalleryView;