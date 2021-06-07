import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetRandomActiveItem } from "../components/apiRequests";
import AuctionComponent from "../components/AuctionComponent";
import FooterComponent from "../components/FooterComponent";
import MiddleComponent from "../components/MiddleComponent";
import TopComponent from "../components/TopComponent";

export default function Home() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    GetRandomActiveItem().then((data) => {
      setInfo(data);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Test Task</title>
        <meta
          name="description"
          content="Brochure that sources from Osta.ee REST api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopComponent />
      <AuctionComponent data={info} />
      <MiddleComponent />
      <FooterComponent />
      <Map />
    </div>
  );
}

const Map = styled.div`
  height: 363px;
  width: 100%;
  position: relative;
  background: url("/map.png") scroll center;
  background-size: cover;
  max-width: 1400px;
  height: 456px;
`;
