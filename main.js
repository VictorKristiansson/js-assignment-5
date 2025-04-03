
//ACCOUNT
const account = {
    balance : 1000,
    accountName : "Pablo Escobar",

    getBalance: function() {
        alert(`Your balance is: $${this.balance}`);
    },

    getName: function() {
        alert(`Account name: ${this.accountName}`);
    }
};

//THE ATM FUNCTION
function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice!\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4.) Get account name\n 5.) Exit\n"
        )
    );

    switch (message) {
        
        case 1: 
            account.getBalance();
            break;
        
        case 2: 
        
        case 3:

        case 4:
            account.getName();
            break;
        
        case 5: 
            break;

    }
}

atm()