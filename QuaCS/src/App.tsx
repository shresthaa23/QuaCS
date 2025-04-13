import reactLogo from './assets/react.svg'
import './App.css'

// Import components:
import StateSelector from './components/StateSelector';
import GateSelector from './components/GateSelector';
import CircuitEditor from './components/CircuitEditor';
import ResultsPanel from './components/ResultsPanel';

function App() {
  return (
    <div className="App">
      <h1>Quantum Circuit Simulator</h1>
      <div className="container">
        <StateSelector />
        <GateSelector />
        <CircuitEditor />
        <ResultsPanel />
      </div>
    </div>
  );
}

export default App
