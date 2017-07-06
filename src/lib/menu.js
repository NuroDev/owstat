// Electron
const electron = require('electron')

const app = electron.app
const appTitle = 'Overwatch Status'
const appVersion = app.getVersion()
const appMenu = electron.Menu
const appLog = require('electron-log')

// File menu for Windows platform
const win32Template = [{
  label: 'File',
  submenu: [{
    label: 'Hide ' + appTitle,
    accelerator: 'Control+H',
    role: 'hide',
    click () {
      appLog.info('| MAIN - MENU CONTROL | Hiding window |')
    }
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    accelerator: 'Control+W',
    role: 'close',
    click () {
      appLog.info('| MAIN - MENU CONTROL | Closing app |')
    }
  }]
}]

// Application menu for Windows platform
const macOSTemplate = {
  label: 'Application',
  submenu: [{
    label: 'Hide ' + appTitle,
    accelerator: 'Command+H',
    role: 'hide',
    click () {
      appLog.info('| MAIN - MENU CONTROL | Hiding window |')
    }
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    accelerator: 'Command+Q',
    click () {
      appLog.info('| MAIN - MENU CONTROL | Closing app |')
      app.quit()
    }
  }]
}

// Sets first menu item depending on operating system
function menuSet () {
  if (process.platform === 'darwin') {
    return macOSTemplate
  }
  return win32Template
}

// Base menu template
const menuTemplate = [
  menuSet(),
  {
    label: 'Edit',
    submenu: [{
      label: 'Undo',
      accelerator: 'CommandOrControl+Z',
      role: 'undo'
    }, {
      label: 'Redo',
      accelerator: 'Shift+CommandOrControl+Z',
      role: 'redo'
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      accelerator: 'CommandOrControl+X',
      role: 'cut'
    }, {
      label: 'Copy',
      accelerator: 'CommandOrControl+C',
      role: 'copy'
    }, {
      label: 'Paste',
      accelerator: 'CommandOrControl+V',
      role: 'paste'
    }, {
      label: 'Select All',
      accelerator: 'CommandOrControl+A',
      role: 'selectall'
    }]
  }, {
    label: 'View',
    submenu: [{
      label: 'Refresh',
      accelerator: 'CommandOrControl+R',
      role: 'reload',
      click () {
        appLog.info('| MAIN - MENU CONTROL | Reloading |')
      }
    }, {
      label: 'Force Refresh',
      accelerator: 'Shift+CommandOrControl+R',
      role: 'forcereload',
      click () {
        appLog.info('| MAIN - MENU CONTROL | Force reloading |')
      }
    }]
  }, {
    label: 'Window',
    role: 'window',
    submenu: [{
      label: 'Minimize',
      accelerator: 'CommandOrControl+M',
      role: 'minimize',
      click () {
        appLog.info('| MAIN - MENU CONTROL | Minimizing |')
      }
    }, {
      label: 'Close',
      accelerator: 'CommandOrControl+W',
      role: 'close',
      click () {
        appLog.info('| MAIN - MENU CONTROL | Closing window |')
      }
    }]
  }, {
    label: 'Help',
    role: 'help',
    submenu: [{
      label: 'About ' + appTitle,
      click () {
        electron.shell.openExternal('https://github.com/Meadowcottage/owstat/releases/tag/' + appVersion)
      }
    }, {
      label: 'Version ' + appVersion,
      enabled: false
    }, {
      type: 'separator'
    }, {
      label: 'View ' + appTitle,
      click () {
        electron.shell.openExternal('http://index.html')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Changelog',
      click () {
        electron.shell.openExternal('https://github.com/Meadowcottage/owstat/releases/tag/' + appVersion)
      }
    }]
  }]

// Exports menu
module.exports = appMenu.buildFromTemplate(menuTemplate)
