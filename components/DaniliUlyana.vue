<template>
  <div class="min-h-screen bg-gray-50 text-black font-body tracking-wide leading-relaxed px-2 sm:px-6 py-6 border-8 border-black border-double max-w-5xl mx-auto shadow-xl">
    <!-- Header -->
    <header class="w-full border-b border-black py-6 mb-8 text-center">
      <h1 class="text-4xl uppercase tracking-widest font-serif">Мы говорим “Да”</h1>
    </header>

    <!-- Hero -->
    <section class="mb-12 border-y border-black py-8 text-center">
      <div class="border-8 border-black border-double bg-white p-1 w-full max-w-4xl mx-auto mb-6">
        <img
          src="../assets/img/main-photo.jpg"
          alt="Данил и Ульяна"
          class="object-cover w-full h-[60vh] brightness-75 contrast-110"
        />
      </div>
      <h2 class="text-5xl mb-2 font-serif uppercase">Данил & Ульяна</h2>
      <p class="text-lg">10 июля 2025 — 15:00</p>
      <p class="text-md mb-4">г. Киров, ресторан "Террасса"</p>
      <div class="mt-3 animate-bounce text-black">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- Обращение -->
    <section class="mb-12 text-center">
      <h3 class="text-3xl mb-4 font-serif">Привет, гость!</h3>
      <p>
        Ура, мы такие крутые, и лично ты приглашен на нашу свадьбу 🎉
        Ниже ты найдёшь всю информацию по мероприятию — обязательно ознакомься с ней ❤️
      </p>
    </section>

    <!-- Где / Когда -->
    <section class="mb-12 text-center border-t border-b border-black py-10">
      <h3 class="text-2xl mb-2 uppercase font-serif">Место проведения</h3>
      <p class="mb-1">г. Киров</p>
      <p class="mb-1">Ресторан "Террасса"</p>
      <p class="mb-4">10 июля 2025 — 15:00</p>
      <a
        href="https://yandex.ru/maps/"
        target="_blank"
        class="inline-block underline text-black hover:text-gray-600 transition"
      >
        Посмотреть на карте
      </a>
    </section>

    <!-- Расписание -->
    <section class="mb-12">
      <h3 class="text-2xl mb-6 text-center uppercase font-serif">Расписание нашего дня</h3>
      <div class="space-y-4">
        <div v-for="(event, index) in schedule" :key="event.time" class="flex items-baseline">
          <div class="w-24 font-bold">{{ event.time }}</div>
          <div class="flex-1 border-t border-dashed border-gray-500 mx-3"></div>
          <div>{{ event.label }}</div>
        </div>
      </div>
    </section>

    <!-- Ответственный -->
    <section class="mb-12 text-center">
      <h3 class="text-2xl mb-4 uppercase font-serif">Координатор</h3>
      <img
        src="/assets/organizer.jpg"
        alt="Координатор"
        class="mx-auto rounded-full shadow w-28 h-28 object-cover mb-3"
      />
      <p class="max-w-md mx-auto">Здесь будет текст о человеке, который поможет вам с любыми вопросами в день свадьбы 💬</p>
    </section>

    <!-- Дресс-код -->
    <section class="mb-12 text-center border-t border-b border-black py-10">
      <h3 class="text-2xl mb-4 uppercase font-serif">Дресс-код</h3>
      <p class="max-w-md mx-auto">
        Никаких рамок и правил: мы будем рады видеть вас в том, что делает вас счастливыми.
        Просто приходите в хорошем настроении — этого более чем достаточно.
      </p>
    </section>

    <!-- Подарки -->
    <section class="mb-12 text-center">
      <h3 class="text-2xl mb-4 uppercase font-serif">Подарки</h3>
      <p class="max-w-md mx-auto">
        Ваше присутствие — уже огромная радость для нас.
        Если вы захотите сделать подарок, то мы будем благодарны за вклад в нашу совместную мечту — так вы точно не прогадаете.
        А если вам по душе что-то материальное — всегда пригодятся вещи, которые делают быт чуть приятнее.
        В любом случае — ваш жест для нас бесценен.
      </p>
    </section>

    <!-- Анкета -->
    <section class="mb-12 text-center border-t border-black py-10">
      <h3 class="text-xl mb-4 italic font-serif">Каждое ваше слово для нас — часть праздника</h3>
      <a
        href="/form"
        class="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition uppercase"
      >
        Перейти к анкете
      </a>
    </section>

    <!-- Таймер -->
    <section class="mb-6 text-center border-t pt-6 border-black">
      <h3 class="text-xl mb-4 uppercase font-serif">Ждём с трепетом — до свадьбы осталось:</h3>
      <div class="text-2xl font-mono">
        {{ countdown.days }}д {{ countdown.hours }}ч {{ countdown.minutes }}м {{ countdown.seconds }}с
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const targetDate = new Date('2025-07-10T15:00:00')
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

function updateCountdown() {
  const now = new Date()
  const diff = targetDate - now

  if (diff > 0) {
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    countdown.value.minutes = Math.floor((diff / (1000 * 60)) % 60)
    countdown.value.seconds = Math.floor((diff / 1000) % 60)
  }
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})

const schedule = [
  { time: '15:00', label: 'Welcome' },
  { time: '15:30', label: 'Церемония' },
  { time: '16:00', label: 'Фуршет' },
  { time: '16:30', label: 'Начало банкета' },
  { time: '23:00', label: 'Завершение торжества' }
]
</script>