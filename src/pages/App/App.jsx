import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import SeasonalAnimePage from '../SeasonalAnimePage/SeasonalAnimePage';
import SearchPage from "../SearchPage/SearchPage";
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/anime/seasonal" element={<SeasonalAnimePage/>}/>
            <Route path="/anime/search" element={<SearchPage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
