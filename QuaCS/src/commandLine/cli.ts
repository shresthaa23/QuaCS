import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { QuantumState }  from '../core/state.js';
import { I_gate, X_gate, Y_gate, Z_gate, H_gate } from '../core/gate.js';
import { Matrix } from 'mathjs';

// npx tsc --project tsconfig.build.json
// node dist/command_line/cli.js

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

async function main() {
  try {
    while (true) {

      const gateMap: Record<string, Matrix> = {
        I: I_gate,
        X: X_gate,
        Y: Y_gate,
        Z: Z_gate,
        H: H_gate,
      };

      const init_state = await rl.question('What quatum state do you want to select (Select between 0, 1, H, V, +, or -)? ');
      console.log(`The initual quantum state is, |${init_state}⟩!`);
      const q = new QuantumState(init_state);  

      const init_gate = await rl.question('What gate do you want to apply (Select between I, X, Y, Z, or H)? ');
      const selectedGate: Matrix | undefined = gateMap[init_gate];
      if (!selectedGate) {
        console.log("wrong gate bozo you ruined it all restart from scratch")
      }
      q.applyGate(selectedGate)

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

