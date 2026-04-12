export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-500 text-sm">
          &copy; Collins Anyanwu {new Date().getFullYear()} &middot; Built with React + Tailwind + Framer Motion &middot; Deployed on Vercel &amp; GitHub Pages
        </p>
      </div>
    </footer>
  )
}
