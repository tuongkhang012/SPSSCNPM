<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">Máy in</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Quản lý máy in từ xa</div>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4" style="font-family: 'Comfortaa';">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-10">
            <div class="col-span-3 flex flex-col items-center">
                <div class="text-xl mb-4 text-left">Thay đổi hình ảnh</div>
                <input @change="changeImage = true" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file">
                <img v-if="changeImage == false" src="/images/printers/printer.jpg" width="400" height="400">
                <img v-if="changeImage == true" src="/images/printers/printer2.png" width="400" height="400">

                <div class="grid grid-cols md:grid-cols-5 gap-10" style="margin-bottom: 56px;">
                    <div class="col-span-2 font-semibold">
                        <div class="mb-6 text-left">Lượng mực trong máy</div>
                        <div class="mb-6 text-left">Lượng giấy trong máy</div>
                    </div>
                    
                    <div class="col-span-3">
                        <div class="relative mb-6 w-full">
                            <input id="labels-range-input" type="range" value="0" min="0" max="100" class="w-full h-2 bg-gray-200 rounded-lg appearance-none" disabled>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0%</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">50%</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">100%</span>
                        </div>

                        
                        <div class="relative mb-6 w-full">
                            <input id="labels-range-input" type="range" value="70" min="0" max="100" class="w-full h-2 bg-gray-200 rounded-lg appearance-none" disabled>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0%</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">50%</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">100%</span>
                        </div>
                    </div>
                </div> 
                <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <button v-if="current" type="button" @click="activatePower()" class="mb-28 mt-2 w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Tắt máy in</button>
                    <button v-if="!current" type="button" @click="current = !current" class="mb-28 mt-2 w-full text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Bật máy in</button>

                    <button type="button" @click="activateDelete()" class="mb-28 mt-2 w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Xóa máy in</button>

                    <button type="button" @click="" class="mb-28 mt-2 w-full text-green-500 border border-green-500 hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Yêu cầu mực in</button>
                    <button type="button" @click="" class="mb-28 mt-2 w-full text-green-500 border border-green-500 hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Yêu cầu giấy</button>
                </div> 
                
                <div id="popup-background" tabindex="-1" v-if="activePower" class="z-50">
                    <div id="popup-modal">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow">
                                <button type="button" @click="disablePower()" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Bạn chắc chắn muốn tắt máy in này?</h3>
                                    <button @click="powerOff()" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                        Xác nhận
                                    </button>
                                    <button @click="disablePower()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Trở về</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popup-background" tabindex="-1" v-if="deleteThis" class="z-50">
                    <div id="popup-modal">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow">
                                <button type="button" @click="disableDelete()" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Bạn chắc chắn muốn xoá máy in này?</h3>
                                    <button @click="deletePrinter()" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                        Xác nhận
                                    </button>
                                    <button @click="disableDelete()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Trở về</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-span-2" style="font-family: 'Comfortaa';">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                    <div>
                        <div class="text-xl mb-4">Mã máy in</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="CS1 - 111112" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="text-xl mb-4">Khổ giấy</div>
                        <div class="w-52 mb-8">
                            <div class="flex items-center mb-8">
                                <input id="checked-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox" class="ms-2">A5</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input checked id="checked-checkbox1" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox1" class="ms-2">A4</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input checked id="checked-checkbox2" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox2" class="ms-2">Letter</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input checked id="checked-checkbox3" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox3" class="ms-2">A3</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input id="checked-checkbox4" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox4" class="ms-2">A2</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="text-xl mb-4">Dòng máy in</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="HP Laser 107W" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="text-xl mb-4">Cài đặt thêm</div>
                        <div class="w-52 mb-8">
                            <div class="flex items-center mb-8">
                                <input checked id="checked-checkbox6" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox6" class="ms-2">In màu</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input checked id="checked-checkbox7" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                <label for="checked-checkbox7" class="ms-2">In 1 mặt</label>
                            </div>
                            <div class="flex items-center mb-8">
                                <input id="checked-checkbox8" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" disabled>
                                <label for="checked-checkbox8" class="ms-2">In 2 mặt</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="font-semibold mb-8" style="margin-top: 44px;">
                    <div class="mb-6">
                        Tình trạng máy in: <span v-if="current" class="font-bold text-green-500">Đang hoạt động</span> <span v-else class="font-bold text-red-500">Không hoạt động</span>
                    </div>
                    <div class="mb-6">
                        Lượng mực trong máy: <span v-if="currentInk" class="font-bold text-green-500">Vẫn còn</span> <span v-else class="font-bold text-red-500">Đã hết</span>
                    </div>
                    <div class="mb-6">
                        Lượng giấy trong máy: <span v-if="currentPaper" class="font-bold text-green-500">Vẫn còn</span> <span v-else class="font-bold text-red-500">Đã hết</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <button type="button" @click="showAlert = true; autoCloseAlert()" class="mb-28 mt-2 w-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Lưu cài đặt</button>
                    <button type="button" @click="$router.push('/manage')" class="mb-28 mt-2 w-full text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Trở về</button>
                </div>
            </div>
        </div>
    </div>
    <transition 
        enter-active-class="transition ease-out duration-500" 
        enter-class="opacity-0" 
        enter-to-class="opacity-100" 
        leave-active-class="transition ease-in duration-500" 
        leave-class="opacity-100" 
        leave-to-class="opacity-0"
        style="font-family: Comfortaa;"
    >
        <div v-if="showAlert" class="flex items-center fixed z-20 top-0 right-0 w-96 m-6 p-2 text-green-800 border-t-4 border-green-300 bg-green-50" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
                Lưu cài đặt thành công!
            </div>
            <button type="button" @click="showAlert = false" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ManageExample',
    data() {
        return {
            currentInk: false,
            currentPaper: true,
            current: true,
            changeImage: false,
            activePower: false,
            showAlert: false,
            deleteThis: false,
        }
    },
    methods: {
        activatePower() {
            this.activePower = true;
        },
        disablePower() {
            this.activePower = false;
        },
        powerOff() {
            this.current = !this.current;
            this.disablePower();
        },
        activateDelete() {
            this.deleteThis = true;
        },
        disableDelete() {
            this.deleteThis = false;
        },
        deletePrinter() {
            this.$store.commit('setDelete', true);
            this.autoCloseAlert2();
            this.$router.push('/manage');
        },
        autoCloseAlert() {
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        },
        autoCloseAlert2() {
            setTimeout(() => {
                this.$store.commit('setDelete', false);
            }, 2000);
        }
    }
}
</script>

<style>
#popup-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
#popup-modal {
    pointer-events: auto;
}

</style>
