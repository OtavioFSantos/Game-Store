const { PrismaClient } = require("@prisma/client");

async function run() {
  const prisma = new PrismaClient();

  /*const loja = await prisma.loja.create({
    data: {
      nome: "BrutalKill",
      telefone: 32998666,
      email: "brutal@gmail.com",
      coordenadas: 44489562,
      cidadeId: "fe51e3b5-e060-4e20-9f24-79be15c3749d",
    },
  });
  console.log(loja);*/

  /*const cidade = await prisma.cidade.create({
    data: {
      nome: "Santa Catarina",
      estado: "Rio Grande do Sul",
    },
  });
  console.log(cidade);*/

  /*const jogo = await prisma.jogo.create({
    data: {
      nome: "Elden Ring",
      genero: "Action RPG",
      precoUnidade: 249.9,
    },
  });
  console.log(jogo);*/

  /*const possui = await prisma.possui.create({
    data: {
      jogoId: "b3fc594f-bd4f-4856-b846-889cc7bc1582",
      lojaId: "43e2f555-72fe-469f-bf93-e46551f1717d",
    },
  });*/
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
