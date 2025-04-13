// components/CircuitEditor/index.tsx

import React, { useState } from 'react';
import StateSelector from '../StateSelector';
import { QuantumState } from '../../core/state';

export default function CircuitEditor() {
  // State to track qubits and their states
  const [qubits, setQubits] = useState([
    { id: 0, state: new QuantumState("0") },
    { id: 1, state: new QuantumState("0") },
    { id: 2, state: new QuantumState("0") },
    { id: 3, state: new QuantumState("0") }
  ]);
  
  // Handle state changes from the StateSelector
  const handleStateChange = (qubitId: number, newState: string) => {
    setQubits(qubits.map(qubit => {
      if (qubit.id === qubitId) {
        return { ...qubit, state: new QuantumState(newState) };
      }
      return qubit;
    }));
    
    console.log(`Qubit ${qubitId} state changed to ${newState}`);
  };
  
  return (
    <div className="circuit-editor">
      <h2>Quantum Circuit</h2>
      
      <div className="circuit-grid">
        {qubits.map(qubit => (
          <div key={qubit.id} className="qubit-line">
            <StateSelector
              qubitId={qubit.id}
              initialState="0"
              onStateChange={handleStateChange}
            />
            <div className="qubit-label">{`q[${qubit.id}]`}</div>
            <div className="gate-positions">
              {/* put gate positions here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
