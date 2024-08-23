"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountService_1 = require("../services/accountService");
beforeEach(() => {
    accountService_1.accountService.reset();
});
test('Deposit creates account and updates balance', () => {
    const account = accountService_1.accountService.deposit('100', 10);
    expect(account.balance).toBe(10);
});
test('Get balance returns null for non-existing account', () => {
    const balance = accountService_1.accountService.getBalance('200');
    expect(balance).toBeNull();
});
test('Withdraw updates balance', () => {
    accountService_1.accountService.deposit('100', 10);
    const account = accountService_1.accountService.withdraw('100', 5);
    expect(account === null || account === void 0 ? void 0 : account.balance).toBe(5);
});
test('Create multiple accounts and verify balances', () => {
    const account1 = accountService_1.accountService.deposit('101', 50);
    const account2 = accountService_1.accountService.deposit('102', 30);
    expect(account1.balance).toBe(50);
    expect(account2.balance).toBe(30);
});
test('Withdraw more than the balance should not allow negative balance', () => {
    accountService_1.accountService.deposit('103', 20);
    const account = accountService_1.accountService.withdraw('103', 30);
    expect(account).toBeNull();
    expect(accountService_1.accountService.getBalance('103')).toBe(20);
});
test('Transfer with insufficient funds should not alter balances', () => {
    accountService_1.accountService.deposit('201', 10);
    const result = accountService_1.accountService.transfer('201', 15, '202');
    expect(result).toBeNull();
    expect(accountService_1.accountService.getBalance('201')).toBe(10);
    expect(accountService_1.accountService.getBalance('202')).toBeNull();
});
test('Transfer between existing accounts updates balances correctly', () => {
    accountService_1.accountService.deposit('301', 50);
    accountService_1.accountService.deposit('302', 20);
    const result = accountService_1.accountService.transfer('301', 15, '302');
    expect(result).not.toBeNull();
    expect(result === null || result === void 0 ? void 0 : result.origin.balance).toBe(35);
    expect(result === null || result === void 0 ? void 0 : result.destination.balance).toBe(35);
});
test('Create an account and retrieve balance', () => {
    const account = accountService_1.accountService.deposit('401', 100);
    expect(account.id).toBe('401');
    expect(account.balance).toBe(100);
    const balance = accountService_1.accountService.getBalance('401');
    expect(balance).toBe(100);
});
test('Reset should clear all accounts', () => {
    accountService_1.accountService.deposit('501', 200);
    accountService_1.accountService.reset();
    const balance = accountService_1.accountService.getBalance('501');
    expect(balance).toBeNull();
});
