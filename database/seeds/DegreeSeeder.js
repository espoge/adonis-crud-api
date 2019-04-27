'use strict'

/*
|--------------------------------------------------------------------------
| DegreeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DegreeSeeder {
  async run () {
    await Factory.model('App/Models/Degree').createMany(4,
      ["associate degree","bachelor's degree","master's degree","doctoral degree"]
     )

  }
  
}

module.exports = DegreeSeeder
