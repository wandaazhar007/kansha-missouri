import '../public/css/all.min.css'
import '../public/css/animate.css'
import '../public/css/bootstrap.min.css'
import '../public/css/nice-select.css'
import '../public/css/responsive.css'
import '../public/css/slick.css'
import '../public/css/spacing.css'
import '../public/css/style.css'
import '../public/css/style2.css'
import '../public/css/cart.css'
import '../public/css/terms-conditions.css'
import '../public/css/login.css'
import '../public/css/responsive2.css'
import '../public/css/venobox.min.css'
// import { Inter } from 'next/font/google'
import Topbar from './components/topbar/Topbar'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
// import CartProvider from './context/CartContext'
import SearchProvider from './context/SearchContext'
import Script from 'next/script'
import GoogleAnalytics from './components/GoogleAnalytics'

// const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Script id="gtm-script" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KN442N46');
        `}
      </Script>
      <GoogleAnalytics GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      {/* <CartProvider> */}
      <SearchProvider>
        {/* <body className={inter.className}> */}
        <body >
          <Topbar />
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <Footer />

          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN442N46"
              height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
        </body>
      </SearchProvider>
      {/* </CartProvider> */}
    </html>
  )
}
