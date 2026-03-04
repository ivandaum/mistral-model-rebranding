// Raf manager :
// Managing all animation to make sure there's always one requestAnimationFrame
// running at the same time
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

	static getInstance() {
		if (!Raf.instance) {
			Raf.instance = new Raf();
		}
		return Raf.instance;
	}

	add(id: string, callback: (t: number) => void) {
		console.log('---> animation added :', id);
		if (!this.callbacks.has(id)) {
			this.callbacks.set(id, callback);
			this.startIfNeeded();
		}
	}

	remove(id: string) {
		console.log('# animation removed :', id);
		this.callbacks.delete(id);
		if (this.callbacks.size === 0) {
			this.stop();
		}
	}

	startIfNeeded() {
		if (!this.isRunning) {
			this.isRunning = true;
			requestAnimationFrame(this.update);
		}
	}

	stop() {
		this.isRunning = false;
	}

	update(timestamp: number) {
		if (!this.isRunning) return;
		this.callbacks.forEach((callback) => callback(timestamp));
		requestAnimationFrame(this.update);
	}
}

export default Raf;
