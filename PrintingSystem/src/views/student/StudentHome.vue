<template>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-7">
        <div class="col-span-3 mt-10 md:ml-10 ml-4">
            <div>
                <div class="flex mb-7" style="font-family: 'Comfortaa';">
                    <button type="button" class="flex bg-transparent rounded-full md:me-0" id="pfp">
                        <img class="w-10 h-10 rounded-full mr-10" src="/images/profile.png" alt="user photo">
                    </button>
                    <div class="ml-3">
                        <div class="text-sm">15 giờ trước</div>
                        <div class="font-semibold">
                            <router-link to="/student" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">AkaneLink</router-link> đã đăng <router-link to="/student" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">Đánh giá trang web: 10/10!</router-link>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...
                        </div>
                    </div>
                </div>
            </div>
            <div class="mr-6 mb-7"><hr></div>

            <div>
                <div class="flex mb-7" style="font-family: 'Comfortaa';">
                    <button type="button" class="flex bg-transparent rounded-full md:me-0" id="pfp">
                        <img class="w-10 h-10 rounded-full mr-10" src="/images/anon.png" alt="user photo">
                    </button>
                    <div class="ml-3">
                        <div class="text-sm">3 ngày trước</div>
                        <div class="font-semibold">
                            Tài khoản ẩn danh đã đăng <router-link to="/student" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">Cách sử dụng trang web | Dev Team</router-link>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...
                        </div>
                    </div>
                </div>
            </div>
            <div class="mr-6 mb-7"><hr></div>

            <div>
                <div class="flex mb-7" style="font-family: 'Comfortaa';">
                    <button type="button" class="flex bg-transparent rounded-full md:me-0" id="pfp">
                        <img class="w-10 h-10 rounded-full mr-10" src="/images/system.png" alt="user photo">
                    </button>
                    <div class="ml-3">
                        <div class="text-sm">7 ngày trước</div>
                        <div class="font-semibold">
                            <router-link to="/student" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">SPSO</router-link> đã đăng <router-link to="/student" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">Giới thiệu về smart printing system</router-link>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="ml-5 md:border-l border-gray-200 col-span-2 flex flex-col items-center mt-10"  style="font-family: 'Comfortaa';">
            <div class="rounded-lg h-40 w-80 mb-10" style="background: linear-gradient(180deg, #2c735c 0%, #000000 150%);">
                <div class="mt-4 ml-4">
                    <div class="text-xl font-semibold text-white">In tài liệu?</div>
                    <div class="mb-10 text-white">Bạn đang có <span class="font-bold">8</span> tờ giấy!</div>
                    <button type="button" @click="$router.push('/print/upload')" class="text-black bg-white font-semibold rounded-lg text-sm px-4 py-2 text-center">In tài liệu</button>
                </div>    
            </div>
            <div class="rounded-lg h-40 w-80 mb-10" style="background: linear-gradient(180deg, #357093 0%, #000000 150%);">
                <div class="mt-4 ml-4">
                    <div class="text-xl font-semibold text-white">Mua thêm giấy?</div>
                    <div class="mb-10 text-white">Bạn cần mua giấy để in các tài liệu.</div>
                    <button type="button" @click="$router.push('/student')" class="text-black bg-white font-semibold rounded-lg text-sm px-4 py-2 text-center">Mua giấy</button>
                </div>    
            </div>
            <div class="rounded-lg h-40 w-80 mb-10" style="background: linear-gradient(180deg, #7013f2 0%, #b13df5 150%);">
                <div class="mt-4 ml-4">
                    <div class="text-xl font-semibold text-white">Xem đơn in?</div>
                    <div class="mb-10 text-white">Bạn đang có <span class="font-bold">1</span> đơn in!</div>
                    <button type="button" @click="$router.push('/orders')" class="text-black bg-white font-semibold rounded-lg text-sm px-4 py-2 text-center">Đơn in</button>
                </div>    
            </div>
            <div class="rounded-lg h-40 w-80 mb-10" style="background: linear-gradient(180deg, #4a4949 0%, #F8F8F8 500%);">
                <div class="mt-4 ml-4">
                    <div class="text-xl font-semibold text-white">Bạn muốn đóng góp?</div>
                    <div class="mb-4 text-white">Đóng góp cho cộng đồng để nhận thêm giấy!</div>
                    <div class="text-right mr-4">
                        <button type="button" @click="$router.push('/contribute')" class="text-white border border-gray-200 font-semibold rounded-lg text-sm px-4 py-2 text-center">Đóng góp</button>
                    </div>
                </div>     
            </div>
            <div class="flex mb-7">
                <img class="w-28 h-28 ml-16 mr-5" src="/images/bubble_chat.png" alt="contact">
                <div class="rounded-lg bg-transparent h-40 w-80 mb-10">
                    <div class="text-xl font-semibold">Cần thông tin?</div>
                    <div class="md:mr-0 mr-12">Liên hệ SPSO ngay!</div><br>
                    <button type="button" @click="$router.push('/contact')" class="text-black border border-gray-200 hover:bg-gray-200 font-semibold rounded-lg text-sm px-4 py-2 text-center">Liên hệ</button>
                </div>
            </div>
            
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "StudentHome",
        data () {

        }
    }
</script>

<style>
</style>