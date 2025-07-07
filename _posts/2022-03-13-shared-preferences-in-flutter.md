---
title: "Using Shared Preferences in Flutter"
date: 2022-03-13
categories: [Flutter, Mobile Development]
tags: [Flutter, SharedPreferences, Persistence, Mobile, Dart]
excerpt: "Learn how to use shared preferences in Flutter to store simple key-value data locally. This guide covers setup, usage, and code examples for saving and retrieving data."
author: "Saswat Saubhagya"
---

# Using Shared Preferences in Flutter: A Step-by-Step Guide

Shared preferences provide a simple way to persist key-value pairs of primitive data types in Flutter apps. This is useful for storing user settings, login states, and other small pieces of data locally on the device.

---

## 1. Prerequisites

Before you begin, ensure you have:

* Flutter installed on your machine ([installation guide](https://flutter.dev/docs/get-started/install))
* A Flutter project set up
* Basic knowledge of Dart and Flutter widgets

---

## 2. Add the shared_preferences Package

To use shared preferences, you need to add the `shared_preferences` package to your project.

1. Open your `pubspec.yaml` file.
2. Add the following dependency:

    ```yaml
    dependencies:
      flutter:
        sdk: flutter
      shared_preferences: ^2.2.2
    ```
3. Run the following command in your terminal to fetch the package:

    ```bash
    flutter pub get
    ```

---

## 3. Import the Package

Import `shared_preferences` in your Dart file where you want to use it:

```dart
import 'package:shared_preferences/shared_preferences.dart';
```

---

## 4. Saving Data to Shared Preferences

You can save data such as strings, integers, booleans, and doubles. Here’s how to save a string value:

```dart
Future<void> saveUsername(String username) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('username', username);
}
```

---

## 5. Retrieving Data from Shared Preferences

To retrieve the saved data:

```dart
Future<String?> getUsername() async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getString('username');
}
```

---

## 6. Removing Data from Shared Preferences

To remove a value:

```dart
Future<void> removeUsername() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove('username');
}
```

---

## 7. Complete Example

Here’s a simple example demonstrating saving and retrieving a username:

```dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: UsernameScreen(),
    );
  }
}

class UsernameScreen extends StatefulWidget {
  @override
  _UsernameScreenState createState() => _UsernameScreenState();
}

class _UsernameScreenState extends State<UsernameScreen> {
  final TextEditingController _controller = TextEditingController();
  String? _savedUsername;

  @override
  void initState() {
    super.initState();
    _loadUsername();
  }

  Future<void> _loadUsername() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _savedUsername = prefs.getString('username');
    });
  }

  Future<void> _saveUsername() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('username', _controller.text);
    _loadUsername();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Shared Preferences Example')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: 'Enter username'),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: _saveUsername,
              child: Text('Save Username'),
            ),
            SizedBox(height: 16),
            Text(_savedUsername == null
                ? 'No username saved.'
                : 'Saved username: $_savedUsername'),
          ],
        ),
      ),
    );
  }
}
```

---

## Conclusion

Shared preferences are a quick and easy way to persist simple data in Flutter apps. For more complex or secure storage needs, consider packages like `hive`, `moor`, or `secure_storage`.

---