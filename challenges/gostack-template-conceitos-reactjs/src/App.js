import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./styles.css";
import generateName from "./services/nameGenerator";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const newRepository = {
      title: generateName(),
      owner: generateName(),
    };
    const response = await api.post("repositories", newRepository);
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);
    const newRepositoryList = repositories.filter(
      (repository) => repository.id !== id
    );
    setRepositories(newRepositoryList);
  }

  function RepositoryItem({ repository }) {
    return (
      <li>
        {repository.title}
        <button onClick={() => handleRemoveRepository(repository.id)}>
          Remover
        </button>
      </li>
    );
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
