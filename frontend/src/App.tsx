import { useEffect } from 'react';
import './App.css'
import { globalStore } from './store/global.store';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';

function App() {

  const { getUsers } = globalStore();
  const menuOpen = globalStore((state) => state.menuOpen)
  const users = globalStore((state) => state.users)

  useEffect(() => {
    getUsers()
  }, [getUsers])

  console.log("USER DESDE APP.TSX", users);
  console.log(typeof users);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Rutas Publicas */}
          <Route path="/" element={<Home menuOpen={menuOpen} users={users} />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
