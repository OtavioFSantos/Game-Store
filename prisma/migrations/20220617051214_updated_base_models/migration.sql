-- DropForeignKey
ALTER TABLE "Loja" DROP CONSTRAINT "Loja_cidadeId_fkey";

-- AlterTable
ALTER TABLE "Loja" ALTER COLUMN "cidadeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Loja" ADD CONSTRAINT "Loja_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
