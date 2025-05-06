import React from 'react';
import { Matrix } from 'mathjs';
import * as Gates from '../core/gate';

interface GatePosition {
  type: string; // H, X, Y, Z, I
  matrix: Matrix;
}

interface QubitLineProps {
  qubitId: number;
  gates: (GatePosition | null)[]; // Gates are stored in an array
  onAddGate: (qubitId: number, gateType: string, position: number) => void;
  onRemoveGate: (qubitId: number, position: number) => void;
}

export default function QubitLine({
  qubitId,
  gates = Array(10).fill(null), // Default to 10 positions
  onAddGate,
  onRemoveGate
}: QubitLineProps) {
  
  const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // This prevents the "not allowed" cursor
        e.stopPropagation(); // Prevent event bubbling
    };
      
  const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault(); // This is also needed
        e.stopPropagation();
    };
    
  // Handle drop event when a gate is dragged onto this qubit line
  const handleDrop = (e: React.DragEvent, position: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Log to confirm data is being received
    const gateType = e.dataTransfer.getData('gateType');
    console.log("Gate dropped:", gateType, "at position:", position);
    
    if (gateType) {
      onAddGate(qubitId, gateType, position);
    }
  };

  return (
    <div className="qubit-line">
      <div className="gate-positions">
        {gates.map((gate, position) => (
          <div 
            key={position}
            className={`gate-position ${gate ? 'has-gate' : 'empty'}`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={(e) => handleDrop(e, position)}
            onClick={() => gate && onRemoveGate(qubitId, position)}
          >
            {gate ? (
              <div className="placed-gate" style={{ 
                border: '2px solid #555',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '90%',
                fontWeight: 'bold'
              }}>
                {gate.type}
              </div>
            ) : (
              <div className="empty-slot"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
