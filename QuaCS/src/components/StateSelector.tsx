import React, { useState } from 'react';
// import { QuantumState } from '../../core/state';    

interface StateSelectorProps {
    qubitId: number;
    initialState: string;
    onStateChange: (qubitId: number, newState: string) => void;
}

export default function StateSelector({ qubitId, initialState = "0", onStateChange }: StateSelectorProps) {
    const [selectedState, setSelectedState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newState = e.target.value;
        setSelectedState(newState);
        onStateChange(qubitId, newState);
    };

    return (
        <div className="state-selector">
          <select 
            value={selectedState}
            onChange={handleChange}
            className="state-dropdown"
          >
            <option value="0">|0⟩</option>
            <option value="1">|1⟩</option>
            <option value="+">|+⟩</option>
            <option value="-">|-⟩</option>
            <option value="i">|i⟩</option>
            <option value="-i">|-i⟩</option>
          </select>
        </div>
    );  
}