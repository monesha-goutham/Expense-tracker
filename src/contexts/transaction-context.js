import React, { createContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

// create context
export const TransactionContext = createContext();

// set initial state
const initialState = {
	transactions: [
		{ id: 1, text: "salary", amount: 10000 },
		{ id: 2, text: "shopping", amount: -3000 },
		{ id: 3, text: "gift", amount: 2000 },
	],
};
// create provider
const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, initialState);

	const deleteTransaction = (id) => {
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	};

	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	};
	return (
		<TransactionContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};

export default TransactionProvider;
