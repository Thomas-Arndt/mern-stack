import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = ({ children }) => {
    return (
        <div className="d-flex flex-column align-items-center col-8 offset-2">
            {children}
        </div>
    )
    
};

export default Main;