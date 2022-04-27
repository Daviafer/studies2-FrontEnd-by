import './App.css';
import { Card } from './components/card/card';
import { ThemeToggleButton } from './components/theme-toggle-button/theme-toggle-button';
import { ThemeProvider } from './context/theme-context';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton> </ThemeToggleButton>
      <Card></Card>
    </ThemeProvider>
  );
}

export default App;
