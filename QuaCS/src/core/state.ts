// state.ts hi noah 
import { Complex } from 'mathjs';
import * as math from 'mathjs';

export class QuantumState {
  private state: math.Matrix;

  constructor(initState: string) { 
    const initialState = Array(2)

    if (initState == "0") { // |0⟩ state
      initialState[0] = 1;
      initialState[1] = 0;
    } else if (initState == "1") { // |1⟩  state
      initialState[0] = 0;
      initialState[1] = 1;
    } else if (initState == "H") { // |H⟩ state
      initialState[0] = 0;
      initialState[1] = 1;
    } else if (initState == "V") { // |V⟩ state
      initialState[0] = 0;
      initialState[1] = 1;
    } else if (initState == "+") { // |+⟩ state
      initialState[0] = 1 / Math.sqrt(2);
      initialState[1] = 1 / Math.sqrt(2);
    } else if (initState == "-") { // |-⟩ state 
      initialState[0] = 1 / Math.sqrt(2);
      initialState[1] = -1 / Math.sqrt(2);
    } else {
      console.log("wrong number bozo")
      // throw new Error(`Invalid initial state: ${initState}. Valid options are 0, 1, H, V, +, -`);
    }
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
//hello cro 💔🤖👁️🔊📣🦅🤢😭✅