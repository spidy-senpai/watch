import Header from '../components/Header'
import Footer from '../components/Footer'
import {useEffect,useState} from 'react'

export default function Cart(){
  const [items,setItems] = useState([])
  useEffect(()=>{
    try{ const raw = localStorage.getItem('cart'); setItems(raw?JSON.parse(raw):[]) }catch(e){}
  },[])

  return (
    <div>
      <Header />
      <main style={{padding:40}}>
        <h1>Cart</h1>
        {items.length? (
          <div>
            {items.map(it=> <div key={it.id}>{it.title} — {it.price}</div>)}
            <a href="/checkout"><button style={{marginTop:12}}>Checkout</button></a>
          </div>
        ) : (<div>Your cart is empty.</div>)}
      </main>
      <Footer />
    </div>
  )
}
