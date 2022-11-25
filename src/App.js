import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar react',
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas)); //salva no local storage
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando tarefa</h1>
        <label>Nome da tarefa :</label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
