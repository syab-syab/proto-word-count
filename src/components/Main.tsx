import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(4, 202, 255, 1), rgba(144, 245, 154, 1));
`

const Wrapper = styled.main`
  ${backgroundStyle}
  padding: 5rem;
  height: 90vh;
`

const CountNum = styled.h1`
  font-size: 3rem;
`

const BtnWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const Btn = styled.div`
  font-size: 2rem;
  border: 0.1rem solid black;
  background: #5CE1E6;
  flex-grow: 1;
  padding: 1rem 0;
  font-weight: bold;
`

const TextCountArea = styled.textarea`
  width: 100%;
  height: 50%;
`

const Main = () => {
  const [word, setWord] = useState<string>("")

  const toggleWord = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setWord(e.target.value)
  }

  const pasteWord = (): void => {
    navigator.clipboard.readText()
    .then(text => {
      setWord(text)
    })
    .catch(err => {
      alert('Error');
    })
  }

  const deleteWord = (): void => {
    setWord("")
  }

  return (
    <Wrapper>
      <CountNum>
      {word.length}字
      </CountNum>
      <BtnWrapper>
        <Btn onClick={pasteWord}>ペースト</Btn>
        <Btn onClick={deleteWord}>クリア</Btn>      
      </BtnWrapper>
      <TextCountArea onChange={(e) => toggleWord(e)} value={word} />
    </Wrapper>
  )
}

export default Main