import { ChakraProvider, Container } from "@chakra-ui/react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuthState } from "./context/auth-context";
import Alerts from "./components/Alerts";

export default function App() {
  const { token } = useAuthState();
  return (
    <ChakraProvider>
      <Container marginTop={4}>
          <Alerts />
        {token ? <Dashboard /> : <Login />}
      </Container>
    </ChakraProvider>
  );
}

