import React from 'react';

const Main = ({children}) => {
    return (
        <div className="d-flex flex-column align-items-center col-8 offset-2">
            {children}
        </div>
    )
}

export default Main;