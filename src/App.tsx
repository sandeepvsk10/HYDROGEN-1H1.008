import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeLayout } from './Layout/HomeLayout'
import { HomePage } from './pages/Home/HomePage'

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
