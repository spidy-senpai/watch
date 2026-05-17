import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>Curated Luxury Watches</h1>
            <p>Limited editions, responsibly sourced.</p>
            <a href="/shop"><button className="cta">Shop Collection</button></a>
          </div>
        </section>

        <section className="products">
          <h2 style={{paddingLeft:40}}>Featured</h2>
          <div style={{padding:40,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:20}}>
            <a className="card" href="/shop/" style={{textDecoration:'none',color:'inherit'}}>
              <div className="img"><img src="/placeholder.png" alt="Heritage Silver" /></div>
              <h3>Heritage Silver</h3>
              <div className="price">$1,250</div>
            </a>
            <a className="card" href="/shop/" style={{textDecoration:'none',color:'inherit'}}>
              <div className="img"><img src="/placeholder.png" alt="Aviator Black" /></div>
              <h3>Aviator Black</h3>
              <div className="price">$980</div>
            </a>
            <a className="card" href="/shop/" style={{textDecoration:'none',color:'inherit'}}>
              <div className="img"><img src="/placeholder.png" alt="Ocean Blue" /></div>
              <h3>Ocean Blue</h3>
              <div className="price">$1,100</div>
            </a>
            <a className="card" href="/shop/" style={{textDecoration:'none',color:'inherit'}}>
              <div className="img"><img src="/placeholder.png" alt="Classic Gold" /></div>
              <h3>Classic Gold</h3>
              <div className="price">$1,450</div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .hero{background:#f5f5f5;padding:80px 20px;text-align:center}
        .hero-inner h1{font-size:40px;margin:0 0 10px}
        .cta{margin-top:16px;padding:12px 20px;border:0;background:#111;color:#fff}
        .card{border:1px solid #eee;padding:12px;border-radius:6px;text-align:center}
        .card .img{height:180px;display:flex;align-items:center;justify-content:center}
        .card img{max-width:100%;max-height:100%}
      `}</style>
    </div>
  )
}
