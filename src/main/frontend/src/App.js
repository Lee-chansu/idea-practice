import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";


function App() {
    const [hello, setHello] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:8081/api/hello')
        .then(
            (res)=>{
                setHello(res.data)
            }
        ).catch(error => console.log(error))
    },[])

  return (
    <div className="App">
      <h1>백엔드에서 보냅니다.</h1>
        <p>{hello}</p>
    </div>
  );
}

export default App;
