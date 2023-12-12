import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Orders from "./componenets/Orders/Orders";
import MainPage from "./componenets/MainPage/MainPage";

function App() {
  return (
    <MantineProvider>
      <MainPage></MainPage>
    </MantineProvider>
  );
}

export default App;
