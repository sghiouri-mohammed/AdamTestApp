import React from "react"
import '../assets/styles/connexion.css'
import 'bootstrap/dist/css/bootstrap.css';


function hideAndShow(){

    let paragraphe = document.getElementById("para")

    if (paragraphe.style.display === "none") {

        paragraphe.style.display = "block";
        paragraphe.style.color = "red";

      } else {
        paragraphe.style.display = "none";

      }
}

function Connexion(){
    return(
        <div>
            
            <div className="div-paragraph-connexion">

                <p className="paragraph-connexion">
                    Je suis la page Connexion
                </p>

                <button onClick={hideAndShow} className="btn btn-primary sm-btn" > Afficher Paragraphe </button>



                <p className="mt-5" id="para" > Paragraphe caché Paragraphe caché Paragraphe caché Paragraphe caché Paragraphe caché </p>

            </div>

        </div>
    )
}

export default Connexion;

