import "./Contato.css";

const contactItems = [
  { icon: "▪", label: "contato@conpec.com.br" },
  { icon: "▪", label: "(19) 3521-3842" },
  { icon: "▪", label: "R. Josué de Castro, 100 — Cidade Universitária" },
  { icon: "▪", label: "Campinas - SP" },
];

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <h2 className="contato__title">Contato</h2>

      <div className="contato__body">
        <div className="contato__map-wrap">
          <iframe
            title="Localização"
            className="contato__map"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8!2d-47.0676!3d-22.8173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ5JzAyLjMiUyA0N8KwMDQnMDMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
          />
        </div>

        <ul className="contato__list">
          {contactItems.map((item, i) => (
            <li key={i} className="contato__item">
              <span className="contato__item-bar" />
              <span className="contato__item-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="contato__footer">
        <span>Todos os direitos reservados.</span>
      </footer>
    </section>
  );
}
