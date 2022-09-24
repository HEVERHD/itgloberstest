//components
import { Footer, Header, Products } from "./components";
import { SocialMedia } from "./components/SocialMedia";

//styles
import "./components/styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Products />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
