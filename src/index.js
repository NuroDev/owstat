// System paths
var path = require('path');
var fs = require('fs');

// Electron
var electron = require('electron');
var menu = electron.Menu;

// App Info
var app = electron.app;
var appTitle = app.getName();
var appIsDev = require('electron-is-dev');
var appConfig = require('./lib/config.js');

// Main App Window
var mainWindow = void 0;

// If the application is quitting
var isQuitting = false;

// Main Window
function createMainWindow() {
    var lastWindowState = appConfig.get('lastWindowState');

    var appView = new electron.BrowserWindow({
        title: appTitle, // Window title
        x: lastWindowState.x, // Window x position
        y: lastWindowState.y, // Window y position
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
    });
    appView.loadURL(path.join('file://', __dirname, '/static/app.html'));

    // When window is closed, hide window
    appView.on('close', function (e) {
        if (!isQuitting) {
            e.preventDefault();
            if (process.platform === 'darwin') {
                app.hide();
            } else {
                app.quit();
            }
        }
    });
    return appView;
}

app.on('ready', function () {
    mainWindow = createMainWindow();

    // Setting App menu
    menu.setApplicationMenu(require('./lib/menu.js'));

    // If running in developer environment = Open developer tools
    if (appIsDev) {
        mainWindow.openDevTools();
    }

    var appPage = mainWindow.webContents;

    appPage.on('dom-ready', function () {

        // MacOS ONLY style fixes
        if (process.platform === 'darwin') {
            appPage.insertCSS(fs.readFileSync(path.join(__dirname, '/styles/app_mac.css'), 'utf8'));
        }

        // Show the Main Window
        mainWindow.show();

        // Open external links in browser
        appPage.on('new-window', function (e, url) {
            e.preventDefault();
            electron.shell.openExternal(url);
        });

        // Navigate the window back when the user hits their mouse back button
        mainWindow.on('app-command', function (e, cmd) {
            if (cmd === 'browser-backward' && mainWindow.webContents.canGoBack()) {
                mainWindow.webContents.goBack();
            }
        });
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    mainWindow.show();
});

app.on('before-quit', function () {
    isQuitting = true;

    // Saves the current window position and window size to the config file.
    if (!mainWindow.isFullScreen()) {
        appConfig.set('lastWindowState', mainWindow.getBounds());
    }
});