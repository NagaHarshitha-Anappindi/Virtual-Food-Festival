import React from 'react';
import './styles.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Subscription Section */}
      <div style={styles.subscription}>
        <h2>Stay Connected with Us</h2>
        <p>Subscribe to get the latest updates on upcoming food festivals, vendors, and exclusive offers.</p>
        <div style={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" style={styles.input} />
          <button style={styles.button}>Subscribe</button>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.section}>
          <h3>Home</h3>
          <p>Discover the essence of our virtual food festival.</p>
        </div>
        <div style={styles.section}>
          <h3>About Us</h3>
          <p>Learn more about our journey and mission to celebrate food.</p>
        </div>
        <div style={styles.section}>
          <h3>Events</h3>
          <p>Check out our exciting lineup of events and activities.</p>
        </div>
        <div style={styles.section}>
          <h3>Flavor Your Profile</h3>
          <p>Personalize your experience by adding your favorite flavors.</p>
        </div>
        <div style={styles.section}>
          <h3>Contact</h3>
          <p>Get in touch with us for more information or inquiries.</p>
        </div>
        
        {/* Follow Us Section */}
        <div style={styles.followUs}>
          <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#facebook" style={styles.icon}><FaFacebookF /></a>
            <a href="#instagram" style={styles.icon}><FaInstagram /></a>
            <a href="#twitter" style={styles.icon}><FaTwitter /></a>
            <a href="#youtube" style={styles.icon}><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>© 2025 Virtual Food Festival. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  subscription: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  subscribeForm: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  input: {
    padding: '8px',
    width: '250px',
    border: '2px solid white',
    background: 'transparent',
    color: 'white',
    borderRadius: '20px 0 0 20px',
  },
  button: {
    padding: '8px',
    background: '#ed8936',
    color: 'white',
    borderRadius: '0 20px 20px 0',
    cursor: 'pointer',
    border: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  section: {
    flex: 1,
    minWidth: '150px',
    margin: '10px',
  },
  followUs: {
    flex: 1,
    minWidth: '150px',
    margin: '10px',
    textAlign: 'center',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
    textDecoration: 'none',
  },
  footerBottom: {
    marginTop: '20px',
  },
};

export default Footer;