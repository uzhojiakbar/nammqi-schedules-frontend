import styled from "styled-components";
import { media } from "../../Mock/media";
import bg from "../../Assets/bg.jpeg";

const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-image: url(${bg});
  background-size: cover;
  z-index: 999;

  .card-box {
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    background-color: white;

    gap: 40px;
    height: 100%;
    width: 40%;

    padding: 10px;
    > .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;
      > .input {
        padding: 10px 5px;
        padding-right: 20px;
        font-size: 16px;
        width: 80%;
        min-width: 200px;
      }
      > .button {
        width: 80%;
        padding: 20px 15px;
      }
    }
  }
`;

export { LoginPage };
