import Head from "next/head";
import { ClienteForm } from "../lib/components/ClienteForm";
import { LojaForm } from "../lib/components/LojaForm";
import { ClienteService } from "../lib/services/ClienteService";
import { LojaService } from "../lib/services/LojaService";
import { db } from "../prisma/db";
import styles from "../styles/Index.module.css";

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"];

const clienteService = new ClienteService(db);
const lojaService = new LojaService(db);

export default function IndexPage(props: Props) {
  return (
    <main className={styles.container}>
      <Head>
        <title>GameStore / PBD</title>
        <meta
          name="description"
          content="initial-scale=1.0, width=device-width"
        />
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
          <LojaForm />
        </div>
        <div>
          <p className={styles.description}>Cadastrar cliente: </p>
          <ClienteForm />
        </div>

        <section className={styles.sidebyside}>
          <section className={styles.clientes}>
            <strong>Clientes:</strong>
            <br />
            {props.clientes.map((cliente) => (
              <div key={cliente.id}>- {cliente.nome}</div>
            ))}
          </section>

          <section className={styles.lojas}>
            <strong>Lojas:</strong>
            <br />
            {props.lojas.map((loja) => (
              <div key={loja.id}>{loja.nome} -</div>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const clientes = await clienteService.list();
  const lojas = await lojaService.list();

  return {
    props: {
      clientes: await Promise.all(
        clientes.map(async (cliente) => ({
          ...cliente,
        }))
      ),
      lojas: await Promise.all(
        lojas.map(async (loja) => ({
          ...loja,
        }))
      ),
    },
  };
}
