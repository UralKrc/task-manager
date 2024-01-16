import TaskManager from './views/TaskManagement'
import theme from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <TaskManager />
    </ThemeProvider>
    </>
  )
}

export default App
