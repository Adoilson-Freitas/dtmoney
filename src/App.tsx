import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionMidalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMidalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionMidalOpen(false)
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      <Dashboard />
      
    </>
  );
}

export default App;
