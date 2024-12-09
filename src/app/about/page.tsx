import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">LIVA</div>
          <ul className="menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/golden-ai-pro">LIVA Pro</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <div className="toggle-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h1>About LIVA</h1>
        <p>Welcome to LIVA, your trusted partner in enhancing the quality of life for the elderly. Our innovative platform combines advanced technology with compassionate care to provide a range of features that promote health, well-being, and independence. Our mission is to empower seniors to live their best lives with the support of AI-driven solutions.</p>

        <h2>Our Features</h2>
        <p>We offer a variety of features specifically designed to cater to the unique needs of the elderly. From medication reminders to meal notifications, our services ensure that seniors receive the care and support they need. Explore our <Link href="/golden-ai-pro">Plans</Link> page to discover how we can help!</p>

        <h2>Customer Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"LIVA has transformed my daily routine. The medication reminders have been a lifesaver!"</p>
            <span>- John, Satisfied User</span>
          </div>
          <div className="testimonial">
            <p>"I feel more connected to my family and friends with the help of this amazing service. Highly recommend it!"</p>
            <span>- Mary, Happy Customer</span>
          </div>
          <div className="testimonial">
            <p>"The meal notifications and health tracking have made my life so much easier. I can't imagine my day without it!"</p>
            <span>- Robert, Loyal User</span>
          </div>
        </div>

        <h2>Join  Community</h2>
        <p>By becoming a part of LIVA, you join a community that values independence, health, and happiness for the elderly. Stay informed about the latest features, updates, and tips for a better lifestyle by subscribing to our newsletter.</p>

        <h3>Get Exclusive Updates</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Golden AI. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
