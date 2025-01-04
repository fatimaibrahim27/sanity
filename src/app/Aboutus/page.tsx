const Aboutus = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 font-semibold mb-6">
              <i>Welcome to Your Mountain Blog, where we share the beauty and adventure of mountain life. Our mission is to inspire and educate our readers about the wonders of the mountains, from thrilling hiking trails to serene landscapes and everything in between.</i>
            </p>
          </div>
          <div>
            <img src="/sunset.jpg" alt="Mountain" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Team</h2>
          <p className="text-gray-700 font-semibold mb-6">
           <i>Our team is made up of passionate adventurers, nature lovers, and experienced writers who are dedicated to bringing you the best content about mountain life. Whether it's through breathtaking photography, detailed trail guides, or personal stories, we strive to create content that resonates with our readers.</i>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/team3.jpg" alt="Team Member" className="rounded-full mx-auto mb-4 w-32 h-32" />
              <h3 className="text-xl font-medium text-gray-800">Team Member 1</h3>
              <p className="text-gray-600">Photographer</p>
            </div>
            <div className="text-center">
              <img src="/team2.jpg" alt="Team Member" className="rounded-full mx-auto mb-4 w-32 h-32" />
              <h3 className="text-xl font-medium text-gray-800">Team Member 2</h3>
              <p className="text-gray-600">Writer</p>
            </div>
            <div className="text-center">
              <img src="/team1.jpg" alt="Team Member" className="rounded-full mx-auto mb-4 w-32 h-32" />
              <h3 className="text-xl font-medium text-gray-800">Team Member 3</h3>
              <p className="text-gray-600">Guide</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-6">
            On our blog, you'll find a wide range of topics related to mountains, including:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Hiking and trekking guides</li>
            <li>Camping tips and gear reviews</li>
            <li>Mountain photography</li>
            <li>Personal adventure stories</li>
            <li>Environmental conservation efforts</li>
            <li>Interviews with mountain experts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
