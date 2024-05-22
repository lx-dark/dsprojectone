import { db } from "../database/db.js";

export const getPeople = (_, res) => {
  const q = "SELECT * FROM peoplesdata";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addPerson = (req, res) => {
  const q = "INSERT INTO peoplesdata(`name`, `cpf`, `rg`, `birthdate`, `gender`, `phonenumber`, `cep`, `street`, `neighborhood`, `city`, `state`, `housenumber`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.cpf,
    req.body.rg,
    req.body.birthdate,
    req.body.gender,
    req.body.phonenumber,
    req.body.cep,
    req.body.street,
    req.body.neighborhood,
    req.body.city,
    req.body.state,
    req.body.housenumber
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updatePerson = (req, res) => {
  const q =
    "UPDATE peoplesdata SET `name` = ?, `cpf` = ?, `rg` = ?, `birthdate` = ?, `gender` = ?, `phonenumber` = ?, `cep` = ?, `street` = ?, `neighborhood` = ?, `city` = ?, `state` = ?, `housenumber` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.cpf,
    req.body.rg,
    req.body.birthdate,
    req.body.gender,
    req.body.phonenumber,
    req.body.cep,
    req.body.street,
    req.body.neighborhood,
    req.body.city,
    req.body.state,
    req.body.housenumber
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deletePerson = (req, res) => {
  const q = "DELETE FROM peoplesdata WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
