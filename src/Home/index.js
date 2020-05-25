import React, { useState } from 'react';
import axios from 'axios'

function Home(props) {
  const [user, setUser] = useState('')
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(res => console.log(res.data))
  }
  return (
    <>
      <h1>{props.title}</h1>
      <p>{user}</p>
      <input id="user" name="user" className="user-input" type="text" placeholder="Nome" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default Home;
