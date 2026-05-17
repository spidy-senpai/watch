import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Checkout(){
  return (
    <div>
      <Header />
      <main style={{padding:40,maxWidth:720,margin:'0 auto'}}>
        <h1>Checkout</h1>
        <form onSubmit={(e)=>{e.preventDefault();alert('Send order to backend at /api/orders')}}>
          <label>Name</label>
          <input required style={{display:'block',width:'100%',padding:8,margin:'8px 0 12px'}}/>
          <label>Address</label>
          <input required style={{display:'block',width:'100%',padding:8,margin:'8px 0 12px'}}/>
          <label>Email</label>
          <input type="email" required style={{display:'block',width:'100%',padding:8,margin:'8px 0 12px'}}/>
          <button type="submit" style={{padding:'10px 16px',background:'#111',color:'#fff',border:0}}>Place order</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
