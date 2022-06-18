import { DB } from "../../prisma/db";

export class LojaService {
  constructor(private readonly db: DB) {}

  async create(
    nome: string,
    telefone: string,
    email: string,
    coordenadas: string
  ) {
    return this.db.loja.create({
      data: {
        nome,
        telefone,
        email,
        coordenadas,
      },
    });
  }

  async list() {
    return this.db.loja.findMany({
      select: {
        id: true,
        nome: true,
        telefone: true,
        email: true,
        coordenadas: true,
      },
    });
  }
}
