import Navigation from '@/components/Navigation';
import Link from 'next/link';
import './investment.css';

const journeys = [
  {
    id: 1,
    title: "The Signature Transformation",
    price: "$375+",
    description: "The ultimate overhaul for a completely new look.",
    includes: [
      "Full custom blonding or dimension",
      "Bond-builder treatment",
      "Mineral-removing detox",
      "Designer haircut & signature styling"
    ]
  },
  {
    id: 2,
    title: "The Lived-In Refresh",
    price: "$245+",
    description: "Maintain your seamless color with a targeted touch-up.",
    includes: [
      "Partial dimensionality",
      "Root smudge & gloss",
      "Deep moisture mask",
      "Signature blowout"
    ]
  },
  {
    id: 3,
    title: "The Crown & Volume Extension Suite",
    price: "$275+ install",
    description: "Instant length and volume customized perfectly to your natural hair.",
    includes: [
      "Custom color matching",
      "Precision installation",
      "Blending haircut",
      "Complimentary Aftercare Kit"
    ],
    highlight: true
  },
  {
    id: 4,
    title: "The Cartersville Detox",
    price: "$125",
    description: "Combat local hard water and restore your hair's natural brilliance.",
    includes: [
      "Medical-grade chelating treatment",
      "Removal of local mineral buildup",
      "High-shine gloss finish",
      "Hydrating treatment"
    ]
  }
];

export default function Investment() {
  return (
    <main className="investment-page">
      <Navigation />
      
      <header className="page-header">
        <h1 className="page-title animate-fade-in">The Investment Menu</h1>
        <p className="page-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Result-oriented journeys tailored to your unique hair goals.
        </p>
      </header>

      <section className="journeys-section">
        <div className="journeys-grid">
          {journeys.map((journey, index) => (
            <div 
              key={journey.id} 
              className={`journey-card animate-fade-in ${journey.highlight ? 'highlight-card' : ''}`}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              {journey.highlight && <div className="card-badge">Most Popular</div>}
              <div className="card-header">
                <h2>{journey.title}</h2>
                <span className="price">{journey.price}</span>
              </div>
              <p className="journey-desc">{journey.description}</p>
              
              <ul className="includes-list">
                {journey.includes.map((item, i) => (
                  <li key={i}>
                    <span className="check">✓</span> {item}
                  </li>
                ))}
              </ul>

              <div className="card-footer">
                <Link href="/contact" className={journey.highlight ? 'btn-primary' : 'btn-outline'}>
                  Reserve Journey
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fine-print">
          <p>* Prices are starting points and may increase based on hair density, length, and product usage.</p>
        </div>
      </section>
    </main>
  );
}
