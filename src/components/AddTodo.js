import React, { Component } from 'react';

export default class AddTodo extends Component { // No need to pass props to stateful components
    state = {
        content: ""
    }

    // We are capturing what user types inside of input field and setting it as state
    handleChange = (e) => { // e - event object in this case is <input type="text" onChange={this.handleChange} value={this.state.content} />
        this.setState({
            content: e.target.value // e.target.value is value property from input element
        })
    }

    //
    handleSubmit = (e) => {
        e.preventDefault(); // Preventing default behaviour (refresh of a page)
        this.props.addTodo(this.state); // Passing state that was captured on submit to addTodo method from App.js
        this.setState({ // Re-setting blank input field once the new Todo has been submitted
            content: ""
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}