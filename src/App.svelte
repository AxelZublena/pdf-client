<script>
	import DownloadButton from "./components/DownloadButton.svelte";

	let url = "/";
	let fileName = "";

	async function handleImageUpload(event) {
		const file = event.target.files[0];
		fileName = "Processed-" + file.name;
		const formData = new FormData();
		formData.append("testFile", file);

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

<main>
	<h1>Hello!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<input type="file" id="fileUpload" on:change={handleImageUpload} />
	{#if url != "/"}
		<a href={url} target="_blank">URL OF FILE</a>
		<DownloadButton fileURL={url} {fileName} text="Download PDF" />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
