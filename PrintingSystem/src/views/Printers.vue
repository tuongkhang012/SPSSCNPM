<template> 
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">Máy in</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Danh sách các máy in trong hệ thống</div>

    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111112</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111113</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111114</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111115</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111116</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS1 - 111117</div>
            </div>
        </div>
        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112112</div>
            </div>
        </div>
        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112113</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112114</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112115</div>
            </div>
        </div>
        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112116</div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <div class="image-container">
                <img class="image" src="/images/printers/printer.jpg" alt="">
                <div class="text font-bold text-white">CS2 - 112117</div>
            </div>
        </div>

        <div>
            <!-- <button v-if='isAdmin' class="flex justify-center mb-20 items-center text-xl text-black hover:underline mb-100" style="font-family: 'Comfortaa';">
                <svg class="w-6 h-6 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Thêm máy in mới
            </button> -->
        </div>

        <div></div>
        <div></div>

        <div>
            <nav aria-label="pagination" class="mb-20">
                <ul class="inline-flex -space-x-px text-base h-10" style="font-family: 'Comfortaa';">
                    <li>
                    <a class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Trước</a>
                    </li>
                    <li>
                    <a aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
                    </li>
                    <li>
                    <a class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                    <a class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Sau</a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Printers",
    computed: {
        ...mapState({
            isAdmin: state => state.isAdmin
        })
    },
}
</script>

<style>
.image-container {
    position: relative;
    width: 300px;
    height: 300px;
    border: 4px solid transparent;
    transition: border 0.5s ease;
    border-radius: 10px;
}

.image {
    width: 100%; 
    height: 100%;
    transition: transform 0.5s ease, filter 0.5s ease;
    border: 4px solid transparent; 
    border-radius: 10px;
}

.image-container:hover .image {
    transform: scale(1.1);
    filter: brightness(50%);
    border: 4px solid #efefef;
    border-radius: 10px;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
    font-family: 'Comfortaa';
}

.image-container:hover .text {
    opacity: 1;
}
</style>