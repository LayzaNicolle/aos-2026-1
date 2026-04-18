import { Router } from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = Router();

router.get('/', tarefaController.listarTarefas);
router.post('/', tarefaController.criarTarefa);

export default router;