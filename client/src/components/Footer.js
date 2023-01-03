const Footer = () => {
  return (
    <div className="bg-black w-full h-20 text-gray-500 flex flex-col items-center justify-center text-xs ">
      <div className="m-1">
        <a href="/Cookies">Cookies</a> |{" "}
        <a href="/PrivacyPolicy">Privacy Policy</a> |{" "}
        <a href="/TermsOfService">Terms Of Service</a>
      </div>

      <p className="m-1">Copyright Carenting &#169; 2023</p>
    </div>
  );
};
export default Footer;
