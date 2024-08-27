import IconMoney from '../assets/img/icon-money.webp';
import IconChat from '../assets/img/icon-chat.webp';
import IconSecurity from '../assets/img/icon-security.webp';
import '../styles/Pages/HomePage.css';

const data = [
    {
        src: IconChat,
        altImg: 'Chat Icon',
        title: 'You are our #1 priority',
        description:
            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        src: IconMoney,
        altImg: 'Money Icon',
        title: 'More savings means higher rates',
        description:
            'The more you save with us, the higher your interest rate will be!',
    },
    {
        src: IconSecurity,
        altImg: 'Security Icon',
        title: 'Security you can trust',
        description:
            'We use top of the line encryption to make sure your data and money is always safe.',
    },
];

export default function HomePage() {
    return (
        <>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img
                            src={feature.src}  
                            alt={feature.altImg}
                            className="feature-icon"
                        />
                        <h3 className="feature-item-title">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
}
