import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <Header />
      <main style={{padding:40,maxWidth:720,margin:'0 auto'}}>
        <h1>Contact</h1>
        <p>Email: info@example.com</p>
        <p>Phone: +1 555 555 555</p>
      </main>
      <Footer />
    </div>
  )
}
