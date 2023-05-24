const Footer = () => {
  return (
    <footer className="bg-blue-dark mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-blue-light">
          <p>&copy; {new Date().getFullYear()} FitnessCalcAdvisor. All rights reserved.</p>
          <p>
            Made with{' '}
            <span role="img" aria-label="Love">
              ❤️
            </span>{' '}
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
