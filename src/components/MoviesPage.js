import React from 'react';
import { Container, Form } from 'react-bootstrap';
import MoviesView from './MoviesView';

class MoviesPage extends React.Component{
    render(){
        return (
         
            <Container>
                <h1>movies page</h1>
                <Form.Control type="text" />
                <MoviesView />
            </Container>
     
        )
    }
}

export default MoviesPage;