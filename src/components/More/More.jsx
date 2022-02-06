import React from "react";
import "./More.css";

const More = ({ habilities, languages, awards }) => {
    return (
        <div>
            <div className="more-card">
            <h4>HABILIDADES</h4>
            <div class="more-card__container">
                {habilities.map((item) => {
                    return (
                        <div key={JSON.stringify(item)} class="more-card__container--item">
                            <p className="name">{item}</p>
                            
                        </div>
                    );
                })}
                </div>

            </div > 
            <div className="more-card">
            <h4>IDIOMAS</h4>
                <div class="more-card__languages">
                
            <h4 class="more-card__languages--item">{languages.language}</h4>
            <h5 class="more-card__languages--item">Writing: {languages.wrlevel}</h5>
            <h5 class="more-card__languages--item">Speaking: {languages.splevel}</h5>
            </div>
            </div>
            <div className="more-card">
            <h4>PREMIOS</h4>
                {awards.map((item) => {
                    return (
                        <div key={JSON.stringify(item)} class="more-card__container">
                            <p className="name">{item.name}</p>
                            <p> -{item.where}-</p>
                        </div>
                    );
                })}

            </div>

            

        </div>

        
        
        
        
    );
};

/* const Awards = ({ awards }) => {
    return (
        <div>
            
            <div className="more card">
            <h4>PREMIOS</h4>
                {awards.map((item) => {
                        <div key={JSON.stringify(item)}>
                            <p className="name">{item.name}</p>
                            <p>{item.where}</p>
                        </div>
                    );
                })}

            </div>
        </div>
        
        
    );
}; */

export default More;
