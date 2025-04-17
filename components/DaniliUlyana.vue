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
      <h3 class="text-3xl mb-4 font-serif uppercase tracking-widest">
        Дорогие друзья и родные!
      </h3>
      <p class="max-w-3xl mx-auto text-base leading-relaxed font-body">
        Мы с радостью приглашаем вас разделить с нами один из самых важных моментов в нашей жизни — день нашей свадьбы.
        Этот день будет наполнен <span class="text-[#bfa86d] font-semibold">любовью</span>, <span class="text-[#bfa86d] font-semibold">счастьем</span> и <span class="text-[#bfa86d] font-semibold">теплом</span>,
        и нам будет очень приятно видеть вас рядом в этот особенный момент.
        <br /><br />
        Нам хочется создать для вас атмосферу <span class="text-[#bfa86d] font-medium">комфорта</span> и <span class="text-[#bfa86d] font-medium">беззаботности</span> в этот день, поэтому просим вас оставить детей дома.
        Приходите отпраздновать вместе с нами!
      </p>
      <p class="text-[#bfa86d] text-xl mt-6 select-none">✦ ✦ ✦</p>
    </section>

    <!-- Где / Когда -->
    <section class="mb-12 border-t border-b border-black py-10 text-center">
  <h3 class="text-2xl mb-2 uppercase font-serif tracking-widest">Место проведения</h3>
  <p class="text-[#bfa86d] text-xl mb-4 select-none">✦ ✦ ✦</p>
  <p class="mb-1 font-semibold">г. Киров</p>
  <p class="mb-1 italic">Ресторан <span class="text-[#bfa86d]">«Террасса»</span></p>
  <p class="mb-1">10 июля 2025 — <span class="text-[#bfa86d] font-medium">15:00</span></p>
  <a
    href="https://yandex.ru/maps/-/CHbG5E3K"
    target="_blank"
    class="inline-block mt-4 underline text-black hover:text-[#bfa86d] transition"
  >
    Посмотреть на карте
  </a>
</section>

    <!-- Расписание -->
    <section class="mb-12">
      <h3 class="text-2xl mb-6 text-center uppercase font-serif tracking-widest">Расписание нашего дня</h3>
      <div class="space-y-4">
        <div
          v-for="(event, index) in schedule"
          :key="event.time"
          class="flex items-baseline"
        >
          <div class="w-24 font-bold text-[#bfa86d]">{{ event.time }}</div>
          <div class="flex-1 border-t border-dashed border-gray-500 mx-3"></div>
          <div>{{ event.label }}</div>
        </div>
      </div>
    </section>

    <!-- Координатор -->
    <section class="mb-12 text-center font-serif">
      <h3 class="text-2xl mb-6 uppercase tracking-widest">Координатор</h3>
      <div class="max-w-5xl mx-auto border-8 border-double border-black p-6 bg-white shadow-md text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <img
            src="../assets/img/coordination-person.jpg"
            alt="Координатор"
            class="w-full h-[420px] object-cover grayscale contrast-125 border border-black"
          />
          <div class="space-y-6">
            <div class="space-y-4">
              <h4 class="uppercase text-lg tracking-widest font-bold">
                Идеальный день начинается с деталей
              </h4>
              <p class="text-base leading-relaxed font-body">
                Чтобы этот важный день прошёл идеально, мы доверили организацию нашей свадьбы замечательному координатору Дарье.
                Благодаря её <span class="text-[#bfa86d] font-medium">профессионализму</span>, мы уверены, что всё будет бесподобно!
              </p>
              <p class="text-base leading-relaxed font-body">
                Если у вас появятся вопросы или особые пожелания — <span class="text-[#bfa86d] font-medium">обращайтесь к Дарье</span>. Она всегда рядом.
              </p>
            </div>
            <a
  href="https://vk.com/dashapavlov"
  target="_blank"
  class="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition uppercase tracking-widest text-sm"
>
  Связаться с Дарьей
</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Дресс-код -->
    <section class="mb-12 text-center border-t border-b border-black py-10">
      <h3 class="text-2xl mb-4 uppercase font-serif tracking-widest">Дресс-код</h3>
      <p class="max-w-md mx-auto">
        Никаких рамок и правил: мы будем рады видеть вас в том, что делает вас
        <span class="text-[#bfa86d] font-medium">счастливыми</span>.
        Просто приходите в <span class="text-[#bfa86d] font-medium">хорошем настроении</span> — этого более чем достаточно.
      </p>
    </section>

    <!-- Подарки -->
    <section class="mb-12 text-center">
      <h3 class="text-2xl mb-4 uppercase font-serif tracking-widest">Подарки</h3>
      <p class="max-w-md mx-auto">
        Ваше присутствие — уже огромная радость для нас.
        Если вы захотите сделать подарок, мы будем благодарны за вклад в нашу
        <span class="text-[#bfa86d] font-medium">совместную мечту</span>.
        А если вам по душе что-то материальное — пригодятся вещи, которые делают быт чуть приятнее.
        В любом случае — <span class="text-[#bfa86d] font-medium">ваш жест бесценен</span>.
      </p>
    </section>

    <!-- Анкета -->
    <section class="mb-12 text-center border-t border-black pt-10">
  <h3 class="text-xl mb-4 italic font-serif">
    Каждое <span class="text-[#bfa86d] font-semibold">Ваше слово</span> для нас — часть праздника
  </h3>
  <a
    href="questionnaire"
    class="inline-block px-6 py-3 border border-[#bfa86d] text-[#bfa86d] hover:bg-[#bfa86d] hover:text-white transition uppercase tracking-widest text-sm"
  >
    Перейти к анкете
  </a>
</section>


    <!-- Таймер -->
    <section class="mb-6 text-center border-t pt-6 border-black">
      <h3 class="text-xl mb-4 uppercase font-serif tracking-widest">Ждём с трепетом — до свадьбы осталось:</h3>
      <div class="text-2xl font-mono text-[#bfa86d]">
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
