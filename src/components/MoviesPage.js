import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import MovieCard from './MovieCard';
import MoviesInput from './MoviesInput';

class MoviesPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : '',
            results : [],
            chosenMovies : []
        }
    }
  
   
    searchTextChanged = (newText) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=dcf84c118cc89be974f37f8529ae4c32&query=${newText}`)
        .then((res) => res.json())
        .then(data => {
            
            const newResultsList = data.results.map((movie) =>{
                return {
                    title : movie.title ,
                    id:movie.id,
                }  
            })
            
            this.setState({
                results : newResultsList,
            })

        
        })
      
        this.setState({
            search : newText,
          
        })
      
    }

    addMovie = (index) => {
        const currentMovie = this.state.results[index];
        const newMoviesArr = this.state.chosenMovies.concat(currentMovie);
        const id = currentMovie.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dcf84c118cc89be974f37f8529ae4c32`)
        .then(res => res.json())
        .then(data => {
            const finalMovie = {
                    id:data.id,
                    title: data.title,
                    poster:data.poster_path , 
                    runtime:data.runtime
            }
            fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=dcf84c118cc89be974f37f8529ae4c32`)
            .then(res => res.json())
            .then(data => {
                finalMovie.stars = data.cast.slice(0 , 3).map(actor => actor.name).join(', ');
                finalMovie.director = data.crew.filter(member => member.known_for_department === "Directing").slice(0 , 1).map (director => director.name)
                this.setState({
                    chosenMovies : this.state.chosenMovies.concat(finalMovie)
                })
            })

        })
  
    }
    render(){
       const movies = this.state.chosenMovies.map((movie) =>{
            
           return (
           <Card style={{ width: '18rem' }}>
               <Card.Img style={{width:'15%'}}variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}/>
               <Card.Title>{movie.title}</Card.Title>
               <Card.Text>Actors: {movie.stars}</Card.Text>
               <Card.Text>Runtime: {movie.runtime} minuts</Card.Text>
               <Card.Text>Director: {movie.director}</Card.Text>
            </Card>);
       })
    
        return (
         
            <Container>
                <h1>movies page</h1>
                <MoviesInput 
                    placeholder= "search movie"
                    results= {this.state.results} 
                    onSearchTextChanged={this.searchTextChanged}
                    onResultSelected={this.addMovie}   
                />
                <MovieCard finelList = {movies}/>
               
            </Container>
     
        )
    }
}

export default MoviesPage;