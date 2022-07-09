import React from "react";
import Image from "next/Image";
import logo from "../public/recycle-bin.png";

function Header() {

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
        <Image src={logo} width={80} height={80} />
        <span style={{ color: '#2E8B57', fontSize: '24px', fontWeight: '700'}}>Recycle Go Where</span>
      <p style={{ width:"60%", fontSize: '1.5rem', fontWeight: '500', textAlign: 'center' }}>
        Enter your residential postal code and e-waste to search for the nearest
        e-waste bin collector.
      </p>
    </div>
  );
}

export default Header;
