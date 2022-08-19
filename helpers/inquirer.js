require('colors');
const inquirer  = require('inquirer');


const optionMenu = [
    {
        type : 'list',
        name : 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: '1. Create a task'
            },
            {
                value: '2',
                name: '2. List tasks'
            },
            {
                value: '3',
                name: '3. List completed tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete tasks'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ] 
    }
];


const inquirerMenu = async() => {

    console.clear();
    console.log(`============================`.blue);
    console.log(`     Select an option`.blue);
    console.log(`============================\n`.blue);

   const {option} = await inquirer.prompt(optionMenu);

   return option;

}

const pause = async() => {

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


module.exports = {
    inquirerMenu,
    pause
}