import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ServicesSection,
  HeadForm,
  FormRow,
  FormContainer,
  Title,
  Btn,
} from "./style";

const TrocaContador = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ServicesSection data-aos="fade-down">
      <div class="container">
        <FormRow>
          <HeadForm>
            <Title>Nosso contador</Title>
          </HeadForm>

          <FormContainer>
            <form className="form-container">
              <input type="text" placeholder="Nome Fantacia" />
              <input type="text" placeholder="Razão social" />
              <div className="group">
                <input type="text" placeholder="CNPJ" />
                <input type="text" placeholder="CPF" />
              </div>
              <div className="group">
                <input type="text" placeholder="Cidade" />
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
