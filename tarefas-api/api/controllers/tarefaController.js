const tarefaController = {
  listarTarefas: (req, res) => res.send("listar"),

  criarTarefa: (req, res) => res.send("criar"),

  buscarTarefa: (req, res) => res.send("buscar"),

  atualizarTarefa: (req, res) => res.send("atualizar"),

  deletarTarefa: (req, res) => res.send("deletar")
};

export default tarefaController;