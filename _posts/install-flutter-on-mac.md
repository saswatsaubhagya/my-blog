# Installing Flutter on macOS: A Comprehensive Guide

Flutter is a popular open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. This guide will walk you through the process of installing Flutter on your macOS machine, setting up your development environment, and getting ready to build your first Flutter application.

---

## 1. System Requirements

Before you begin, ensure your development environment meets the following minimum requirements:

* **Operating System**: macOS (64-bit)
* **Disk Space**: 2.8 GB (this does not include disk space for IDEs and other tools)
* **Tools**: Flutter uses `git` for installation and upgrades. It's recommended to have Xcode installed, which includes `git`. If not, you can install it separately.

---

## 2. Download the Flutter SDK

You can download the Flutter SDK directly or by using a version manager.

### Manual Download and Installation

1.  **Download the Flutter SDK**: Go to the official Flutter website's [macOS install page](https://flutter.dev/docs/get-started/install/macos) and download the latest stable release of the Flutter SDK.

2.  **Extract the SDK**: Once downloaded, extract the zip file to a desired location, such as `~/development`.

    ```bash
    unzip flutter_macos_*.zip -d ~/development
    ```

### Using a Version Manager (Recommended)

Using a version manager like `fvm` (Flutter Version Management) is highly recommended for managing multiple Flutter versions.

1.  **Install FVM**: If you have Homebrew installed, you can install FVM with the following command:

    ```bash
    brew tap leoafarias/fvm
    brew install fvm
    ```

2.  **Install a Flutter Version**: To install a specific version of Flutter, use the following command:

    ```bash
    fvm install stable
    ```

---

## 3. Update Your Path

To use the `flutter` command in your terminal, you need to add the Flutter SDK to your `PATH`.

1.  **Open your shell's configuration file**. This is typically `~/.zshrc` for Zsh (the default shell in modern macOS) or `~/.bash_profile` for Bash.

    ```bash
    open ~/.zshrc
    ```

2.  **Add the Flutter tool to your path**: Add the following line to the end of the file, replacing `[PATH_TO_FLUTTER_SDK]` with the actual path to your Flutter SDK's `bin` directory.

    ```bash
    export PATH="$PATH:[PATH_TO_FLUTTER_SDK]/bin"
    ```

    If you placed Flutter in `~/development`, the line would be:

    ```bash
    export PATH="$PATH:$HOME/development/flutter/bin"
    ```

3.  **Apply the changes**: Save the file and then run the following command in your terminal to apply the changes:

    ```bash
    source ~/.zshrc
    ```

4.  **Verify the installation**: Run the following command to ensure the `flutter` command is available:

    ```bash
    which flutter
    ```

    This should output the path to your Flutter SDK.

---

## 4. Run Flutter Doctor

Now, run the `flutter doctor` command. This command checks your environment and displays a report of the status of your Flutter installation.

```bash
flutter doctor