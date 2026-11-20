import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PostShowcase() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent">Project Showcase</h1>
        <img src="/project/showcase.png" alt="Showcase" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8" />
        <p className="text-lg text-white/80 mb-8">The Glory Towers stands as a beacon of luxury and innovation in the heart of Zirakpur. Our latest showcase post delves into the architectural brilliance and thoughtful design that make this project truly unique. From the grand entrance to the meticulously landscaped gardens, every detail has been crafted to offer residents an unparalleled living experience. The showcase highlights the use of premium materials, state-of-the-art amenities, and sustainable building practices that set The Glory Towers apart. Residents enjoy spacious interiors flooded with natural light, panoramic city views, and access to exclusive facilities such as the clubhouse, gym, and swimming pool. The post also explores the vibrant community atmosphere, where neighbors become friends and every day feels like a celebration. Discover how The Glory Towers redefines modern living, blending comfort, style, and convenience in a way that exceeds expectations. Whether you are seeking a new home or an investment opportunity, this showcase provides a comprehensive look at what makes our project the premier choice in the region.</p>
      </div>
      <Footer />
    </div>
  )
}
