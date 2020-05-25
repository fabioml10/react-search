import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './styled'

export default function Repositories() {
  const history = useHistory()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    let repoName = localStorage.getItem('repoNames')
    if(repoName){
      repoName = JSON.parse(repoName)
      setRepos(repoName)
      localStorage.clear()
    } else {
      history.push('/')
    }
  }, [])
  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>
      <S.List>
        {repos.map((repo, i) => <S.ListItem key={i}>Repositório: {repo}</S.ListItem> )}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  )
}