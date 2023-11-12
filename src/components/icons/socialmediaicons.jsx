import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';

import './socialmediaicons.css';

function SocialMediaIcons() {
  return (
    <div>
        <div class="icon-container">
            <a href="https://www.facebook.com" class="icon facebook">
            <FacebookIcon />  </a>
            <a href="https://www.instagram.com" class="icon instagram">
            <InstagramIcon />  </a>
            <a href="https://wa.me/" class="icon whatsapp">
            <WhatsAppIcon />  </a>
        </div>

    </div>
  );
}

export default SocialMediaIcons;
