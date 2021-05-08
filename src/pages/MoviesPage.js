import React from 'react';
import { Container } from 'react-bootstrap';
import LifeRenderBox from '../components/LifeRenderBox';
import MovieCard from '../components/MovieCard';

class MoviePages extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            searchString: '',
            chosenMovies: [],
            results: [],
        }
    }
    searchTextChanged = (newText) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=dcf84c118cc89be974f37f8529ae4c32&query=${newText}`)
            .then( (stream) => stream.json())
            .then((res) => {
                if(res && res.results){
                    const newResults = res.results.map((movie) => {
                        return {title : movie.title, id:movie.id}
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
    addMovie = (index) => {
        const currentMovie = this.state.results[index];
        const newMoviesArr = this.state.chosenMovies.concat(currentMovie);
        const id = newMoviesArr.id;
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
                    chosenMovies : this.state.chosenMovies.concat(finalMovie),
                    results:[]
                })
            })

        })
  
    }
    render() {

        return (
            <Container>
                <LifeRenderBox 
                    results={this.state.results}
                    placeholder='Choose a Movie..'
                    onSearchChanged={this.searchTextChanged}
                    onResultSelected={this.addMovie}

                />
                <MovieCard cardInfo = {this.state.chosenMovies}/>
             </Container>)
    }
}

 
  

export default MoviePages;
