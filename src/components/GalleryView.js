import React from 'react';
import ActorCard from './ActorCard';
import './GalleryView.css';


class GalleryView extends React.Component{
    constructor(props){
        super(props)
    
    }
   
    render(){
     // if(this.props.newTextInput){
      //  const searchTerm=this.props.newTextInput
      //  const regEx=new RegExp(searchTerm,"g")
      //  const filterdActors=this.props.actorsDataArry.filter(actor=>actor.fname.match(regEx)||actor.lname.match(regEx))
       
     // }
      
     const actorCard = this.props.actorsDataArry.map(
            (actor, index) => <ActorCard key={index} actorInfo = {actor} />
        );
    console.log(this.props.newTextInput)
          return (
            <div className="gallery-container">
              {actorCard}
            </div>
          );
    }
}

export default GalleryView;