class Employee {
    // Constructor to initialize properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Getter methods for each property
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;