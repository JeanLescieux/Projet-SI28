// terminal.js
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('command-input');
const inputLine = document.getElementById('input-line');
const prompt = document.querySelector('.prompt');

let currentDirectory = 'C:/';

const fileSystem = {
    'C:/': ['Users'],
    'C:/Users': ['PierreDisk'],
    'C:/Users/PierreDisk': ['Documents','Images','Téléchargements','Journal','Cours'],
    'C:/Users/PierreDisk/Documents': ['Article.pdf', 'classe.exe','odj.txt'],
    'C:/Users/PierreDisk/Images': ['img1', 'img2','img3'],
    'C:/Users/PierreDisk/Téléchargements': ['Article.pdf', 'classe.exe','odj.txt'],
    'C:/Users/PierreDisk/Journal': ['1\\26juin','2\\6juillet','3\\12juilet','4\\21juillet','5\\26juillet','6\\3aout','7\\5aout','8\\9aout','9\\16aout'],
    'C:/Users/PierreDisk/Cours': ['Article.pdf', 'classe.exe','odj.txt'],
};

// Text to display at the start
const welcomeMessage = `
________________________________________________________________________________
________________________________________________________________________________

Welcome to the Terminal Simulator!

Microsoft(R) Windows 95
    (c) Copyright Microsoft Corp 1981-1994

Syntaxe error : command not recognized. Make sure the command prefix is lower 
case. The syntax in this command lline differs greatly from the original ms-dos 
syntax.
To view a detailled list of available command, type 'help'

________________________________________________________________________________
________________________________________________________________________________







`;

window.onload = () => {
    output.innerHTML += welcomeMessage;
    updatePrompt();
    closeNP()
    closeIMG()
};

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        executeCommand(command);
        input.value = '';
    }
});

function executeCommand(command) {
    const args = command.split(' ');
    const cmd = args[0];
    const params = args.slice(1);

    switch (cmd) {
        case 'ls':
            lsCommand(cmd);
            break;
        case 'cd':
            cdCommand(params,cmd);
            break;
        case 'clear':
            clearCommand();
            break;
        case 'help':
            helpCommand();
            break;
        case 'open':
            openCommand(params,cmd);
            break;
        default:
            output.innerHTML += `Command not found: ${command}\n`;
    }
    scrollToBottom();
    updatePrompt();
}

function lsCommand(cmd) {
    const files = fileSystem[currentDirectory];
    let outputContent = `${currentDirectory} ${cmd}\n`;
    files.forEach(file => {
        outputContent += `  <span class="blue-text">${file}</span><br>`;
    });
    output.innerHTML += outputContent;
}

function cdCommand(params, cmd) {
    if (params.length === 0) {
        output.innerHTML += 'Usage: cd <directory>\n';
        return;
    }
    const targetDir = params[0];

    if (targetDir === '..') {
        if (currentDirectory !== 'C:/') {
            if (currentDirectory=='C:/Users'){
                currentDirectory='C:/'
            }else{
                const pathParts = currentDirectory.split('/');
                pathParts.pop();
                currentDirectory = pathParts.join('/');
                if (currentDirectory === '') currentDirectory = 'C:/';
            }
            
            output.innerHTML += `${currentDirectory} ${cmd} ${targetDir}\n`;
        } else {
            output.innerHTML += `Already at root directory\n`;
        }
    } else {
        const newDir = currentDirectory === 'C:/' ? `C:/${targetDir}` : `${currentDirectory}/${targetDir}`;
        
        if (fileSystem[newDir]) {
            oldDir = currentDirectory
            currentDirectory = newDir;
            output.innerHTML += `${oldDir} ${cmd} ${params}\n`;
        } else {
            output.innerHTML += `Directory not found: ${targetDir}\n`;
        }
    }
}

