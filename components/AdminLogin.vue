<template>
  <div class="min-h-screen bg-gray-50 text-black font-body tracking-wide leading-relaxed px-4 sm:px-6 py-10 border-8 border-black border-double max-w-md mx-auto shadow-xl text-center">
    <h2 class="text-2xl font-serif uppercase tracking-widest mb-6">Вход для организаторов</h2>

    <input
      v-model="input"
      type="password"
      placeholder="Введите пароль"
      class="w-full border border-black px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#bfa86d]"
    />

    <button
      @click="check"
      class="mt-6 px-6 py-3 border border-black bg-black text-white hover:bg-[#bfa86d] hover:text-black transition uppercase tracking-widest text-sm"
    >
      Войти
    </button>

    <p v-if="error" class="text-red-600 mt-4 font-medium">Неверный пароль. Попробуйте ещё раз.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const input = ref('')
const error = ref(false)
const router = useRouter()

const correctPassword = '123' // 🔐 задается здесь

function check() {
  if (input.value === correctPassword) {
    localStorage.setItem('admin_auth', '1')
    window.location.href = '/admin'
  } else {
    error.value = true
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>