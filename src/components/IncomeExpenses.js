import React, { useContext } from "react";
import { TransactionContext } from "./../contexts/transaction-context";

const IncomeExpenses = () => {
	const { transactions } = useContext(TransactionContext);

	const amounts = transactions.map((transaction) => transaction.amount);
	const income = amounts
		.filter((amount) => amount > 0)
		.reduce((total, amount) => total + amount, 0)
		.toFixed(2);

	const expense = amounts
		.filter((amount) => amount < 0)
		.reduce((total, amount) => total + amount, 0)
		.toFixed(2);
	return (
		<div className="inc-exp">
			<div className="inc__container">
				<h4>Income</h4>
				<p className="inc__money">+{income} Rs</p>
			</div>
			<div className="exp__container">
				<h4>Expense</h4>
				<p className="exp__money">{expense} Rs</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
