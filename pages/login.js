import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Login(){
  return (
    <div>
      <Header />
      <main style={{padding:40,maxWidth:560,margin:'0 auto'}}>
        <h1>Login</h1>
        <form onSubmit={(e)=>{e.preventDefault();alert('Demo only — hook to backend')}}>
          <label>Email</label>
          <input type="email" name="email" style={{display:'block',width:'100%',padding:8,margin:'8px 0 12px'}}/>
          <label>Password</label>
          <input type="password" name="password" style={{display:'block',width:'100%',padding:8,margin:'8px 0 12px'}}/>
          <button type="submit" style={{padding:'10px 16px',background:'#111',color:'#fff',border:0}}>Sign in</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
