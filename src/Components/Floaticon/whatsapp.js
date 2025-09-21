import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210" // 👈 Apna WhatsApp number add karo (country code ke saath)
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsappButton;