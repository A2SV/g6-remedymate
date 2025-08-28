const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-5 pt-9 px-7 gap-24 md:gap-20 bg-[#0D2A4B] text-white">
      {/* Brand */}
      <div className="ml-0 md:ml-6 md:pr-20 mb-6 md:mb-0 max-w-xs">
      <div className="flex gap-2"> <button className=" bg-[hsl(212,70%,24%)] w-15 font-bold text-2xl rounded-2xl">RM</button> <h1 className="text-3xl font-bold mb-4 md:mb-0">RemedyMate</h1></div> 
        <p className="text-sm">
          AI-powered home remedy advisor for safer self-care.
        </p>
      </div>

      {/* Product */}
      <div className="mb-6 md:mb-0">
        <h3 className="mb-2 font-bold">Product</h3>
        <p>Features</p>
        <p>About</p>
        <p>Download</p>
      </div>

      {/* Company */}
      <div className="mb-6 md:mb-0">
        <h3 className="mb-2 font-bold">Company</h3>
        <p>Contact</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>

      {/* Disclaimer */}
      <div className="max-w-md text-right">
        <h3 className="mb-2 font-bold">Medical Disclaimer</h3>
        <p className="text-sm text-white/30">
          RemedyMate does not replace professional medical advice, diagnosis, or
          treatment. If you think you may have a medical emergency, call your
          local emergency number immediately.
        </p>
      </div>
    </div>
  );
};

export default Footer;
