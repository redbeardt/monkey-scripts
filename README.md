# Redbeardt's Monkey Scripts

This repository stores little more than my collection of userscripts I've made while using *Violentmonkey*. I use *VSCode* on Windows, and `cmder` as my shell.

There are a few tricks here to make development a little more streamlined. I wanted to see how I could get *Violentmonkey* to most easily userscripts I've written or updated in *VSCode* rather than in the add-on's editor.

In order to have *Violentmonkey* accept an update to a userscript via the update button, the **@updateURL** metadata field has to refer to the location of the script, and the **@version** metadata value has to be greater than the current one. Here's what I did:

1. Installed NodeJS `http-server` as described in *Violentmonkey*'s documentation and directed it at my userscript working directory. Wrote `start_npm_http.bat` to start it up when I need it.

2. Wrote `include.sh` to increment the least-significant digit of a userscript's **@version** metadata field, taking a userscript filename as an argument.

3. Installed the *VSCode* extension *Save Runner*, listed as *"Run pre/post save commands and custom linters"* in the extensions marketplace.

4. Set *VSCode* user/workspace `settings.json` to include the following:

```json
"save-runner.commands": [
    {
        "enabled": true,
        "include": "\\.user\\.js$",
        "exclude": "settings\\.json$",
        "pre": "",
        "post": "bash -c './inc_version.sh ${basename}'"
    }
],
```

5. Make sure that any script I want to add has the appropriate **@downloadURL**, **@updateURL**, and **@version** metadata values. The first two should correspond to the file's URL on your http-server (e.g. `http://localhost:8080/fb-cleanup.user.js`), and the latter should start at `0.0.0`.

6. Don't forget to make sure that your filenames end in `.user.js`, not just `.js`, or nothing will work.

7. Lazily click the 'Check for all updates' button on the *Violentmonkey* dashboard to propagate your *VSCode* changes into your browser whenever you've made an update! 😇

🤔 .. I guess that's it!

Cheers! 🍻

***redbeardt***
