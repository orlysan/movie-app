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
        const val = e.target.value;
        this.setState({
         searchActor : val
        })
        
        this.props.onSearchChange(val);
     }

    
    render(){
    
        return (
            <div className="filter-container">
                <label>Filter</label><br/>
                <input onChange={this.searchActor} type="text"  value={this.state.searchActor}></input>
                <h2>Search Results</h2>
            </div>
        )
    }
}

export default FilterInput;