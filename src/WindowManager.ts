import { BrowserWindow } from "electron";
import "dotenv/config";
import path from "path";

const isDev = process.env.NODE_ENV === 'development';

var windows = {} as { [key: string]: BrowserWindow | null };

// Create main window
export function createMainWindow() {
  if (windows.main) {
    windows.main.focus();
    return;
  }

  windows.main = new BrowserWindow({
    width: isDev ? 1300 : 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    windows.main.webContents.openDevTools();
  }

  windows.main.loadFile(path.join(__dirname, './renderer/index.html'));

  windows.main.on('closed', () => {
    windows.main = null;
  });
}

// Create about window
export function createAboutWindow() { 
  if (windows.about) {
    windows.about.focus();
    return;
  }

  windows.about = new BrowserWindow({
    width: 300,
    height: 300,
  })

  windows.about.loadFile(path.join(__dirname, './renderer/about.html'));

  windows.about.on('closed', () => {
    windows.about = null;
  });
}

export function createFeedbackWindow() {
  if (windows.feedback) {
    windows.feedback.focus();
    return;
  }

  windows.feedback = new BrowserWindow({
    width: isDev ? 1300 : 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    windows.feedback.webContents.openDevTools();
  }

  windows.feedback.loadFile(path.join(__dirname, './renderer/feedback.html'));

  windows.feedback.on('closed', () => {
    windows.feedback = null;
  });
}

export function createStatisticsWindow() {
  if (windows.statistics) {
    windows.statistics.focus();
    return;
  }

  windows.statistics = new BrowserWindow({
    width: isDev ? 1300 : 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    windows.statistics.webContents.openDevTools();
  }

  windows.statistics.loadFile(path.join(__dirname, './renderer/statistics.html'));

  windows.statistics.on('closed', () => {
    windows.statistics = null;
  });
}
