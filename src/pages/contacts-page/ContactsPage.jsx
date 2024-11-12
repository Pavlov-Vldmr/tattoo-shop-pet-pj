import React from "react";
import wa from "../../assets/images/icons/wa2.svg";
import bg from "../../assets/images/Imagem.png";

import styles from "./ContactsPage.module.scss";

function ContactsPage() {
  return (
    <>
      <div className={styles.contacts}>
        <div className={[styles.contactsContainer, "container"].join(" ")}>
          <div className={styles.contactsArticle}>
            <h2>
              Entre em <span className="brand-color">Contato</span>
            </h2>
            <p>Clique no botão abaixo e envie uma mensagem. Vamos conversar!</p>

            <a href="" className={styles.contactsWa}>
              <img src={wa} width={36} height={36} alt="WhatsApp" />
              <div>
                <span className={styles.contactsWaName}>Enviar Whatsapp</span>
                <span className={styles.contactsWaPhone}>
                  (+55 11) 99711 1111
                </span>
              </div>
            </a>
          </div>
          <img className={styles.contactsBg} src={bg} alt="" />
        </div>
      </div>
    </>
  );
}

export default ContactsPage;
