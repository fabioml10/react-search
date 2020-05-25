import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  align-items: center;
  justify-content; center;
`

export const Input = styled.input`
  heigth: 1.5rem;
  border: 1px solid #ddd;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
heigth: 1.5rem;
border: 1px solid #000;
background-color: #000
coloer: #fff;
border-radius: 0 .25rem .25rem 0;

&:focus, &:active {
  outline: none;
  box-shadow: none;
}
`

export const ErrorMesg = styled.p`
  display: block;
  font-size: 0.65rem;
  margin-top: 1rem;
  color: red;
  font-weigth: 600;
`
