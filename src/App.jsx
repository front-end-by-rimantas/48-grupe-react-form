import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FirstTry } from "./components/FirstTry";
import { Basketball } from "./components/basketball/Basketball";
import { List } from "./components/list/List";
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<FirstTry />} />
        <Route path='/basketball' element={<Basketball />} />
        <Route path='/list' element={<List />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
