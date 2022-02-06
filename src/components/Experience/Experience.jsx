import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
    return (
        <div>
            <div className="experience-card">
                <h4>EXPERIENCIA</h4>
                <div className="experience-card__container">
                {experience.map((item) => {
                    return (
                        <div key={JSON.stringify(item)} class="experience-item">
                            <p className="name">{item.name}</p>
                            <p>{item.where}</p>
                            <p>{item.date}</p>
                        </div>
                    );
                })}
                </div>

            </div>
        </div>
    );
};

export default Experience;