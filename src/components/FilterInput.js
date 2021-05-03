import React from 'react';
import './FilterInput.css'

class FilterInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchActor : null
        }
    }

    searchActor = (e) => {
        this.setState({
         searchActor : e.target.value
        })
 
     }

    
    render(){
    
        return (
            <div className="filter-container">
                <label>Filter</label><br/>
                <input onChange={this.searchActor} type="text" name="input-filter" id="input-filter" value={this.state.searchActor}></input>
                <h2>Search Results</h2>
            </div>
        )
    }
}

export default FilterInput;