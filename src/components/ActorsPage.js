import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import ActorsData from '../data-model/ActorsData';
import FilterInput from './FilterInput';
import GalleryView from './GalleryView';
import './ActorsPage.css'



class ActorsPage extends React.Component{
    
    render(){
/*
   const actorsArray =[];
         
        fetch('actors.json')  //getting data from json and store them in actorsArry
        .then (response => response.json())
        .then(data => {
            const dataList = JSON.parse(data);
            const dataActors = dataList.map((actor) => 
            new ActorsData(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink))
            actorsArray = dataActors
            sendData(actorsArray);
        });
      
     function sendData(actorsArray){
         return actorsArray;
        
     }
 */
     const actors = [
        {
            "fName": "Tom",
            "lName": "Hanks",
            "bday": "1956-07-09",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000158"
        },
        {
            "fName": "Tom",
            "lName": "Cruise",
            "bday": "1962-07-03",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000129"
        },
        {
            "fName": "Jennifer",
            "lName": "Lawrence",
            "bday": "1990-08-15",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm2225369"
        },
        {
            "fName": "Jack",
            "lName": "Nicholson",
            "bday": "1937-04-22",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000197/?ref_=nmls_hd"
        },
        {
            "fName": "Brad",
            "lName": "Pitt",
            "bday": "1963-12-18",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000093/?ref_=nmls_pst"
        },
        {
            "fName": "Julia",
            "lName": "Roberts",
            "bday": "1967-10-28",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000210/?ref_=nmls_pst"
        }
        
    ]

    const actor = actors.map((actor) => 
            new ActorsData(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink))
            this.filterGallery = () => {
                console.log('hi')
            }   

        return (
            <Container>
                <Jumbotron className="Jumbotron">
                    <FilterInput actorsDataArry ={actor} filterGallery={this.filterGallery}/>
                </Jumbotron>
                 <GalleryView actorsDataArry ={actor}/>   
            </Container>
           
        )
    }
}

export default ActorsPage;
