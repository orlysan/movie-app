import React from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';
import './LifeRenderBox.css';

class LifeRenderBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchText: '',
        }
    }

    updateText = (event) =>{
        const val = event.target.value;
        this.setState({
            searchText: val
        });
        
        this.props.onSearchChanged(val);
    }
    resultSelected = (index) => {
        this.props.onResultSelected(index);
        this.setState({
            searchText: ''
        });
        this.props.onSearchChanged('');
    }
    render() {
        const listItems = this.props.results.map( (res, index) => {
            return   <ListGroup.Item action key={index} onClick={()=> this.resultSelected(index)}>{res.name}</ListGroup.Item>
        })
        return (
        <Container>
            <Form.Control 
                onChange={this.updateText} 
                value={this.state.searchText} 
                placeholder={this.props.placeholder}/>
            <ListGroup className="list-group">
                {listItems}
            </ListGroup>
        </Container>)
    }
}



export default LifeRenderBox;