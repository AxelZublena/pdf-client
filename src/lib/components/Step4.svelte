<script>
	import { fileValue1, stepIndex, processedFileValue } from '../../store';
	import DownloadButton from './DownloadButton.svelte';

	let fileName;
	fileValue1.subscribe((value) => (fileName = 'Processed-' + value.name));
	let processedFile;
	processedFileValue.subscribe((value) => (processedFile = value));

	$: url = URL.createObjectURL(processedFile);
</script>

<div class="flex justify-center items-center h-full">
	<div class="w-1/2">
		<h2 class="text-3xl p-5">Step 4</h2>
		<p>Dowload the PDF</p>

		<a href={url} target="_blank">URL OF FILE</a>
		<DownloadButton fileURL={url} {fileName} text="Download PDF" />
	</div>
</div>
