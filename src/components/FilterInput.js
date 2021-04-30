import React from 'react';
import './FilterInput.css'

class FilterInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchActor : ''
        }
    }

    searchActor = (event) => {
        this.setState({
         searchActor : event.target.value
        })
 
     }
    render(){
      
        return (
            <div className="filter-container">
                <p>Filter</p>
                <input type="text" name="input-filter" id="input-filter" onChange={this.searchActor} value={this.state.searchActor} placeholder="Search Here"></input>
                <h2>Search Results</h2>
                <p>{this.state.searchActor}</p>
            </div>
        )
    }
}

export default FilterInput;