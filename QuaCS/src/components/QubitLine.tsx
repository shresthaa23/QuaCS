import React from 'react';
// import GatePlacement from './GatePlacement';

interface QubitLineProps {
  qubit: {
    id: number;
    name: string;
    initialState: string;
    gates: string[];
  };
  onGateDrop: (qubitId: number, gateType: string, position: number) => void;
  onRemove: () => void;
}

export default function QubitLine({ qubit, onGateDrop, onRemove }: QubitLineProps) {
  // Create an array of 10 positions for gates
  const positions = Array(10).fill(null);
  
  return (
    <div className="qubit-line">
      <div className="qubit-label">{qubit.name}</div>
      
      <div className="gate-positions">
        {positions.map((_, index) => (
          <div 
            key={index}
            className="gate-position"
            onDrop={(e) => {
              e.preventDefault();
              const gateType = e.dataTransfer.getData('gate');
              onGateDrop(qubit.id, gateType, index);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            {qubit.gates[index] && (
              <GatePlacement 
                gateType={qubit.gates[index]} 
                position={index}
              />
            )}
          </div>
        ))}
      </div>
      
      <button className="remove-qubit" onClick={onRemove}>×</button>
    </div>
  );
}
