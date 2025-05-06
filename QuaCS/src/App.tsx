// import reactLogo from './assets/react.svg'
import './App.css'

import StateSelector from './components/StateSelector';
import QubitLine from './components/QubitLine';
import GateSelector from './components/GateSelector';
import GatePlacement from './components/GatePlacement';
import CircuitEditor from './components/CircuitEditor';
import CircuitControls from './components/CircuitControls';
import ResultsPanel from './components/ResultsPanel';

function App() {
  return (
    <div className="App">
      <h1>Quantum Circuit Simulator</h1>
      <div className="container">
        <GateSelector />
        <CircuitEditor />
      </div>
    </div>
  );
}

export default App
