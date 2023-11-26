<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">In tài liệu</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Lựa chọn tài liệu mà bạn muốn in</div>
    <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <div class="flex items-center justify-center w-full mb-24" style="font-family: 'Comfortaa';">
            <label @dragover.prevent @drop="onDrop" for="dropzone-file" class="flex flex-col items-center justify-center md:ml-28 md:mr-28 w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Nhấp để tải file lên</span> hoặc kéo thả</p>
                    <p class="text-xs text-gray-500"><span class="font-semibold">.doc</span>, <span class="font-semibold">.docx</span> hoặc <span class="font-semibold">.pdf</span></p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="checkFileType"/>
                <p v-if="errorMessage" class="text-sm text-red-500 mb-4 text-semibold">{{ errorMessage }}</p>
            </label>
        </div> 

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
import { mapMutations } from 'vuex'

export default {
  name: "Print",
  methods: {
    ...mapMutations(['setFile']),
    onDrop(event) {
      event.preventDefault()
      const files = event.dataTransfer.files
      if (files.length) {
        this.checkFileType({ target: { files } })
      }
    },
    checkFileType(event) {
      const file = event.target.files[0]
      const allowedTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf']

      if (!allowedTypes.includes(file.type)) {
        this.errorMessage = 'Tệp tin không được hỗ trợ. Vui lòng tải lên tệp tin có định dạng .doc, .docx hoặc .pdf.'
        event.target.value = ''
        this.fileUploaded = false
        this.$store.commit('setFileUploaded', false)
        localStorage.removeItem('fileUploaded')
      } 
      
      else {
        this.errorMessage = ''
        this.fileUploaded = true
        this.setFile(file)

        this.$store.commit('setFileUploaded', true)
        localStorage.setItem('fileUploaded', 'true')

        this.$router.push('/print/settings')
      }
    }
  },
  data() {
    return {
      errorMessage: '',
      fileUploaded: false
    }
  },
}
</script>

<style>
</style>