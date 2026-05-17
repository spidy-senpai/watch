import {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Shop(){
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const base = process.env.NEXT_PUBLIC_API_BASE || ''
    fetch(base + '/api/products')
      .then(r=>r.ok?r.json():[])
      .then(data=>setProducts(Array.isArray(data)?data:[]))
      .catch(()=>{})
  },[])

  return (
    <div>
      <Header />
      <main style={{padding:40}}>
        <h1>Shop</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
          {products.length?products.map(p=> (
            <a key={p.id} href={`/products/${p.id}`} className="card">
              <div style={{height:180,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={p.image || '/placeholder.png'} alt={p.title} style={{maxWidth:'100%',maxHeight:'100%'}}/>
              </div>
              <h3>{p.title}</h3>
              <div>{p.price}</div>
            </a>
          )): (
            <div>No products found. (This is a demo — connect backend)</div>
          )}
        </div>
      </main>
      <Footer />
      <style jsx>{`.card{display:block;border:1px solid #eee;padding:12px;border-radius:6px;text-decoration:none;color:inherit}`}</style>
    </div>
  )
}
