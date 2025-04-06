<template>
  <div class="max-w-sm mx-auto mt-20 text-center">
    <h2 class="text-xl font-semibold mb-4">Вход для организаторов</h2>
    <input
      v-model="input"
      type="password"
      placeholder="Введите пароль"
      class="border rounded px-4 py-2 w-full"
    />
    <button
      @click="check"
      class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Войти
    </button>
    <p v-if="error" class="text-red-500 mt-2">Неверный пароль</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const input = ref('')
const error = ref(false)
const router = useRouter()

const correctPassword = '123' // 🔐 пароль задаёшь тут

function check() {
  if (input.value === correctPassword) {
    localStorage.setItem('admin_auth', '1')
    window.location.href = '/admin'
  } else {
    error.value = true
  }
}
</script>