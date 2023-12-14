<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">Quản lý</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Đảm bảo hệ thống vận hành ổn định</div>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4" style="font-family: 'Comfortaa';">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 w-full">
            <div class="w-full">
                <div class="relative">
                    <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <input type="text" id="text" v-model="filterPrinter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Mã máy in">
                </div>
            </div>
            <div class="w-full flex items-center justify-center grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="flex items-center justify-center">
                    <input checked :disabled="!campus_2" v-model="campus_1" id="checked-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="checked-checkbox" class="ms-2">Cơ sở 1</label>
                </div>
                <div class="flex items-center justify-center">
                    <input checked :disabled="!campus_1" v-model="campus_2" id="checked-checkbox2" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="checked-checkbox2" class="ms-2">Cơ sở 2</label>
                </div>
                <div class="flex items-center justify-center">
                    <button @click="$router.push('/manage/add')" class="flex justify-center items-center text-black hover:underline mb-100" style="font-family: 'Comfortaa';">
                        <svg class="w-6 h-6 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        Thêm máy in
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div v-for="(printer, index) in toShow" :key="index" class="flex justify-center mb-10">
                <router-link :to="`/manage/${printer.replace(/\s/g, '').replace(/-/g, '_')}`">
                    <div class="image-container">
                        <img class="image" src="/images/printers/printer.jpg" alt="">
                        <div>
                            <div class="text font-bold text-white text-center">{{ printer }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div></div>
        <nav class="mb-20" aria-label="pagination">
            <ul class="inline-flex -space-x-px text-base h-10" style="font-family: 'Comfortaa';">
                <li>
                <a class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Trước</a>
                </li>
                <li>
                <a aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
                </li>
                <li>
                <a class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Sau</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Manage',
    data() {
        return {
            printers: ['CS1 - 111112', 'CS1 - 111113', 'CS1 - 111114', 'CS1 - 111115', 'CS1 - 111116', 'CS1 - 111117', 'CS2 - 112112', 'CS2 - 112113', 'CS2 - 112114', 'CS2 - 112115', 'CS2 - 112116', 'CS2 - 112117'],
            campus_1: true,
            campus_2: true,
            filterPrinter: '',
        }
    },
    computed: {
        toShow() {
            let tmp = this.printers;
            if (this.campus_1 === false) {
                tmp = tmp.filter(printer => !printer.includes('CS1'));
            }
            if (this.campus_2 === false) {
                tmp = tmp.filter(printer => !printer.includes('CS2'));
            }

            if (this.filterPrinter === '' || this.filterPrinter === null) {
                return tmp;
            } else {
                return tmp.filter(printer => printer.includes(this.filterPrinter));
        }
    }
  }
}
</script>

<style>
</style>