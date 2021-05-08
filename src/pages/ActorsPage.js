import React from 'react';
import { Container } from 'react-bootstrap';
import ActorCard from '../components/ActorCard';
import LifeRenderBox from '../components/LifeRenderBox';


class ActorsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchString: '',
            chosenActors : [],    
            results : []
        }
    }

    searchTextChanged = (newText) => {
        fetch(`https://api.themoviedb.org/3/search/person?api_key=dcf84c118cc89be974f37f8529ae4c32&query=${newText}`)
        .then((stream) => stream.json())
        .then((res) =>{
            if(res && res.results){
                const newResults = res.results.map((actor) => {
                    return {name:actor.name}
                })
            this.setState({
                results: newResults,           
            })
        }   
    })

    this.setState( {
        searchString: newText,
    } )
}   

    addActor = (index) =>{
        const currentActor = this.state.results[index];
       console.log(currentActor)
    }

    render(){
          
        return (
        <Container>
            <LifeRenderBox 
                    results={this.state.results}
                    placeholder='Choose an Actor..'
                    onSearchChanged={this.searchTextChanged}
                    onResultSelected={this.addActor}

                />
            <ActorCard cardInfo = {this.state.chosenActors}/>
        </Container>
            
        )
    }
}

export default ActorsPage;
