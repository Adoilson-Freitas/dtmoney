import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
      
    </>
  );
}

export default App;
