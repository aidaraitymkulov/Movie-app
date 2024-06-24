import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './assets/styles/index.scss'
import { Header } from './component/Header';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

