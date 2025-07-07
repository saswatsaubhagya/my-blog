---
title: "How to Build a QR Scanner App in Flutter"
date: 2022-04-09
categories: [Flutter, Mobile Development]
tags: [Flutter, QR Code, Scanner, Mobile, Dart]
excerpt: "Learn how to create a QR scanner application in Flutter. This guide covers setup, package installation, and implementation with code examples."
author: "Saswat Saubhagya"
---

# Building a QR Scanner App in Flutter: Step-by-Step Guide

## Introduction

QR codes are everywhere—from payments to event tickets. In this tutorial, you'll learn how to build a simple yet powerful QR scanner app using Flutter. We'll cover everything from project setup to scanning QR codes in real time.

## Prerequisites

Before you begin, make sure you have:

- Flutter installed on your machine ([installation guide](https://flutter.dev/docs/get-started/install))
- A Flutter project set up
- Basic knowledge of Dart and Flutter widgets

## 1. Create a New Flutter Project

Open your terminal and run:

```bash
flutter create qr_scanner_app
cd qr_scanner_app
```

## 2. Add the QR Code Scanner Package

We'll use the popular [`qr_code_scanner`](https://pub.dev/packages/qr_code_scanner) package. Add it to your `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  qr_code_scanner: ^1.0.1
```

Then run:

```bash
flutter pub get
```

## 3. Implement the QR Scanner

Replace the contents of `lib/main.dart` with the following code:

```dart
import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'QR Scanner',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const QRViewExample(),
    );
  }
}

class QRViewExample extends StatefulWidget {
  const QRViewExample({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _QRViewExampleState();
}

class _QRViewExampleState extends State<QRViewExample> {
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  Barcode? result;
  QRViewController? controller;

  @override
  void reassemble() {
    super.reassemble();
    if (controller != null) {
      controller!.pauseCamera();
      controller!.resumeCamera();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('QR Scanner')),
      body: Column(
        children: <Widget>[
          Expanded(
            flex: 4,
            child: QRView(
              key: qrKey,
              onQRViewCreated: _onQRViewCreated,
            ),
          ),
          Expanded(
            flex: 1,
            child: Center(
              child: (result != null)
                  ? Text('Data: ${result!.code}')
                  : const Text('Scan a code'),
            ),
          )
        ],
      ),
    );
  }

  void _onQRViewCreated(QRViewController controller) {
    setState(() {
      this.controller = controller;
    });
    controller.scannedDataStream.listen((scanData) {
      setState(() {
        result = scanData;
      });
    });
  }

  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }
}
```

## 4. Test the App

Run your app on a physical device (camera access is required):

```bash
flutter run
```

Point your camera at a QR code. The scanned data will appear on the screen.

## Conclusion

You now have a working QR scanner app in Flutter! You can customize the UI, handle different QR code types, or add features like saving scan history. Explore the [`qr_code_scanner`](https://pub.dev/packages/qr_code_scanner) package docs for more options.

Happy coding!