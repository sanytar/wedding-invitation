<template>
  <div class="min-h-screen bg-gray-50 text-black p-10 space-y-8">
    <h1 class="text-4xl font-serif border-b border-gray-200 pb-4">ЧБ палитра сайта</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="color in colors" :key="color.name" class="rounded shadow overflow-hidden border border-gray-200">
        <div :class="['h-20', color.class]"></div>
        <div class="text-sm text-center py-2">{{ color.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colors = [
  { name: 'White', class: 'bg-white' },
  { name: 'Gray 50', class: 'bg-gray-50' },
  { name: 'Gray 100', class: 'bg-gray-100' },
  { name: 'Gray 200', class: 'bg-gray-200' },
  { name: 'Gray 300', class: 'bg-gray-300' },
  { name: 'Gray 400', class: 'bg-gray-400' },
  { name: 'Gray 500', class: 'bg-gray-500' },
  { name: 'Gray 600', class: 'bg-gray-600' },
  { name: 'Gray 700', class: 'bg-gray-700' },
  { name: 'Gray 800', class: 'bg-gray-800' },
  { name: 'Gray 900', class: 'bg-gray-900' },
  { name: 'Black', class: 'bg-black' },
  { name: 'Blush (Акцент)', class: 'bg-blush' },
  { name: 'Gold (Акцент)', class: 'bg-gold' },
  { name: 'Champagne (Акцент)', class: 'bg-champagne' },
]
</script>

<style scoped></style>