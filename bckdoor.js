/** @param {NS} ns */
export async function main(ns) {
	const doc = eval('document');
	// Acquire a reference to the terminal text field
	const terminalInput = doc.getElementById("terminal-input");
	// Get a reference to the React event handler.
	const handler = Object.keys(terminalInput)[1];
	//Create an enter press
	const enterPress = new KeyboardEvent('keydown',
		{
			bubbles: true,
			cancelable: true,
			keyCode: 13
		});

	let backdoored = ns.read('backdoored_servers.txt') || ['ss']
	
	if (typeof backdoored === "string") {
		backdoored = JSON.parse(backdoored)
	}
	
	let serverList = JSON.parse(ns.read('server_list.txt'))
	
	//===============================================================================================

	// Run in the terminal whatever string is passed to the function
	function terminalCommand(str) {
		terminalInput.value = str
		terminalInput[handler].onChange({ target: terminalInput });
		terminalInput.dispatchEvent(enterPress);
	}

	//===============================================================================================

	async function backdoor(server) {
		if (ns.getServerRequiredHackingLevel(server) <= ns.getHackingLevel()) {
			backdoored.push(server);
			terminalCommand('backdoor');
			// This waits until the backdooring is finished
			while (terminalInput.disabled) {
				await ns.sleep(1000)
			}
		}
		return true;
	}

	//===============================================================================================
	
	// Runs through the servers and runs the backdoor function if the server is not in the list of servers already
	for (let server of serverList) {
		if (!backdoored.includes(server)) {
			let aliasName = ""
			for (let char of server) {
					if (char === '.') {
						aliasName += 'dot'
					} else {
						aliasName += char
					}
				}
			terminalCommand(`c${aliasName.toLowerCase()}`)
			await backdoor(server);
		}
		// File to track which servers you backdoored so you don't waste time on them on the next run
		ns.write('backdoored_servers.txt', JSON.stringify(backdoored), 'w')
	}
}
