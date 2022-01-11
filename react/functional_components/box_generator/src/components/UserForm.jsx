import React, { useState } from 'react';

const UserForm = (props) => {
    const [color, setColor] = useState('');
    const [sideLength, setSideLength] = useState('');

    const handleColorChange = (e) => setColor(e.target.value);

    const handleSideLengthChange = (e) => setSideLength(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        let block = {color:color, sideLength:`${sideLength}px`};
        console.log(block);
        props.addBlock(block);
        setColor('');
        setSideLength('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <span>Choose a Color: </span>{' '}
                <input name='color' value={color} onChange={handleColorChange} />{' '}
            </label>
            <label>
                <span>Choose a Side Length: </span>{' '}
                <input type="number" name='sideLength' value={sideLength} onChange={handleSideLengthChange} />
            </label>
            <input type="submit" value="Make Box" />
        </form>
    );
}

export default UserForm;