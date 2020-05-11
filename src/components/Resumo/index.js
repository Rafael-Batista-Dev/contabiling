import React from "react";

import { CreativeSection, CreativeInfo, InfoDesc, InfoDir } from "./style";

const Resumo = () => {
  return (
    <div class="creative">
      <CreativeSection>
        <CreativeInfo>
          <InfoDir>Emissão e importação de Notas Fiscais</InfoDir>
          <InfoDesc>
            Realize a emissão das NFs pela plataforma da Contabilizei, com a
            possibilidade de replicar notas recorrentes em apenas um clique.
          </InfoDesc>
          <InfoDesc>
            Se usar um emissor externo, você poderá importar as notas no final
            de cada mês.
          </InfoDesc>
        </CreativeInfo>
      </CreativeSection>
    </div>
  );
};

export default Resumo;
