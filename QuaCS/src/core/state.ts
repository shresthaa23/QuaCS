// state.ts hi noah 
import { Complex } from 'mathjs';
import * as math from 'mathjs';

export class QuantumState {
  private state: math.Matrix;

  constructor(initState: string) { 
    let initialState: Complex[] = [math.complex(0, 0), math.complex(0, 0)];
    const sqrt2 = Math.sqrt(2);


    if (initState === "0" || initState === "H") { // |0⟩
      initialState = [math.complex(1, 0), math.complex(0, 0)];
    } else if (initState === "1" || initState === "V") { // |1⟩
      initialState = [math.complex(0, 0), math.complex(1, 0)];
    } else if (initState === "i" || initState === "L") { // |i⟩ 
      initialState = [
        math.complex(1/sqrt2, 0),
        math.complex(0, 1/sqrt2)
      ];
    } else if (initState === "-i" || initState === "R") { // |-i⟩ 
      initialState = [
        math.complex(1/sqrt2, 0),
        math.complex(0, -1/sqrt2)
      ];
    } else if (initState === "+" || initState === "D") { // |+⟩
      const val = math.complex(1/sqrt2, 0);
      initialState = [val, val];
    } else if (initState === "-" || initState === "A") { // |−⟩
      const val = math.complex(1/sqrt2, 0);
      initialState = [val, math.complex(-val.re, val.im)];
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
