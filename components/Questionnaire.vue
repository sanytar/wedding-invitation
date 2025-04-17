<template>
  <div class="min-h-screen bg-gray-50 text-black font-body tracking-wide leading-relaxed px-4 sm:px-6 py-8 border-8 border-black border-double max-w-4xl mx-auto shadow-xl">

    <section class="mb-10 text-center">
      <h2 class="text-3xl uppercase tracking-widest font-serif mb-2">Анкета гостя</h2>
      <p class="italic text-[#bfa86d] text-sm">Пожалуйста, заполните форму — ваше мнение для нас важно</p>
      <p class="text-[#bfa86d] text-xl mt-4 select-none">✦ ✦ ✦</p>
    </section>

    <div v-if="!submitted">
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Имя -->
        <div>
          <label class="block font-serif uppercase tracking-widest mb-1">Имя</label>
          <input v-model="form.firstName" type="text" required class="w-full border border-black px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#bfa86d]" />
        </div>

        <!-- Фамилия -->
        <div>
          <label class="block font-serif uppercase tracking-widest mb-1">Фамилия</label>
          <input v-model="form.lastName" type="text" required class="w-full border border-black px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#bfa86d]" />
        </div>

        <!-- Горячее блюдо -->
        <div>
          <label class="block font-serif uppercase tracking-widest mb-1">Горячее блюдо</label>
          <select v-model="form.dishId" required class="w-full border border-black px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#bfa86d]">
            <option disabled value="">Выберите вариант</option>
            <option v-for="dish in dishes" :key="dish.id" :value="dish.id">{{ dish.name }}</option>
          </select>
        </div>

        <!-- Алкоголь -->
        <div>
          <label class="block font-serif uppercase tracking-widest mb-2">Напитки</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <label v-for="drink in alcohols" :key="drink.id" class="flex items-center space-x-2">
              <input type="checkbox" :value="drink.id" v-model="form.alcoholIds" class="accent-[#bfa86d] border-black" />
              <span>{{ drink.name }}</span>
            </label>
          </div>
          <p class="text-xs italic text-gray-600 mt-1">Можно выбрать несколько</p>
        </div>

        <!-- Комментарий -->
        <div>
          <label class="block font-serif uppercase tracking-widest mb-1">Комментарий</label>
          <textarea v-model="form.comment" rows="4" class="w-full border border-black px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#bfa86d]" placeholder="Уточнения, пожелания, аллергии и т.д."></textarea>
        </div>

        <!-- Кнопка -->
        <div class="text-center pt-4">
          <button type="submit" class="px-8 py-3 border border-black bg-black text-white hover:bg-[#bfa86d] hover:text-black transition uppercase tracking-widest text-sm">
            Отправить
          </button>
        </div>
      </form>
    </div>

    <!-- Сообщение после отправки -->
    <div v-else class="text-center py-20">
      <h3 class="text-2xl font-serif uppercase tracking-widest text-[#bfa86d] mb-4">Спасибо!</h3>
      <p class="text-lg max-w-md mx-auto">Ваша анкета успешно отправлена. Мы очень ценим ваше участие в нашем празднике! ❤️</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://wedding-server-production.up.railway.app'


const dishes = ref([])
const alcohols = ref([])
const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  dishId: '',
  alcoholIds: [],
  comment: ''
})

onMounted(async () => {
  try {
    const [dishRes, alcoholRes] = await Promise.all([
      axios.get('/api/dishes'),
      axios.get('/api/alcohols')
    ])
    dishes.value = dishRes.data
    alcohols.value = alcoholRes.data
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
  }
})

const submitForm = async () => {
  try {
    await axios.post('/api/form', { ...form })
    submitted.value = true
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Что-то пошло не так. Попробуйте позже.')
  }
}
</script>

<style scoped>
/* можно добавить кастомный стиль или анимацию */
</style>