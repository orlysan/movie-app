import React from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router';

class MoreInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const movieIndex = this.props.match.params.index;
console.log(movieIndex)
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
            <div>Movie info{movies}</div>
        )
    }

    
}    

export default withRouter (MoreInfo);



