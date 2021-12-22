// import { stringify } from 'querystring';
// import '../App.css';
// import { useEffect, useState } from 'react';
// import { json } from 'stream/consumers';
// import { getWallet } from '../remote/get-wallet-service';
// import { WalletRequest } from '../models/WalletRequest';

// interface IWalletProps{
//     currWallet: WalletRequest | undefined,
//     setCurrWallet: (nextWallet: WalletRequest | undefined) => void
// }

// function PriceComponent(props:IWalletProps) {
    
//     let [walletList, updateWalletList] = useState([]);

//     // let pairs:string[] = ['BTC-USD', 'USDT-USD', 'SHIB-USD', 'ADA-USD', 'RGT-USD', 'DOGE-USD']; 
//     // let amounts:number[] = [0.001, 200, 4000000, 300, 15, 1000];
//     let numIterations:number = 1500;


//     useEffect( () => {
        
//         //reqParamQuery('leaderboard/league=', "d").then((players) => {
//             getWallet(props.currWallet).then((wallets)=> {
//             if(walletList.length == 0) updateWalletList(wallets);
//             console.log(wallets);
//         });
       
//     }, []);

//     let pairs:string[] = [];
//     let amounts:number[] = [];

//     // for(let i in walletList){
//     //     pairs.push(i);
//     //     amounts.push(i);
//     // }



//     let socket = new WebSocket("wss://ws-feed.exchange.coinbase.com/");


//     let request: {type: string, 
//                 product_ids: string[],
//                 channels: (string|{
//                     name: string,
//                     product_ids: string[]
//                 })[]} = {
//         "type": "subscribe",
//         "product_ids": [
//             //currency pairs are inserted here
//         ],
//         "channels": [
//             "level2",
//             "heartbeat"
//         ]
//     };

//     let response: {pair: string, price: number}[] = [];

//     let heartbeat: {name:string, product_ids:string[]} = {
//         "name": "ticker",
//         "product_ids": [
//             //"ETH-USD"
//         ]
//     }

//     heartbeat.product_ids = pairs; 
//     request.product_ids = pairs; 
//     request.channels.push(heartbeat);
//     let prices:number[] = []; 
//     let averages:number[] = [];
//     let sums:number[] = [];
//     let counts:number[] = [];
//     let firsts:boolean[] = [];

//     for(let i = 0; i < pairs.length; i++){
//         averages[i] = 0;
//         counts[i] = 0;
//         sums[i] = 0;
//         firsts[i] = true;
//     }

//     socket.onopen = function(e) {
//         console.log("[open] Connection established");
//         console.log("Sending to server");
//         socket.send(JSON.stringify(request));
//     };

//     socket.onmessage = function(event) {
//         let jsonObj = JSON.parse(event.data);
//         getAvgPrices(jsonObj);

//     };

//     socket.onclose = function(event) {
//     if (event.wasClean) {
//         console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//     } else {
//         console.log('[close] Connection died');
//     }
//     };
//     socket.onerror = function(error) {
//         console.log(`[error] ${error}`);
//     };

//     function getAvgPrices (jsonObj: any) {
//         if(jsonObj["type"] === "l2update"){
//             for(let i = 0; i < pairs.length; i++){
//                 if(jsonObj["product_id"]===pairs[i]){
//                     prices[i] = parseFloat(jsonObj["changes"][0][1]);
//                 }
//                  else if(counts[i]>numIterations || firsts[i]){

//                     if(firsts[i]){
//                         sums[i] = prices[i];
//                         counts[i] = 1;
//                     }
//                     averages[i] = sums[i]/counts[i];
//                     if(!isNaN(averages[i])){
//                         firsts[i] = false;
//                         let num = averages[i] * amounts[i];//calculate how much league user has
//                         averages[i] = Math.round((num+Number.EPSILON)*100)/100;//round to hundrendth decimal place
//                         //response.push({pair:pairs[i], price: averages[i]})
//                         document.getElementById("display")!.innerHTML = pairs[0] + ": $"+averages[0].toString();//response[2].price.toString();
//                         for(let k = 1; k < pairs.length; k++){
//                             const para = document.createElement("p");//!.innerHTML = averages[1].toString();
//                             const node = document.createTextNode(pairs[k]+": $"+averages[k].toString());
//                             para.append(node);
//                             const element = document.getElementById("display");
//                             element?.appendChild(para);
//                         }
                        
//                     }
//                      counts[i] = 0;
//                      sums[i] = 0;
//                      //averages[i] = 0;
//                 }
//                 else {
//                     sums[i] += prices[i]; 
//                     counts[i]++;        
//                 }
//             }
//         }

//         return response;
//     }


//     // return (<>
//     //     <h1><u>THICC WALLETS</u></h1>

//     //     <table className="table table-striped table-bordered">
//     //         <thead>
//     //             <tr>
//     //                 <th>Name</th>
//     //                 <th>Balance</th>
//     //              </tr>
//     //         </thead>
//     //         <tbody>
//     //             {playerList && playerList.map(player =>
                    
//     //                 <tr key={player['username']}>
//     //                     <td><Link to={player['username']}> {player['username']}</Link></td>
//     //                     <td>{player['balance']}</td>
//     //                     {/* <td><Link to={league['leagueName']}> Join </Link></td> */}
//     //                     {console.log(player)}
//     //                 </tr>
                    
//     //                 )}
//     //         </tbody>
//     //     </table>
//     // </>)
    


//     return (
//         <div className="App">
//             <h3>Coins in Wallet:</h3>
//             <div id="display"></div>
//         </div>
//         );
// }    

export default {};
    
