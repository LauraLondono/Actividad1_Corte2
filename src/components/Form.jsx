import React, { useState } from 'react';
import Todo from './Todo';


const Form = () => {
    // Estado del todo a ingresar - input
    const [todo, setTodo] = useState({});

    // Esta es mi lista de todos
    const [todos, setTodos] = useState([  //hook de manejo de cambios de estado
        {
            todo: 'todo 1',
            edit: false,
            complete: false,

        },
    ]);

    // Esto maneja el cambio del input
    const handleChange = (e) => setTodo({ [e.target.name]: e.target.value, edit: false, complete: false });

    // Verifico que el input no este vacio
    const handleClick = (e) => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacio');
            return;
        }
        setTodos([...todos, todo]);
    };

    // Elimina el todo
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    //Permite editar el texto del todo
    const activeEdit = (index) => {
        todos[index].edit = !todos[index].edit
        setTodos([...todos])
    };

    //Actualización del todo
    const editTodo = (index, value) => {
        todos[index].todo = value;
        setTodos([...todos])
    }

    //Maneja el checkbox/ Completado
    const completeTodo = (index) => {
        //Negado: para cambio de estado de completado
        todos[index].complete = !todos[index].complete
        setTodos([...todos])
    }

    // Editar el todo
    // const editTodo = (index, todo) => {
    //     const newTodos = [...todos];
    //     newTodos[index] = todo;
    //     setTodos(newTodos);
    // }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label> New To-Do</label><br />
                <input type="text" name='todo' onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>

            <span className='items'>Items:</span>

            {todos.map((value, index) => (
                <Todo
                    todo={todos[index]}
                    key={index}
                    index={index}
                    deleteTodo={deleteTodo}
                    activeEdit={activeEdit}
                    editTodo={editTodo}
                    completeTodo={completeTodo}
                />
            ))}
        </>
    );

};

export default Form;