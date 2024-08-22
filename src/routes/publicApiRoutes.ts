import { Router } from 'express';
import { getProducers} from '../controllers/producerController';
import { getNodes } from '../controllers/nodeController';
import { getFees } from '../controllers/feeController';
import { getBundles } from '../controllers/bundleController';
import { getProposals } from "../controllers/proposalController";
import { getScores } from '../controllers/scoreController';

const router = Router();

router.get('/producers', getProducers);
router.get('/nodes', getNodes);
router.get('/fees', getFees);
router.get('/bundles', getBundles);
router.get('/proposal', getProposals);
router.get('/scores', getScores);

export default router;