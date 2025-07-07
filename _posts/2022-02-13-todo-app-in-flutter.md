---
title: "How to Build a ToDo App in Flutter (Beginner-Friendly Guide)"
date: 2022-02-13
categories: [Flutter, Mobile Development]
tags: [Flutter, iOS, Android]
excerpt: "Learn how to build Todo App in flutter"
author: "Saswat Saubhagya"
---

## Introduction

A **ToDo App** is one of the most common starter projects for learning any new framework or language — and Flutter is no exception. In this blog, you'll learn how to create a **simple and beautiful ToDo app using Flutter**, covering everything from project setup to state management and user interface design.

By the end of this tutorial, you'll have a working app where users can:

- Add a new task
- Mark tasks as complete
- Delete tasks
- View the task list

---

## 🛠 Prerequisites

- Flutter installed on your machine: [Flutter Installation Guide](https://docs.flutter.dev/get-started/install)
- Any IDE (VSCode or Android Studio recommended)
- Basic understanding of Dart programming language

---

## 🚀 Step 1: Create a New Flutter Project

Open your terminal and run:

```bash
flutter create todo_app
cd todo_app
```

Open the project in your preferred editor.

---

## 🧱 Step 2: Define the ToDo Model

Create a new file `lib/models/todo.dart`:

```dart
class Todo {
  String title;
  bool isDone;

  Todo({
    required this.title,
    this.isDone = false,
  });
}
```

---

## 🎨 Step 3: Build the UI

Replace the content of `lib/main.dart` with the following:

```dart
import 'package:flutter/material.dart';
import 'models/todo.dart';

void main() {
  runApp(const ToDoApp());
}

class ToDoApp extends StatelessWidget {
  const ToDoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ToDo App',
      theme: ThemeData(primarySwatch: Colors.teal),
      home: const ToDoHomePage(),
    );
  }
}

class ToDoHomePage extends StatefulWidget {
  const ToDoHomePage({super.key});

  @override
  State<ToDoHomePage> createState() => _ToDoHomePageState();
}

class _ToDoHomePageState extends State<ToDoHomePage> {
  final List<Todo> _todos = [];
  final TextEditingController _controller = TextEditingController();

  void _addTodo() {
    if (_controller.text.trim().isEmpty) return;
    setState(() {
      _todos.add(Todo(title: _controller.text.trim()));
      _controller.clear();
    });
  }

  void _toggleDone(int index) {
    setState(() {
      _todos[index].isDone = !_todos[index].isDone;
    });
  }

  void _deleteTodo(int index) {
    setState(() {
      _todos.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ToDo App')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    decoration: const InputDecoration(
                      labelText: 'Add Task',
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.add),
                  onPressed: _addTodo,
                )
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _todos.length,
              itemBuilder: (context, index) {
                final todo = _todos[index];
                return ListTile(
                  title: Text(
                    todo.title,
                    style: TextStyle(
                      decoration:
                          todo.isDone ? TextDecoration.lineThrough : null,
                    ),
                  ),
                  leading: Checkbox(
                    value: todo.isDone,
                    onChanged: (_) => _toggleDone(index),
                  ),
                  trailing: IconButton(
                    icon: const Icon(Icons.delete, color: Colors.red),
                    onPressed: () => _deleteTodo(index),
                  ),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}
```

---

## ✅ Features Covered

- Stateful widget usage
- UI building with `TextField`, `ListView`, `Checkbox`, and `ListTile`
- State management with `setState`
- Simple `Todo` model

---

## 🌟 Future Improvements

- Persistent storage using `SharedPreferences` or `Hive`
- Category filters (e.g., Today, Upcoming)
- Dark theme toggle
- Firebase integration for cloud sync

---

## 📦 Conclusion

That’s it! You now have a fully functional ToDo app built with Flutter. This project covers the core concepts and is a great stepping stone toward more complex apps. Experiment further, add animations, or explore Flutter packages to level up the app.

If you liked this guide, share it or drop a ⭐️ on the GitHub repo (coming soon!).

---

## 📚 Resources

- [Flutter Official Docs](https://flutter.dev/docs)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Flutter Packages](https://pub.dev)

---

Happy coding! 💙
