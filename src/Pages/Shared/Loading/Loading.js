import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '400px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <span className="visually-hidden">Loading...</span>
        </div>
    )};

export default Loading;