<template>
    <div class="diagonal-split-background min-h-screen w-full top-0 left-0 z-0" style="font-family: Comfortaa;">
        <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4" >
            <div class="grid grid-cols-1 md:grid-cols-2 flex justify-center items-center w-full mr-10 mb-16 gap-2">
                <div class="mt-16 ml-10"> 
                    <img src="/images/printer_intro.png" alt="print" style="height:450px; width:450px; transform: rotate(4deg);" >
                </div>
                <div>
                    <div class="text-white"> 
                        <div class="flex justify-center items-center text-4xl font-bold mb-8">Smart Printing System</div>
                        <div class="flex justify-center text-lg items-center">Trang web quản lý máy in của trường Đại học Bách Khoa</div>
                        <div class="flex justify-center text-lg items-center">Đại học Quốc Gia TP. Hồ Chí Minh.</div>
                    </div>
                    <div class="flex justify-center items-center">
                        <button type="button" @click="$router.push('/account/login')" class="mt-12 w-40 bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 text-white font-semibold rounded-full text-sm px-4 py-2 text-center">Bắt đầu ngay</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4" >
            <div class="grid grid-cols-1 md:grid-cols-2 flex justify-center items-center w-full mb-12 mt-4 gap-16 ml-20 mr-20">
                <div>
                    <div class="text-gray-900 md:ml-16"> 
                        <div class="flex justify-end items-center text-2xl font-bold mb-4" style="color: #2d9881">Khám phá trang web</div>
                        <div class="flex justify-end text-lg items-end text-right">Bạn có thể tìm hiểu về trang web và những tính năng của trang web mà bạn có thể sử dụng thông qua trang giới thiệu ở dưới đây.</div>
                    </div>
                    <div class="flex justify-end items-center">
                        <button type="button" @click="$router.push('/about')" class="mt-4 text-lg transition duration-300 ease-in-out text-blue-700 hover:text-blue-500 font-semibold text-center">Giới thiệu ></button>
                    </div>
                </div>
                <div>
                    <img src="/images/about_us.png" alt="about" style="scale:50%" >
                </div>
            </div>
        </div>
    </div>

    <hr class="relative">
    <img src="/images/hcmut.png" alt="Logo" class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="width: 75px; height: 75px;">

    <div class="horizontal-split-background w-full top-0 left-0 z-0" style="font-family: Comfortaa;">
        <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 flex justify-center items-center w-full mt-16 gap-16 ml-20 mr-20 mb-16">
                <div>
                    <div class="text-gray-900 md:ml-16"> 
                        <svg class="w-12 h-12 mb-4" style="color: #777777" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="gray" stroke-width="0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                            <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                        </svg>

                        <div class="flex justify-start items-center text-2xl font-bold mb-4" style="color: #259AF3">Sinh viên</div>
                        <div class="flex justify-start text-lg items-start">Trang web này cho phép các bạn sinh viên đặt in các tài liệu mà không cần phải đến trực tiếp các máy in ở các cơ sở của trường.</div>
                    </div>
                </div>
                <div>
                    <div class="text-gray-900 md:mr-16"> 
                        <svg class="w-12 h-12 mb-4" style="color: #777777" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="gray" stroke-width="0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
                        </svg>
                        <div class="flex justify-start items-center text-2xl font-bold mb-4" style="color: #B7892B">SPSO</div>
                        <div class="flex justify-start text-lg items-start">SPSO có thể quản lý các máy in ở các cơ sở của trường từ xa thông qua tài khoản SPSO ở trên trang web.</div>
                    </div>
                </div>
            </div>

            <div class="text-gray-900 mx-auto text-center mb-16"> 
                <svg class="mx-auto block w-12 h-12 mb-4" style="color: #777777" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="gray" stroke-width="0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z"/>
                    <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z"/>
                </svg>

                <div class="flex justify-center items-center text-2xl font-bold mb-4" style="color: #1DA09C">In tài liệu</div>
                <div class="flex justify-center text-lg items-center">Việc in tài liệu trở nên dễ dàng hơn với giao diện</div>
                <div class="flex justify-center text-lg items-center">thân thiện với người dùng của trang web.</div>
            </div>

            

            <div id="gallery" class="relative w-full mb-8 ml-16 mr-16" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative overflow-hidden rounded-lg" style="height:600px">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/images/slider/1.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/images/slider/2.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="/images/slider/3.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/images/slider/4.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="horizontal-split-background2 w-full left-0 z-0 pb-8">
        <hr class="relative">
        <img src="/images/VNU_HCM.png" alt="Logo" class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="width: 75px; height: 75px;">

        <div class="flex justify-center text-lg items-center text-red-500 font-semibold mt-12" style="font-family: Comfortaa;">Made with&nbsp;<span><svg class="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
            </svg></span>&nbsp;from&nbsp;<span style="color:#00cde8"> Galacticos </span>
        </div>
    </div>
</template>


<script>
import { useStore } from 'vuex'
export default {
    name: "Home",
    data () {

    },

    beforeRouteEnter(to, from, next) {
        const store = useStore()
        store.commit('setIsStudent', false)
        store.commit('setIsAdmin', false)
        store.commit('setIsHome', true)
        localStorage.removeItem('isStudent')
        localStorage.removeItem('isAdmin')
        localStorage.setItem('isHome', 'true')
        next()
    },

    beforeRouteLeave(to, from, next) {
        const store = useStore()
        store.commit('setIsHome', false)
        localStorage.removeItem('isHome')
        next()
    }
}
</script>

<style>
.diagonal-split-background{
  background-color: #F7F9FC;
  background-image: -webkit-linear-gradient(80deg, #F7F9FC 50%, #303030 50.5%);
  background-repeat: no-repeat;
}

.horizontal-split-background{
  background-color: #ffffff;
}

.horizontal-split-background2{
  background-color: #F7F9FC;
}
</style>