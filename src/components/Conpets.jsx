import "./Conpets.css";
import petsjuntos from "../images/petsjuntos.jpg";

const animal = {
  name: "Os Pets",
  image: petsjuntos,
  paragraphs: [
    "O que é uma empresa júnior sem seus adoráveis pets (mascotes)?",
    "A CONPEC é cheia de amor. Por isso, temos uma grande família de diversos organismos biológicos e não biológicos de diferentes origens.",
    "Acreditamos que são eles que constituem os nossos valores e eles tornam a nossa sede espetacular! Quando nos visitar, poste alguma foto com os nossos pets com a legenda #conpepets para ter a chance de ganhar um BYD 0km",
  ],
};

export default function Conpets() {
  return (
    <section id="conpets" className="conpets">
      <h1 className="conpets__title">
        Os<br />Conpets
      </h1>

      <div className="conpets__card">
        <div className="conpets__image-wrap">
          <img
            src={animal.image}
            alt={animal.name}
            className="conpets__image"
          />
        </div>

        <div className="conpets__info">
          <div className="conpets__tag-row">
            <span className="conpets__tag-bar" />
            <span className="conpets__name">{animal.name}</span>
          </div>
          <div className="conpets__divider" />
          {animal.paragraphs.map((p, i) => (
            <p key={i} className="conpets__para">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}