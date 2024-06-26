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

const Main = () => {
  const [wordCount, setWordCount] = useState<number>(0)


  const toggleWordCount = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setWordCount(e.target.value.length)
  }
  return (
    <Wrapper>
      <h1>{wordCount}字</h1>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        onChange={(e) => toggleWordCount(e)}
      ></textarea>
    </Wrapper>
  )
}

export default Main