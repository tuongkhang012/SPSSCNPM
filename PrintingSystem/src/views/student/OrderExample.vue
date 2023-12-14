<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">Đơn in</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Xem cài đặt của bạn cho tài liệu này</div>
    <div class="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4 mb-16"  style="font-family: 'Comfortaa';">
        <div class="grid grid-cols-3 md:grid-cols-5 gap-10 mb-20">
            <div class="col-span-3" style="font-family: 'Comfortaa';">
                <div class="flex items-center justify-center text-xl mb-5">Bản xem trước</div>
                <div class="flex justify-center">
                    <iframe src="/cnpm_btl.pdf" width="800" height="700"></iframe>
                </div>
            </div>
            <div class="col-span-2" style="font-family: 'Comfortaa';">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div class="text-xl mb-4">Chọn máy in</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="CS1 - 111114" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>
                        <div class="text-xl mb-4">Số bản in</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="2" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>

                        <div class="text-xl mb-4">Trang cần in</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="1 - 16" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>
                        
                        <div class="text-xl mb-4">Khổ giấy</div>
                        <div class="w-52 mb-8">
                            <input type="text" value="A5" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>
                    </div>
                    <div>
                        <div style="margin-bottom: 118px;"></div>
                        <div class="text-xl mb-4">Bố cục</div>
                        <div class="w-54 mb-8">
                            <input type="text" value="Portrait" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>

                        <div class="text-xl mb-4">Kiểu in</div>
                        <div class="w-54 mb-8">
                            <input type="text" value="In 2 mặt" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div class="text-xl mb-4">Trang/mặt</div>
                                <div class="w-28 mb-8">
                                    <div class="mb-6">
                                        <input type="text" value="1" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="text-xl mb-4">Tỉ lệ</div>
                                <div class="w-22 mb-8">
                                    <div class="mb-6">
                                        <input type="text" value="100%" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex grid grid-cols-1 md:grid-cols-2 gap-8"> 
                    <button @click="activate()" class="mb-28 mt-2 w-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Hủy đơn in</button>
                    <button @click="$router.push('/orders')" class="mb-28 mt-2 w-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Trở về</button>
                </div>

                <div id="popup-background" tabindex="-1" v-if="active" class="z-50">
                    <div id="popup-modal">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow">
                                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" @click="disable()">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Bạn chắc chắn muốn hủy đơn in này?</h3>
                                    <button @click="cancel()" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                        Xác nhận
                                    </button>
                                    <button @click="disable()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Trở về</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderEx',
    data () {
        return { 
            active: false,
        }
    },
    methods: {
        cancel() {
            this.$store.commit('setCancel', true);
            localStorage.setItem('cancel', true);
            this.disable();
            this.$router.push('/orders');
        },
        activate() {
            this.active = true;
        },
        disable() {
            this.active = false;
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