import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            <a href="https://lookup-id.com/" title="Facebook ID">
              Lookup-ID.com
            </a>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="https://lookup-id.com/" className="hover:underline">
                Facebook ID
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/unscramble/" className="hover:underline">
                Unscramble Word
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/group/" className="hover:underline">
                Directory
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/resource/" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/facebookcard.html" className="hover:underline">
                Facebook Card
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gray-100 pt-20 pb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Looking for your Facebook profile ID / Group ID / Page ID ...
          </h2>
          <h3 className="text-xl mb-6">Type your Facebook profile URL</h3>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              name="fburl"
              placeholder="https://www.facebook.com/username"
              className="border border-gray-400 rounded px-4 py-2 w-full max-w-md"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Lookup
            </button>
          </form>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-10 px-4">
        <div>
          <h3 className="text-2xl font-bold mb-4">About Lookup-ID</h3>
          <p>
            Lookup-ID.com helps you find the Facebook ID for your profile or a
            Group. Facebook ID is a many-digit number, e.g., 10453213456789123.
            <br />
            Use it for Facebook plugins, Like Box, Like Button, or applications.
          </p>
          <div className="mt-6">
            <p className="text-red-600 font-semibold">
              Q: What's my Facebook profile URL?
            </p>
            <p className="text-gray-700">
              A: Your Facebook profile URL looks like this:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-green-600">https://www.facebook.com/lookupid</li>
              <li className="text-green-600">https://m.facebook.com/lookupid</li>
              <li className="text-green-600">
                https://www.facebook.com/profile.php?id=278754422284374
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 Lookup-ID.com. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="https://lookup-id.com/career" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/privacy-policy" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="https://lookup-id.com/sitemaphtml/" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Form;