import { Request, Response } from 'express';
import { accountService } from '../services/accountService';

export const reset = (req: Request, res: Response) => {
  try {
    accountService.reset();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Failed to reset accounts' });
  }
};

export const getBalance = (req: Request, res: Response) => {
  const accountId = req.query.account_id as string;

  if (!accountId) {
    return res.status(400).json({ error: 'Account ID is required' });
  }

  const balance = accountService.getBalance(accountId);
  
  if (balance === null) {
    return res.status(404).json(0);
  }
  
  res.status(200).json(balance);
};

export const handleEvent = (req: Request, res: Response) => {
  const { type, destination, amount, origin } = req.body;

  if (!type || !['deposit', 'withdraw', 'transfer'].includes(type)) {
    return res.status(400).json({ error: 'Invalid event type' });
  }

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than zero' });
  }

  try {
    if (type === 'deposit') {
      if (!destination) {
        return res.status(400).json({ error: 'Destination account ID is required' });
      }
      const account = accountService.deposit(destination, amount);
      return res.status(201).json({ destination: account });

    } else if (type === 'withdraw') {
      if (!origin) {
        return res.status(400).json({ error: 'Origin account ID is required' });
      }
      const account = accountService.withdraw(origin, amount);
      if (!account) {
        return res.status(404).json(0);
      }
      return res.status(201).json({ origin: account });

    } else if (type === 'transfer') {
      if (!origin || !destination) {
        return res.status(400).json({ error: 'Both origin and destination account IDs are required' });
      }
      const result = accountService.transfer(origin, amount, destination);
      if (!result) {
        return res.status(404).json(0);
      }
      return res.status(201).json(result);

    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};
