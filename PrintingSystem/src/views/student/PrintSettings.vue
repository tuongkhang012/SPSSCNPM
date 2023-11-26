<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">In tài liệu</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-12" style="font-family: 'Comfortaa';">Chỉnh sửa thông số cho bản in</div>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-10 mb-20">
            <div class="col-span-3" style="font-family: 'Comfortaa';">
                <div class="flex items-center justify-center text-xl mb-5">Bản xem trước</div>
                <div v-if="fileUrl" class="flex justify-center">
                    <iframe v-if="fileType === 'application/pdf'" :src="fileUrl" width="800" height="700"></iframe>
                    <div v-else class="text-center">
                        <p>(Hiện tại chưa hỗ trợ xem trước cho định dạng này...)</p>
                    </div>
                </div>
            </div>
            <div class="col-span-2" style="font-family: 'Comfortaa';">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div class="text-xl mb-4">Chọn máy in</div>
                        <div class="w-52 mb-8">
                            <button @click="tdPrinter" class="justify-between w-full text-black bg-gray-50 border-2 border-gray-300 rounded-lg text-sm font-semibold px-5 py-2.5 inline-flex items-center focus:ring-blue-500 focus:border-blue-500 block" type="button">{{ printers[selectedOptions.indexOf(true)] || 'Máy in' }}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                            </button>
                            <div v-show="ddPrinter" class="absolute z-999">
                                <div class="mt-2">
                                    <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul class="py-2 text-sm text-gray-700">
                                            <li class="relative">
                                                <button @click="tdPrinterA" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">Cơ sở 1<svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                                    </svg>
                                                </button>
                                                <div v-show="ddPrinterA" class="z-999">
                                                    <div class="ml-2 absolute left-full top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                                        <ul class="py-2 text-sm text-gray-700">
                                                            <li>
                                                                <a @click="selectOption(0)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111112</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(1)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111113</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(2)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111114</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(3)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111115</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(4)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111116</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(5)" class="block px-5 py-2 hover:bg-gray-100">CS1 - 111117</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button @click="tdPrinterB" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">Cơ sở 2<svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                                    </svg>
                                                </button>
                                                <div v-show="ddPrinterB" class="z-999">
                                                    <div class="ml-2 absolute left-full top-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                                        <ul class="py-2 text-sm text-gray-700">
                                                            <li>
                                                                <a @click="selectOption(6)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112112</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(7)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112113</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(8)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112114</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(9)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112115</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(10)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112116</a>
                                                            </li>
                                                            <li>
                                                                <a @click="selectOption(11)" class="block px-5 py-2 hover:bg-gray-100">CS2 - 112117</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-xl mb-4">Số bản in</div>
                        <div class="w-52 mb-8">
                            <div class="mb-6">
                                <input type="number" id="cnt" v-model="cnt" min="0" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required>
                            </div>
                        </div>

                        <div class="text-xl mb-4">Trang cần in</div>
                        <div class="w-52 mb-8">
                            <div class="mb-6">
                                <input type="text" id="range" v-model="range" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Toàn bộ" required>
                            </div>
                        </div>
                        
                        <div class="text-xl mb-4">Khổ giấy</div>
                        <div class="w-52 mb-8">
                            <button @click="tdSize" class="justify-between w-full text-black bg-gray-50 border-2 border-gray-300 rounded-lg text-sm font-semibold px-5 py-2.5 inline-flex items-center focus:ring-blue-500 focus:border-blue-500 block" type="button">{{ sizes[selectedSizes.indexOf(true)] }}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                            </button>
                            <div v-show="ddSize" class="absolute z-999">
                                <div class="mt-2">
                                    <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul class="py-2 text-sm text-gray-700">
                                            <li class="relative">
                                                <button @click="selectSize(0)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">A5</button>
                                                <button @click="selectSize(1)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">A4</button>
                                                <button @click="selectSize(2)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">Letter</button>
                                                <button @click="selectSize(3)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">A3</button>
                                                <button @click="selectSize(4)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">A2</button>
                                                <button @click="selectSize(5)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">A1</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div style="margin-bottom: 118px;">

                        </div>

                        <div class="text-xl mb-4">Bố cục</div>
                        <div class="w-54 mb-8">
                            <button @click="tdType" class="justify-between w-full text-black bg-gray-50 border-2 border-gray-300 rounded-lg text-sm font-semibold px-5 py-2.5 inline-flex items-center focus:ring-blue-500 focus:border-blue-500 block" type="button">{{ types[selectedTypes.indexOf(true)]}}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                            </button>
                            <div v-show="ddType" class="absolute z-999">
                                <div class="mt-2">
                                    <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul class="py-2 text-sm text-gray-700">
                                            <li class="relative">
                                                <button @click="selectType(0)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">Portrait</button>
                                                <button @click="selectType(1)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">Landscape</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-xl mb-4">Kiểu in</div>
                        <div class="w-54 mb-8">
                            <button @click="tdSide" class="justify-between w-full text-black bg-gray-50 border-2 border-gray-300 rounded-lg text-sm font-semibold px-5 py-2.5 inline-flex items-center focus:ring-blue-500 focus:border-blue-500 block" type="button">{{ sides[selectedSides.indexOf(true)]}}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                            </button>
                            <div v-show="ddSide" class="absolute z-999">
                                <div class="mt-2">
                                    <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul class="py-2 text-sm text-gray-700">
                                            <li class="relative">
                                                <button @click="selectSide(0)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">In 1 mặt</button>
                                                <button @click="selectSide(1)" type="button" class="flex items-center justify-between w-full px-5 py-2 hover:bg-gray-100">In 2 mặt</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div class="text-xl mb-4">Trang/mặt</div>
                                <div class="w-28 mb-8">
                                    <div class="mb-6">
                                        <input type="text" id="oneSheet" v-model="oneSheet" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="text-xl mb-4">Tỉ lệ</div>
                                <div class="w-22 mb-8">
                                    <div class="mb-6">
                                        <input type="text" id="scale" v-model="scale" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="100%" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="chosen" class="font-semibold">
                    <div class="mb-2">
                        Tình trạng máy in: <span v-if="current" class="font-bold text-green-500">Đang hoạt động</span> <span v-else class="font-bold text-red-500">Không hoạt động</span>
                    </div>
                    <div class="mb-2">
                        Lượng mực trong máy: <span v-if="currentInk" class="font-bold text-green-500">Vẫn còn</span> <span v-else class="font-bold text-red-500">Đã hết</span>
                    </div>
                    <div class="mb-2">
                        Lượng giấy trong máy: <span v-if="currentPaper" class="font-bold text-green-500">Vẫn còn</span> <span v-else class="font-bold text-red-500">Đã hết</span>
                    </div>
                </div>
                <div class="mt-8">
                    Bạn hiện còn <span class="font-bold text-blue-500">8</span> tờ giấy để in.
                </div>
                <button v-if="current && currentInk && currentPaper" type="button" @click="$router.push('/print/finish')" class="mb-28 mt-2 w-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">In tài liệu</button>
                <button v-else type="button" class="mb-28 mt-2 w-full text-gray-500 border border-gray-500 font-semibold rounded-lg text-sm px-4 py-2 text-center">In tài liệu</button>
                
            </div>
        </div>
    </div>

    

