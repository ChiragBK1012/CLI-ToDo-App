import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const todos = [];

const showMenu = () => {
    console.log("\nTo-Do List Application");
    console.log("1. View Tasks");
    console.log("2. Add a Task");
    console.log("3. Remove a Task");
    console.log("4. Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = input => {
    switch (input.trim()) {
        case "1":
            viewTasks();
            break;

        case "2":
            rl.question("\nEnter the task: ", task => {
                todos.push(task.trim());
                console.log(`Task "${task.trim()}" added.`);
                showMenu();
            });
            break;

        case "3":
            rl.question("\nEnter the task number to remove: ", num => {
                const index = parseInt(num.trim(), 10) - 1;
                if (index >= 0 && index < todos.length) {
                    const removed = todos.splice(index, 1);
                    console.log(`Task "${removed}" removed.`);
                } else {
                    console.log("Invalid task number.");
                }
                showMenu();
            });
            break;

        case "4":
            console.log("\nExiting...");
            rl.close();
            break;

        default:
            console.log("\nInvalid option. Please try again.");
            showMenu();
            break;
    }
};

const viewTasks = () => {
    if (todos.length === 0) {
        console.log("\nNo tasks available.");
    } else {
        console.log("\nYour Tasks:");
        todos.forEach((task, index) => {
            console.log(`${index + 1}) ${task}`);
        });
    }
    showMenu();
};

showMenu();
