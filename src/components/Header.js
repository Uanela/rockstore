import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Deia Um Novo Estilo ao Seu Trabalho!</h2>
          <p>
            Sucesso nem sempre tem haver com grandeza. Tem haver com
            consistência. Trabalho duro consistente supera o sucesso.A grandeza
            virá.
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}
