import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  heigth: 100px;
  max-width: 991px;
  maring: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  maring: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  background-color: #000;
  maring: .5rem 0;
  color: #fff;
  padding: .5rem;
`

export const LinkHome = styled(Link)`
  display: block
  width: 4rem;
  text-align: center;
  background-color: #000;
  maring: 2rem auto;
  color: #fff;
  padding: .5rem 0;
  text-decoration: none;
`
