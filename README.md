## SvelteJS-Show

`SvelteJS-Show` is the equivalent of `v-show` in `VueJS` will hide the element without adding any div block or destroying the component.

## Installation

```bash
npm install sveltejs-show
```

## Usage

```svelte
<script>
  import show from 'sveltejs-show'
  let isShow = false
</script>

<button on:click={()=>{isShow=!isShow}}>{isShow}</button>
<h1 use:show={isShow}>Hello world!</h1>
```
