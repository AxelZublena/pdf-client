<script>
	import { fileValue1, fileValue2, stepIndex } from "../store";
	import FileUpload from "./FileUpload.svelte";

	let button;
	let file1Name;
	fileValue2.subscribe((value) => {
		if (button != undefined) {
			if (value != null) {
				button.removeAttribute("hidden");
			} else {
				stepIndex.set(0);
				button.setAttribute("hidden", "hidden");
			}
		}
	});
	fileValue1.subscribe((value) => (file1Name = value.name));
</script>

<div class="flex justify-center items-center h-full">
	<div class="w-1/2">
		<h2 class="text-3xl p-5">Step 2</h2>
		<p>Upload the file to be inserted in {file1Name}</p>
		<button bind:this={button} on:click={() => stepIndex.set(2)} hidden
			>Next step</button
		>
	</div>
	<FileUpload index="2" />
</div>
