import { app, BrowserWindow, Menu, MenuItemConstructorOptions } from "electron";
import { createAboutWindow, createFeedbackWindow, createMainWindow, createStatisticsWindow } from "../WindowManager";
import "dotenv/config";

const isMac = process.platform === 'darwin';

export default () => {
    app.whenReady().then(() => {
        createMainWindow();
        
        const mainMenu = Menu.buildFromTemplate(menu);
        Menu.setApplicationMenu(mainMenu);
      
        app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
          }
        });
    })
}

const menu = [
  ...(isMac ? [{
    label: "Guardian Dashboard",
    submenu: [
      {
        label: 'About',
        click: createAboutWindow,
      },
    ],
  }] : []),
  {
    role: 'fileMenu'
  },
  {
    label: 'Windows',
    submenu: [
      {
        label: 'Menu',
        click: createMainWindow,
      },
      {
        label: 'Feedback',
        click: createFeedbackWindow,
      },
      {
        label: 'Statistics',
        click: createStatisticsWindow,
      }
    ]
  },
  ...(!isMac ? [
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: createAboutWindow,
        },
      ],
    },
  ] : []),
] as MenuItemConstructorOptions[];
