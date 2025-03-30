import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { QuantumState }  from '../core/state.js';
import { I_gate, X_gate, Y_gate, Z_gate, H_gate } from '../core/gate.js';
// import { Complex } from 'mathjs';


// npx tsc --project tsconfig.build.json
// node dist/command_line/cli.js

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

async function main() {
  try {
    while (true) {
      const init_state = await rl.question('What quatum state do you want to select (Select between 0, 1, H, V, +, or -)? ');
      console.log(`The initual quantum state is, |${init_state}⟩!`);
      const q = new QuantumState(init_state);
  
      const init_gate = await rl.question('What gate do you want to apply (Select between I, X, Y, Z, or H)? ');
      if (init_gate == 'I') {
        q.applyGate(I_gate);      
      } else if (init_gate == 'X') {
        q.applyGate(X_gate);
      } else if (init_gate == 'Y') {
        q.applyGate(Y_gate);
      } else if (init_gate == 'Z') {
        q.applyGate(Z_gate);
      } else if (init_gate == 'H') {
        q.applyGate(H_gate);
      } else {
        console.log("wrong number bozo")
        // throw new Error(`Invalid initial state: ${init_gate}. Valid options are I, X, Y, Z, H`);
      }
      const alpha = q.getState_complex()[0];
      const beta = q.getState_complex()[1];
      console.log(`The output quantum state is: [${alpha.toString()}, ${beta.toString()}]`);
      console.log('Lets do it again!')

    }
  } finally {
    rl.close();
  }
}

main();

