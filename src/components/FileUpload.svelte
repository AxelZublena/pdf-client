<script>
	import { file1, file2 } from "../store";
	export let index;

	function handleFile(event) {
		if (index < 1 && index > 2) return;

		const file = event.target.files[0];
		if (index == 1) {
			file1.set(file);
		} else {
			file2.set(file);
		}
	}
</script>

<div>
	<p>File nᵒ2</p>
	<input type="file" id="fileUpload{index}" on:change={handleFile} />
</div>
