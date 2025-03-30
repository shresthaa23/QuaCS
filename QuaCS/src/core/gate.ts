// gate.ts
import { complex, matrix, Matrix } from 'mathjs';


    export const H_gate: Matrix = matrix([
        [complex(1 / Math.sqrt(2), 0), complex(1 / Math.sqrt(2), 0)],
        [complex(1 / Math.sqrt(2), 0), complex(-1 / Math.sqrt(2), 0)]
    ]);
    
    export const X_gate: Matrix = matrix([
        [complex(0, 0), complex(1, 0)],
        [complex(1, 0), complex(0, 0)]
    ]);
    
 
    export const Y_gate: Matrix = matrix ([
    [complex(0, 0), complex(0, -1)],  // -i
    [complex(0, 1), complex(0, 0)]    // i
    ]);
  
  export const Z_gate: Matrix = matrix ([
    [complex(1, 0), complex(0, 0)],
    [complex(0, 0), complex(-1, 0)]
  ]);
  
  export const CNOT_gate: Matrix = matrix ([
    [complex(1, 0), complex(0, 0), complex(0, 0), complex(0, 0)],
    [complex(0, 0), complex(1, 0), complex(0, 0), complex(0, 0)],
    [complex(0, 0), complex(0, 0), complex(0, 0), complex(1, 0)],
    [complex(0, 0), complex(0, 0), complex(1, 0), complex(0, 0)]
  ]);
  