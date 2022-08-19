//v4 : uuidv4 con esto estamos renombrando al v4

const  {  v4 : uuidv4  }  =  require ( 'uuid' )
class Task {

    id = '';
    descr = '';
    completed = null;

    constructor(descr) {

        this.id = uuidv4();
        this.descr = descr;

    }

}

module.exports = Task;