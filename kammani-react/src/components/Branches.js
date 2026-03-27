import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Branches.css';

const branches = [
  {
    name: 'Bachupally / Mallampet',
    address: 'Door No. 5, 2/1/B/A/1, Bachupally, Hyderabad — 500090\n+91 91334 56668',
    maps: 'https://maps.app.goo.gl/dUcVTdNzEnrEEN7m8',
    swiggy: 'https://www.swiggy.com/direct/brand/566837',
    zomato: 'https://link.zomato.com/xqzv/rshare?id=100410519305638d4',
  },
  {
    name: 'Nizampet',
    address: 'Near HP Gas Godown, Nizampet & Pragathi Nagar, Hyderabad',
    maps: 'https://maps.app.goo.gl/EthcmDQvsCuz88iZ7',
    swiggy: 'https://www.swiggy.com/city/hyderabad/kammani-ruchulu-hp-gas-gowdown-nizampet-and-pragathi-nagar-rest994697',
    zomato: 'http://zoma.to/r/21486782',
  },
  {
    name: 'Chandanagar',
    address: 'Chandanagar Circle, near Miyapur, Hyderabad',
    maps: 'https://g.co/kgs/NKevmo5',
    swiggy: 'https://www.swiggy.com/city/hyderabad/kammani-ruchulu-chandanagar-circle-no-21-miyapur-rest1021787',
    zomato: 'http://zoma.to/r/21636903',
  },
  {
    name: 'Kukatpally',
    address: 'Kukatpally, Hyderabad',
    maps: 'https://g.co/kgs/oMurEjm',
    swiggy: 'https://www.swiggy.com/city/hyderabad/kammani-ruchulu-madhapur-jubilee-hills-rest994612',
    zomato: 'http://zoma.to/r/21551686',
  },
  {
    name: 'Madhapur',
    address: 'Madhapur, Jubilee Hills Area, Hyderabad',
    maps: 'https://g.co/kgs/miS1wEc',
    swiggy: 'https://www.swiggy.com/direct/brand/566837',
    zomato: 'https://link.zomato.com/xqzv/rshare?id=100410519305638d4',
  },
];

function BranchCard({ branch }) {
  const ref = useReveal();
  return (
    <div className="branch-card reveal" ref={ref}>
      <div className="branch-icon">📍</div>
      <h3>{branch.name}</h3>
      <p>{branch.address}</p>
      <div className="branch-links">
        <a href={branch.maps} target="_blank" rel="noopener noreferrer" className="branch-link maps">🗺 Maps</a>
        <a href={branch.swiggy} target="_blank" rel="noopener noreferrer" className="branch-link swiggy">Swiggy</a>
        <a href={branch.zomato} target="_blank" rel="noopener noreferrer" className="branch-link zomato">Zomato</a>
      </div>
    </div>
  );
}

export default function Branches() {
  const headerRef = useReveal();
  return (
    <section id="branches" className="branches-section">
      <div className="container">
        <div className="branches-header reveal" ref={headerRef}>
          <div className="section-label" style={{ color: 'rgba(232,135,42,0.8)' }}>Find Us Near You</div>
          <h2 className="section-title" style={{ color: '#fff' }}>5 Branches Across Hyderabad</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Visit us in-store or order online. Every branch, same authentic taste.
          </p>
        </div>
        <div className="branches-grid">
          {branches.map((b) => <BranchCard key={b.name} branch={b} />)}
        </div>
      </div>
    </section>
  );
}
