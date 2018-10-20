import React from 'react';

const Todos = (props) => { // Passing props since we have no access in stateless components also we can write it as ({todos, deleteTodo}) and remove code on line 4
    const {todos, deleteTodo} = props;

    const todoList = todos.length ? ( // Here we check if todos has some items in it using ternary operator
        todos.map(todo => { // Using map we create new array and call function for each element in array
            return( // If it is not empty we return JSX with content
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
            // inside of onClick event we are passing deleteTodo method which accepts todo.id as parameter. Since we have parenthesis, the deleteTodo method will be invoked right away, to prevent this we use arrow function
        })
        ) : ( // If it is empty, we return message
        <p className="center">You have no todo's left, yay!</p>
    )

    // Here we are passing todoList const from line 6 inside of curly brackets which allows us to use JavaScript expressions inside JSX
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;