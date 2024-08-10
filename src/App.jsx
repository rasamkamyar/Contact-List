import Form from "./Form/FormList";
import Styles from "./index.module.css";

function App() {
  return (
    <div>
      <header className={Styles.header}>
        <h1>Connectify</h1>
        <h3>Manage your contact list easily</h3>
      </header>
      <Form />
    </div>
  );
}

export default App;
