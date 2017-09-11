# MMM-Cursor
Cursor show/hide module for MagicMirror². Displays cursor when user moves mouse and hide after delay.

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/MarinescuEvghenii/MMM-Cursor.git
````

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Cursor',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following property can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>timeout</code></td>
			<td>
				Delay time in ms. <b>Default value:</b> <code>1000</code>
			</td>
		</tr>
	</tbody>
</table>
