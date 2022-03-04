import { writable } from 'svelte/store';

export const fileValue1 = writable(new File([""], "defaultFile1", { type: "application/pdf" }))
export const fileValue2 = writable(new File([""], "defaultFile2", { type: "application/pdf" }))
export const stepIndex = writable(0);
export const pageIndex = writable(0);
export const processedFileValue = writable(0);
