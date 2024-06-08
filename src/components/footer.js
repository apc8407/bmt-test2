import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import footer1 from '../assets/images/footer.png';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => { // Corrected here
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2024 Corporate. All Rights Reserved.</div>
      <div className="footer-image-container">
        <img src={footer1} alt="Footer" />
    </div>
    </Container>
  )
}

export default AppFooter;