import React from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";


interface CardDetailstProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick: () => void;
}

const CardDetails: React.FC<CardDetailstProps>=({title,subtitle,buttonText,onButtonClick})=>{
    return (
      
     <div className="card-content">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <button className="learn-more-button">{buttonText}</button>
    </div>

    )
}
export default CardDetails;