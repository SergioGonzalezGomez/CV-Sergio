import React from "react";
import "./Education.css";

const Education = ({ education }) => {
    return (
        <div>
            <div className="education-card">
                <h4>EDUCACIÓN</h4>
                <div className="education-card__container">
                {education.map((item) => {
                    return (
                        <div key={JSON.stringify(item)} class="education-item">
                            <p className="name">{item.name}</p>
                            <p>{item.where}</p>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
    );
};

export default Education;