import express from 'express';
import { reset, getBalance, handleEvent } from '../controllers/accountController';

const router = express.Router();

router.post('/reset', reset);
router.get('/balance', getBalance);
router.post('/event', handleEvent);

export default router;
