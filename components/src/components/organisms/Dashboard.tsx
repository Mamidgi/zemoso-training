import React from 'react';
import InfoCard from '../molecules/InfoCard';
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import '../../styles/Dashboard.css';
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="info-cards">
        <InfoCard iconSrc={img1} iconAlt="Term Cap" title="Term cap" value="12 months" />
        <InfoCard iconSrc={img2} iconAlt="Available Credit" title="Available credit" value="$709.45k" />
        <InfoCard iconSrc={img3} iconAlt="Max Interest Rate" title="Max interest rate" value="12.00%" />
      </div>
    </div>
  );
};

export default Dashboard;
