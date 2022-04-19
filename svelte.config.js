// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			server: { port: 8080 },
			optimizeDeps: {
				include: []
			}
		}
	}
};

export default config;
