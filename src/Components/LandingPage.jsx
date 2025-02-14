import React from 'react'; 
import Header from './Header'; 
import Footer from './Footer'; 
import './styles.css';

const features = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMZAw-1OsYs6o7TIayNlrbP8uS-OYyfa9BQ&s', title: 'Festival Listings', description: 'Discover upcoming virtual food festivals and events.' },
    { image: 'https://media.licdn.com/dms/image/v2/D4D12AQEckBkKAP25Sg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677500096553?e=2147483647&v=beta&t=bRp_DatrypmLegP-GLybyl4K-NPdwcV3OA30m6HlXqg', title: 'Vendor Profiles', description: 'Check out detailed vendor profiles with menus and reviews.' },
    { image: 'https://img.freepik.com/free-vector/post-service-tracking-abstract-concept-vector-illustration-parcel-monitor-track-trace-your-shipment-package-tracking-number-express-delivery-online-shopping-mail-box-abstract-metaphor_335657-1777.jpg', title: 'Real-Time Order Tracking', description: 'Track your food order from preparation to delivery.' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqbt502Ne-T1peC5EYsjT2I5wdL7rbzknQw&s', title: 'Live Events', description: 'Join live cooking shows and vendor showcases.' },
    { image: 'https://c8.alamy.com/comp/2FNPX0K/vector-of-people-shopping-online-earning-reward-points-and-gifts-through-a-marketing-loyalty-program-2FNPX0K.jpg', title: 'Gamification & Rewards', description: 'Earn points and badges by exploring vendors and ordering.' },
];

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const LandingPage = () => {
    return (
        <div>
            <Header />
            <header className="header">
                <div style={{ marginTop: '180px' }}>
                    <h1>Embark on a </h1>
                    <h1>Flavorful Adventure!</h1><br />
                </div>
                <p>Explore amazing food vendors, live events, and more!</p><br />
                <button onClick={() => scrollToSection('features')}>Explore Features</button>
            </header>

            <section id="features" className="features">
                <div className="feature-container">
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <img src={feature.image} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;
