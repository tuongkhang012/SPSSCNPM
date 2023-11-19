<template> 
    <div class="flex items-center justify-center">
        <div style="font-family: 'Comfortaa';">
            <p class="text-8xl font-bold text-gray-800 mb-10">Oops!</p>
            <p class="text-2xl font-semibold text-gray-600">We can't seem to find the </p>
            <p class="text-2xl font-semibold text-gray-600 mb-10"> page you are looking for.</p>
            <p class="text-xl font-semibold text-gray-600 mb-10">Error code: <span class="text-xl font-bold text-gray-900">404</span></p>
            <!-- <router-link to="/" class="text-xl text-blue-500 hover:underline mb-100">Go to Home</router-link> -->
        </div>
        <img class="object-scale-down w-50 h-50" src="/images/404.png" alt="404 Not Found">
    </div>
</template>

<script>
export default {
    name: "NotFound",
    data () {

    }
}
</script>

<style>
</style>