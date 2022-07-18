// import Login from "./Login";
// import Register from "./Register";
import { CssBaseline, Container, Paper, Box } from '@mui/material';

import StepForm from "./stepper/StepForm";
function App() {
  return (
    <>
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <StepForm />
        </Paper>
      </Container>
    </>
  );
}

export default App;
