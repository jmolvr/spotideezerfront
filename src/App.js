import React, {useState} from 'react';
import Main from './pages/main';
import Card from './pages/card';
import Loading from './pages/loading';
import Error from './pages/error';
import './styles.css';

function App() {
  const [data, setData] = useState({
    title: null,
    artist: null,
    cover: null,
    link: null
  });
  const [isLoading, setLoading] = useState(0);
  const [showCard, setShowCard] = useState(0);
  const [isError, setError] = useState(0);
  
  function handleCardInfo(data){
    if(data !== ""){
      setData(data);
      const img = new Image();
      img.src = data.cover
      img.onload = () => {
          setError(0);
          setShowCard(1);
          setLoading(0);
        }
      } else {
      setError(1);
      setShowCard(0);
      setLoading(0);
    }
  }
  
  return (
    <div className="container-fluid">
      <div className="d-flex p-3 justify-content-center align-items-center flex-column">
        <Main setLoading={setLoading} handleCardInfo = {handleCardInfo}/>
        {isLoading ? <Loading /> : showCard ? <Card {...data} /> : isError ? <Error /> : null}
      </div>
    </div>
  );
}

export default App;
