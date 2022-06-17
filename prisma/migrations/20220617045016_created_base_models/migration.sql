-- CreateTable
CREATE TABLE "Jogo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT,
    "precoUnidade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fornece" (
    "forneceId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Fornece_pkey" PRIMARY KEY ("forneceId","jogoId")
);

-- CreateTable
CREATE TABLE "Loja" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" INTEGER,
    "coordenadas" INTEGER NOT NULL,
    "cidadeId" TEXT NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "estado" TEXT,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Possui" (
    "lojaId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Possui_pkey" PRIMARY KEY ("lojaId","jogoId")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "salario" DOUBLE PRECISION NOT NULL,
    "telefone" INTEGER,
    "lojaId" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gerente" (
    "funcionarioId" TEXT NOT NULL,
    "turno" TEXT NOT NULL,

    CONSTRAINT "Gerente_pkey" PRIMARY KEY ("funcionarioId")
);

-- CreateTable
CREATE TABLE "Atendente" (
    "funcionarioId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Atendente_pkey" PRIMARY KEY ("funcionarioId")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Critico" (
    "clienteId" TEXT NOT NULL,
    "notaIndividual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Critico_pkey" PRIMARY KEY ("clienteId")
);

-- CreateTable
CREATE TABLE "Escrita" (
    "criticoId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,

    CONSTRAINT "Escrita_pkey" PRIMARY KEY ("criticoId","reviewId")
);

-- CreateTable
CREATE TABLE "Compra" (
    "preco" DOUBLE PRECISION NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "clienteId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("clienteId","jogoId")
);

-- AddForeignKey
ALTER TABLE "Fornece" ADD CONSTRAINT "Fornece_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fornece" ADD CONSTRAINT "Fornece_forneceId_fkey" FOREIGN KEY ("forneceId") REFERENCES "Fornecedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loja" ADD CONSTRAINT "Loja_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Possui" ADD CONSTRAINT "Possui_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Possui" ADD CONSTRAINT "Possui_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gerente" ADD CONSTRAINT "Gerente_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendente" ADD CONSTRAINT "Atendente_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Critico" ADD CONSTRAINT "Critico_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escrita" ADD CONSTRAINT "Escrita_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escrita" ADD CONSTRAINT "Escrita_criticoId_fkey" FOREIGN KEY ("criticoId") REFERENCES "Critico"("clienteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
