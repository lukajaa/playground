<template :class="$colorMode.value">
  <div class="bg-slate-50 transition duration-300 dark:bg-slate-950 dark:text-slate-50">
    <slot />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import 'inter-ui/inter.css'
</script>
