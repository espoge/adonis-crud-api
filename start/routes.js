'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/api/employee','EmployeeController.list')
Route.get('/api/employee/:id','EmployeeController.employee')
Route.post('/api/employee','EmployeeController.add').validator('Employee');
Route.post('/api/search','EmployeeController.search')

Route.patch('/api/employee/:id','EmployeeController.update').validator('Employee');
Route.delete('/api/employee/:id','EmployeeController.delete')

Route.get('/api/genre','GenreController.list')
Route.get('/api/degree','DegreeController.list')



