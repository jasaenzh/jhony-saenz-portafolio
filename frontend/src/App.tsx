import { useEffect } from 'react';
import './App.css'
import { globalStore } from './store/global.store';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './layout/Layout';

function App() {

  const { getUsers } = globalStore();

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Rutas Publicas */}
          <Route path="/" element={<h1>Home</h1>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
