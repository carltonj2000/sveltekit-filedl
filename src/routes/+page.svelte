<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let fileName: string = '';
	export let form: ActionData;
</script>

<h1>File Upload</h1>

{#if form?.error}
	<p>{form.message}</p>
{/if}
{#if form?.success}
	<p>File uploaded</p>
{/if}
<form method="POST" use:enhance>
	<input type="file" name="file" bind:value={fileName} />
	<button formaction="?/upload">Upload</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	button {
		align-self: flex-start;
	}
</style>
