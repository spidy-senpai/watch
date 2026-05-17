import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Header />
      <main style={{padding:40,maxWidth:900,margin:'0 auto'}}>
        <h1>About Ethos Watches (Demo)</h1>
        <p>This is a demo frontend scaffold. Replace content with real marketing copy.</p>
      </main>
      <Footer />
    </div>
  )
}
