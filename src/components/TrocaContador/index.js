import React from "react";

import { ServicesSection, FormRow, FormContainer, Title, Btn } from "./style";

const TrocaContador = () => {
  return (
    <ServicesSection>
      <div class="container">
        <FormRow>
          <Title>Abertura de empresa</Title>
          <FormContainer>
            <form className="form-container">
              <input type="text" placeholder="Nome Fantacia" />
              <input type="text" placeholder="Razão social" />
              <input type="text" placeholder="CNPJ" />
              <input type="text" placeholder="CPF" />
              <input type="text" placeholder="Cidade" />
              <div className="group">
                <input type="text" placeholder="UF" />
                <input type="text" placeholder="Nº" />
              </div>
            </form>
          </FormContainer>
          <Btn>
            Enviar{" "}
            <i
              style={{ marginLeft: "10px" }}
              class="fa fa-paper-plane"
              aria-hidden="true"
            ></i>
          </Btn>
        </FormRow>
      </div>
    </ServicesSection>
  );
};

export default TrocaContador;
