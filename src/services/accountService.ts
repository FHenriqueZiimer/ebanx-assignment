import { Account } from '../models/account';

class AccountService {
  private accounts: { [key: string]: Account } = {};

  reset() {
    this.accounts = {};
  }

  getBalance(accountId: string): number | null {
    const account = this.accounts[accountId];
    return account ? account.balance : null;
  }

  deposit(destination: string, amount: number): Account {

    let account = this.accounts[destination];
    if (!account) {
      account = { id: destination, balance: 0 };
      this.accounts[destination] = account;
    }

    account.balance += amount;
    return account;
  }

  withdraw(origin: string, amount: number): Account | null {
    const account = this.accounts[origin];
    if (!account || account.balance < amount) {
      return null;
    }

    account.balance -= amount;
    return account;
  }

  transfer(origin: string, amount: number, destination: string): { origin: Account; destination: Account } | null {
    const originAccount = this.accounts[origin];
    if (!originAccount || originAccount.balance < amount) {
      return null;
    }

    let destinationAccount = this.accounts[destination];
    if (!destinationAccount) {
      destinationAccount = { id: destination, balance: 0 };
      this.accounts[destination] = destinationAccount;
    }

    originAccount.balance -= amount;
    destinationAccount.balance += amount;

    return { origin: originAccount, destination: destinationAccount };
  }
}

export const accountService = new AccountService();
