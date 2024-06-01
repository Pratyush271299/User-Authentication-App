import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
