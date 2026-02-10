import React, { useState } from 'react';
import LandingView from './components/LandingView';
import ProposalView from './components/ProposalView';
import SuccessView from './components/SuccessView';
import CursorTrail from './components/CursorTrail';

function App() {
  const [page, setPage] = useState('landing'); // landing, proposal, success
  const [name, setName] = useState('');

  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
    setPage('proposal');
  };

  const handleAcceptance = () => {
    setPage('success');
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 cursor-none">
      <CursorTrail />
      {page === 'landing' && (
        <LandingView onContinue={handleNameSubmit} />
      )}

      {page === 'proposal' && (
        <ProposalView onYes={handleAcceptance} name={name} />
      )}

      {page === 'success' && (
        <SuccessView name={name} />
      )}
    </div>
  );
}

export default App;
