import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const UpiPayment = () => {
  const upiId = "7070186465@axl"; // 🔥 your UPI ID
  const name = "Ravi Kumar";
  const amount = "1"; // dynamic allowed
  const note = "Test Payment";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;

  const handlePay = () => {
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: 20, marginTop: 100 }}>
      <h2>Pay via UPI</h2>

      {/* QR Code */}
      <QRCodeCanvas value={upiLink} size={200} />

      <p>Scan & Pay using any UPI App</p>

      {/* Pay Button */}
      <button
        onClick={handlePay}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          backgroundColor: "#5f259f",
          color: "#fff",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Pay with PhonePe
      </button>
    </div>
  );
};

export default UpiPayment;
