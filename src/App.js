import React, {useState} from 'react';
import Main from './pages/main';
import Card from './pages/card';
import Loading from './pages/loading';
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
  
  function handleCardInfo(data){
    setData(data);
    setShowCard(1);
  }

  return (
    <div className="container">
      <div className="d-flex p-3 justify-content-center align-items-center flex-column">
        <Main setLoading={setLoading} handleCardInfo = {handleCardInfo}/>
        {isLoading ? <Loading /> : showCard ? <Card {...data}/>: null}
      </div>
    </div>
  );
}

export default App;
