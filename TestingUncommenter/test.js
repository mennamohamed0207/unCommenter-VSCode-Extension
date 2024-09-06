

import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {

	
	
	console.log('Congratulations, your extension "uncommenter" is now active!');

	
	
	
	const disposable = vscode.commands.registerCommand('uncommenter.helloWorld', () => {
		
		
		vscode.window.showInformationMessage('Hello World from unCommenter!');
	});
	const commentSelected = vscode.commands.registerCommand('uncommenter.comment', () => {
		vscode.commands.executeCommand('editor.action.addCommentLine');
	})
	const uncommentSelected = vscode.commands.registerCommand('uncommenter.uncomment', () => {
		
		const activeEditor = vscode.window.activeTextEditor;
		
		if (activeEditor) {
			const document = activeEditor.document;
			const fullRange = new vscode.Range(
				document.positionAt(0),  
				document.positionAt(document.getText().length)  
			);
			
			let text: string =activeEditor.document.getText();
			let newText = text.replace(/\/\/.*|\/\*[\s\S]*?\*\
			activeEditor.edit((editBuilder) => {
				editBuilder.replace(fullRange, newText);
				vscode.window.showInformationMessage(newText);
			});
		}
	})


	context.subscriptions.push(disposable);
	context.subscriptions.push(commentSelected);
	context.subscriptions.push(uncommentSelected);
}


export function deactivate() { }
