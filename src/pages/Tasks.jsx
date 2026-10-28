import { useEffect, useState } from "react";
import api from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to load tasks"
        );
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>

      {error && <p>{error}</p>}

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
