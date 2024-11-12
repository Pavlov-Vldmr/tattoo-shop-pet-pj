import React from "react";
import styles from "./ServicesPage.module.scss";

function ServicesPage() {
  return (
    <>
      <div className={styles.services}>
        <div className={[styles.servicesContainer, "container"].join(" ")}>
          <h2 className="brand-color">Serviços</h2>
          <div className={styles.servicesArticle}>
            <div className={styles.servicesArticleItem}>
              <h3>Tatuagens Personalizadas</h3>
              <p className={styles.servicesArticleText}>
                Oferecemos a criação de tatuagens personalizadas, onde cada
                design é desenvolvido em colaboração direta com o cliente. A
                partir de uma ideia inicial, trabalhamos juntos para criar uma
                obra de arte única que reflete sua personalidade e sentimentos.
              </p>
            </div>
            <div className={styles.servicesArticleItem}>
              <h3>Cover-Up</h3>
              <p>
                Especializamo-nos em transformar tatuagens antigas ou
                indesejadas em novas obras de arte. Se você tem uma tatuagem que
                não representa mais quem você é, nós podemos ajudá-lo a
                reformulá-la com um design criativo e original.
              </p>
            </div>
            <div className={styles.servicesArticleItem}>
              <h3>Restauração</h3>
              <p>
                Com o tempo, algumas tatuagens podem desbotar ou perder a
                definição. Oferecemos serviços de restauração para revitalizar
                sua tatuagem antiga, realçando as cores e contornos para que ela
                volte a ter a aparência de quando foi feita pela primeira vez.
              </p>
            </div>
            <div className={styles.servicesArticleItem}>
              <h3>Henna</h3>
              <p>
                Para aqueles que não estão prontos para um compromisso
                permanente ou desejam testar um design antes de tatuá-lo
                definitivamente, oferecemos tatuagens temporárias de alta
                qualidade que duram de algumas semanas a alguns meses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
