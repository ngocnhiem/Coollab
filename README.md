# Coollab

<img alt="logo" src="./logo.png" width = 100px>

**Coollab is a node-based software to create visual effects and generative-art, similar to TouchDesigner.**



[Check out our website](https://coollab-art.com/)!

Coollab's main goal is to be as intuitive and easy to use as possible. Effects are high-level and they just work out of the box! You don't need to know any math or programming to make your own very cool effects! (Although having those skills allows you to do some advanced stuff).<br/>
Start with any image or shape, like your *Webcam*, add any modifier on top of it, like a *Kaleidoscope*, and you already have some cool results. You can then play with the 100s of effects to change the color, distort the image, add particles, react to audio, and much more!<br/>
Coollab can be used for VJing, exporting videos, creating interactive installations, *etc.*!

[Here are some tutorials to help you get started.](https://youtu.be/swMZGsGje4E?list=PLuMMMaL5kN3mG6fSeSYTqC-sc_OTX3unQ)

## Contributions

Coollab is made possible by the work of all these lovely people.
If you wanna be part of us, check out the [many vvarious ways you could contriibute](TODO), and then get in touch with us 
:


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://julesfouchy.github.io/"><img src="https://avatars.githubusercontent.com/u/45451201?v=4?s=100" width="100px;" alt="Jules Fouchy"/><br /><sub><b>Jules Fouchy</b></sub></a><br /><a href="https://github.com/Coollab-Art/Coollab/commits?author=JulesFouchy" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TaliaKah"><img src="https://avatars.githubusercontent.com/u/77100260?v=4?s=100" width="100px;" alt="taliakah"/><br /><sub><b>taliakah</b></sub></a><br /><a href="https://github.com/Coollab-Art/Coollab/commits?author=TaliaKah" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MeucheRoume"><img src="https://avatars.githubusercontent.com/u/77018137?v=4?s=100" width="100px;" alt="MeucheRoume"/><br /><sub><b>MeucheRoume</b></sub></a><br /><a href="https://github.com/Coollab-Art/Coollab/commits?author=MeucheRoume" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


## For Developers
### When starting to work on something

Fork for devs not part of the org

**Never commit on the *main* branch!**
We always work on branches, and then create pull requests that must be reviewed by others before merging them into main.

- Create a branch on *Cool*, and a branch on *Lab*. **They should both have the same name**.
- Switching between your branch and main is annoying because we use submodules and you would have two branches to switch and it can be painful. This is why we **strongly** recommend that you clone the repository twice, and you always leave one of them on main, and the other on your branch.

### Dev Tips

- TODO create a page explaining how to edit the Default User Data (imgui.ini, color_config.json, etc)
- If you add a third-party library, check its license and, if it requires it, make sure we install the license in the CMake:
```cmake
install(FILES "lib/cpp-httplib/LICENSE" DESTINATION license/cpp-httplib)
```

- TODO Talk about debug options (and you can create your own)

- TODO Talk about shortcut for ImGui Item Picker
- TODO Talk about the ImGui demo window

- TODO how to run the tests

### Fix bugs and bad code as you see them

Or at least write them down [in our To-Do list](https://github.com/Coollab-Art/Coollab/issues/127).<br/>
No codebase is perfect and bugs and poor code exist everywhere. If you think you just spotted one, take a deeper look into it. Try to fix it or at least raise other people's attention about it.

### Gitmoji

You can see the ones we use regularly in the [tooling](https://github.com/Coollab-Art/tooling/blob/main/gitmoji.md) folder (which is embeded in all our repos).

### Git

- Try to avoid mixing _unrelated_ changes in a single commit: If you have made lots of changes, consider pushing them in separate commits that make sense.

### Write nice Pull Requests

- merge `main` into your branch and resolve any conflict that might arise
- submit a pull request and wait for the peer review
- once the review is done the reviewer will merge your pull request

Before you submit your PR for review:

- Double check the names you gave. Ask yourself: would someone who doesn't know the codebase have a clue as to what `functionXxx()` does?
- Look for duplicated code and refactor it away.
- Make sure the code will be easy to change in the future.


### Creating a new library

If you are about to create a small system that doesn't have any dependencies on the rest of *Cool*, then making it into a standalone library makes a lot of sense.<br/>
We try to do that whenever possible because it encourages a more decoupled and flexible design, and makes it easily reusable by others without having to include the whole of *Cool*.

- Create a new repository from [our template](https://github.com/Coollab-Art/library-template):
    - ⚠️ **Make sure the _Owner_ is set to Coollab-Art, not to your personal account!**
![set_owner_to_coollab_art](https://github.com/user-attachments/assets/e2fc0d5f-f2ee-4867-ba29-15c05ddbdb4e)
    - Add a *short* description. (This is optional, you can add it later if you want)
    - Make sure the repo is public
    - Don't check `Include all branches`
    - Click `Create repository from template`
- Add the library to [our list of **Standalone libraries**](https://github.com/Coollab-Art/.github/edit/main/profile/README.md) under `## Standalone libraries` by adding:
```markdown
<a href="https://github.com/Coollab-Art/mynewlib">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=Coollab-Art&repo=mynewlib" />
</a>
```
(NB: Replace the two occurences of `mynewlib` with the name of your library)
- Clone the repo **recursively**: `git clone --recursive url/to/the/new/repo`
- In the cloned repo, fill in "setup.py" and run the script: it will setup everything and then remove the Python scripts used for the setup and amend the initial commit
- Commit as "🎉 Initial commit" and `force push` it
- Implement the library
