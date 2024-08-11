import React, { useRef } from "react";
import styled from "styled-components";

const RefHook = () => {

  const inputRef = useRef();
  const change = useRef(null)

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  const changeBg=()=>{
    change.current.style.backgroundColor='red'
  }


  return (
    <Wrapper>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeBorder}>submit</button>
      <div ref={change}>
        <p>hello guys how are u</p>
        <button onClick={changeBg}>click</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    min-width: 20rem;
    padding: 1rem 0.5rem;
    color: #000;
    font-size: 2rem;
  }

  button {
    text-transform: uppercase;
  }
`;

export default RefHook;
