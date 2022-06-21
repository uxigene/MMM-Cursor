/* global Module */

/* Magic Mirror
 * Module: MMM-Cursor
 *
 * By Evghenii Marinescu https://github.com/MarinescuEvghenii/
 * MIT Licensed.
 */

Module.register("MMM-Cursor", {

	defaults: {
		timeout: 1000
	},

	getStyles: function() {
		return ["MMM-Cursor.css"];
	},

	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
		this.bind();
		
		Log.info("Starting module: " + this.name);
	},

	bind: function() {
		var self = this;

		document.addEventListener("mousemove", function() {
			self.onMouseMove();
		});
	},

	hideCursor: function() {
		var el = document.querySelector('html');
		el.classList.remove("cursor-show");

		this.cursorVisible = false;
	},

	showCursor: function() {
		var el = document.querySelector('html');
		el.classList.add("cursor-show");

		this.cursorVisible = true;
	},

	onMouseMove: function() {
		var self = this;

		if(self.timer) {
			clearTimeout(self.timer);
			delete self.timer;
		}

		if(!self.cursorVisible) {
			self.showCursor();
		}

		self.timer = setTimeout(function() {
			self.hideCursor();
		}, self.config.timeout);
	}
});
