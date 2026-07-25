const bankAccount = {
  bank: "State Bank",
  checkBalance() {
    console.log(`Balance: ₹${this.balance}`);
  },
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}. Balance: ₹${this.balance}`);
  },
  withDraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance: ₹${this.balance}`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ₹${amount}. Balance: ₹${this.balance}`);
    }
  },
};

const manojAccount = {
  accountHolder: "Manoj",
  balance: 10000,
};

const rahulAccount = {
  accountHolder: "Rahul",
  balance: 5000,
};

manojAccount.__proto__ = bankAccount;
rahulAccount.__proto__ = bankAccount;

manojAccount.checkBalance(); // ₹10000

manojAccount.deposit(5000);

rahulAccount.withDraw(3000);

rahulAccount.withDraw(10000);

console.log(manojAccount.bank);
console.log(rahulAccount.bank);

//The balance property exists in both the individual account objects separately.
// The this keyword used in the methods inside the bankAccount object ensures that
// the balance in fetched from the particular objects only.
