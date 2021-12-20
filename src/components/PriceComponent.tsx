import { stringify } from 'querystring';
import '../App.css';
import '../util/coinbase';
import Coinbase from '../util/coinbase';
import { useState } from 'react';


function PriceComponent() {

    let pairs:string[] = ['BTC-USD']; 

    let coins = Coinbase(pairs);

    //document.getElementById('display')?.innerHTML = coins; 

    return (
        <div className="App">
            <h3>Price Page!</h3>
            <div id="display"></div>
        </div>
        );

}
export default PriceComponent;
    
