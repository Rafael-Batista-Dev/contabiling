import React from "react";

const Contato = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="nb-form">
            <p className="title">Fale com um especialista</p>
            <img
              src="https://lh3.googleusercontent.com/-LvTWzTOL4c0/V2yhfueroyI/AAAAAAAAGZM/Ebwt4EO4YlIc03tw8wVsGrgoOFGgAsu4wCEw/w140-h140-p/43bf8578-86b8-4c1c-86a6-a556af8fba13"
              alt=""
              className="user-icon"
            />
            <p className="message">
              Converse com os nossos especialistas. Para agilizar o contato,
              digite seus dados abaixo:
            </p>
            <form>
              <input type="text" name="cpname" placeholder="Nome:" required />
              <input
                type="email"
                name="cpemail"
                placeholder="Email:"
                required
              />
              <input
                type="tel"
                name="cpphone"
                placeholder="Telefone:"
                required
              />
              <textarea
                name="cpmessage"
                placeholder="Mensagem:"
                required
              ></textarea>
              <input type="submit" value="Enviar Mensagem" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contato;
