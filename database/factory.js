'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

/*Factory.blueprint('App/Models/Genre', async (i, data, faker) => {
    return {
       description: faker[data]
       
    }

  })*/

  Factory.blueprint('App/Models/Degree', async (i, data, faker) => {
    //return console.log(faker[data])
   return {
      description: faker[data]
      
   }

 })
