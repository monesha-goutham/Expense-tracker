import React, { useContext } from "react";
import { TransactionContext } from "./../contexts/transaction-context";
import Transaction from "./Transaction";

const TransactionList = () => {
	const { transactions } = useContext(TransactionContext);

	return (
		<div className="transaction">
			<h3>History</h3>
			<ul className="list__container">
				{transactions.map((transaction) => (
					<Transaction transaction={transaction} id={transaction.id} />
				))}
			</ul>
		</div>
	);
};

export default TransactionList;
