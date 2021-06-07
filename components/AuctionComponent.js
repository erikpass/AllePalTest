import { useState, useEffect } from "react";
import { GetDateDifference } from "./apiRequests";
import Countdown from "./CountdownComponent";
import styled from "styled-components";
import Image from "next/image";

export default function AuctionComponent(props) {
  const [info, setInfo] = useState(props.data);
  useEffect(() => {
    setInfo(props.data);
  }, [props]);
  return (
    <AuctionSection>
      <ImageContainer>
        {info?.imageUrl && (
          <Image src={info.imageUrl} width={"auto"} height={"auto"} />
        )}
      </ImageContainer>
      <TimeContainer>
        <span>
          {info?.dateEnd && (
            <Countdown time={GetDateDifference(info.dateEnd)} />
          )}
        </span>
      </TimeContainer>
      <InfoContainer>
        <div className="nameContainer">
          <span>{info?.title}</span>
        </div>
        <div className="detailsContainer">
          <div>
            <span className="maintext">{info?.currentPriceEur}&#8364;</span>
            <span className="subtext">hetke hind</span>
          </div>
          <div>
            <span className="maintext">{info?.currentBids}</span>
            <span className="subtext">pakkumist</span>
          </div>
        </div>
      </InfoContainer>
    </AuctionSection>
  );
}

const AuctionSection = styled.div`
  display: grid;
  width: 100%;
  height: 385px;
  grid-column-gap: 60px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 2fr 2fr;

  @media (max-width: 899px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr;
    margin-bottom: 60px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  grid-row: 1 / 1;
  grid-column: 1 / 3;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 18px;
    color: gray;
  }

  @media (max-width: 899px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  margin-bottom: 60px;

  @media (max-width: 899px) {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-bottom: auto;
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  @media (max-width: 899px) {
    grid-column: 1/2;
    grid-row: 3/5;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  > .nameContainer {
    font-weight: bold;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 899px) {
      grid-column: 1/2;
      grid-row: 1/2;
      justify-content: center;
    }
  }

  > .detailsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 200px 0 0;

    @media (max-width: 899px) {
      grid-column: 1/2;
      grid-row: 2/3;
      flex-direction: row;
      margin: 0;
      justify-content: space-evenly;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > .maintext {
        color: #ff7500;
        font-size: 36px;
        font-weight: bold;
      }
      > .subtext {
        color: gray;
        font-size: 20px;
      }
    }
  }
`;
