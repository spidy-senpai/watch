import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
      <div className="logo"><Link href="/">ETHOS WATCHES</Link></div>
      <nav className="nav">
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/cart">Cart</Link>
      </nav>
      <style jsx>{`
        .site-header{display:flex;justify-content:space-between;align-items:center;padding:18px 36px;border-bottom:1px solid #eee}
        .logo{font-weight:700}
        .nav a{margin-left:16px;text-decoration:none;color:inherit}
      `}</style>
    </header>
  )
}
