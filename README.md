# BitBurner Direct-Connections

## Description 

This is a set of scripts designed to let you reap the ability to directly connect to any server without having to wait to backdoor each server. 

Normally, to connect to a server you must either navigate the various connections, or level up your hacking enough to backdoor a server, letting you connect directly to it. 

This script lets you bypass that by automatically generating a terminal alias for every server so that a string consisting of c + `the server name` server as a command to directly connect to that server. This is extremely useful, especially for later sections of the game when you would otherwise have to re-backdoor everything from scratch. Moreover, you cannot backdoor your own servers, and so cannot directly connect to them. This, frankly, sucks, and a big advantage of this script is that it allows you to directly connect to your own servers just as if you had backdoored them.

Notably, the `.` character can't be used in an alias, so server names that include these have the `.` replaced with the word 'dot'. Also, the server names are all lowercased. Remember that terminal aliases are elegible for Tab auto-complete.

Lastly, you can also use the `servermap.js` and `bckdoor.js` to auto-backdoor all servers you can. This uses the direct connection aliases built by the `direct-connection.js` script.

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)


## Installation

The files can be downloaded or copy/pasted into the game. 

## Usage 

Simply run the `direct-connection.js` script and the rest will be handled. 

To auto-backdoor, run the `servermap.js` to create a server list for the `bckdoor.js` script, then run the `bckdoor.js` script. You'll need to leave BitBurner running and the terminal window open so the script can go through the available backdoors. You'll need to have run the `direct-connection.js` script first.

## Features

Both `direct-connection.js` and `bckdoor.js` technically use exploits. Both use HTML injection to enter text into the terminal window and run it, and the `direct-connection.js` script avoids the high RAM cost incurred by using `document`. If exploits aren't your thing, feel free to edit these parts out. You can simply not use the auto-backdoor script and generate the alias string in the console to copy/paste into the terminal yourself. The alias itself and the server map is, of course, not an exploit.

Additionally, `direct-connection.js` works by routing a request to home, then moving from their to the desired server. Not only does it map a path from home to every server, it maps the shortest path. That bits just for fun. 

The script also produces a text file that contains the JSON of the array of objects representing the server graph, for fun. 

## Contributing

Feel free to fork/open a pull request. Certainly, this is not the most efficient or best implementation of this sort of thing. However, if you want to improve the scripts, you'll probably enjoy making your own more than improving this. 

## [License](./LICENSE)
This website uses the open-source MIT License.

--- 