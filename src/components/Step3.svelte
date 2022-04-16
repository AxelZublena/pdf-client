<script>
	import {
		fileValue1,
		fileValue2,
		pageIndex,
		stepIndex,
		processedFileValue,
	} from "../store";

	let button;
	let index;
	let file1Name;
	let file2Name;
	let file1 = undefined;
	let file2 = undefined;
	fileValue1.subscribe((value) => {
		file1 = value;
		if (value != null) {
			file1Name = value.name;
		}
	});
	fileValue2.subscribe((value) => {
		file2 = value;
		if (value != null) {
			file2Name = value.name;
		}
	});

	async function handleImageUpload() {
		if (file1 == 0 || file2 == 0) return 1;

		const formData = new FormData();
		formData.append("file1", file1);
		formData.append("file2", file2);

		const response = await fetch("http://localhost:3000/", {
			method: "POST",
			body: formData,
			mode: "cors",
		});
		const body = await response.blob();
		const blob = new Blob([body], { type: "application/pdf" });
		processedFileValue.set(blob);

		return 0;
	}
</script>

<div class="flex justify-center items-center h-full">
	<div class="w-1/2">
		<h2 class="text-3xl p-5">Step 3</h2>
		<p>
			Select the page at which {file2Name} will be inserted in {file1Name}
		</p>
		<input
			type="number"
			min="0"
			max="100"
			class="ml-2 px-2 py-1"
			bind:value={index}
			on:change={button.removeAttribute("hidden")}
		/>

		<button
			bind:this={button}
			on:click={async () => {
				if ((await handleImageUpload()) === 0) {
					stepIndex.set(3);
					pageIndex.set(pageIndex);
				} else {
					alert("Missing files");
				}
			}}
			hidden>Insert the PDF!</button
		>
		<button on:click={() => stepIndex.set(1)}>Previous step</button>
	</div>
</div>
