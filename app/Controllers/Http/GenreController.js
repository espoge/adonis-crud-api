'use strict'
const Genre = use('App/Models/Genre')
class GenreController {

    async list(){
        const list = await Genre.all()
        return await list
    }
}

module.exports = GenreController
