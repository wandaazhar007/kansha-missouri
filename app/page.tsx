
// import type { Metadata } from 'next'

import FaqComponent from "./components/faq/FaqComponent"
import GaleryBox from "./components/galery/GaleryBox"
import BannerHero from "./components/home/bannerHero/BannerHero"
import ContactSection from "./components/home/contactSection/ContactSection"
import Counter from "./components/home/counter/Counter"
import GoToMenu from "./components/home/goToMenu/GoToMenu"
import Reviews from "./components/home/reviews/Reviews"

export const metadata = {
  title: 'Kansha Hibachi Express - Authentic Hibachi Delights',
  description: 'Experience the art of hibachi cuisine at Kansha Hibachi Express. Indulge in sizzling grills, premium ingredients, and warm hospitality. Join us for an authentic culinary journey and unleash your taste buds with every flavorful dish.',
}

export default function Home() {
  return (
    <>
      <BannerHero />
      <GoToMenu />
      <FaqComponent />
      <Reviews />
      <GaleryBox />
      <Counter />
      <ContactSection />
    </>
  )
}
