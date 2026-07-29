class bankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  checkBalance() {
    console.log(`Balance: ${this.balance}\n`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
    console.log(`Balance: ${this.balance}\n`);
  }

  withDraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance: ${this.balance}\n`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
      console.log(`Balance: ${this.balance}\n`);
    }
  }
}

let manojObj = new bankAccount("manoj", 100000);
let manuObj = new bankAccount("manu", 100000);

manojObj.deposit(1000);

manojObj.withDraw(100500);
manuObj.withDraw(100500);
