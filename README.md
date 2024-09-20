# MMM-Cursor

Cursor show/hide module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror). Displays cursor when user moves mouse and hide after delay.

## Screenshot

![screenshot](screenshot.png)

## Installation

In your terminal, go to your MagicMirror's module folder:

```bash
cd ~/MagicMirror/modules
```

Clone this repository:

```bash
git clone https://github.com/uxigene/MMM-Cursor
```

Configure the module in your `config.js` file.

## Configuration

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
    {
      module: "MMM-Cursor",
      config: {
        timeout: 1500
      }
    },
```

## Configuration options

The following property can be configured:

| Option    | Description                                     |
|-----------|-------------------------------------------------|
| `timeout` | Delay time in ms. <br>**Default value**: `1000` |

## Update

Go to the module’s folder inside MagicMirror modules folder and pull the latest version from GitHub and install:

```bash
cd ~/MagicMirror/modules/MMM-Cursor
git pull
```
