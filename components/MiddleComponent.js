import styled from "styled-components";

export default function MiddleComponent() {
  return (
    <Middle>
      <MiddleCol1>
        <h2>MESSING WITH THE LIGHT</h2>
        <ul>
          <li>
            Quantum mechanics is the physicist's most accurate model for
            describing the world of the atom.
          </li>
          <li>
            But it also makes some of the most persuasive arguments that
            concious perception is integral to the workings of the universe.
          </li>
          <li>Quantum theory tells us that an unobserved small object...</li>
        </ul>
      </MiddleCol1>
      <MiddleCol2>
        <h4>WHAT ACCOMPLISHES THIS COLLAPSE?</h4>
        <p>
          What accomplishes this collapse? Messing with it. Hitting it with a
          bit of light in order to take its picture. Just looking at it does the
          job.
        </p>
        <p>
          Experiments suggest that mere knowledge in the experimenter's mind is
          sufficient to collapse a wave function and convert possibility to
          reality.
        </p>
      </MiddleCol2>
    </Middle>
  );
}

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  background: url("/middle.png") scroll center;
  background-size: cover;
  max-width: 1400px;
  height: 418px;
  padding: 0 120px 0 120px;

  @media (max-width: 899px) {
    padding: 0;
    height: fit-content;
    flex-direction: column;
    background: url("/mobile-mid.png") scroll center;
    height: auto;
  }
`;

const MiddleCol1 = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;

  > h2 {
    font-weight: 600;
    font-size: 25px;
    margin-left: 20px;

    @media (max-width: 899px) {
      font-size: 20px;
    }
  }

  > ul {
    list-style: circle;
    > li {
      font-size: 14px;
      margin-bottom: 2rem;
    }
  }
`;

const MiddleCol2 = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  margin-left: 40px;

  @media (max-width: 899px) {
    margin: 0 10px 0 10px;
  }

  > h4 {
    @media (max-width: 899px) {
      font-size: 14px;
      margin: 5px;
    }
  }

  > p {
    font-size: 14px;
  }
`;
