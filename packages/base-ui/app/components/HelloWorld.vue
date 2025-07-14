<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="bg-primary/25">
    <h1>Hello World! Base! NEW!!!</h1>
    <pre>{{ myLayer }}</pre>
    <p class="text-bcGovGray-900">
      Hello World text base
    </p>
  </div>
</template>
