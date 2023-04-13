import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to server file
const serverPath = path.join(__dirname, 'server.ts');

let serverProcess: any;

const startServer = () => {
  serverProcess = fork(serverPath);

  serverProcess.on('exit', () => {
    console.log('Server process exited');
  });
}

const stopServer = () => {
  serverProcess.kill();
}

startServer();

setInterval(() => {
  stopServer();
  startServer();
}, 15 * 60 * 1000);