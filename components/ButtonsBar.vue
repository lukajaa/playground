<template>
  <div class="flex flex-row space-x-4">
    <div v-for="n in 7" :key="n" class="flex flex-col">
      <button class="btn rounded-full">Button #{{ n }}</button>
    </div>
    <div class="flex flex-col"><ThemeSwitcher /></div>
  </div>
</template>
