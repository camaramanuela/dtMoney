import { useState } from "react";
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'

import { GlobalStyle } from './styles/global'


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
    <>
      <Modal 
          isOpen={isModalNewTransactionOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <Header onModalOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}