<script>
	import { stepIndex } from "./store";
	import Step1 from "./components/Step1.svelte";
	import Step2 from "./components/Step2.svelte";
	import Step3 from "./components/Step3.svelte";
	import Step4 from "./components/Step4.svelte";

	let step;
	stepIndex.subscribe((value) => (step = value));
</script>

<svelte:head>
	<title>PDF Inserter</title>
</svelte:head>

<main class="flex flex-col h-full p-5 text-center">
	<h1 class="text-5xl text-orange-600 font-thin">PDF Inserter</h1>
	{#if step == 0}
		<Step1 />
	{:else if step == 1}
		<Step2 />
	{:else if step == 2}
		<Step3 />
	{:else if step == 3}
		<Step4 />
	{/if}
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.filepond--root,
	.filepond--root .filepond--drop-label {
		height: 70vh;
	}
</style>
