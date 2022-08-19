const Task = require('./task')
/**
 *  _list:
 *   { 'uuid-13545335-34515: { id:12, descr:dkdlajs, completed: 95646} }
 */

class Tasks {

    //_list = {};

    constructor() {

        this._list = {};

    }

    createTask(descr = '') {

        const task = new Task(descr);

        this._list.task.id = task;
    }


}

module.exports = Tasks;