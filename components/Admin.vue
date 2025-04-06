<template>
  <div v-if="auth" class="p-6 max-w-4xl mx-auto space-y-10">

    <!-- 🧑‍🤝‍🧑 Список гостей -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Подтвердившие участие</h2>
      <div
        v-for="guest in forms"
        :key="guest.id"
        class="bg-white shadow rounded-xl p-4 mb-4 border border-gray-200"
      >
        <div class="text-lg font-semibold mb-1">
          {{ guest.firstName }} {{ guest.lastName }}
        </div>
        <div class="text-sm text-gray-700 mb-1">
          🍽 Горячее блюдо: <strong>{{ guest.Dish?.name || '—' }}</strong>
        </div>
        <div class="text-sm text-gray-700 mb-1">
          🍷 Алкоголь: 
          <span v-if="guest.Alcohols?.length">
            {{ guest.Alcohols.map(a => a.name).join(', ') }}
          </span>
          <span v-else>не выбрано</span>
        </div>
        <div class="text-sm text-gray-500 italic">
          💬 Комментарий: {{ guest.comment || '—' }}
        </div>
      </div>
    </section>

    <!-- 📊 Аналитика -->
<section>
  <h2 class="text-2xl font-bold mb-4">Аналитика выбора блюд</h2>
  <div
    v-for="(count, dish) in dishStats"
    :key="dish"
    class="mb-4"
  >
    <div class="flex justify-between text-sm font-medium mb-1">
      <span>{{ dish }}</span>
      <span>{{ percent(count, totalDishes) }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        class="bg-pink-500 h-full transition-all"
        :style="{ width: percent(count, totalDishes) + '%' }"
      ></div>
    </div>
  </div>


  <h2 class="text-2xl font-bold mt-10 mb-4">Аналитика по алкоголю</h2>
  <div
    v-for="(count, drink) in alcoholStats"
    :key="drink"
    class="mb-4"
  >
    <div class="flex justify-between text-sm font-medium mb-1">
      <span>{{ drink }}</span>
      <span>{{ percent(count, totalAlcohols) }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        class="bg-blue-500 h-full transition-all"
        :style="{ width: percent(count, totalAlcohols) + '%' }"
      ></div>
    </div>
  </div>
</section>
<div class="flex justify-end">
  <button
    @click="downloadExcel"
    class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
  >
    📥 Скачать Excel
  </button>
</div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import axios from 'axios'

const forms = ref([])
const isLoading = ref(true)

const auth = ref(false)

onBeforeMount(async () => {
  if (typeof window !== 'undefined' && localStorage.getItem('admin_auth') !== '1') {
  window.location.href = '/admin-login'
  } else {
    auth.value = true
  }
  try {
    const res = await axios.get('http://localhost:3000/api/form')
    forms.value = res.data
  } catch (err) {
    console.error('Ошибка загрузки:', err)
  } finally {
    isLoading.value = false
  }
})

function downloadExcel() {
  fetch('http://localhost:3000/api/export')
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'guests.xlsx'
      link.click()
      window.URL.revokeObjectURL(url)
    })
    .catch(err => {
      console.error('Ошибка при скачивании Excel:', err)
      alert('Не удалось скачать файл')
    })
}

// 🍽 статистика по блюдам
const dishStats = computed(() => {
  const map = {}
  for (const form of forms.value) {
    const dishName = form.Dish?.name || 'Не указано'
    map[dishName] = (map[dishName] || 0) + 1
  }
  return map
})

const totalDishes = computed(() =>
  Object.values(dishStats.value).reduce((sum, count) => sum + count, 0)
)

// 🍷 статистика по алкоголю
const alcoholStats = computed(() => {
  const map = {}
  for (const form of forms.value) {
    for (const alcohol of form.Alcohols || []) {
      map[alcohol.name] = (map[alcohol.name] || 0) + 1
    }
  }
  return map
})

const totalAlcohols = computed(() =>
  Object.values(alcoholStats.value).reduce((sum, count) => sum + count, 0)
)

function percent(count, total) {
  return total === 0 ? 0 : ((count / total) * 100).toFixed(0)
}

</script>
