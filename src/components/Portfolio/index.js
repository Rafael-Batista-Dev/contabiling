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
        <Span>Nosso</Span> Portfólio
      </PortfolioTitle>
      <List>
        <PortfolioItem active>Categoria 1</PortfolioItem>
        <PortfolioItem>Categoria 2</PortfolioItem>
        <PortfolioItem>Categoria 3</PortfolioItem>
        <PortfolioItem>Categoria 4</PortfolioItem>
        <PortfolioItem>Categoria 5</PortfolioItem>
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
