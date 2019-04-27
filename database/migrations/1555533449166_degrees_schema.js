'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DegreesSchema extends Schema {
  up () {
    this.create('degrees', (table) => {
      table.increments()
      table.string('description', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('degrees')
  }
}

module.exports = DegreesSchema
