import React from "react";
import {
  PortfolioSection,
  PortfolioItem,
  PortfolioTitle,
  Span,
  List,
  Box,
  Image,
  Overlay,
  OverlaySpan,
} from "./style";

const Portfolios = () => {
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>Nosso Portfólio</Span>
      </PortfolioTitle>
      <List>
        <PortfolioItem active>Ferramentas</PortfolioItem>
        <PortfolioItem>Estutura</PortfolioItem>
        <PortfolioItem>Equipe</PortfolioItem>
        <PortfolioItem>Eventos</PortfolioItem>
      </List>

      <div className="box">
        <Box>
          <Image src="images/Portfolio/portfolio-img1.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img2.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img3.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img4.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img5.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img6.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img7.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>

        <Box>
          <Image src="images/Portfolio/portfolio-img8.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Detalhes</OverlaySpan>
          </Overlay>
        </Box>
      </div>
    </PortfolioSection>
  );
};

export default Portfolios;
