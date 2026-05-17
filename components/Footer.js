export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Ethos Watches</div>
      <style jsx>{`
        .site-footer{border-top:1px solid #eee;padding:24px;text-align:center;margin-top:40px;color:#666}
      `}</style>
    </footer>
  )
}
