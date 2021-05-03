import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import ActorsData from '../data-model/ActorsData';
import FilterInput from './FilterInput';
import GalleryView from './GalleryView';
import './ActorsPage.css'



class ActorsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            actorsArray : []
        }
    }

    componentDidMount = () => {
        fetch('/actors.json')  //getting data from json and store them in actorsArry
        .then (response => response.json())
        .then(data => {
            const actor = data.map((actor) => 
            new ActorsData(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink))
            this.setState({
                actorsArray : actor,
                newText : null
            })

        });
    }

    serchTextChanged = (newText) => {
        this.setState({newText : newText})
       
    }

    render(){

        return (
            <Container>
                <Jumbotron className="Jumbotron">
                    <FilterInput 
                    actorsDataArry ={this.state.actorsArray} 
                    filterGallery={this.filterGallery}
                    onSearchChange={this.serchTextChanged}
                    />
                </Jumbotron>
                 <GalleryView 
                 actorsDataArry ={this.state.actorsArray}
                 newTextInput = {this.state.newText}
                 />   
            </Container>
           
        )
    }
}

export default ActorsPage;
