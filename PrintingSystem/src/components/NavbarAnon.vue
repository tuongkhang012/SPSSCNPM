<template>
<nav class="bg-white border-gray-200" style="font-family: 'Comfortaa';">
  <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
    <!-- Brand -->
    <a style="color: #00CDE8; margin-right: 50px;">
      <span class="self-center text-lg font-semibold whitespace-nowrap">Galacticos</span>
    </a>

    <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <!-- Begin navlinks -->
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li style="margin-right: 20px;">
          <router-link to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
            Home
          </router-link>
        </li>
        <li style="margin-right: 20px;">
          <router-link to="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
            About
          </router-link>
        </li>  
      </ul>
    </div>
    <!-- End navlinks -->
  </div>
</nav>
</template>

<script setup>
</script>

