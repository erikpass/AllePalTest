import styled from "styled-components";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <Footer>
      <FooterTop>
        <h1>WANT HIGHER?</h1>
        <p>
          Before these experiments most physicists believed in an objective,
          independent universe. They still clung to the assumption that physical
          states exist in some absolute sense before they are measured.
        </p>
      </FooterTop>
      <FooterBottom1>
        <h1>CONTACT US</h1>
        <div className="envelope">
          <Image src="/envelope.png" width="28px" height="20px" />
          <span>info@allepal.ee</span>
        </div>
        <div className="phone">
          <Image src="/phone.png" width="25px" height="30px" />
          <span>+372 65656565</span>
        </div>
      </FooterBottom1>
      <FooterBottom2>
        <h1>LOCATION</h1>
        <span>AllePal OÜ</span>
        <span>Maakri 23a</span>
        <span>10145 Tallinn, Eesti</span>
      </FooterBottom2>
    </Footer>
  );
}

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;
  background: url("/pattern.png") scroll center;
  background-size: cover;
  max-width: 1400px;
  min-height: 456px;
  padding: 0 180px 0 180px;

  @media (max-width: 899px) {
    padding: 0 10px 0 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 170px 200px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  grid-row: 1/2;
  margin-top: 40px;

  @media (max-width: 899px) {
    margin-top: 0;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  > p {
    font-size: 14.5px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const FooterBottom1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  grid-row: 2/3;

  @media (max-width: 899px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  > div.phone {
    display: inline-block;

    > span {
      margin-left: 0.5rem;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  > div.envelope {
    display: inline-block;
    > span {
      margin-left: 0.5rem;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const FooterBottom2 = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  grid-row: 2/3;

  @media (max-width: 899px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  > span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
  }
`;
