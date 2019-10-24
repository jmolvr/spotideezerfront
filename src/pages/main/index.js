import React, {useState} from 'react';
import api from "../../services/api";
import './styles.css';
export default function Main(props){
    const [url, setUrl] = useState('');

    //chamada quando o link é enviado
    async function handleSubmit(event){
        event.preventDefault();
        props.setLoading(1);
        const deezerRegex = /^(https|http):\/\/www.deezer.com\/track\/\d+/;
        const spotifyRegex = /^https:\/\/open\.spotify\.com\/track\/\w+/;

        if(spotifyRegex.test(url)){
            let link = url.match(spotifyRegex)[0];
            const response = await api.post('/getURLDeezer', {
                url: link,
            });
            props.handleCardInfo(response.data);
            setUrl("");
            
        }else if(deezerRegex.test(url)){
            let link = url.match(deezerRegex)[0];
            const response = await api.post('/getURLSpotify', {
                url: link,
            });
            props.handleCardInfo(response.data);
            setUrl("");
        } 
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