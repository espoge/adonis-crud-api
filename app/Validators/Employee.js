'use strict'

class Employee {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      'name': 'required',
      'surname': 'required'
    }
  }
  get messages() {
    return {
      'name.required': 'Error: {{ field }} is required.',
      'surname.required': 'Error: {{ field }} is required.',
     
    }
    
  }
}

module.exports = Employee
