import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PostBedroom() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-golden3 via-golden2 to-golden bg-clip-text text-transparent">Premium Bedrooms</h1>
        <img src="/project/bedroom.png" alt="Bedroom" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8" />
        <p className="text-lg text-white/80 mb-8">Experience the epitome of comfort and elegance in the premium bedrooms at The Glory Towers. Our latest post takes you on a tour of these spacious retreats, designed to offer tranquility and style. Each bedroom features large windows, plush flooring, and custom wardrobes, creating a serene environment for rest and relaxation. The post highlights the attention to detail in every aspect, from the choice of soothing color palettes to the integration of smart home technology. Residents enjoy private balconies with breathtaking views, en-suite bathrooms with luxury fittings, and ample storage space for convenience. The bedrooms are crafted to maximize natural light and ventilation, ensuring a healthy and refreshing atmosphere. Discover how The Glory Towers combines functionality with aesthetics, making every bedroom a personal haven. Whether you are starting your day or winding down at night, these premium spaces promise comfort, privacy, and a touch of opulence that elevates everyday living.</p>
      </div>
      <Footer />
    </div>
  )
}
