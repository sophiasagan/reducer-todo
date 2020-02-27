import React, { useState } from 'react';

const TodoForm = props => {
    const [item, setItem] = useState('');

    const handleChanges = e => {
        setItem(e.target.value);
    };


    const submitItem = e => {
        e.preventDefault();
        props.addTodo(item);
        setItem('');
    };



    return (
        <div>
            <form onSubmit={submitItem}>
                <label htmlFor='item'> To Do: </label>
                <input type='text' name='item' value={item} onChange={handleChanges} />
                <button> Add </button>
            </form>
        </div>
    );
};

export default TodoForm;