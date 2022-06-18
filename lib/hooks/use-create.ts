import { useMutation, useQueryClient } from "react-query";

const createCliente = (data: {
  nome: String;
  telefone: String;
  email: String;
}) =>
  fetch("/api/creates/createCliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
    }),
  }).then((res) => res.json());

export const useCreateCliente = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(
    "createCliente",
    ({
      nome,
      telefone,
      email,
    }: {
      nome: string;
      telefone: string;
      email: string;
    }) => createCliente({ nome, telefone, email }),
    {
      onSuccess: (_data) => {
        onSuccess();
        queryClient.invalidateQueries(["creates"]);
      },
    }
  );
};

const createLoja = (data: {
  nome: String;
  telefone: String;
  email: String;
  coordenadas: String;
}) =>
  fetch("/api/creates/createLoja", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      coordenadas: data.coordenadas,
    }),
  }).then((res) => res.json());

export const useCreateLoja = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(
    "createLoja",
    ({
      nome,
      telefone,
      email,
      coordenadas,
    }: {
      nome: string;
      telefone: string;
      email: string;
      coordenadas: string;
    }) => createLoja({ nome, telefone, email, coordenadas }),
    {
      onSuccess: (_data) => {
        onSuccess();
        queryClient.invalidateQueries(["creates"]);
      },
    }
  );
};
