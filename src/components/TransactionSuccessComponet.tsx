import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Principal } from "../models/Principal";
import { WalletResponse } from "../models/WalletResponse";

function TransactionSuccessComponent() {

    let [redirectNow, setRedirectNow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirectNow(true);
        },2000)
    })
    return (<>
            {redirectNow && <Navigate to="/wallet"/>}
            <h1>Your transaction was successful!</h1>
        </>

    )
}

export default TransactionSuccessComponent;