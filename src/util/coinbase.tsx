import { stringify } from 'querystring';
import '../App.css';

function Coinbase(pairs:string[]) {

let socket = new WebSocket("wss://ws-feed.exchange.coinbase.com/");


let request: {type: string, 
            product_ids: string[],
            channels: (string|{
                name: string,
                product_ids: string[]
            })[]} = {
    "type": "subscribe",
    "product_ids": [
        //currency pairs are inserted here
    ],
    "channels": [
        "level2",
        "heartbeat"
    ]
};

let response: {pair: string, price: number}[] = [];
//response.push({pair:'ex', price: 123});

let heartbeat: {name:string, product_ids:string[]} = {
    "name": "ticker",
    "product_ids": [
        //"ETH-USD"
    ]
}

heartbeat.product_ids = pairs; 
request.product_ids = pairs; 
request.channels.push(heartbeat);
let prices:number[] = []; 
let averages:number[] = [];
let sums:number[] = [];
let counts:number[] = [];

for(let i = 0; i < pairs.length; i++){
    averages[i] = 0;
    counts[i] = 0;
    sums[i] = 0;
}

socket.onopen = function(e) {
  console.log("[open] Connection established");
   console.log("Sending to server");
  socket.send(JSON.stringify(request));
};

socket.onmessage = function(event) {
  let jsonObj = JSON.parse(event.data);
  getPrices(jsonObj);
  //console.log(response[]);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.log('[close] Connection died');
  }
};
socket.onerror = function(error) {
  console.log(`[error] ${error}`);
};

function getPrices (jsonObj: any): number[] {
    if(jsonObj["type"] === "l2update"){
        for(let i = 0; i < pairs.length; i++){
            if(jsonObj["product_id"]===pairs[i]){
                prices[i] = parseFloat(jsonObj["changes"][0][1]);
            }

            if(counts[i]<1000){
                sums[i] += prices[i]; 
                counts[i]++;        
            } else {
                averages[i] = sums[i]/counts[i];
                if(!isNaN(averages[i])){
                    response.push({pair:pairs[i], price: averages[i]})
                    //console.log(response[1]);
                }
                counts[i] = 0;
                sums[i] = 0;
            }
        }
    }

    return prices;
}

return (response);

}
export default Coinbase;
