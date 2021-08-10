import { useState } from "react";
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isModalNewTransactionOpen, setIsModalNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsModalNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsModalNewTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onModalOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isModalNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}