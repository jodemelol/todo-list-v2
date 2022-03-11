import { Text, Checkbox, CloseButton, Stack } from "@chakra-ui/react";


export function Task({ tasks, deleteTask,changeCompleted }) {

  return (
    <Stack
      direction="column"
      justify="end"
      alignItems="center"
      spacing={2}
    >
      {tasks &&
        tasks.map(({ text, id, completed }) => (
          <Stack key={id} direction="row" alignItems="center">
             {!completed? <Text>{text}</Text>:<Text as="s">{text}</Text>} 
            <CloseButton color="red.400" onClick={() => deleteTask(id)}/>
            <Checkbox bg="whiteAlpha.500" onChange={() => changeCompleted(id)}/>
          </Stack>
        ))}
    </Stack>
  );
}
