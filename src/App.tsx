import TaskManager from './views/TaskManager'
import theme from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { TaskProvider } from './contexts/TaskContext';
function App() {

  return (
    <>
      <TaskProvider>
        <ThemeProvider theme={theme}>
          <TaskManager />
        </ThemeProvider>
      </TaskProvider>
    </>
  )
}

export default App
