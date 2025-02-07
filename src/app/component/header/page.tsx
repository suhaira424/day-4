export default function Header() {
  return (
    <header className="bg-purple-700 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 gap-y-2 sm:flex-nowrap sm:gap-y-0">
        {/* Left Section: Email and Phone */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-white">
          <span className="flex items-center space-x-1">
            <span role="img" aria-label="Email">📧</span>
            <span>nhksam@gmail.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <span role="img" aria-label="Phone">📞</span>
            <span>(123) 456-7890</span>
          </span>
        </div>

        {/* Right Section: Language, Currency, Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-white">
          <span>English</span>
          <span>USD</span>
          <a href="http://localhost:3000/pages/login" className="hover:text-black">Login</a>
          <a href="/wishlist" className="hover:text-black">Wishlist</a>
          <a href="/cart" className="hover:text-black" aria-label="Cart">🛒</a>
        </div>
      </div>
    </header>
  );
}
