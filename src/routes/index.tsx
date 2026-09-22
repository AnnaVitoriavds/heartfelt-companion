import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const wa = "https://wa.me/5561999372096";
const instagram = "https://www.instagram.com/adrianolecoleco/";

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      document.documentElement.style.setProperty("--progress", `${Math.max(0, Math.min(1, p)) * 100}%`);
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classImg = "/adriano-hero.webp";
  const message = (text:string) => `${wa}?text=${encodeURIComponent(text)}`;

  return <main>
    <div className="progress" />
    <header className="site-header">
      <a href="#inicio" className="brand"><strong>Adriano Felipe</strong><span>Cerâmica Autoral</span></a>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(false)}>
        <a href="#artista">O artista</a><a href="#processo">Processo</a><a href="#obras">Obras</a>
        <a href="#aulas">Aulas e oficinas</a><a href="#contato">Contato</a>
        <a className="nav-cta" href={message("Olá, Adriano! Conheci seu portfólio e gostaria de conversar sobre uma peça ou encomenda personalizada.")} target="_blank">Solicitar encomenda</a>
      </nav>
    </header>

    <section id="inicio" className="hero">
      <img className="hero-photo" src={classImg} alt="Peça de cerâmica artesanal no ateliê de Adriano Felipe" />
      <div className="hero-shade" />
      <div className="hero-content reveal">
        <p className="eyebrow">Professor de Cerâmica · Ceramista · Artista Manual</p>
        <h1>Cerâmica que<br/><em>atravessa o tempo.</em></h1>
        <p className="lead">Adriano Felipe dos Santos transforma terra, gesto e fogo em peças únicas, criadas para serem contempladas, utilizadas e vividas.</p>
        <div className="actions"><a className="btn light" href="#obras">Conhecer o portfólio</a><a className="btn ghost" href={wa} target="_blank">Falar com Adriano</a></div>
      </div>
      <div className="hero-index">PORTFÓLIO / 2026</div>
    </section>

    <section id="artista" className="section about">
      <div className="section-number">01 / O ARTISTA</div>
      <div className="about-grid">
        <div><p className="kicker">Entre o gesto e a matéria</p><h2>A forma nasce<br/>do encontro.</h2></div>
        <div className="body-copy"><p>Adriano Felipe dos Santos é professor de cerâmica e ceramista. Seu trabalho nasce da relação entre as mãos, a argila, o torno e o tempo. Cada criação carrega as marcas naturais do processo manual, transformando pequenas diferenças em identidade, beleza e exclusividade.</p><p>Além da produção de peças autorais, Adriano compartilha seus conhecimentos por meio de aulas, oficinas e experiências com a cerâmica, aproximando diferentes pessoas desse universo artístico.</p></div>
      </div>
      <blockquote>“Nenhuma peça se repete.<br/><em>Cada forma guarda o instante em que foi criada.</em>”</blockquote>
    </section>

    <section id="processo" className="section process">
      <div className="section-number">02 / PROCESSO CRIATIVO</div>
      <div className="process-head"><h2>Da matéria bruta<br/>à peça única</h2><p>Terra, gesto, espera e fogo. Um processo em que técnica e sensibilidade caminham juntas.</p></div>
      <div className="steps">
        <article><span>01</span><h3>Preparar</h3><p>A argila é escolhida e preparada para receber forma, movimento e intenção.</p></article>
        <article><span>02</span><h3>Modelar</h3><p>No torno ou por meio da modelagem manual, cada peça é construída com técnica, sensibilidade e precisão.</p></article>
        <article><span>03</span><h3>Transformar</h3><p>A secagem, o acabamento, a esmaltação e o fogo revelam novas cores, texturas e características.</p></article>
      </div>
    </section>

    <section id="obras" className="section works">
      <div className="section-number">03 / OBRAS</div>
      <div className="works-title"><h2>Peças que<br/><em>contam histórias</em></h2><p>Uma seleção de formas autorais e estudos em cerâmica.</p></div>
      <div className="gallery">
        {["Forma orgânica","Cerâmica em processo","Peça autoral"].map((name,i)=><button key={name} className={"gallery-item g"+i} onClick={()=>setLightbox(classImg)}><img src={classImg} alt={name}/><span><b>0{i+1}</b>{name}</span></button>)}
      </div>
      <p className="gallery-note">Cerâmica utilitária · Vasos e formas orgânicas · Peças decorativas · Esculturas · Trabalhos experimentais · Obras em processo</p>
    </section>

    <section id="aulas" className="section classes">
      <div className="section-number">04 / AULAS & OFICINAS</div>
      <div className="classes-grid"><div><p className="kicker">Cerâmica também é encontro</p><h2>Aprender com<br/>as próprias mãos.</h2></div><div><p>O ateliê é um espaço de descoberta, convivência e aprendizado. Nas aulas e oficinas, Adriano conduz os participantes pelo contato com a argila, apresentando técnicas de modelagem e incentivando a liberdade criativa de cada pessoa.</p><ul><li>Aulas de cerâmica</li><li>Oficinas práticas</li><li>Experiências para iniciantes</li><li>Atividades individuais ou em grupo</li><li>Vivências artísticas</li><li>Projetos e parcerias</li></ul><a className="btn dark" target="_blank" href={message("Olá, Adriano! Conheci seu portfólio e gostaria de receber informações sobre suas aulas e oficinas de cerâmica.")}>Quero saber sobre as aulas</a></div></div>
    </section>

    <section className="commission">
      <p className="section-number">05 / ENCOMENDAS</p><h2>Uma peça criada<br/><em>especialmente para você.</em></h2>
      <p>Para quem procura uma criação única, Adriano também desenvolve peças autorais, encomendas personalizadas, projetos artísticos e possíveis colaborações.</p>
      <a className="btn light" target="_blank" href={message("Olá, Adriano! Conheci seu portfólio e gostaria de conversar sobre uma peça ou encomenda personalizada.")}>Conversar sobre uma encomenda</a>
    </section>

    <section id="contato" className="section contact">
      <div className="section-number">06 / CONTATO</div><p className="kicker">Contato & colaborações</p>
      <h2>Vamos criar algo<br/><em>com significado?</em></h2><p className="contact-copy">Entre em contato para conhecer as peças disponíveis, conversar sobre encomendas, aulas, oficinas ou propor uma colaboração artística.</p>
      <div className="contact-links"><a href={wa} target="_blank"><span>WhatsApp</span><strong>(61) 99937-2096 ↗</strong></a><a href={instagram} target="_blank"><span>Instagram</span><strong>@adrianolecoleco ↗</strong></a></div>
    </section>

    <footer><div><strong>Adriano Felipe dos Santos</strong><span>Professor de Cerâmica · Ceramista</span></div><p>Cerâmica autoral feita à mão.</p><small>© 2026 Adriano Felipe dos Santos. Todos os direitos reservados.</small></footer>
    {lightbox && <div className="lightbox" onClick={()=>setLightbox(null)}><button aria-label="Fechar">×</button><img src={lightbox} alt="Obra ampliada"/></div>}
  </main>
}