const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <p>
              Welcome to Your Mountain Blog, where we share the beauty and adventure of mountain life. Join us as we explore the peaks and valleys of the world's most stunning landscapes.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p>Email: info@yourmountainblog.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Mountain Road, Peak City</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <p>Stay connected through our social media channels!</p>
            <a href="https://www.facebook.com" className="text-gray-200 hover:text-gray-400">Facebook</a> |
            <a href="https://www.twitter.com" className="text-gray-200 hover:text-gray-400">Twitter</a> |
            <a href="https://www.instagram.com" className="text-gray-200 hover:text-gray-400">Instagram</a>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p>Subscribe to our newsletter to stay updated on our latest adventures and tips.</p>
            <form className="mt-4">
              <input type="email" placeholder="Enter your email" className="p-2 w-full rounded mb-4 bg-gray-700 border border-gray-600 text-gray-200" required />
              <button type="submit" className="w-full bg-orange-500 text-gray-200 py-2 rounded hover:bg-orange-600">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2025 Your Mountain Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
