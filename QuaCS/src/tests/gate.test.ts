
import { QuantumState } from '../core/state.js';
import { X_gate, H_gate } from '../core/gate.js';
import * as math from 'mathjs';

test('Hadamard gate', () => {
  console.log('testing H gate');
  const q = new QuantumState("0");
  q.applyGate(H_gate);
  expect(math.equal(q.getState_number()[0], 1 / Math.sqrt(2))).toBeTruthy();
});

test('X gate', () => {
  console.log('testing X gate');
  const q = new QuantumState("0");
  q.applyGate(X_gate);
  // Note: Check your assertion - X gate should flip |0⟩ to |1⟩
  expect(math.equal(q.getState_number()[1], 1)).toBeTruthy();
});

test('getState function', () => {
  console.log('testing getState func');
  const q = new QuantumState("0"); // State: [1, 0]
  q.applyGate(H_gate); // State becomes [≈0.707, ≈0.707]
  console.log(q.getState_number())
  expect(q.getState_number()[0]).toBeCloseTo(1 / Math.sqrt(2));
  expect(q.getState_number()[1]).toBeCloseTo(1 / Math.sqrt(2));
});
