import React, { SyntheticEvent, useState, useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

import {Principal} from '../models/Principal';
import { authenticate } from '../remote/auth-service';
import { CreateTransactionRequest } from '../models/CreateTransactionRequest';
import { submitPurchase, submitSale } from '../remote/transaction-service';
import { getCoinPairs } from '../remote/coin-pair-service';

    /**
     * 1) BUY/SELL  toggle switch or dropdown
     * 2) COIN PAIR text field
     * 3) AMOUNT    text field
     * 4) SUBMIT    button
     */

export function TransactionComponent() {
    let [coinPair, setCoinPair] = useState('');
    let [amount, setAmount] = useState(0);
    let [coinPairList, setCoinPairList] = useState([] as string[]);

    let [invalidCoinPair, displayInvalidCoinPair] = useState(false);
    let [invalidAmount, displayInvalidAmount] = useState(false);

    //--------------------------------//

    let updateCoinPair = (e: SyntheticEvent) => {
        setCoinPair((e.target as HTMLInputElement).value);
    }

    let updateAmount = (e: SyntheticEvent) => {
        setAmount(Number((e.target as HTMLInputElement).value));
    }

    useEffect( () => {
        getCoinPairs().then(response => {
            setCoinPairList(response.data);
        });
    }, []);

    //--------------------------------//

    function checkCoinPairValidity() {
        // Huh... this might be tough
        // We'll probably just ignore this part during typing,
        //   then return an error if the transaction fails.
    }

    function checkAmountValidity() {
        if (Number(amount) < 0 || Number.isNaN(amount)) {
            displayInvalidAmount(true);
        } else {
            displayInvalidAmount(false);
        }
    }

    //--------------------------------//

    function sendTransactionRequest() {
        if(!invalidCoinPair && !invalidAmount) {
            let reqBody: CreateTransactionRequest = new CreateTransactionRequest(coinPair, amount);

            let selectedOption = document.querySelector("input[type='radio']:checked")
            if (selectedOption?.id === 'buy-radio') {
                submitPurchase(reqBody).then(bool => {

                })
            } else if (selectedOption?.id === 'sell-radio') {
                submitSale(reqBody).then(bool => {
                    
                })
            }
        }
    }

    return (<>
        <Container>

            <h4>You tryna trade some coin?</h4>
            {/* TODO - Toggle between BUY and SELL */}
            <div key={`default-radio`} className="mb-3">
                <Form.Check 
                    type="radio"
                    id={`buy-radio`}
                    label={`BUY`}
                    name="transaction-mode"
                />
                <Form.Check 
                    type="radio"
                    id={`sell-radio`}
                    label={`SELL`}
                    name="transaction-mode"
                />
            </div>

            {/* <Form.Group>
                <Form.Label className="mb-3" id="coinPairField">Coin Pair:</Form.Label>
                <Form.Control type="text" placeholder="BTC-USD" onChange={updateCoinPair} onBlur={checkCoinPairValidity}/> 
            </Form.Group> */}

            <input list="currPairs" name="currPair" onChange={updateCoinPair} />
                <datalist id="currPairs">
                    {
                        coinPairList.map(pair => 
                            <option value={pair} key={pair} />
                        )
                    }
                </datalist>
            {invalidCoinPair && <div className="alert alert-danger" id="invalidCoinPairAlert">Coin Pair is invalid!</div>}
            
            <Form.Group>
                <Form.Label className="mb-3" id="amountField">Amount of Coin:</Form.Label>
                <Form.Control type="number" placeholder="100" onChange={updateAmount} onBlur={checkAmountValidity}/> 
            </Form.Group>
            {invalidAmount && <div className="alert alert-danger" id="invalidAmountAlert">Amount must be a number greater than 0!</div>}

            <Button variant="primary" type="submit" onClick={sendTransactionRequest}>Submit Transaction</Button>

        </Container>
    
    </>);
}