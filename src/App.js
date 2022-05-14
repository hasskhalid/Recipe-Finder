import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import { FaHome } from 'react-icons/fa';

import styled from "styled-components";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Icon>
          <a href="./home/app.js"><FaHome></FaHome></a>
        </Icon>
        <h1>Recipe Finder!</h1>
        <Search />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

const Icon = styled.div`
  svg{
    position: absolute;
      top: 5%;
      left: 0%;
      font-size: 5rem;
      transform: translate(100%, -50%);
      color: white;
      background: #494949;
      border-radius: 20%;
  }
`;

export default App;
