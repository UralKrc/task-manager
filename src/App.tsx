import TagManager from './views/TagManager'
import theme from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <TagManager />
    </ThemeProvider>
    </>
  )
}

export default App
