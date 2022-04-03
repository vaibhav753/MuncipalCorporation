import React from 'react'
import "../Components/Addcss/Footer.css"

const Footer = () => {
  let footerstyle = {
    position: "absolute",
    top: "100vh",
    width: "80%"
  }
  return (

    <footer className="container-fluid  bg-dark text-light footer">
      <p className="text-center">
        copyright &copy; mumbai_munciple_corporation.com
      </p>
    </footer>
  )
}
export default Footer;