require('colors');
const { saveDB, readDB } = require('./helpers/saveFile');
const { inquirerMenu, pause, readInput, listTaskDelete, confirm, showChecklist } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const Task = require('./models/task');






// const { showMenu, pause } = require('./helpers/mensajes');

console.clear();


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        //Set the task
        tasks.loadTasksFromArray(tasksDB)
    }


    do {
        //print the menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //create option
                const descr = await readInput('Description:');
                tasks.createTask(descr);
                break;

            case '2':
                tasks.fullListing();
                break;

            case '3': //Completed
                tasks.listPendingCompleted(true);
                break;

            case '4': //Pending
                tasks.listPendingCompleted(false);
                break;
            
            case '5': //Completed | Pending 
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
            break;

            case '6': //Delete
                const id = await listTaskDelete(tasks.listArr);
                if (id !== '0') {
                    const ok = await
                        console.log('\n');
                    confirm('Are you shure?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('\n')
                        console.log(Task.descr)
                        console.log(`Task deleted`)
                    }
                }
                break;
        }

        saveDB(tasks.listArr)

        await pause(tasks.listArr);

    } while (opt !== '0');

    //pause();
}

main();