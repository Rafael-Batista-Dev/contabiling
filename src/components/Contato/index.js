import React from "react";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit,
} from "./style.js";

import Footer from "./../Footer";
const Contato = () => {
  return (
    <React.Fragment>
      <ContactSection>
        <div class="container">
          <ContactTitle>
            <Span>Entre </Span>em contato
          </ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Nome" />
              <InputEmail type="email" placeholder=" Email" />
            </FormInput>
            <InputExp type="text" class="sub" placeholder="Assunto" />
            <TextArea cols="30" rows="10" placeholder="Menssagem"></TextArea>
            <InputSubmit type="submit" value="Enviar" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </React.Fragment>
  );
};

export default Contato;
