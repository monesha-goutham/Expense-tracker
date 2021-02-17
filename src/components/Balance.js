import React, { useContext } from "react";
import { TransactionContext } from "./../contexts/transaction-context";

const Balance = () => {
	const { transactions } = useContext(TransactionContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const balance = amounts
		.reduce((total, amount) => total + amount, 0)
		.toFixed(2);
	// toFixed converts the balance into a double digit
	return (
		<div className="balance">
			<h4>Your Balance</h4>
			<h1 className="balance__amount">{balance} Rs</h1>
		</div>
	);
};

export default Balance;
