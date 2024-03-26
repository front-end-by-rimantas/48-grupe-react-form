import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FirstTry } from "./components/FirstTry";
import { Basketball } from "./components/basketball/Basketball";
import { List } from "./components/list/List";
import { NotFound } from './components/NotFound';
import { BasicLayout } from './layout/BasicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<FirstTry />} />
          <Route path='/basketball' element={<Basketball />} />
          <Route path='/list' element={<List />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
