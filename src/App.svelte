<script>
	import "filepond/dist/filepond.css";
	import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

	import DownloadButton from "./components/DownloadButton.svelte";
	import FileUpload from "./components/FileUpload.svelte";
	// import { file1, file2 } from "./store";
	import FilePond, { registerPlugin, supported } from "svelte-filepond";
	import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
	import FilePondPluginImagePreview from "filepond-plugin-image-preview";
	import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

	registerPlugin(
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginPdfPreview
	);

	function handleInit() {
		console.log("FilePond has initialised");
	}

	let pond1;
	let pond2;

	let url = "/";
	let file1Name = "";
	let file1 = new File(["file1"], "FILE_1");
	let file2 = new File(["file2"], "FILE_2");

	async function handleImageUpload() {
		file1Name = "Processed-" + file1.name;
		const formData = new FormData();
		formData.append("file1", file1);
		formData.append("file2", file2);

		const response = await fetch("http://localhost:8080/", {
			method: "POST",
			body: formData,
			mode: "cors",
		});
		const body = await response.blob();
		const blob = new Blob([body], { type: "application/pdf" });

		url = URL.createObjectURL(blob);
	}
</script>

<main class="p-5 text-center">
	<h1 class="text-5xl text-orange-600 font-thin">PDF Merger</h1>
	<p class="p-10">Upload 2 files you want to merge.</p>
	<div class="flex h-full">
		<div class="w-2/5 px-5 h-full">
			<h2 class="text-3xl p-5">Upload PDF 1</h2>
			<FilePond
				bind:this={pond1}
				name="file1Uploader"
				allowMultiple={false}
				oninit={handleInit}
				onaddfile={(err, fileItem) => (file1 = fileItem.file)}
				class="h-96"
			/>
		</div>
		<div class="w-1/5  self-center">
			<div class="flex justify-center">
				<h2 class="text-2xl">Insert at page</h2>
				<input
					type="number"
					placeholder="2"
					class="w-10 h-10 "
					min="0"
					max="100"
				/>
			</div>
			<div class="long-arrow-left" />
			<button on:click={handleImageUpload}>Merge PDFs!</button>
		</div>
		<div class="w-2/5">
			<h2 class="text-3xl p-5">Upload PDF 2</h2>
			<FilePond
				bind:this={pond2}
				name="file2Uploader"
				allowMultiple={false}
				oninit={handleInit}
				onaddfile={(err, fileItem) => (file2 = fileItem.file)}
				class="h-96"
			/>
		</div>
	</div>
	{#if url != "/"}
		<a href={url} target="_blank">URL OF FILE</a>
		<DownloadButton
			fileURL={url}
			fileName={file1Name}
			text="Download PDF"
		/>
	{/if}
</main>

<style lang="postcss" global>
	.long-arrow-left {
		display: block;
		margin: 30px auto;
		width: 25px;
		height: 25px;
		border-top: 2px solid #000;
		border-left: 2px solid #000;
	}
	.long-arrow-left::after {
		content: "";
		display: block;
		width: 2px;
		height: 45px;
		background-color: black;
		transform: rotate(-45deg) translate(15px, 4px);
		left: 0;
		top: 0;
	}
	.long-arrow-left {
		transform: rotate(-45deg);
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
