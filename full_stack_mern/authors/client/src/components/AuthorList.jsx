import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context'
import DeleteButton from './DeleteButton';

const AuthorList = () => {
    const history = useHistory();
    const context = useContext(Context);
    const [ authorList, setAuthorList ] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors/')
            .then(res=>{
                // console.log(res.data.authors);
                let allAuthors = res.data.authors;
                allAuthors.sort((a,b)=>{
                    if(a.name.toUpperCase()<b.name.toUpperCase()){
                        return -1;
                    }
                    if(a.name.toUpperCase()>b.name.toUpperCase()){
                        return 1; 
                    }
                    return 0;
                })
                setAuthorList(allAuthors);
            })
            .catch(err=>console.log(err));

    }, []);

    const removeFromDOM = authorId => {
        setAuthorList(authorList.filter(author => author._id != authorId));
    }
    

    return (
        <div className='col-6'>
            <table className='table table-striped border border-dark shadow mt-4'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <button onClick={()=>{history.push(`/edit/${author._id}`); context.setMode("edit")}} className="btn-sm btn-success">Edit</button>
                                    <DeleteButton removeFromDOM={removeFromDOM} authorid={author._id}/>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;