function openCommand(params, cmd){
    if (params.length === 0) {
        output.innerHTML += 'Usage: open <file>\n';
        return;
    } else {
        if (params=="1\\26juin" || params=="Article.pdf"){
            openNP('../FileExplorer/Texte/1.txt')
        } else if (params=="2\\6juillet" || params=="classe.exe"){
            openNP('../FileExplorer/Texte/2.txt')
        } else if (params=="3\\12juillet" || params=="odj.txt"){
            openNP('../FileExplorer/Texte/3.txt')
        } else if (params=="4\\21juillet"){
            openNP('../FileExplorer/Texte/4.txt')
        } else if (params=="5\\26juillet"){
            openNP('../FileExplorer/Texte/5.txt')
        } else if (params=="6\\3aout"){
            openNP('../FileExplorer/Texte/6.txt')
        } else if (params=="7\\5aout"){
            openNP('../FileExplorer/Texte/7.txt')
        } else if (params=="8\\9aout"){
            openNP('../FileExplorer/Texte/8.txt')
        } else if (params=="9\\16aout"){
            openNP('../FileExplorer/Texte/9.txt')
        } else if (params=="img1"){
            openIMG('/images/cicada-3301-location.jpg');
        } else if (params=="img2"){
            openIMG('/images/test1Cic.jpg');
        } else if (params=="img3"){
            openIMG('/images/test2Cic.png');
        } else {
            var exist = false;
            
        }
    }
    output.innerHTML += `${currentDirectory} ${cmd} ${params}\n`;
    if (exist ==false) {
        output.innerHTML += `Le fichier ${params} n'existe pas\n`;
    }
    
}

function clearCommand() {
    output.innerHTML = '';
}

function helpCommand() {
    const helpText = `
Available commands:
- ls: List directory contents
- cd: Change directory
- open: Open a file
- clear: Clear the terminal screen
- help: Display this help message
`;
    output.innerHTML += helpText;
}

function updatePrompt() {
    prompt.innerText = `${currentDirectory}`;
}

function scrollToBottom() {
    terminal.scrollTop = terminal.scrollHeight;
}

async function openNP(textFilePath) {
    var iframe = document.getElementById('fenetreModaleNP');
    iframe.style.display = 'none';

    try {
        const responseHTML = await fetch('../../Usables/notePad.html');
        if (!responseHTML.ok) {
            throw new Error('Erreur lors du chargement de notePad.html');
        }
        iframe.src = '../../Usables/notePad.html';
        iframe.onload = async () => {
            const textContainer = iframe.contentWindow.document.getElementById('Diarytxt');
            if (textContainer) {
                console.log('Element #Diarytxt trouvé, chargement du contenu TXT...');
                try {
                    const responseTXT = await fetch(textFilePath);
                    if (!responseTXT.ok) {
                        throw new Error('Erreur lors du chargement du fichier texte');
                    }
                    const textContent = await responseTXT.text();
                    if (textContent) {
                        textContainer.textContent = textContent;
                        console.log('Contenu du fichier texte inséré dans le DOM');
                        iframe.style.display = 'block';
                        console.log('Fenêtre modale affichée');
                    } else {
                        console.log('Aucun contenu trouvé dans le fichier texte');
                        iframe.style.display = 'none';
                    }
                } catch (error) {
                    console.error('Erreur lors de la tentative de chargement du contenu texte: ', error);
                    iframe.style.display = 'none';
                }
            } else {
                console.log('Element #Diarytxt non trouvé.');
                iframe.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Erreur globale: ', error);
        iframe.style.display = 'none';
    }
}

function closeNP() {
    document.getElementById('fenetreModaleNP').style.display = 'none';
    console.log('Fenêtre modale cachée');
}

async function openIMG(imagePath) {
    var iframe = document.getElementById('fenetreModaleIMG');
    iframe.style.display = 'none';

    try {
        const responseHTML = await fetch('../../Usables/imgOpen.html'); // Change this to the actual path of your HTML
        if (!responseHTML.ok) {
            throw new Error('Erreur lors du chargement de imgOpen.html');
        }
        iframe.src = '../../Usables/imgOpen.html';

        iframe.onload = async () => {
            const imgElement = iframe.contentWindow.document.getElementById('imgOpen');
            if (imgElement) {
                console.log('Element #imgOpen trouvé, chargement de l\'image...');
                try {
                    const responseIMG = await fetch(imagePath);
                    if (!responseIMG.ok) {
                        throw new Error('Erreur lors du chargement de l\'image');
                    }
                    imgElement.src = imagePath;
                    console.log('Image insérée dans le DOM');
                    iframe.style.display = 'block';
                    console.log('Fenêtre modale affichée');
                } catch (error) {
                    console.error('Erreur lors de la tentative de chargement de l\'image: ', error);
                    iframe.style.display = 'none';
                }
            } else {
                console.log('Element #imgOpen non trouvé.');
                iframe.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Erreur globale: ', error);
        iframe.style.display = 'none';
    }
}


function closeIMG() {
    document.getElementById('fenetreModaleIMG').style.display = 'none';
    console.log('Fenêtre modale cachée');
}