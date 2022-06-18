import { NextApiRequest, NextApiResponse } from "next";
import { ClienteService } from "../../../lib/services/ClienteService";
import { db } from "../../../prisma/db";

const clienteService = new ClienteService(db);

export default async function handleCreateCliente(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newCliente = await clienteService.create(
    req.body.nome,
    req.body.telefone,
    req.body.email
  );
  return res.status(201).json(newCliente);
}
