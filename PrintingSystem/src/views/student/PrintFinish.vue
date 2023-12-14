<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">In tài liệu</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Cảm ơn vì đã lựa chọn dịch vụ của chúng tôi</div>
    <div class="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4" style="font-family: 'Comfortaa';">
        <div class="text-center text-xl mt-5 mb-4 block"><span class="font-semibold">Lời nhắc:</span>&nbsp;Bạn có thể truy cập vào trang&nbsp;<router-link to="/orders" class="text-blue-700 hover:text-blue-500" style="cursor: pointer;">Đơn in</router-link>&nbsp;để theo dõi các đơn đặt in.</div>
        <button type="button" @click="$router.push('/student')" class="mb-24 mt-2 w-60 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center">Quay về trang chủ</button>

        <div class="grid grid-cols-1 md:grid-cols-3" style="font-family: 'Comfortaa';"> 
            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0 md:mr-10">
                <span class="text-xl font-bold block">Trang web in ấn online</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #F2E67C 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Ứng dụng web này rất tiện lợi khi bạn cần in một tệp tài liệu. Nó không yêu cầu cài đặt và hoạt động trực tiếp trên trình duyệt của bạn.</span>
            </div>

            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0">
                <span class="text-xl font-bold block">Tính bảo mật cao</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #FF3F38 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Các tệp của bạn sẽ được xóa khỏi máy chủ của ứng dụng vài giờ sau khi thực hiện việc in ấn. Không ai có quyền truy cập vào chúng trừ bạn.</span>
            </div>
                
            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0 md:ml-10">
                <span class="text-xl font-bold block">Dễ dàng sử dụng</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #00CDE8 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Ứng dụng sử dụng giao diện thân thiện với người dùng, với hướng dẫn dễ đọc và được tích hợp các thao tác rất đơn giản.</span>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-20 mb-20" style="font-family: 'Comfortaa';"> 
            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0 md:mr-10">
                <span class="text-xl font-bold block">Đa dạng về cài đặt</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #5cfa79 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Trang web này cho phép bạn thay đổi các cài đặt trước khi in, với nhiều cấu hình khác nhau như bố cục, kích thước giấy hoặc thậm chí là tỷ lệ trang in.</span>
            </div>

            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0">
                <span class="text-xl font-bold block">Đa dạng về loại tệp tin</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #fa5cf2 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Ứng dụng hỗ trợ hầu hết các định dạng tệp được sử dụng nhiều (.doc, .docx, .pdf). Nếu tệp của bạn không mở được, thì có thể tệp tin bị hỏng hoặc quá lớn.</span>
            </div>
                
            <div class="w-4/5 mx-auto text-left mb-8 md:mb-0 md:ml-10">
                <span class="text-xl font-bold block">Truy cập mọi nơi</span>
                <span style="display:block; margin-top:5px; margin-bottom:20px; background: linear-gradient(90deg, #f7a828 0%, #FFFFFF 100%); height: 2px"></span>
                <span>Chỉ cần bạn thiết lập quốc gia của mình, chúng tôi sẽ hiển thị những gì ứng dụng có thể cung cấp cho địa điểm cụ thể đó.</span>
            </div>
        </div>
    </div>
</template>
  

<script>
    export default {
        name: "PrintFinish",
    }
</script>

<style>
</style>