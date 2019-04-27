'use strict'
const Employee = use('App/Models/Employee')

class EmployeeController {
    async list(){
        const employee = await Employee
        .query()
        .with('degree')
        .with('genre')
        .fetch()
        return await employee
    }

    async employee({params}){
        const employee = await Employee
        .query()
        .with('degree')
        .with('genre')
        .where('id',params.id)
        .fetch()
        return employee
    }

    async add({request}){
        const data = request.only(['name', 'surname','genre_id','degree_id','age'])
        return await Employee.create(data)
    }
    async update({request, params}){
        const employee = await Employee.find(params.id)
        const employeeData = request.all()
        await employee.merge(employeeData)
        return employee.save()

    }

    async delete({params}){
        const employee = await Employee.findOrFail(params.id)
        return employee.delete()
    }
    async search({request}){
        const input = request.input('input')
          const result = await Employee
        .query()
        .where('name', 'like','%'+input+'%')
        .orWhere('surname', 'like','%'+input+'%')
        .with('degree')
        .with('genre')
        .fetch()
        return await result
     
    }
}
module.exports = EmployeeController
