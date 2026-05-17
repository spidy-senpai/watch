import {useRouter} from 'next/router'
import {useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ProductPage(){
  const router = useRouter()
  const {id} = router.query
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    if(!id) return
    const base = process.env.NEXT_PUBLIC_API_BASE || ''
    fetch(base + '/api/products/' + id)
      .then(r=>r.ok?r.json():null)
      .then(data=>setProduct(data))
      .catch(()=>{})
  },[id])

  if(!product) return (
    <div>
      <Header />
      <main style={{padding:40}}>Loading...</main>
      <Footer />
    </div>
  )

  return (
    <div>
      <Header />
      <main style={{padding:40}}>
        <div style={{display:'flex',gap:24,alignItems:'flex-start'}}>
          <div style={{width:360}}>
            <img src={product.image||'/placeholder.png'} alt={product.title} style={{width:'100%'}}/>
          </div>
          <div>
            <h1>{product.title}</h1>
            <div style={{fontSize:20,fontWeight:600}}>{product.price}</div>
            <p>{product.description || 'No description provided.'}</p>
            <button className="cta">Add to cart</button>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`.cta{margin-top:16px;padding:12px 18px;border:0;background:#111;color:#fff}`}</style>
    </div>
  )
}
