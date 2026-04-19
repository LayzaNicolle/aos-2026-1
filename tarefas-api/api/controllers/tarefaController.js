import * as tarefaService from '../services/tarefaService.js';

const tarefaController = {
  listarTarefas: async (req, res) => {
    const tarefas = await tarefaService.listarTarefas();
    res.json(tarefas);
  },

  criarTarefa: async (req, res) => {
    const { descricao, concluida } = req.body;
    if (!descricao) return res.status(400).json({ erro: 'descricao é obrigatória' });
    const tarefa = await tarefaService.criarTarefa({ descricao, concluida });
    res.status(201).json(tarefa);
  },

  buscarTarefa: async (req, res) => {
    const tarefa = await tarefaService.buscarTarefa(req.params.objectId);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
  },

  atualizarTarefa: async (req, res) => {
    const tarefa = await tarefaService.atualizarTarefa(req.params.objectId, req.body);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
  },

  deletarTarefa: async (req, res) => {
    const removida = await tarefaService.removerTarefa(req.params.objectId);
    if (!removida) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ mensagem: 'Tarefa deletada com sucesso' });
  }
};

export default tarefaController;