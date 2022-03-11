import { Button, Input, Stack } from "@chakra-ui/react";

export function Form({ changeTask, submitTask, task }) {
  const {text} = task;
  return (
    <form onSubmit={e=> e.preventDefault()}>
      <Stack direction="row" p="8" justifyContent="center">
        <Input
          type="text"
          placeholder="Enter a task"
          name="text"
          size="md"
          width="auto"
          bg="whiteAlpha.800"
          value={text}
          onChange={(e) => changeTask(e)}
        />
        <Button onClick={(e) => submitTask(e)}>Add</Button>
      </Stack>
    </form>
  );
}
