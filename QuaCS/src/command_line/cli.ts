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

/*///////shreddy
import * as readline from 'readline';


export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Set up the readline interface for interactive input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their name and greet them
rl.question('What is your name? ', (answer: string) => {
  console.log(greet(answer));
  rl.close();
});
*/



// const STATE_MAP: { [key: string]: math.Matrix } = {
//   '0': math.matrix([[1], [0]]),
//   '1': math.matrix([[0], [1]]),
//   'H': math.matrix([[1/Math.sqrt(2)], [1/Math.sqrt(2)]]),
//   'V': math.matrix([[1/Math.sqrt(2)], [-1/Math.sqrt(2)]])
// };

// async function runCLI() {
//   // 1. Initial state selection
//   const { initialState } = await inquirer.prompt({
//     type: 'list',
//     name: 'initialState',
//     message: 'Choose initial qubit state:',
//     choices: ['0 (|0⟩)', '1 (|1⟩)', 'H (Hadamard)', 'V (Vertical)'],
//     filter: (val: string) => val[0] // Extract first character
//   });

//   // 2. Create initial state
//   const qubit = new QuantumState();
//   qubit.state = STATE_MAP[initialState]; // Override default state

//   // 3. Gate selection
//   const { gate } = await inquirer.prompt({
//     type: 'list',
//     name: 'gate',
//     message: 'Choose gate to apply:',
//     choices: [
//       { name: 'Identity (No operation)', value: 'I' },
//       { name: 'Pauli-X (Bit Flip)', value: 'X' },
//       { name: 'Pauli-Y (Complex Flip)', value: 'Y' },
//       { name: 'Pauli-Z (Phase Flip)', value: 'Z' },
//       { name: 'Hadamard (Superposition)', value: 'H' }
//     ]
//   });

//   // 4. Apply selected gate
//   const gates = { H: H_gate, X: X_gate, Y: Y_gate, Z: Z_gate };
//   if (gate !== 'I') {
//     qubit.applyGate(gates[gate as keyof typeof gates]);
//   }

//   // 5. Display results
//   const finalState = qubit.getState().map(c => 
//     math.format(c, { precision: 3, notation: 'fixed' })
//   );
  
//   console.log('\nFinal Quantum State:');
//   console.log(`|ψ⟩ = ${finalState[0]} |0⟩ + ${finalState[1]} |1⟩`);
// }

// runCLI().catch(console.error);
