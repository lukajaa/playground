<template>
  <div class="flex flex-col space-y-8">
    <progress v-for="n in 8" :key="n" class="progress h-5" value="40" max="100" />
  </div>
</template>
