import React from "react";
import "./footer.css";

const Footer = () => {
  
    const imgURL = "https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/6126238e144f7970c00d7c57_60f17a27f09c3f9cecf7ef53_footer-avatar.png";
    const fbSVG = "https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f7722f7ef58_icon%20(2).svg";
    const wtSVG = "https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3fa670f7ef56_icon%20(4).svg";
    const lkSVG = "https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f1f0df7ef59_icon%20(1).svg";
    const isSVG = "https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f768ef7ef57_icon%20(3).svg";

  return (
    <footer className="footer">

      <div className="footer-newsletter">
        <div className="sent-mail">
          <h2 className="new-lt-ti">Ready to accompany each other?</h2>
          <form className="form-mail">
            <input type="email" pattern="[^ @]*@[^ @]*" placeholder="type of your email..."/>
            <input type="submit" />
          </form>
        </div>
        <div className="img-footer">
          <img src={imgURL} alt="connect" />
        </div>
      </div>

      <div className="footer-menu">
        <div className="row-1">
          <p className="title-footer">HoaDesign</p>
          <p>Life is a challenge, just enjoy it!</p>
        </div>
        <div className="row-2">
          <p id="ft-menu"><a href="#">About</a></p>
          <p id="ft-menu"><a href="#">Jobs</a></p>
          <p id="ft-menu"><a href="#">Docs</a></p>
          <p id="ft-menu"><a href="#">Security</a></p>
        </div>
        <div className="row-3">
          <p id="ft-menu"><a href="#">Terms and Conditions</a></p>
          <p id="ft-menu"><a href="#">Privacy Policy</a></p>
          <p id="ft-menu"><a href="#">Cookie Policy</a></p>
        </div>
        <div className="row-4">
            <p id="ft-menu">Let &lsquo;s chat</p>
            <p id="ft-menu"><a href="mailto:hoadesign.09@gmail.com">hoadesign.09@gmail.com</a></p>
            <div className="social">
                <a href="#" className="social">
                    <img src={fbSVG} />
                </a>
                <a href="#" className="social">
                    <img src={wtSVG} />
                </a>
                <a href="#" className="social">
                    <img src={lkSVG} />
                </a>
                <a href="#" className="social">
                    <img src={isSVG} />
                </a>
            </div>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright 2023 © HOADESIGN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
