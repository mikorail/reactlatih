import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();
function getName(mahasiswi){
    return "Nama :"+mahasiswi.nama + "NIM : "+mahasiswi.nim;
}
function welcome(mahasiswi){
    if(mahasiswi.angkatan <2019){
        return "Selamat datang MABA"+mahasiswi.nama;
    }else{
        return "......"
    }
}

const mahasiswi = { 
    nama  :"Lara Doren",
    nim   :"123456",
    angkatan : 2018 
}
const elements =(
    <h1>
    Nama:{getName(mahasiswi)}
    <br></br>
    </h1>
    )
function tick(){
    const elements=(
        <div>
            <h1>
                Hello
            </h1>
            <h2>
                it is {new Date().toLocaleTimeString()}.
            </h2>
        </div>
    );
    ReactDOM.render(elements, document.getElementById('root'));
}
setInterval(tick,1000);

 