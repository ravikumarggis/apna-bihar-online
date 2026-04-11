// import React from "react";
// import { QRCodeCanvas } from "qrcode.react";

// const UpiPayment = () => {
//   const upiId = "7070186465@axl"; // 🔥 your UPI ID
//   const name = "Ravi Kumar";
//   const amount = "1"; // dynamic allowed
//   const note = "Test Payment";

//   const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`;

//   const handlePay = () => {
//     window.location.href = upiLink;
//   };

//   return (
//     <div style={{ textAlign: "center", padding: 20, marginTop: 100 }}>
//       <h2>Pay via UPI</h2>

//       {/* QR Code */}
//       <QRCodeCanvas value={upiLink} size={200} />

//       <p>Scan & Pay using any UPI App</p>

//       {/* Pay Button */}
//       <button
//         onClick={handlePay}
//         style={{
//           padding: "10px 20px",
//           fontSize: 16,
//           backgroundColor: "#5f259f",
//           color: "#fff",
//           border: "none",
//           borderRadius: 5,
//           cursor: "pointer",
//         }}
//       >
//         Pay with PhonePe
//       </button>
//     </div>
//   );
// };

// export default UpiPayment;




import React from "react";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const UpiPayment = () => {

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      // key: "rzp_test_ScGbYcCp0NZOvj", // test key
      key: "rzp_live_ScGnZf5mMajaee", // live key
      amount: 200, // ₹5 (in paise)
      currency: "INR",
      name: "Apna Bihar Online",
      description: "Please Pay",
      image: "https://yourlogo.com/logo.png",

      // ✅ SUCCESS HANDLER
      handler: function (response) {
        console.log("Payment Success:", response);

        alert("Payment Successful!");

        // 👇 You will get these values
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        console.log("Payment Data:", paymentData);

        // 👉 You can store or send to backend here
      },

      prefill: {
        name: "Apna bihar online",
        email: "ravi@example.com",
        contact: "9999999999",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Razorpay Payment</h2>
      <button onClick={handlePayment}>Pay ₹5</button>
    </div>
  );
};

export default UpiPayment;
