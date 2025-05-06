import { useState } from 'react';
import StateSelector from './StateSelector';
import QubitLine from './QubitLine';
import { QuantumState } from '../core/state';
import * as Gates from '../core/gate';


// Helper to map gate type names to their matrix objects
const getGateMatrix = (gateType: string): Matrix => {
  switch(gateType) {
    case 'I': return Gates.I_gate;
    case 'H': return Gates.H_gate;
    case 'X': return Gates.X_gate;
    case 'Y': return Gates.Y_gate;
    case 'Z': return Gates.Z_gate;
    // Add other gates as needed
    default: return Gates.I_gate;
  }
};

export default function CircuitEditor() {
  // State to track qubits and their states
  const [qubits, setQubits] = useState([
    { id: 0, state: new QuantumState("0"), gates: Array(10).fill(null) },
    { id: 1, state: new QuantumState("0"), gates: Array(10).fill(null) },
    { id: 2, state: new QuantumState("0"), gates: Array(10).fill(null) },
    { id: 3, state: new QuantumState("0"), gates: Array(10).fill(null) }
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
  
  // Add a gate to a qubit at a specific position
  const handleAddGate = (qubitId: number, gateType: string, position: number) => {
    setQubits(qubits.map(qubit => {
      if (qubit.id === qubitId) {
        const newGates = [...qubit.gates];
        newGates[position] = { 
          type: gateType, 
          matrix: getGateMatrix(gateType) 
        };
        return { ...qubit, gates: newGates };
      }
      return qubit;
    }));
  };
  
  // Remove a gate from a position
  const handleRemoveGate = (qubitId: number, position: number) => {
    setQubits(qubits.map(qubit => {
      if (qubit.id === qubitId) {
        const newGates = [...qubit.gates];
        newGates[position] = null;
        return { ...qubit, gates: newGates };
      }
      return qubit;
    }));
  };

  return (
    <div className="circuit-editor">
      <h2>Quantum Circuit</h2>
      
      <div className="circuit-grid">
        {qubits.map(qubit => (
          <div key={qubit.id} className="qubit-container">
            <StateSelector
              qubitId={qubit.id}
              initialState="0"
              onStateChange={handleStateChange}
            />
            <div className="qubit-label">{`q[${qubit.id}]`}</div>
            <div className="gate-positions">
              {/* Empty positions to create the line */}
              {Array(10).fill(null).map((_, index) => (
                <div key={index} className="gate-position">
                  {/* Gates will go here when implemented */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
