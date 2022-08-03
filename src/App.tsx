import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/Button';


type getType = {
  "userId": number,
  "id": number,
  "title": string
  "body": string
}

function App() {

  const [get, setGet] = useState<Array<getType>>([])

  const getRequestHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setGet(json))
  }


  // useEffect = () => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //         .then(response => response.json())
  //         .then(json => setGet(json))
  // }.[]
  return (

      <div className="App">
        <Button nickName={'GetRequest'} callBack={getRequestHandler}/>
        <p></p>
        <ul>
          {get.map((el) => {
            return (
                <li>
                  <span>{el.id}</span>
                  <span>{el.userId}</span>
                  <span>{el.title}</span>
                </li>
            )
          })}
        </ul>
      </div>
  );
}

export default App;