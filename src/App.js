import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Please Search a Meal!</h1>
        <Search />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
