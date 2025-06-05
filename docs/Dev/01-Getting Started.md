## Clone

⚠ Since we use Git submodules you need to clone them alongside the project. The easiest way is to use the command:
```
git clone --recursive https://github.com/Coollab-Art/Coollab
```

If while compiling you get an error like:
```
[cmake] CMake Error at CMakeLists.txt:44 (add_subdirectory):
[cmake]   The source directory
[cmake] 
[cmake]     C:/Users/fouch/Downloads/Coollab/Cool
[cmake] 
[cmake]   does not contain a CMakeLists.txt file.
```

it most likely means you forgot the submodules. To grab them after having cloned the project, use:
```
git submodule update --init --recursive
```

## Build

Coollab is built using CMake. If you don't know how to install and use it, [here is a tutorial](https://github.com/JulesFouchy/Simple-Cpp-Setup?tab=readme-ov-file#simple-cpp-setup).

## Important tools

Ideally, please install [clang-format](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/formatting-tool/) and [clang-tidy](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/static-analysers/). Clang-format will format your code automatically, and clang-tidy will warn you when you make programming mistakes. These are two very important tools!

## Working with submodules

We use Git submodules: this means 

We mostly have two repositories:
- **Coollab**: the actual 
- **Cool**: a framework, with all our UI code, generic things etc (This framework is also used by the [launcher](TODO))

I would recommend using [Git Fork](TDOO) as a git UI, it knows how to work with submodules (unlike Git Kraken which is very very bad at it and will cause you many problems)

- Whenever you change branch on Lab, go to Cool and make sure to exit the "Detached HEAD" mode.
- When creating a branch: create one branch on Lab and one on Cool, with the same names
- When merging main into your branch: Lab first, then Cool and commit, then go back to Lab and commit only once Cool is at the right version
- When merging PR: merge Cool first, then go to Lab and update it so that it points to the main branch of Cool, then you can merge the Lab PR

## Navigating the code

CTRL+SHIFT+I in imgui

## Project management

We create big issues with the `Type` Big Plan. The first comment you should edit wheenver you need to add a point to do, and then the discussion below is here to discuss, propose ideas, and once they are validated we add it as a checkboxx todo in the main message 
