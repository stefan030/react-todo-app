import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
    state = { // Initial state
        todos: [
            {id: 1, content: 'Buy some milk'},
            {id: 2, content: 'Play Playstation 1'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos // this is same as todos: todos, but ES6 allow us to write it like this as the name of key and value are same
        })
    }

    addTodo = (todo) => { // Argument passed to addTodo method is this.state argument from AddTodo component
        todo.id = Math.floor(Math.random() * 100); // Manual set up of Todo id
        let todos = [...this.state.todos, todo]; // Using spread operator we are adding new Todo to old state array
        this.setState({
            todos // this is same as todos: todos, but ES6 allow us to write it like this as the name of key and value are same
        })
    }

    render() {
        // Below we are just passing current state and methods as props to components
        return(
            <div className="App container">
                <h1 className="center blue-text">Stefan's Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }

}

export default App;
