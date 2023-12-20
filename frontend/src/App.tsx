import { useEffect } from 'react';
import './App.css'
import { globalStore } from './store/global.store';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';

function App() {

  const { getUsers } = globalStore();
  const menuOpen = globalStore((state) => state.menuOpen)

  console.log("MENU OPEN APP.TSX", menuOpen);

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <BrowserRouter>
      <Layout menuOpen={menuOpen}>
        <Routes>

          {/* Rutas Publicas */}
          <Route path="/" element={<Home menuOpen={menuOpen} />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
