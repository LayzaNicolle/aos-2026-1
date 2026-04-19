import { Router } from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = Router();

router.get('/', tarefaController.listarTarefas);
router.get('/:objectId', tarefaController.buscarTarefa);
router.post('/', tarefaController.criarTarefa);
router.put('/:objectId', tarefaController.atualizarTarefa);
router.delete('/:objectId', tarefaController.deletarTarefa);

export default router;