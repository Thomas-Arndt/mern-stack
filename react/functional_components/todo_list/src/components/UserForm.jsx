import React, { useState } from 'react';

const UserForm = (props) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempList = [...props.list];
        tempList.push({task:task, complete:false});
        props.onNewList(tempList);
        setTask('');
    }

    return(
        <div className="wrapper mt-3 p-3 border border-dark shadow rounded-3">
            <h3 className="text-center">Add a task:</h3>
            <form onSubmit={handleSubmit}>
                <input name="task" type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)}/>
                <input type="submit" value="Add" className="btn btn-primary col-4 mt-3"/>
            </form>
        </div>
    )
}

export default UserForm;