import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';

class MoviesInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchText : ''
        }
    }

    updateText = (event) => {
        const val = event.target.value
        this.setState({
            searchText : val
        })
        this.props.onSearchTextChanged(val);
    }

    render(){
        const listItems = this.props.results.map((movie, index) => {
            return  <ListGroup.Item onClick={()=> this.props.onResultSelected(index)} action key={index}>{movie.title}</ListGroup.Item>
        })
    
       

        return (
            <div>
                <Form.Control onChange={this.updateText} type="text" placeholder={this.props.placeholder} value={this.state.searchText}/>
                    <ListGroup>{listItems}</ListGroup>  
            </div>
           
        )
    }
}

export default MoviesInput;