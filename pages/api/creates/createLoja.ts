import { NextApiRequest, NextApiResponse } from "next";
import { LojaService } from "../../../lib/services/LojaService";
import { db } from "../../../prisma/db";

const lojaService = new LojaService(db);

export default async function handleCreateLoja(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newLoja = await lojaService.create(
    req.body.nome,
    req.body.telefone,
    req.body.email,
    req.body.coordenadas
  );
  return res.status(201).json(newLoja);
}
