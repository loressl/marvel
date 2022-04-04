import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { RoutesApplication } from './routes'
import { CharactersProvider } from './hooks/useCharacters'

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <RoutesApplication/>
        <GlobalStyle/>
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
