// ACCOUNT
const account = {
    balance: 1000,
    accountName: "Pablo Escobar",

    getBalance: function () {
        alert(`Your balance is: $${this.balance}`);
    },

    getName: function () {
        alert(`Account name: ${this.accountName}`);
    },

    deposit: function(){
        let depositAmount = parseFloat(prompt("Enter a deposit amount"));

        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid deposit amount");
            return;
        }

        else {
            this.balance = this.balance + depositAmount;
            alert(`You deposited $${depositAmount}. Your new balance is $${this.balance}`);
        }
    },

    withdraw: function(){
        let withdrawAmount = parseFloat(prompt("Enter withdrawal amount:"));

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Please enter a valid withdraw amount");
            return;
        }

        if (withdrawAmount > this.balance) {
            alert("Error! Insufficient funds!")
            return;
        }

        else {
            this.balance = this.balance - withdrawAmount;
            alert(`You withdrew $${withdrawAmount}. Your new balance is $${this.balance}`);
        }
    }
};

// THE ATM FUNCTION
function atm() {
    while (true) {  
        let message = parseFloat(
            prompt(
                "Welcome to the ATM!\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4.) Get account name\n 5.) Exit\n"
            )
        );

        if (isNaN(message)) {
            alert("Please enter a valid number!");
            continue;
        }

        // CASES
        switch (message) {
            case 1:
                account.getBalance();
                break;

            case 2:
                account.deposit();
                break;

            case 3:
                account.withdraw();
                break;

            case 4:
                account.getName();
                break;

            case 5:
                alert("Goodbye!");
                return;

            
        }
    }
}

atm();
