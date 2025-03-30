// circuit.ts
import { QuantumState } from './state';
import * as math from 'mathjs';

type GateOperation = {
  gate: math.Matrix;
  qubitIndex: number;
};

export class QuantumCircuit {
  private operations: GateOperation[] = [];
  
  constructor(private numQubits: number) {}

  applyGate(gate: math.Matrix, qubitIndex: number): void {
    this.operations.push({ gate, qubitIndex });
  }

  runSimulation(): QuantumState {
    const state = new QuantumState(this.numQubits);
    
    for (const op of this.operations) {
      state.applyGate(op.gate);
    }
    
    return state;
  }
}

