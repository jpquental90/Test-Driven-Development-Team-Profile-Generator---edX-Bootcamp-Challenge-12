const Employee = require('./Employee');

// Intern class extends Employee class
class Intern extends Employee {
    // Constructor to initialize Intern-specific property
    constructor(name, id, email, school) {
        // Calls the constructor of the parent class (Employee)
        super(name, id, email);
        this.school = school;
    }

    // Method to get the role (overrides the getRole method in the parent class)
    getRole() {
        return 'Intern';
    }

    // Additional method specific to Intern
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;