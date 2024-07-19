// import React from "react";
// import ring from '../../assets/ring.svg';
// import cross from '../../assests/cross.svg'
// interface IconProps  {
//     src: string;
//     alt: string;
// };
// const Icon: React.FC<IconProps> = ({src,alt}) =>{
//     return (
//         <img src={src} alt={alt} className="image"/>

//     )
// }
// export default Icon;


import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Icon;
