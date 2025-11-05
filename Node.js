import express from "express";
const app = express();
app.use(express.json());

const pizzas = [];

app.get("/cardapio", (req, res) => res.json(pizzas));
app.post("/cardapio", (req, res) => {
  pizzas.push(req.body);
  res.status(201).json({ message: "Pizza adicionada!" });
});
app.delete("/cardapio/:id", (req, res) => {
  const index = pizzas.findIndex(p => p.id === req.params.id);
  if (index !== -1) pizzas.splice(index, 1);
  res.json({ message: "Pizza excluída!" });
});

app.listen(10000, () => console.log("API rodando na porta 10000"));
