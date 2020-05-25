import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import * as S from './styled'

function Home(props) {
  const [user, setUser] = useState('')
  const history = useHistory();
  const [error, setError] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(res => {
      const repos = res.data
      const reposName = []

      repos.map(repo => reposName.push(repo.name))

      localStorage.setItem('repoNames', JSON.stringify(reposName))
      setError(false)
      history.push('/repositories')
    })
    .catch(err => {
      setError(true)
    })
  }
  return (
    <S.Container>
      <S.Input id="user" name="user" className="user-input" type="text" placeholder="Nome" value={user} onChange={e => setUser(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      { error ? <S.ErrorMesg>Usuário não encontrado.</S.ErrorMesg> : '' }
    </S.Container>
  );
}

export default Home;
