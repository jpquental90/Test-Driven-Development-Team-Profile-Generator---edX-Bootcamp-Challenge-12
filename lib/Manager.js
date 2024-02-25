const Employee = require('./Employee');

// Manager class extends Employee class
class Manager extends Employee {
    // Constructor to initialize Manager-specific property
    constructor(name, id, email, officeNumber) {
        // Calls the constructor of the parent class (Employee)
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method to get the role (overrides the getRole method in the parent class)
    getRole() {
        return 'Manager';
    }

    // Additional method specific to Manager
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;