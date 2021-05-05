import React from 'react';
import { CardDeck } from 'react-bootstrap';

class MovieCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <CardDeck>
                   {this.props.finelList}
            </CardDeck>
        )
    }
}

export default MovieCard;