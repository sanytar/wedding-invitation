<template>
  <div v-if="auth" class="bg-gray-50 text-black font-body tracking-wide leading-relaxed px-4 sm:px-6 py-10 border-8 border-black border-double max-w-4xl mx-auto shadow-xl space-y-12">

    <!-- Общая статистика -->
    <div class="text-center border border-black p-4">
      <h2 class="text-xl font-serif uppercase tracking-widest mb-2">Всего гостей</h2>
      <div class="text-4xl font-bold text-[#bfa86d]">{{ forms.length }}</div>
    </div>

    <!-- Вкладки -->
    <div class="flex justify-center space-x-4">
      <button
        @click="activeTab = 'guests'"
        :class="[tabBase, activeTab === 'guests' ? tabActive : '']"
      >
        Гости
      </button>
      <button
        @click="activeTab = 'analytics'"
        :class="[tabBase, activeTab === 'analytics' ? tabActive : '']"
      >
        Аналитика
      </button>
    </div>

    <!-- Список гостей -->
    <section v-if="activeTab === 'guests'">
      <h2 class="text-2xl font-serif uppercase tracking-widest mb-6">Подтвердившие участие</h2>
      <div
        v-for="guest in forms"
        :key="guest.id"
        class="bg-white border-2 border-black p-4 mb-6 rounded-xl shadow-inner relative"
      >
        <div class="text-lg font-semibold font-serif uppercase mb-2">
          {{ guest.firstName }} {{ guest.lastName }}
        </div>
        <div class="text-sm mb-1">
          🍽 <span class="font-medium">Горячее блюдо:</span>
          <span class="text-[#bfa86d]">{{ guest.Dish?.name || '—' }}</span>
        </div>
        <div class="text-sm mb-1">
          🍷 <span class="font-medium">Алкоголь:</span>
          <span v-if="guest.Alcohols?.length">
            <span class="text-[#bfa86d]">{{ guest.Alcohols.map(a => a.name).join(', ') }}</span>
          </span>
          <span v-else>не выбрано</span>
        </div>
        <div class="text-sm italic text-gray-600">
          💬 Комментарий: {{ guest.comment || '—' }}
        </div>
      </div>
    </section>

    <!-- Аналитика -->
    <section v-else>
      <h2 class="text-2xl font-serif uppercase tracking-widest mb-6">Аналитика выбора блюд</h2>
      <div
        v-for="(count, dish) in dishStats"
        :key="dish"
        class="mb-6"
      >
        <div class="flex justify-between text-sm font-medium mb-1">
          <span>{{ dish }}</span>
          <span>{{ percent(count, totalDishes) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            class="bg-[#bfa86d] h-full transition-all"
            :style="{ width: percent(count, totalDishes) + '%' }"
          ></div>
        </div>
      </div>

      <h2 class="text-2xl font-serif uppercase tracking-widest mt-10 mb-6">Аналитика по алкоголю</h2>
      <div
        v-for="(count, drink) in alcoholStats"
        :key="drink"
        class="mb-6"
      >
        <div class="flex justify-between text-sm font-medium mb-1">
          <span>{{ drink }}</span>
          <span>{{ percent(count, totalAlcohols) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            class="bg-black h-full transition-all"
            :style="{ width: percent(count, totalAlcohols) + '%' }"
          ></div>
        </div>
      </div>
    </section>

    <div class="text-right">
      <button
        @click="downloadExcel"
        class="px-6 py-3 border border-black hover:bg-black hover:text-white transition uppercase tracking-widest text-sm"
      >
        📥 Скачать Excel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://wedding-server-production.up.railway.app'

const forms = ref([])
const isLoading = ref(true)
const auth = ref(false)
const activeTab = ref('guests')

const tabBase = 'px-4 py-2 uppercase border border-black tracking-widest text-sm transition'
const tabActive = 'bg-black text-white'

onBeforeMount(async () => {
  if (typeof window !== 'undefined' && localStorage.getItem('admin_auth') !== '1') {
    window.location.href = '/admin-login'
  } else {
    auth.value = true
  }
  await loadForms()
})

async function loadForms() {
  try {
    const res = await axios.get('http://localhost:3000/api/form')
    forms.value = res.data
  } catch (err) {
    console.error('Ошибка загрузки:', err)
  } finally {
    isLoading.value = false
  }
}

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

<style scoped>
button:focus {
  outline: none;
}
</style>
