const Employee = require('./Employee');

// Engineer class extends Employee class
class Engineer extends Employee {
    // Constructor to initialize Engineer-specific property
    constructor(name, id, email, github) {
        // Calls the constructor of the parent class (Employee)
        super(name, id, email);
        this.github = github;
    }

    // Method to get the role (overrides the getRole method in the parent class)
    getRole() {
        return 'Engineer';
    }

    // Additional method specific to Engineer
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;