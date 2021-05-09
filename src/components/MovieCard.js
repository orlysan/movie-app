
import React from 'react';
import { Card, Col, Row , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



class MovieCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        const movies = this.props.finelList.map((movie ,index) =>{
            
           return (
        
            <Col key={index} lg={3} md={4} sx={6}>
                <Card style={{ margin:'0.5rem', textAlign:'center' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}/>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>Actors: {movie.stars}</Card.Text>
                            <Card.Text>Runtime: {movie.runtime} minuts</Card.Text>
                            <Card.Text>Director: {movie.director}</Card.Text>
                            <Button type="button"><Link to="/movie-card/:index"></Link>More</Button>  
                        </Card.Body>
                </Card>
            </Col>
       
        )
       })
        
        return(
            <Row>
                   {movies}
            </Row>
        )
    }
}

export default MovieCard;