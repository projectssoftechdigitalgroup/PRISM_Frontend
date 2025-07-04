import App from '@/App'
import Recommendations from '@/mainComponents/Recommendations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/" element={<App/>} />
        <Route path="/recommendations" element={<Recommendations/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter