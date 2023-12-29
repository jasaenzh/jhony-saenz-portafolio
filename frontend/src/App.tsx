import { useEffect } from 'react';
import './App.css'
import { globalStore } from './store/global.store';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { ProtectedRoute } from './ProtectedRoutes';
import { Panel } from './pages/Panel';
import { Login } from './pages/Login';

function App() {

  const { getUsers, checkLogin } = globalStore();
  const menuOpen = globalStore((state) => state.menuOpen)
  const users = globalStore((state) => state.users)
  const { isAuthenticated } = globalStore()

  useEffect(() => {
    if (!isAuthenticated) {
      getUsers()
    }
    checkLogin()
  }, [getUsers, checkLogin, isAuthenticated])

  console.log("Usuarios desde App.tsx", users);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Rutas Publicas */}
          <Route path="/" element={<Home menuOpen={menuOpen} users={users} />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas Privadas */}
          <Route element={<ProtectedRoute />} >
            <Route path='/panel' element={< Panel />} />
          </Route>

          {/* Ruta 404 - No Encontrada   */}
          <Route path="/*" element={<div>404 Ruta no valida</div>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
