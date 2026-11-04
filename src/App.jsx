import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PostShowcase from './pages/PostShowcase'
import PostClubhouse from './pages/PostClubhouse'
import PostBedroom from './pages/PostBedroom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post-showcase" element={<PostShowcase />} />
      <Route path="/post-clubhouse" element={<PostClubhouse />} />
      <Route path="/post-bedroom" element={<PostBedroom />} />
    </Routes>
  )
}
