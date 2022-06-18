import { DB } from "../../prisma/db";

export class ClienteService {
  constructor(private readonly db: DB) {}

  async create(nome: string, telefone: string, email: string) {
    return this.db.cliente.create({
      data: {
        nome,
        telefone,
        email,
      },
    });
  }
}
