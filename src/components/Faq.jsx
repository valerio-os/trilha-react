import { useState } from "react";
import "./Faq.css";

import tadeu from "../images/tadeu.jpg";
import conpedrita from "../images/conpedrita.jpg";
import heitorro from "../images/heitorro.jpg";
import julieta from "../images/julieta.jpg";
import pou from "../images/pou.jpg";
import carlinhos from "../images/carlinhos.jpg";
const faqs = [
  {
    id: 1,
    question: "Eles tem mãe?",
    answer:
      "Sim! A Conpec existe desde 1991 e até 2026 ela deu a luz para todos eles.",
  },
  {
    id: 2,
    question: "Quais são os seus nomes?",
    answer:
      "Tadeu, Julieta, Conpepou, Heitorro, Conpedrinha, Conpedrita, Cones, Carlinhos",
  },
  {
    id: 3,
    question: "Qual a diferença?",
    answer:
      "Alguns são mais tímidos, outros mais agitados...",
  },
  {
    id: 4,
    question: "Como cuidar?",
    answer:
      "É recomendada a fotossíntese e anti-mofos no ambiente.",
  },
];


const carouselImages = [
  {
    src: tadeu,
    alt: "Tadeu",
    thumb: tadeu,
  },
  {
    src: pou,
    alt: "Pou",
    thumb: pou,
  },
  {
    src: heitorro,
    alt: "Heitorro",
    thumb: heitorro,
  },
  {
    src: julieta,
    alt: "Julieta",
    thumb: julieta,
  },
  {
    src: conpedrita,
    alt: "Conpedrita",
    thumb: conpedrita,
  },
  {
    src: carlinhos,
    alt: "Carlinhos",
    thumb: carlinhos,
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="faq">
      <h2 className="faq__title">FAQ</h2>

      <div className="faq__accordion">
        {faqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq__q-bar" />
                <span className="faq__q-text">{item.question}</span>
                <span className="faq__chevron">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <p className="faq__answer">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="faq__carousel">
        <div className="faq__thumbs">
          {carouselImages.map((img, i) => (
            <button
              key={i}
              className={`faq__thumb ${i === activeIdx ? "faq__thumb--active" : ""}`}
              onClick={() => setActiveIdx(i)}
              aria-label={img.alt}
            >
              <img src={img.thumb} alt={img.alt} />
            </button>
          ))}
        </div>

        <div className="faq__main-img-wrap">
          <img
            key={activeIdx}
            src={carouselImages[activeIdx].src}
            alt={carouselImages[activeIdx].alt}
            className="faq__main-img"
          />
          <button
            className="faq__arrow faq__arrow--prev"
            onClick={() =>
              setActiveIdx((prev) =>
                prev === 0 ? carouselImages.length - 1 : prev - 1
              )
            }
            aria-label="Anterior"
          >
            ◀
          </button>
          <button
            className="faq__arrow faq__arrow--next"
            onClick={() =>
              setActiveIdx((prev) =>
                prev === carouselImages.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Próximo"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
