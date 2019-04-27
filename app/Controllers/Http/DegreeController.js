'use strict'
const Degree = use('App/Models/Degree')
class DegreeController {
  async list(){
    const list = await Degree.all()
    return await list
  }
}

module.exports = DegreeController
