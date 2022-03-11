import { Box, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./Components/Form";
import { Task } from "./Components/Task";
import { v4 as uuidv4 } from "uuid";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    id: uuidv4(),
    text: "",
    completed: false,
  });

  const { text } = task;

  const changeTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const changeCompleted = (id) => {
    const arrTasks = [...tasks];
    const newArr = arrTasks.find((task) => task.id === id);
    newArr.completed = !newArr.completed;
    setTasks(arrTasks);
  };

  const submitTask = (e) => {
    e.preventDefault();
    if (text !== "") {
      addTask(task);
      setTask({ id: uuidv4(), text: "", completed: false });
    }
  };
  console.log(task);
  console.log(tasks);
  return (
    <Container maxW="container.sm" centerContent>
      <Box maxW="sm" bg="cyan.100" borderRadius="xl" mt="8">
        <Text align="center" fontSize="3xl" p="4">
          Todo-list
        </Text>
        <Form changeTask={changeTask} submitTask={submitTask} task={task} />
        <Task
          tasks={tasks}
          deleteTask={deleteTask}
          changeCompleted={changeCompleted}
        />
      </Box>
    </Container>
  );
}
