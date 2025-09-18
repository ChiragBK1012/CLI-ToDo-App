# ✅ CLI To-Do App

A simple **Command Line To-Do Application** built with Node.js.
This app lets you add, view, and delete tasks directly from your terminal, with persistence using a JSON file.

---

## ✨ Features
- ✍️ Add new tasks
- 👀 View all tasks
- ❌ Delete tasks by number
- 💾 Persistent storage using a JSON file
- 🖥️ Simple CLI interface

---

## 🛠️ Tech Stack
- **Node.js** – Runtime environment  
- **Readline** – Handling user input in CLI  
- **File System (fs)** – Storing tasks in JSON  

---

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/ChiragBK1012/CLI-ToDo-App.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd CLI-ToDo-App
   ```

3. **Run the app**
   ```bash
   node app.js
   ```

---

## 📂 Project Structure
```
CLI-ToDo-App/
├── app.js            # Main application file
├── todos.json        # Stores tasks persistently
├── package.json      # Node.js project metadata
├── package-lock.json # Dependency lock file
├── .gitignore        # Ignored files
└── README.md         # Project documentation
```

---

## ▶️ Usage
When you run the app, you’ll see a menu like this:

```
To-Do List Application
1. View Tasks
2. Add a Task
3. Remove a Task
4. Exit
Choose an option:
```

- Enter `1` to view tasks  
- Enter `2` to add a task  
- Enter `3` to remove a task by its number  
- Enter `4` to exit the program  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

### ❤️ Thank You for checking out this project!
