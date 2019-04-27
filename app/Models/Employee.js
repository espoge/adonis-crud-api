'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {


degree(){
    return this.hasOne('App/Models/Degree','degree_id','id')
}
genre(){
    return this.hasOne('App/Models/Genre','genre_id','id')
}}

module.exports = Employee
