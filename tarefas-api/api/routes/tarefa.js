import { Router } from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = Router();

router.get('/', tarefaController.listarTarefas);
router.post('/', tarefaController.criarTarefa);
router.get('/:id', tarefaController.buscarTarefa);
router.put('/:id', tarefaController.atualizarTarefa);
router.delete('/:id', tarefaController.deletarTarefa);

export default router;