</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "PrintSettings",
        beforeMount() {
            if (!this.file) {
                this.$router.push('/print/upload')
            }
        },
        computed: {
            ...mapState(['file']),
            fileUrl() {
                return this.file ? URL.createObjectURL(this.file) : null
            },
            fileType() {
                return this.file ? this.file.type : null
            },
            fileName() {
            return this.file ? this.file.name : ''
            }
        },
        data() {
            return {
                ddPrinter: false,
                ddPrinterA: false,
                ddPrinterB: false,
                selectedOptions: Array(12).fill(false),
                printers: ['CS1 - 111112', 'CS1 - 111113', 'CS1 - 111114', 'CS1 - 111115', 'CS1 - 111116', 'CS1 - 111117', 'CS2 - 112112', 'CS2 - 112113', 'CS2 - 112114', 'CS2 - 112115', 'CS2 - 112116', 'CS2 - 112117'],
                
                ddSize: false,
                selectedSizes: [false, true,false, false, false, false],
                sizes: ['A5', 'A4', 'Letter', 'A3', 'A2', 'A1'],

                ddType: false,
                selectedTypes: [true, false],
                types: ['Portrait', 'Landscape'],

                ddSide: false,
                selectedSides: [true, false],
                sides: ['In 1 mặt', 'In 2 mặt'],

                chosen: false,

                status: [true, false, false, true, true, true, false, true, true, false, true, true],
                current: false,

                statusInk: [true, false, true, true, true, true, false, true, true, false, true, true],
                currentInk: false,

                statusPaper: [true, true, false, true, true, true, false, true, true, true, true, true],
                currentPaper: false,
            }
        },
        methods: {
            tdPrinter() {
                this.ddPrinter = !this.ddPrinter
                if(!this.ddPrinter) {
                    this.ddPrinterA = false
                    this.ddPrinterB = false
                }
            },
            tdPrinterA() {
                this.ddPrinterA = !this.ddPrinterA
                this.ddPrinterB = false
            },
            tdPrinterB() {
                this.ddPrinterB = !this.ddPrinterB
                this.ddPrinterA = false
            },
            selectOption(index) {
                this.selectedOptions = this.selectedOptions.map((_, i) => i === index);
                this.ddPrinterA = false
                this.ddPrinterB = false
                this.ddPrinter = false
                this.current = this.status[index]
                this.currentInk = this.statusInk[index]
                this.currentPaper = this.statusPaper[index]
                this.chosen = true
            },
            tdSize() {
                this.ddSize = !this.ddSize
            },
            selectSize(index) {
                this.selectedSizes = this.selectedSizes.map((_, i) => i === index);
                this.ddSize = false
            },

            tdType() {
                this.ddType = !this.ddType
            },
            selectType(index) {
                this.selectedTypes = this.selectedTypes.map((_, i) => i === index);
                this.ddType = false
            },

            tdSide() {
                this.ddSide = !this.ddSide
            },
            selectSide(index) {
                this.selectedSides = this.selectedSides.map((_, i) => i === index);
                this.ddSide = false

            },
        }
    }
</script>

<style>
</style>