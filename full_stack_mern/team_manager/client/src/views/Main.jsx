import React from 'react';

const Main = ({children}) => {
    return (
        <div className="d-flex flex-column align-items-center">
            {children}
        </div>
    )
}

export default Main;