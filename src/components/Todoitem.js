import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Todoitem extends Component {

getStyle = () => {
   return {
       background: '#363636',
       padding: '10px',
       color: 'white',
       borderBottom: '1px #ccc dotted',
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
   }
}

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle()}>
                    <input type="checkbox" id={"box-" + this.props.todo.id} onChange={this.props.markComplete.bind(this, id)}/> 
                    <label htmlFor={"box-"+ this.props.todo.id}>{' '}
                    {this.props.todo.title}
                    <div className="wrapper" onClick={this.props.delTodo.bind(this, id)}>
                        <a href="#" className="close-button">
                            <div className="in">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                            </div>
                            <div className="out">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                            </div>
                        </a>
                    </div>
                    </label>
            </div>
        )
    }
}

export default Todoitem;