import React, { useContext } from 'react';
import UserContext from './../context/UserContext';

const Form = () => {
    const context = useContext(UserContext);
    console.log(context);

    const handleChange = (e) => {
        context.setFormName(e.target.value)
    }

    return(
        <div>
            <input type='text' name='userInput' value={context.formName} onChange={handleChange} className="form-control"></input>
        </div>
    )
}
export default Form;