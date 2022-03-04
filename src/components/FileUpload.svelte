<script>
	import { fileValue1, fileValue2, stepIndex } from "../store";
	export let index;

	let file1;
	let file2;
	fileValue1.subscribe((value) => (file1 = value));
	fileValue2.subscribe((value) => (file2 = value));

	function uploadFile(err, fileItem) {
		if (index < 1 && index > 2) return;

		const file = fileItem.file;
		if (index == 1) {
			fileValue1.set(file);
		} else {
			fileValue2.set(file);
		}
	}
	function removeFile() {
		if (index < 1 && index > 2) return;

		if (index == 1) {
			fileValue1.set(null);
			stepIndex.set(0);
		} else {
			fileValue2.set(null);
			stepIndex.set(1);
		}
	}
	function handleFiles() {
		if (index == 1) {
			if (file1.name === "defaultFile1" && file1.size === 0) return;
			return [file1];
		} else {
			if (file2.name === "defaultFile2" && file2.size === 0) return;
			return [file2];
		}
	}

	import "filepond/dist/filepond.css";
	import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
	import { FilePond, registerPlugin } from "svelte-filepond";
	import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

	registerPlugin(FilePondPluginPdfPreview);

	let pond;

	let div;
	let height = 320;
	function getHeight() {
		height = div.clientHeight - 55;
	}
</script>

<div class="w-1/2" bind:this={div}>
	<FilePond
		bind:this={pond}
		name="FileUploader"
		allowMultiple={false}
		oninit={getHeight}
		onaddfile={uploadFile}
		onremovefile={removeFile}
		pdfPreviewHeight={height}
		files={handleFiles()}
	/>
</div>
