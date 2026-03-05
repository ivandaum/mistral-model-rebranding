// Raf manager :
// Managing all animation to make sure there's always one requestAnimationFrame running at the same time
// will allow user to dynamically add/remove animation
// If you're not familiar with the "Raf Manager" concept : https://dev.to/josephciullo/supercharge-your-web-animations-optimize-requestanimationframe-like-a-pro-22i5
class Raf {
	static instance: Raf | null = null;

	isRunning: boolean = false;
	callbacks: Map<string, (t: number) => void> = new Map();

	constructor() {
		if (Raf.instance) {
			return Raf.instance;
		}

		Raf.instance = this;

		this.callbacks = new Map();
		this.isRunning = false;
		this.update = this.update.bind(this);
	}

	// get the current instance of initiat a new one
	static getInstance() {
		if (!Raf.instance) {
			Raf.instance = new Raf();
		}
		return Raf.instance;
	}

	// add an animation to the active list
	add(id: string, callback: (t: number) => void) {
		if (!this.callbacks.has(id)) {
			this.callbacks.set(id, callback);
			this.startIfNeeded();
		}
	}

	// remove the given {id} animation from the active one
	remove(id: string) {
		this.callbacks.delete(id);
		if (this.callbacks.size === 0) {
			this.stop();
		}
	}

	// check if we need to start the requestAnimationFrame
	startIfNeeded() {
		if (!this.isRunning) {
			this.isRunning = true;
			requestAnimationFrame(this.update);
		}
	}

	// Stop the requestAnimationFrame
	stop() {
		this.isRunning = false;
	}

	// the actual requestAnimationFrame running
	update(timestamp: number) {
		if (!this.isRunning) return;
		this.callbacks.forEach((callback) => callback(timestamp));
		requestAnimationFrame(this.update);
	}
}

export default Raf;
