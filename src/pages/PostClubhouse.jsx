import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PostClubhouse() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent">Clubhouse Reveal</h1>
        <img src="/project/clubhouse.png" alt="Clubhouse" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8" />
        <p className="text-lg text-black/80 mb-8">Step inside the world-class clubhouse at The Glory Towers, where luxury and leisure converge. Our latest post reveals the stunning interiors, featuring elegant lounges, a modern fitness center, and dedicated spaces for social gatherings. The clubhouse is designed to be the heart of the community, offering residents a place to relax, connect, and unwind. With its contemporary décor, ambient lighting, and panoramic views, the clubhouse sets a new standard for residential amenities. The post details the array of activities available, from yoga sessions and game nights to exclusive events hosted for residents. The clubhouse also includes a café, library, and children’s play area, ensuring there is something for everyone. Safety and comfort are paramount, with secure access and attentive staff always on hand. Discover how the clubhouse at The Glory Towers enhances the lifestyle of its residents, providing a sanctuary of comfort and sophistication just steps from home.</p>
      </div>
      <Footer />
    </div>
  )
}
