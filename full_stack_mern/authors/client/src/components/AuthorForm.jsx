import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const AuthorForm = () => {
    const history = useHistory();
    const context = useContext(Context);
    const { id } = useParams();
    const [ authorName, setAuthorName ] = useState('');
    const [ errors, setErrors ] = useState([])

    useEffect(()=> {
        if(id){
            axios.get(`http://localhost:8000/api/authors/${id}`)
                .then(res=>{
                    // console.log(res.data);
                    setAuthorName(res.data.author.name)
                })
                .catch(err=>{
                    history.push('/error');
                    context.setMode('new');
                })
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosPostPut();
    }

    const axiosPostPut = () => {
        let formData = {name: authorName};
        if(context.mode==='new'){
            axios.post('http://localhost:8000/api/authors/new', formData)
            .then(res=> {
                // console.log(res.data);
                history.push('/');
            })
            .catch(err=>{
                // console.log(err.response.data);
                const errorResponse = err.response.data.errors;
                const errorList = [];
                for(const key of Object.keys(errorResponse)){
                    errorList.push(errorResponse[key].message)
                }
                setErrors(errorList);
            })
        }
        else if(context.mode==='edit'){
            axios.put(`http://localhost:8000/api/authors/update/${id}`, formData)
            .then(res=> {
                // console.log(res.data);
                history.push('/');
            })
            .catch(err=>{
                // console.log(err.response.data);
                const errorResponse = err.response.data.errors;
                const errorList = [];
                for(const key of Object.keys(errorResponse)){
                    errorList.push(errorResponse[key].message)
                }
                setErrors(errorList);
            })
        }
    }

    return (
        <div className="d-flex flex-column align-items-center border border-dark shadow p-3 mt-4">
            <h2>- Add an Author -</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setAuthorName(e.target.value)} value={authorName} className="form-control mt-3" placeholder="Author Name"/>
                {errors && errors.map((error, i)=>
                    <p key={i} className="alert text-danger m-0 pb-0">{error}</p>
                )}
                <div className="d-flex justify-content-center gap-3">
                    <button onClick={(e)=>{e.preventDefault(); history.push('/');}} className="btn-sm btn-primary mt-3">Cancel</button>
                    {context.mode==='new' && <input type="submit" value="Add" className="btn-sm btn-success mt-3"/>}  
                    {context.mode==='edit' && <input type="submit" value="Update" className="btn-sm btn-success mt-3"/>}  
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;