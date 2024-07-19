import React from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

interface InfoCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ iconSrc, iconAlt, title, value }) => {
  return (
    <div className="info-card">
      <Icon src={iconSrc} alt={iconAlt} />
      <Text content={title} className="info-title" />
      <Text content={value} className="info-value" />
    </div>
  );
};

export default InfoCard;
