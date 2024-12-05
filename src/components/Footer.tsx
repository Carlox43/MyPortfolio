const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
