---
title: "Provider State Management in Flutter: A Beginner's Guide"
date: 2022-05-17
categories: [Flutter, Mobile Development]
tags: [Flutter, Provider, State Management, Dart, Mobile]
---

# Provider State Management in Flutter: A Beginner's Guide

State management is a crucial concept in Flutter development. As your app grows, managing and sharing state efficiently becomes essential. The Provider package is one of the most popular and beginner-friendly solutions for state management in Flutter. In this guide, you'll learn how to use Provider step by step, with clear explanations and code examples.

---

## 🛠 Prerequisites

- Flutter installed on your machine ([installation guide](https://docs.flutter.dev/get-started/install))
- A Flutter project set up
- Basic knowledge of Dart and Flutter widgets

---

## 1. What is Provider?

Provider is a Flutter package that makes it easy to manage and share state across your app. It uses the concept of InheritedWidgets under the hood, but provides a much simpler and more scalable API.

---

## 2. Add the Provider Package

First, add the Provider package to your project.

1. Open your `pubspec.yaml` file.
2. Add the following dependency:

```yaml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.0
```

3. Run the following command in your terminal:

```bash
flutter pub get
```

---

## 3. Create a State Model

Let's create a simple counter app to demonstrate Provider. First, define a model class that holds your app's state.

Create a new file called `counter_model.dart`:

```dart
import 'package:flutter/foundation.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // Notifies widgets listening to this model
  }
}
```

- `ChangeNotifier` is a class that provides change notification to its listeners.
- `notifyListeners()` tells all listening widgets to rebuild when the state changes.

---

## 4. Provide the Model to the Widget Tree

Wrap your app (or a part of it) with a `ChangeNotifierProvider` to make the model available to descendant widgets.

Edit your `main.dart`:

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'counter_model.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Provider Demo',
      home: CounterScreen(),
    );
  }
}
```

- `ChangeNotifierProvider` creates and provides an instance of `CounterModel` to its descendants.

---

## 5. Consume the State in Widgets

Now, use the provided model in your widgets. There are several ways to access the state:

### Using `Provider.of`

```dart
class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counter = Provider.of<CounterModel>(context);
    return Scaffold(
      appBar: AppBar(title: Text('Provider Demo')),
      body: Center(
        child: Text('Count: ${counter.count}', style: TextStyle(fontSize: 32)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: counter.increment,
        child: Icon(Icons.add),
      ),
    );
  }
}
```

- `Provider.of<CounterModel>(context)` gives you access to the model instance.
- When `increment()` is called, `notifyListeners()` triggers a rebuild of widgets that use the model.

### Using `Consumer`

Alternatively, use the `Consumer` widget for more granular rebuilds:

```dart
Consumer<CounterModel>(
  builder: (context, counter, child) {
    return Text('Count: ${counter.count}', style: TextStyle(fontSize: 32));
  },
)
```

---

## 6. Full Example

Here's the complete code for a simple counter app using Provider:

**counter_model.dart**
```dart
import 'package:flutter/foundation.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;
  void increment() {
    _count++;
    notifyListeners();
  }
}
```

**main.dart**
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'counter_model.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Provider Demo',
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counter = Provider.of<CounterModel>(context);
    return Scaffold(
      appBar: AppBar(title: Text('Provider Demo')),
      body: Center(
        child: Text('Count: ${counter.count}', style: TextStyle(fontSize: 32)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: counter.increment,
        child: Icon(Icons.add),
      ),
    );
  }
}
```

---

## 🎯 Summary

- Add the Provider package to your project.
- Create a model class extending `ChangeNotifier`.
- Use `ChangeNotifierProvider` to provide the model.
- Access and update state using `Provider.of` or `Consumer`.

Provider makes state management in Flutter simple and scalable. As your app grows, you can use multiple providers and even combine them for more complex scenarios.

---

## 📚 Resources

- [Provider Package on pub.dev](https://pub.dev/packages/provider)
- [Flutter State Management Docs](https://docs.flutter.dev/data-and-backend/state-mgmt/intro)
- [Official Provider Documentation](https://pub.dev/documentation/provider/latest/)

Happy coding! 🚀