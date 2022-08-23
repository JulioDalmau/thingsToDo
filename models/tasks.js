const { yellow } = require('colors');
const Task = require('./task')
/**
 *  _list:
 *   { 'uuid-13545335-34515: { id:12, descr:dkdlajs, completed: 95646} }
 */

class Tasks {

    //_list = {};
    get listArr() {

        const listA = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            listA.push(task);
        });

        return listA
    }

    constructor() {

        this._list = {};

    }

    deleteTask(id){
        if(this._list[id]){
            delete this._list[id]
        }
    }

    loadTasksFromArray(tasks = []) {

        tasks.forEach(task => {

            this._list[task.id] = task;

        });

    }

    createTask(descr = '') {

        const task = new Task(descr);
        //this is created to save task in _list and property must be inserted as an object.
        this._list[task.id] = task;
    }

    fullListing() {

        console.log(`\n`)
        this.listArr.forEach( (task, i) => {

            const idx = i + 1;
            const { descr, completed} = task;
            const status = (completed)
                            ? 'Completed'.green
                            : 'Pending'.red;

            console.log(`${(idx + '.').yellow} ${descr} :: ${status}`)


        });   
    }
    listPendingCompleted(completedIn = true) {
        
        console.log('\n')
        let counter = 0;
        this.listArr.forEach( task => {

            const {descr, completed} = task;
            const status = (completed) 
                            ? 'Completed'.green 
                            : 'Pending'.red;
            if(completedIn) {
                //Show completed
                if(completed) {
                    counter += 1;
                    console.log(`${(counter + '.').yellow} ${descr} :: ${completed.green}`);
                }
            } else {
                //Show pendings
                if (!completed) {
                    counter += 1;
                    
                    console.log(`${(counter + '.').yellow} ${descr} :: ${status}`);
                }
            }
        })
        
    }

    toggleCompleted(ids = []) {

        ids.forEach(id => {

            const task = this._list[id];
            if(!task.completed) {
                task.completed = new Date().toISOString()
            }

        })

        this.listArr.forEach(task => {

            if(!ids.includes(task.id)) {
                this._list[task.id].completed = null;
            }

        })

    }


}

module.exports = Tasks;