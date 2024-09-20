/* global Module */

/* MagicMirror²
 * Module: MMM-Cursor
 *
 * By Evghenii Marinescu https://github.com/uxigene/
 * MIT Licensed.
 */

Module.register("MMM-Cursor", {

	defaults: {
		timeout: 1000
	},

	getStyles () {
		return ["MMM-Cursor.css"];
	},

	start () {
		this.config = {...this.defaults, ...this.config};
		this.bind();

		Log.info(`Starting module: ${this.name}`);
	},

	bind () {
		const self = this;

		document.addEventListener("mousemove", () => {
			self.onMouseMove();
		});
	},

	hideCursor () {
		const el = document.querySelector("html");
		el.classList.remove("cursor-show");

		this.cursorVisible = false;
	},

	showCursor () {
		const el = document.querySelector("html");
		el.classList.add("cursor-show");

		this.cursorVisible = true;
	},

	onMouseMove () {
		const self = this;

		if (self.timer) {
			clearTimeout(self.timer);
			delete self.timer;
		}

		if (!self.cursorVisible) {
			self.showCursor();
		}

		self.timer = setTimeout(() => {
			self.hideCursor();
		}, self.config.timeout);
	}
});
