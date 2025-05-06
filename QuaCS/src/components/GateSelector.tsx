// components/GateSelector.tsx
import React from 'react';


const gates = [
  { type: 'H', label: 'H' },
  { type: 'X', label: 'X' },
  { type: 'Y', label: 'Y' },
  { type: 'Z', label: 'Z' },
  { type: 'I', label: 'I' },
];

export default function GateSelector({ onGateSelected }) {
  return (
    <div className="gate-selector-panel">
      <h3>Gates</h3>
      <div className="gate-grid">
      {gates.map(gate => (
        <div
            key={gate.type} 
            draggable
            onDragStart={(e) => {
            console.log("Starting drag with gate:", gate.type);
            e.dataTransfer.setData('gateType', gate.type);
            }}
        >
            {gate.label}
        </div>
        ))}
      </div>
    </div>
  );
}
