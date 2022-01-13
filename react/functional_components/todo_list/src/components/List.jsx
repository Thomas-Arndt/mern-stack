import React from 'react';

const List = (props) => {

    const list=[...props.list]
    // console.log(list);

    const handleDelete = (e) => {
        const index = e.target.getAttribute('index');
        const newList = list.filter((item, i) => i != index);
        props.onNewList(newList);
    }

    const handleChecked = (e) => {
        const index = e.target.getAttribute('index');
        list[index].complete ? list[index].complete=false : list[index].complete=true;
        props.onNewList(list);
    }

    return(
        <div className="wrapper mt-3 p-3 border border-dark shadow rounded-3">
            <h3 className="text-center">To Do:</h3>
            {list.map( (item, i) =>
                <div key={i} index={i} className="d-flex align-items-center justify-content-between mt-2 pb-2 border-bottom">
                    {item.complete ? 
                    <h4 className="text-decoration-line-through text-secondary">{item.task}</h4> : 
                    <h4>{item.task}</h4>}
                    <div className="d-flex align-content-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                            <input index={i} type="checkbox" checked={item.complete} onChange={handleChecked}/>
                            Complete
                        </div>
                        <button index={i} onClick={handleDelete} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default List;