import React from "react";

import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import TransactionProvider from "./contexts/transaction-context";

function App() {
	return (
		<TransactionProvider>
			<div className="app">
				<div className="app__container">
					<div className="app__header">
						<Header />
					</div>

					<div className="app__calculator">
						<Balance />
						<IncomeExpenses />
						<TransactionList />
						<AddTransaction />
					</div>
				</div>
			</div>
		</TransactionProvider>
	);
}

export default App;
