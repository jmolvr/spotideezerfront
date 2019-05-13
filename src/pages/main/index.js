import React, {Component} from 'react';
import Clipboard from 'clipboard';
import api from "../../services/api";
import './styles.css';
export default class Main extends Component{
    state = {
        link:"",
    }
    componentDidMount(){
        this.clipboard = new Clipboard("#converted");
    }
    //chamada quando o link é enviado
    handleSubmit = async event => {
        event.preventDefault();
        const deezerRegex = /^https|http:\/\/www.deezer.com\/track\/\d+/;
        const spotifyRegex = /^https:\/\/open\.spotify\.com\/track\/\w+/;

        if(spotifyRegex.test(this.state.link)){
                let link = this.state.link.match(spotifyRegex)[0];
                const response = await api.post('/getURLDeezer', {
                url: link,
            });
            const divElement = document.querySelector('#converted');
            divElement.setAttribute('value', response.data);
        } else if(deezerRegex.test(this.state.link)){
                let link = this.state.link.match(deezerRegex)[0];
                const response = await api.post('/getURLSpotify', {
                url: link,
            });
            const divElement = document.querySelector('#converted');
            divElement.setAttribute('value', response.data);
        }
        
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ link: value});
    }

    render(){
        return (
            <div id="main-container">
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Cole link aqui"
                    value={this.state.link}
                    onChange={this.handleChange}
                />
                <button type="submit">Converter</button>
                <input
                    id="converted"
                    placeholder="Link Convertido"
                />
            </form>
            </div>
        )
    }
}