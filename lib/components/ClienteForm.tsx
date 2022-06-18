import { useState } from "react";
import { useCreateCliente } from "../hooks/use-create";
import styles from "../../styles/Index.module.css";

export function ClienteForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const createCliente = useCreateCliente(() => setNome(""));

  const onSubmit = (ev) => {
    ev.preventDefault();
    setEmail("");
    setTelefone("");
    createCliente.mutate({
      nome,
      telefone,
      email,
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.center}>
      <textarea
        className={styles.textarea}
        maxLength={30}
        cols={15}
        rows={1}
        value={nome}
        placeholder="Nome"
        onChange={(ev) => setNome(ev.target.value)}
      />
      <textarea
        className={styles.textarea}
        maxLength={30}
        cols={10}
        rows={1}
        value={telefone}
        placeholder="Telefone"
        onChange={(ev) => setTelefone(ev.target.value)}
      />
      <textarea
        className={styles.textarea}
        maxLength={50}
        cols={20}
        rows={1}
        value={email}
        placeholder="Email"
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <button className={styles.button} disabled={!nome && !telefone && !email}>
        Criar
      </button>
    </form>
  );
}
