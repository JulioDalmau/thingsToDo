require('colors');
const { yellow } = require('colors');
const inquirer = require('inquirer');


const optionMenu = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create a task`
            },
            {
                value: '2',
                name: `${'2.'.green} List tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete tasks`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            }
        ]
    }
];


const inquirerMenu = async () => {

    console.clear();
    console.log(`============================`.blue);
    console.log(`     Select an option`.white);
    console.log(`============================\n`.blue);

    const { option } = await inquirer.prompt(optionMenu);

    return option;

}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.blue} to continue`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question)
}

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'descr',
            message,
            validate(value) {
                if (value.length === 0) {
                    return `Please, enter a value `;
                }
                return true
            }
        }
    ]

    const { descr } = await inquirer.prompt(question);
    return descr;
}

const listTaskDelete = async (tasks = []) => {

    const choices = tasks.map((task, i) => {

        const index = `${i + 1}`.yellow
        
        return {
            value: task.id,
            name: `${index} ${task.descr}`
        }
    });

    choices.unshift({
        value: '0',
        name: `${('0').yellow} Cancel`
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'delete',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const showChecklist = async (tasks = []) => {

    const choices = tasks.map((task, i) => {

        const index = `${i + 1}`.yellow
        
        return {
            value: task.id,
            name: `${index} ${task.descr}`,
            checked: (task.completed) ? true : false
        }
    });

    
    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selections',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(questions);
    return ids;
}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTaskDelete,
    confirm,
    showChecklist

}



