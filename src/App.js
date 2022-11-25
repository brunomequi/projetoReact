import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
    alert(`Olá ${nome}, seu e-mail é ${email} e você tem ${idade} anos`);
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuário</h1>
        <label>Nome :</label>
        <br />
        <input
          placeholder="Digite seu nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>E-mail :</label>
        <br />
        <input
          placeholder="Digite seu E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Idade :</label>
        <br />
        <input
          placeholder="Digite sua idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />
      <div>
        <span>Bem vindo {user.nome}</span>
        <br />
        <span>Sua idade {user.email}</span>
        <br />
        <span>Seu e-mail {user.idade}</span>
      </div>
    </div>
  );
}

export default App;
