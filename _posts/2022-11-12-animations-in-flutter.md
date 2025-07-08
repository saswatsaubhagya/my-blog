---
title: "A Beginner's Guide to Animations in Flutter"
date: 2022-11-12
categories: [Flutter, Animation]
tags: [Flutter, Animation, UI, Explicit Animations, Implicit Animations]
excerpt: "Learn how to create beautiful animations in Flutter from scratch. This guide covers both implicit and explicit animations with practical examples."
author: "Saswat Saubhagya"
---

# A Beginner's Guide to Animations in Flutter

Animations can significantly improve the user experience of a mobile application, making it more interactive and visually appealing. Flutter provides a powerful and flexible animation system that makes it easy to create a wide range of animations. In this guide, we'll explore the basics of creating animations in Flutter.

---

## 1. Understanding Animations in Flutter

In Flutter, animations are based on the concept of changing a widget's properties over time. The animation system is built around the `Animation` class, which is an abstract class that understands its current value and its state (completed or dismissed). The most common way to create an `Animation` is by using an `AnimationController`.

There are two main types of animations in Flutter:

- **Implicit Animations:** These are simpler animations that automatically animate changes to a widget's properties. You don't need to manage an `AnimationController`.
- **Explicit Animations:** These require you to define an `AnimationController` to have more fine-grained control over the animation, such as pausing, seeking, or reversing it.

---

## 2. Implicit Animations

Implicit animations are the easiest way to add animations to your app. Flutter provides a set of `Animated` widgets that automatically animate property changes. One of the most common is `AnimatedContainer`.

### Example: Using `AnimatedContainer`

`AnimatedContainer` automatically animates between the old and new values of its properties, such as `color`, `height`, `width`, and `decoration`.

```dart
import 'package:flutter/material.dart';

class ImplicitAnimationExample extends StatefulWidget {
  @override
  _ImplicitAnimationExampleState createState() => _ImplicitAnimationExampleState();
}

class _ImplicitAnimationExampleState extends State<ImplicitAnimationExample> {
  bool _isTapped = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          _isTapped = !_isTapped;
        });
      },
      child: Center(
        child: AnimatedContainer(
          duration: const Duration(seconds: 1),
          width: _isTapped ? 200.0 : 100.0,
          height: _isTapped ? 100.0 : 200.0,
          color: _isTapped ? Colors.blue : Colors.red,
          alignment: _isTapped ? Alignment.center : AlignmentDirectional.topCenter,
          curve: Curves.fastOutSlowIn,
          child: FlutterLogo(size: 75),
        ),
      ),
    );
  }
}
```

In this example, tapping the container changes its properties, and `AnimatedContainer` handles the transition smoothly.

---

## 3. Explicit Animations

For more complex animations, you'll need to use explicit animations. This involves using an `AnimationController` and a `Tween`.

- **`AnimationController`:** Manages the animation's progress.
- **`Tween`:** Defines the range of values for the animation (e.g., from red to blue, or from 0 to 1).

### Example: Using `AnimationController` and `AnimatedBuilder`

Here's how to create a simple fade and scale animation using `AnimationController` and `AnimatedBuilder`.

```dart
import 'package:flutter/material.dart';

class ExplicitAnimationExample extends StatefulWidget {
  @override
  _ExplicitAnimationExampleState createState() => _ExplicitAnimationExampleState();
}

class _ExplicitAnimationExampleState extends State<ExplicitAnimationExample> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    )..repeat(reverse: true);

    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: AnimatedBuilder(
        animation: _animation,
        builder: (context, child) {
          return Opacity(
            opacity: _animation.value,
            child: Transform.scale(
              scale: _animation.value,
              child: child,
            ),
          );
        },
        child: FlutterLogo(size: 100),
      ),
    );
  }
}
```

In this example, the `AnimatedBuilder` listens to the `_animation` and rebuilds the widget tree whenever the animation value changes, creating a smooth scaling and fading effect.

---

## Conclusion

Flutter's animation framework is both powerful and easy to use. By starting with implicit animations for simple cases and moving to explicit animations for more complex scenarios, you can create delightful user experiences in your apps. Experiment with different widgets and curves to see what you can create!

## 📚 Resources

- [Introduction to animations in Flutter](https://flutter.dev/docs/development/ui/animations)
- [Animation and Motion widgets](https://flutter.dev/docs/development/ui/widgets/animation)

Happy coding! 🚀