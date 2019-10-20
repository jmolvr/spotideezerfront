import React from 'react';

export default function Error(){
    return(
        <div className="card border-danger mb-3" style={{width: "20rem", margin: "10px" }}>
            <div className="card-body">
                <h5 className="card-title">OPS :(</h5>
                <p className="card-text">Sorry, we couldn't find a link!</p>
            </div>
        </div>
    );
}