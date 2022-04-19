<script>
	import { fileValue1, stepIndex } from '../../store';
	import FileUpload from './FileUpload.svelte';

	let button;
	fileValue1.subscribe((value) => {
		if (button != undefined) {
			if (value != null) {
				button.removeAttribute('hidden');
			} else {
				stepIndex.set(0);
				button.setAttribute('hidden', 'hidden');
			}
		}
	});
</script>

<div class="flex justify-center items-center h-full">
	<FileUpload index="1" />
	<div class="w-1/2">
		<h2 class="text-3xl p-5">Step 1</h2>
		<p>Upload 2 files you want to merge.</p>
		<button bind:this={button} on:click={() => stepIndex.set(1)} hidden>Next step</button>
	</div>
</div>
