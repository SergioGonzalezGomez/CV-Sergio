import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
    return (
        <div className="hero">
            
            <div className="card">
                <h2>
                    {hero.name}
                </h2>
                <img src={hero.image} alt="serg"/>
                <p>{hero.city} 🗺️</p>
                <p>{hero.birthDate} 🗓️</p>
                <p><a href={"mailto:" + hero.email}>sergiogonzalezgomez15@gmail.com</a> 📫</p>
                <p><a href={hero.gitHub}>GitHub</a> 🐱</p>
                <p><a href={hero.linkedIn}>LinkedIn</a> 👔</p>
            </div>
            <div className="about">

            {hero.aboutMe.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                                    <ul>
                                             <li className="li">{item.info}</li>
                                    </ul>
                            
                        </div>
                    );
                })}
 
            </div>

        </div>
    )
}

export default Hero;