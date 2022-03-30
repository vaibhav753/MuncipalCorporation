import React from 'react'

 const Footer = () => {
    let footerstyle={
        position: "absolute",
        top:"100vh",
        width:"80%"
    }
  return (
      
    <footer className=" fixed-bottom bg-dark text-light" >
        <p className="text-center">
        copyright &copy; mumbai_munciple_corporation.com 
        </p>
    </footer>
  )
}
export default Footer;