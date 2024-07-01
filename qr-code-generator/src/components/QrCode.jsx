// import React from 'react'

import { useState } from "react"

// react htmlfor , html- for
export const QrCode = () => {
  const[img, setImg] = useState("");
  const [qrData,setQrData]= useState("https://github.com/Web-Dev-Learner");
  const[qrSize,setQrSize] = useState("150")
  const[loading,setLoading]=useState(false);
  
   async function generateQR(){
    setLoading(true);
    
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);

    }
    catch(error){
      console.error("Error generating QR code", error)
      

    }
    finally{
      setLoading(false);
    }
    
  }
  // blob binary format data
  // when we create to url means it convert to img
  // img will view on brower 
  // append - add, remove - remove
  function downloadQR(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error)=>{
      console.error("Error downloading QR code",error);
    })
  }
  return (
  <div className="app-container">
    <h1>QR CODE GENERATOR</h1>

    {loading && <p>Please wait....</p>}
    
    {img && <img src={img} className="qr-code-image" />}
    
    
    <div>

       
      <label htmlFor="dataInput"
       className="input-label">
        Data for QR code:</label>

      <input type="text" value={qrData}id="dataInput" 
      placeholder="Enter data for QR code" onChange={(e)=>setQrData(e.target.value)} />

      <label htmlFor="sizeInput" className="input-label">
        Image size(e.g., 150):
      </label>

      <input type="text" value={qrSize} onChange={(e)=>setQrSize(e.target.value)} 
       id="sizeInput" 
      placeholder="Enter image size" />

      <button className="generate-button" disabled={loading} onClick={generateQR}> Generate QR Code</button>
      <button className="download-button" onClick={downloadQR}>Download QR Code</button>
    </div>
    <p className="footer">Designed By <a href="https://github.com/Web-Dev-Learner">Web-Dev-Learner</a></p>
  </div>
   
  )
}
