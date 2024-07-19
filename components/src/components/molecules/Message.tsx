import React from 'react';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import cross  from '../../assets/cross.svg';
import ring from '../../assets/ring.svg';

const Message: React.FC = () => {
  return (
    <div className="message-wrapper">
      <div className="header">
        <Text content="Cash kick launched successfully!" className="title" />
        <Icon src={cross} alt="Close" className="cross-icon" />
      </div>
      <Text content="We are reviewing your cash kick" className="subtitle" />
      <Icon src={ring} alt="Ring" className="ring-icon" />
      <Text content="Your cash kick is under review" className="status" />
      <Text
        content="It will remain on pending state until we review it internally. This can take up to 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified."
        className="description"
      />
    </div>
  );
};

export default Message;


