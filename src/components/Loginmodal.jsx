import { useRef } from "react";
import "./LoginModal.css";

export default function LoginModal({ onClose }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          X
        </button>

        <h2 className="modal__title">Login</h2>

        <form
          className="modal__form"
          onSubmit={handleSubmit}
          autoComplete="on"
          method="dialog"
        >
          <label className="modal__label" htmlFor="username">
            Usuário
          </label>
          <input
            ref={usernameRef}
            className="modal__input"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="seu@email.com"
            required
          />

          <label className="modal__label" htmlFor="password">
            Senha
          </label>
          <input
            ref={passwordRef}
            className="modal__input"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
          />

          <button type="submit" className="modal__submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
