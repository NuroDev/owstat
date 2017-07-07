// System paths
var path = require('path')
var fs = require('fs')

// Electron
var electron = require('electron')
var menu = electron.Menu
var globalShortcut = electron.globalShortcut

// App Info
var app = electron.app
var appTitle = app.getName()
var ipcMain = electron.ipcMain
var appIsDev = require('electron-is-dev')
var appLog = require('electron-log')
var appConfig = require('./lib/config.js')

// Main App Window
var mainWindow = void 0

// If the application is quitting
var isQuitting = false

// Main Window
function createMainWindow () {
  var appView = new electron.BrowserWindow({
    title: appTitle, // Window title
    width: 524, // Window width
    height: 321, // Window height
    backgroundColor: '#222222', // Background Color
    titleBarStyle: 'hidden-inset', // Titlebar style (MacOS Only)
    frame: false, // Hide window frame (Win32)
    center: true, // Center app window?
    movable: true, // Is window movable?
    resizable: false, // Is window resizable?
    fullscreenable: false, // Is window fullscreenable?
    maximizable: false, // Is window maximizable?
    autoHideMenuBar: true // Hide menubar in window on launch
  })

  appView.loadURL(path.join('file://', __dirname, '/static/app.html'))

    // Loading app from file, log it
  appLog.info('| MAIN | Loaded app from file |')

    // When window is closed, hide window
  appView.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault()
      if (process.platform === 'darwin') {
        app.hide()
      } else {
        app.quit()
      }
    }
  })
  return appView
}

app.on('ready', () => {
      // When app is ready, log it
  appLog.info('| MAIN | App ready |')

  mainWindow = createMainWindow()

    // Setting App menu
  menu.setApplicationMenu(require('./lib/menu.js'))

    // If running in developer environment = Open developer tools
  if (appIsDev) {
    mainWindow.openDevTools()
  }

  var appPage = mainWindow.webContents

  appPage.on('dom-ready', () => {
        // When DOM is ready, log it
    appLog.info('| MAIN | DOM ready |')

        // MacOS ONLY style fixes
    if (process.platform === 'darwin') {
          // OS detected as darwin, log it
      appLog.info('| MAIN | OS: Darwin (MacOS) | Adding app_mac stylesheets |')

      appPage.insertCSS(fs.readFileSync(path.join(__dirname, '/styles/app_mac.scss'), 'utf8'))
    }

        // Show the Main Window
    mainWindow.show()

        // Reload global shortcut (F5)
    globalShortcut.register('F5', () => {
      if (mainWindow.isFocused()) {
        appLog.info('| MAIN | Reloading |')
        mainWindow.webContents.reload()
      }
    })

        // Open dev tools global shortcut (CommandOrControl+Shift+I)
    globalShortcut.register('Shift+CommandOrControl+I', () => {
      if (mainWindow.isFocused()) {
        appLog.info('| MAIN | Opening dev tools |')
        mainWindow.webContents.openDevTools()
      }
    })

        // Open external links in browser
    appPage.on('new-window', (e, url) => {
      e.preventDefault()
      electron.shell.openExternal(url)
    })

        // Checking for close app message from IPC
    ipcMain.on('closeApplicationMessage', () => {
      app.quit()
    })
        // Checking for minimize app message from IPC
    ipcMain.on('minimizeApplicationMessage', () => {
      if (!mainWindow.isMinimized()) {
        mainWindow.minimize()
      }
    })
        // Checking for open settings window message from IPC
    ipcMain.on('openSettingsWindowMessage', () => {
      if (!mainWindow.isMinimized()) {
        //settingsWindow.show()
        appLog.info('| MAIN | Opening settings window')
      }
    })
  })
})

app.on('window-all-closed', () => {
      // When all windows closed, log it.
  appLog.info('| MAIN | All windows closed |')

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
      // Activating window, log it
  appLog.info('| MAIN | Window activiating |')

  mainWindow.show()
})

app.on('before-quit', () => {
      // Before app quit, log it
  appLog.info('| MAIN | App is quitting |')

  isQuitting = true

    // Saves the current window position and window size to the config file.
  if (!mainWindow.isFullScreen()) {
    appConfig.set('lastWindowState', mainWindow.getBounds())
  }
})
