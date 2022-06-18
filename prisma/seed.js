const { PrismaClient } = require("@prisma/client");

async function run() {
  const prisma = new PrismaClient();

  // const loja = await prisma.loja.create({
  //   data: {
  //     nome: "Lolja",
  //     telefone: 32558844,
  //     email: "lolja@gmail.com",
  //     coordenadas: 84854858,
  //     cidadeId: "852b70d2-38b5-44af-aa2a-8ed14d0c1bdf",
  //   },
  // });
  // console.log(loja);

  const cidade = await prisma.cidade.create({
    data: {
      nome: "Porto Alegre",
      estado: "Rio Grande do Sul",
    },
  });
  console.log(cidade);

  // const jogo = await prisma.jogo.create({
  //   data: {
  //     nome: "Elden Ring",
  //     genero: "family",
  //     precoUnidade: 249.9,
  //   },
  // });
  // console.log(jogo);

  // const possui = await prisma.possui.create({
  //   data: {
  //     jogoId: "19b169ff-06e8-4d4b-b76f-26e02f361dbf",
  //     lojaId: "93894128-8a27-467e-9894-7b841cd2aabc",
  //   },
  // });
  // console.log(possui);

  const cliente = await prisma.cliente.create({
    data: {
      nome: "Otávio Santos",
      email: "roos@gmail.com",
      telefone: "994558822",
    },
  });
  console.log(cliente);

  // const compra = await prisma.compra.create({
  //   data: {
  //     preco: 58.6,
  //     quantidade: 2,
  //     data: new Date("2022-06-12 17:36:14"),
  //     jogoId: "19b169ff-06e8-4d4b-b76f-26e02f361dbf",
  //     clienteId: "6a7436df-f894-4730-8045-eb5c2dd7a2c3",
  //   },
  // });
  // console.log(compra);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
