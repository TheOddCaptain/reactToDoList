import React, { Component } from 'react';


class Addtodos extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
           <form onSubmit={ this.onSubmit} style={{display: 'flex'}}>
               <input 
               type="text" 
               name="title" 
               style={{flex: '10', padding: '5px', backgroundColor: '#363636', color: 'white', marginRight: '10px'}}
               placeholder="Todo..."
               value={this.state.title}
               onChange={this.onChange}
               />
               <input 
               type="submit" 
               value="Add"
               className="btn"
               style={{flex: '1', backgroundColor: '#363636', color: 'white', padding: '5px', cursor: 'pointer'}}/>
           </form> 
        )
    }
}

export default Addtodos;