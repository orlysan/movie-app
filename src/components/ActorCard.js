import React from 'react';
import { Card } from 'react-bootstrap';
import './ActorCard.css';

class ActorCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const actorInfo = this.props.actorInfo
       
         
              
            return (
                    <Card key={actorInfo.id} border="secondary" className= "fullCard">
                         <Card.Img variant="top" src={actorInfo.imgUrl}/>
                        <Card.Body className="body">
                            <p>Age: {actorInfo.calculateAge()}</p>
                            <Card.Link href='{actorInfo.imdbLink}' target="_blank">Go to Imdb</Card.Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">{actorInfo.fName +' ' + actorInfo.lName} </Card.Footer>
                    </Card>
                )   
            }
        
         
        
    
}

export default ActorCard;