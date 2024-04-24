import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe a nossa aplicação</p>
          <p>Baixe a nossa aplicação para Android e iOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            ROCK<span>STORE</span>
          </h1>
          <p>
            Nosso objectivo é ajudar pessoas comuns a se tornarem
            Desenvolvedores Web Pro Max
          </p>
        </div>

        <div className="links">
          <h3>Links úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blog posts</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2030 - Uanela Como - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
