import { writable } from 'svelte/store';

export const fileValue1 = writable(0);
export const fileValue2 = writable(0);
export const stepIndex = writable(0);
export const pageIndex = writable(0);
export const processedFileValue = writable(0);
