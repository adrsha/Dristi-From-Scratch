import "./ContactUs.css";
import contactUsGraphics from "/contactUs_graphics.png";
// action="https://formspree.io/f/xvgppokn"
export default function ContactUs() {
  return (
    <div className="contactUs" id="contactUs">
      <div className="contactUsTitle">Contact Us</div>
      <div className="contactUsContent">
        <div className="moreinfo">
          For more information and to stay updated on our activities, follow us
          on our social media channels as well.
          <br />
          Email : kecktm.it.club@gmail.com
          <br />
          Follow us on{" "}
          <a
            className="specialLinks"
            href="https://www.facebook.com/kecitclub/"
          >
            Facebook
          </a>
          , Twitter, and Instagram.
        </div>
        <form
          className="parallaxEl"
          action="https://formcarry.com/s/lkVSZ-RGqK0"
          method="POST"
        >
          <div className="form_text">
            <input placeholder=" " type="text" id="name" name="name" />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form_email">
            <input placeholder=" " type="email" id="email" name="email" />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form_message">
            <textarea placeholder=" " id="message" name="message"></textarea>
            <label htmlFor="message">Message to send</label>
          </div>
          <button type="submit">Send</button>
        </form>
        <img
          className="parallaxEl"
          src={contactUsGraphics}
          alt="Contact Us graphics"
          data-lerp={-8}
        />
      </div>
    </div>
  );
}
