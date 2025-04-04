export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              AutoSales.AI
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">
              功能特色
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">
              方案價格
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              聯絡我們
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#try-now"
              className="btn btn-primary"
            >
              立即試用
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
