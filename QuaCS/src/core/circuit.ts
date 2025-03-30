// circuit.ts
import { QuantumState } from './state.js';
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
    const state = new QuantumState("0"); // THIS MIGHT BE WRONG - COULD BE THIS.NUMQUBITS BUT IDK WHAT THAT IS
    
    for (const op of this.operations) {
      state.applyGate(op.gate);
    }

    console.log(this.numQubits)
    
    return state;
  }
}

