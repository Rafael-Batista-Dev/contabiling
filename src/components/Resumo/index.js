import React from "react";

import {
  CreativeSection,
  CreativeInfo,
  Title,
  InfoDesc,
  InfoDir,
  InfoLink,
  Span,
} from "./style";

const Resumo = () => {
  return (
    <div class="creative">
      <CreativeSection>
        <CreativeInfo>
          <Title>
            <Span>This is</Span> Me
          </Title>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfoLink href="!#">explicabo</InfoLink> maxime quibusdam quaerat
            nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi
            cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </CreativeSection>
    </div>
  );
};

export default Resumo;
