import React, { useState, useContext } from "react";
import { TransactionContext } from "./../contexts/transaction-context";

const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(TransactionContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			id: Math.random(),
			text: text,
			amount: amount,
		};
		addTransaction(newTransaction);
		setText("");
		setAmount(0);
	};
	return (
		<div className="add-trans">
			<h3>Add New Transaction</h3>
			<form action="">
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						placeholder="Enter the detail..."
						onChange={(e) => {
							setText(e.target.value);
						}}
						value={text}
						required
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount
						<br />
						(negative-expense, positive-income)
					</label>
					<input
						type="number"
						placeholder="Enter the amount"
						onChange={(e) => setAmount(parseFloat(e.target.value))}
						value={amount}
						required
					/>
				</div>
				<button type="submit" className="add-trans__btn" onClick={handleSubmit}>
					Add Transaction
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;
