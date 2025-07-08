---
title: "Mastering the Freezed Package in Flutter: Benefits, Use Cases, and BLoC Integration"
date: 2023-05-22
categories: [Flutter, State Management]
tags: [Flutter, Freezed, BLoC, State Management, Dart, Mobile]
excerpt: "A comprehensive guide to the Freezed package in Flutter, its benefits, and practical integration with BLoC for robust state management."
author: "Saswat Saubhagya"
---

# Mastering the Freezed Package in Flutter: Benefits, Use Cases, and BLoC Integration

State management and immutable data structures are at the heart of robust Flutter applications. The [freezed](https://pub.dev/packages/freezed) package is a powerful code generator that simplifies the creation of immutable classes and union types in Dart. In this guide, we'll explore what Freezed is, its benefits, and how to use it effectively—especially in combination with the BLoC pattern.

---

## 🚀 What is Freezed?

Freezed is a Dart package that generates immutable classes, union types (sealed classes), and provides utilities like `copyWith`, deep equality, and pattern matching. It is inspired by Kotlin's data classes and sealed classes, making Dart code more concise, readable, and less error-prone.

## 🎯 Why Use Freezed?

- **Immutability:** Ensures your data models cannot be changed after creation, preventing accidental bugs.
- **Union/Sealed Classes:** Enables expressive state and event modeling, especially useful in BLoC.
- **Automatic `copyWith`:** Easily create modified copies of objects.
- **Deep Equality:** Compares objects by value, not reference.
- **Pattern Matching:** Use `when` and `map` for exhaustive and type-safe handling of unions.
- **Serialization:** Supports JSON serialization with [json_serializable](https://pub.dev/packages/json_serializable).

## 🛠️ Setting Up Freezed

Add dependencies to your `pubspec.yaml`:

```yaml
dependencies:
  freezed_annotation: ^2.4.1
  json_annotation: ^4.8.1

dev_dependencies:
  build_runner: ^2.4.6
  freezed: ^2.4.6
  json_serializable: ^6.7.1
```

## ✨ Creating Immutable Data Classes

Let's create a simple `User` model:

```dart
import 'package:freezed_annotation/freezed_annotation.dart';
part 'user.freezed.dart';
part 'user.g.dart';

@freezed
class User with _$User {
  const factory User({
    required String id,
    required String name,
    int? age,
  }) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}
```

- Run `flutter pub run build_runner build` to generate the code.
- The generated class is immutable, supports `copyWith`, deep equality, and JSON serialization.

### Example Usage

```dart
final user1 = User(id: '1', name: 'Alice', age: 25);
final user2 = user1.copyWith(name: 'Bob');
print(user1 == user2); // false
```

## 🔀 Union Types (Sealed Classes) with Freezed

Union types are perfect for modeling states and events in BLoC.

```dart
@freezed
class AuthState with _$AuthState {
  const factory AuthState.initial() = _Initial;
  const factory AuthState.loading() = _Loading;
  const factory AuthState.authenticated(User user) = _Authenticated;
  const factory AuthState.error(String message) = _Error;
}
```

### Pattern Matching

```dart
authState.when(
  initial: () => print('Initial'),
  loading: () => print('Loading'),
  authenticated: (user) => print('Welcome ${user.name}!'),
  error: (msg) => print('Error: $msg'),
);
```

## 🤝 Using Freezed with BLoC

Freezed shines when used with BLoC for modeling events and states.

### Example: Counter BLoC

**counter_event.dart**
```dart
import 'package:freezed_annotation/freezed_annotation.dart';
part 'counter_event.freezed.dart';

@freezed
class CounterEvent with _$CounterEvent {
  const factory CounterEvent.increment() = Increment;
  const factory CounterEvent.decrement() = Decrement;
}
```

**counter_state.dart**
```dart
import 'package:freezed_annotation/freezed_annotation.dart';
part 'counter_state.freezed.dart';

@freezed
class CounterState with _$CounterState {
  const factory CounterState({required int value}) = _CounterState;
}
```

**counter_bloc.dart**
```dart
import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter_event.dart';
import 'counter_state.dart';

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterState(value: 0)) {
    on<Increment>((event, emit) => emit(state.copyWith(value: state.value + 1)));
    on<Decrement>((event, emit) => emit(state.copyWith(value: state.value - 1)));
  }
}
```

### Benefits in BLoC
- **Type Safety:** Only valid states/events are possible.
- **Pattern Matching:** Use `when`/`map` for exhaustive handling.
- **Immutability:** Prevents accidental state mutation.

## 📦 Serialization with Freezed

Freezed integrates with `json_serializable` for easy JSON (de)serialization:

```dart
final user = User.fromJson({'id': '1', 'name': 'Alice', 'age': 25});
final json = user.toJson();
```

## 🧑‍💻 Advanced Use Cases

### 1. Nested Models
Freezed supports nested immutable models:
```dart
@freezed
class Post with _$Post {
  const factory Post({
    required String id,
    required User author,
    required String content,
  }) = _Post;
}
```

### 2. Default Values
```dart
@freezed
class Settings with _$Settings {
  const factory Settings({
    @Default(true) bool darkMode,
    @Default('en') String language,
  }) = _Settings;
}
```

### 3. Custom Getters and Methods
```dart
@freezed
class Rectangle with _$Rectangle {
  const factory Rectangle({
    required double width,
    required double height,
  }) = _Rectangle;

  const Rectangle._();

  double get area => width * height;
}
```

### 4. Unions for API Responses
```dart
@freezed
class ApiResponse<T> with _$ApiResponse<T> {
  const factory ApiResponse.success(T data) = Success<T>;
  const factory ApiResponse.error(String message) = Error<T>;
}
```

## 🏆 Best Practices
- Always run `build_runner` after editing Freezed classes.
- Use `@Default` for default values.
- Prefer union types for BLoC states/events.
- Use `copyWith` for immutable updates.
- Leverage pattern matching for exhaustive handling.

## ❓ Common Pitfalls
- Forgetting to run `build_runner` after changes.
- Not including `part` files.
- Using mutable fields in Freezed classes.

## 📚 Resources
- [Freezed on pub.dev](https://pub.dev/packages/freezed)
- [Freezed Documentation](https://pub.dev/documentation/freezed/latest/)
- [BLoC Documentation](https://bloclibrary.dev/#/)
- [json_serializable](https://pub.dev/packages/json_serializable)

Happy coding! 🚀