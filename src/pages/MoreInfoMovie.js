import React from 'react';
import { Container } from 'react-bootstrap';

class MoreInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        const movies = this.props.info.map((movie) => {
            return (
                <Container>
                    <h1>movie.title</h1>
                     <p>movie.director</p>
                     <p>movie.actors</p>
                     <p>movie.runtime</p>
                </Container>
            )
        })
        return(
            <div>{movies}</div>
        )
    }

    
}    

export default MoreInfo;



