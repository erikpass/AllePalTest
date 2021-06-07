import styled from "styled-components";
import Image from "next/image";

export default function TopComponent() {
  return (
    <>
      <Top>
        <ScrollDownButton>
          <Image
            alt="arrowImage"
            src={"/arrow.png"}
            width="60px"
            height="30px"
          />
        </ScrollDownButton>
      </Top>
      <Extra>
        <h1>IS THE WEB POSSIBLE WITHOUT THE SPIDER?</h1>
        <p>
          Are space and time physical objects that would continue to exist even
          if living creatures were removed from the scene?
        </p>
        <p>
          Figuring out the nature of the real world has obsessed scientists and
          philosphers for millenia. Three hundred years ago, the Irish
          empiricist George Berkeley contibuted a particularily prescient
          observation. The only thing we can percieve are our perceptions.
        </p>
      </Extra>
    </>
  );
}

const Top = styled.div`
  position: relative;
  background: url("/top.png") scroll center;
  background-size: cover;
  max-width: 1400px;
  height: 800px;

  @media (max-width: 899px) {
    background: url("/mobile-top.png") no-repeat center;
    height: 283px;
  }
`;

const ScrollDownButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -30px;
  margin-bottom: 30px;
  animation: upAndDown 0.6s ease infinite alternate;

  @media (max-width: 899px) {
    display: none;
  }

  @keyframes upAndDown {
    0% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(12px);
    }
  }
`;

const Extra = styled.div`
  display: none;
  flex-direction: column;
  position: relative;
  background: url("/pattern.png") scroll center;
  background-size: cover;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);
  padding: 0 10px 0 10px;

  @media (max-width: 899px) {
    display: flex;

    > h1 {
      font-size: 20px;
    }

    > p {
      font-size: 15px;
    }
  }
`;
