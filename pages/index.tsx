import Head from "next/head";
import { ClienteForm } from "../lib/components/ClienteForm";
import { LojaForm } from "../lib/components/LojaForm";
import styles from "../styles/Index.module.css";

export default function IndexPage() {
  return (
    <main className={styles.container}>
      <Head>
        <title>GameStore / PBD</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://i.postimg.cc/gjQF5Zjm/icons8-joystick-64.png"
        />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          <a>Game</a>Store!
        </h1>

        <div>
          <p className={styles.description}>Cadastrar loja: </p>
          <br />
          <LojaForm />
        </div>
        <div>
          <p className={styles.description}>Cadastrar cliente: </p>
          <br />
          <ClienteForm />
        </div>
      </div>
    </main>
  );
}
