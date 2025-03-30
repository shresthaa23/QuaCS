// state.ts
import { Complex } from 'mathjs';
import * as math from 'mathjs';

export class QuantumState {
  private state: math.Matrix;

  constructor(numQubits: number = 1) {
    // Initialize to |0...0⟩ state
    const size = Math.pow(2, numQubits);
    const initialState = Array(size).fill(0);
    initialState[0] = 1;
    this.state = math.matrix(initialState);
  }

  applyGate(gateMatrix: math.Matrix): void {
    // Simplified matrix multiplication (needs tensor product handling for multi-qubit)
    this.state = math.multiply(gateMatrix, this.state) as math.Matrix;
  }

  getState_complex(): Complex[] {
    return this.state.toArray() as Complex[];
  }

  getState_number(): number[] {
    return this.state.toArray().map(c => (c as Complex).re);
  }
}
