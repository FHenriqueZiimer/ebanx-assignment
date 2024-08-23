"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountService = void 0;
class AccountService {
    constructor() {
        this.accounts = {};
    }
    reset() {
        this.accounts = {};
    }
    getBalance(accountId) {
        const account = this.accounts[accountId];
        return account ? account.balance : null;
    }
    deposit(destination, amount) {
        let account = this.accounts[destination];
        if (!account) {
            account = { id: destination, balance: 0 };
            this.accounts[destination] = account;
        }
        account.balance += amount;
        return account;
    }
    withdraw(origin, amount) {
        const account = this.accounts[origin];
        if (!account || account.balance < amount) {
            return null;
        }
        account.balance -= amount;
        return account;
    }
    transfer(origin, amount, destination) {
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
exports.accountService = new AccountService();
