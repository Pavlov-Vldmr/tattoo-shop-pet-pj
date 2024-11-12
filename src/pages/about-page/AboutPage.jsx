import React from "react";
import styles from "./AboutPage.module.scss";
import portrait from "../../assets/images/Portrait.png";

function AboutPage() {
  return (
    <>
      <div className={styles.about}>
        <div className={[styles.aboutContainer, "container"].join(" ")}>
          <h2>
            Prazer, sou <span className="brand-color">Sandro Luz</span>
          </h2>
          <p>
            Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e
            se imprime na pele. Com mais de 10 anos de experiência no mundo da
            tatuagem, dedico-me a transformar visões e emoções em arte corporal
            que expressa quem você é e o que você ama.
          </p>
          <p>
            Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
            atentamente os desejos e as histórias de meus clientes para que cada
            peça seja única e pessoal. Especializo-me em vários estilos, desde o
            delicado traço fino até composições mais robustas e coloridas,
            garantindo que cada design não só atenda, mas supere as
            expectativas.
          </p>
          <p>
            Além da dedicação à arte, a segurança e o conforto são prioridades
            no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
            qualidade, e sou rigoroso quanto aos protocolos de higiene e
            segurança, garantindo uma experiência segura e confortável para
            todos.
          </p>
          <p>
            Visite meu estúdio e veja como a arte pode se manifestar em sua
            pele. Estou aqui para ajudá-lo a contar sua história de uma maneira
            única e eterna. Agende sua consulta e vamos juntos criar algo
            extraordinário!
          </p>
          <span className="signature">Sandro Luz</span>
          <img
            src={portrait}
            className={styles.portrait}
            // height={100}
            alt="tattoo master"
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
