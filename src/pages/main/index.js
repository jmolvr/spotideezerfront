import React, {useState} from 'react';
import './styles.css';
import {deezerRegex, spotifyRegex, deezerEntry, spotifyEntry } from '../../services/apiTemplate';
import { useDispatch } from 'react-redux';

export default function Main(props){
    const [url, setUrl] = useState('');
    //chamada quando o link é enviado
    async function handleSubmit(event){
        event.preventDefault();
        props.setLoading(1);
        if(spotifyRegex.test(url)){
            props.handleCardInfo(await spotifyEntry(url));            
        }else if(deezerRegex.test(url)){
            props.handleCardInfo(await deezerEntry(url)); 
        } 
        setUrl("");
    }

    function handleChange (event){
        const { value } = event.target;
        setUrl(value);
    }

    return (
        <div className="card" style={{width:"20rem"}}>
            <div className="card-body">
                <h5 className="card-title">Paste link here</h5>
                <form  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <input
                                className="form-control"
                                type="url"
                                value={url}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Converter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}   