import React, {useEffect} from 'react';
import ClipboardJS from 'clipboard';

import './styles.css';

function Card(props){

    useEffect(() => {
        new ClipboardJS('span');
    });

    return(
        <div className="card" style={{width:"20rem", margin:"10px"}}>
            <img src={props.cover} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.artist}</h6>
                <span id="clickable" data-clipboard-text={props.link}>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                    </i>
               </span>   
            </div>
        </div>
    )
}

export default Card;