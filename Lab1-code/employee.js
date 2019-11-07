"use strict";

/**
 * An Employee class
 */
class Employee {
    /**
     * Constructor for Employee
     * @param {String} firstName a firstname
     * @param {String} lastName a lastname
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._salaryRecord = new Map();
    }

    /**
     * Adds the arguments to the salary record
     * @param {String} dateStr a string representing a date 
     * @param {Number} amount the amount paid
     * @returns {undefined}
     */
    addEntry(dateStr, amount) {
        // TODO implement
        this._salaryRecord.set(dateStr, amount);
    }

    /**
     * Retrieves a String that describes how much 
     * this Employee was paid on that date
     * @param {String} date a date string
     * @returns {String} text describing how much was paid
     */
    printPaymentAmount(date) {
        // TODO implement

        if (this._salaryRecord.get(date) === null) {
            return this.firstName + " " + this.lastName + " did not receive a paycheck on " + date;
        }
        return this.firstName + " " + this.lastName + " was paid " + this._salaryRecord.get(date) + " on " + date;
    }

    /**
     * Returns a String desribing the average amount paid
     * @returns {String} describes average amount for this Employee
     */
    printAveragePaycheck() {
        // TODO implement
        let sum = 0;
        for (let key of this._salaryRecord.entries()) {
            sum += key[1];
        }
        let average = sum / this._salaryRecord.size;
     
        return " Average paycheck for " + this.firstName + " " + this.lastName + " was " + average;
    }
}
// let ab = new Employee("abel", "tes");
// ab.addEntry("12", 12.23);
// console.log(ab.printPaymentAmount("12"));