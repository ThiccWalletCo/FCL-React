import { stringify } from 'querystring';
import '../App.css';

function PriceComponent() {
  return (
    <div className="App">
        <div id="display"></div>
    </div>
  );
}

export default PriceComponent;

let socket = new WebSocket("wss://ws-feed.exchange.coinbase.com/");
let count = 0;
let prices: any[] = [];
let average: number = 0;
let first = true;
let request = {
    "type": "subscribe",
    "product_ids": [
        "ETH-USD",
    ],
    "channels": [
        "level2",
        "heartbeat",
        {
            "name": "ticker",
            "product_ids": [
                "ETH-USD"
            ]
        }
    ]
};
socket.onopen = function(e) {
  console.log("[open] Connection established");
   console.log("Sending to server");
  socket.send(JSON.stringify(request));
};
socket.onmessage = function(event) {

  let jsonObj = JSON.parse(event.data);
  if(jsonObj["type"] === "l2update"){
    if(first) {
      document.getElementById("display")!.innerHTML = jsonObj["changes"][0][1].toString();
      first = false;
    }
    if(count <= 1001){
        prices.push(jsonObj["changes"][0][1]);
        count++;
  } else {
      for(let i = 0; i < count; i++){
        average += parseFloat(prices[i]);
      }
      average = average/count;
      document.getElementById("display")!.innerHTML = average.toString();
      count = 0;
      average = 0;
      prices = [];
  }
}
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