import React, { useContext } from "react";
import { TransactionContext } from "./../contexts/transaction-context";

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(TransactionContext);
	const sign = transaction.amount > 0 ? "+" : "-";
	return (
		<div className="transaction">
			<li className={transaction.amount > 0 ? "plus" : "minus"}>
				{transaction.text}
				<span>
					{sign}Rs {Math.abs(transaction.amount)}
				</span>
				<button
					className="delete-btn"
					onClick={() => deleteTransaction(transaction.id)}
				>
					X
				</button>
			</li>
		</div>
	);
};

export default Transaction;
