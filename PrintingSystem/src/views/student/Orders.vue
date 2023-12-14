<template>
    <div class="flex items-center justify-center text-5xl font-semibold mt-11" style="font-family: 'Comfortaa';">Đơn in</div>
    <div class="flex items-center justify-center text-xl mt-5 mb-20" style="font-family: 'Comfortaa';">Tất cả các đơn in của bạn ở đây</div>

    <div class="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4 mb-16"  style="font-family: 'Comfortaa';">
        <div class="grid grid-cols-1 md:grid-cols-3 mb-6 gap-10 w-full z-20">
            <div class="w-full relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input type="text" id="text" v-model="querySearch3" @keyup.enter="searchID(querySearch3)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Mã đơn in">
            </div>
            <div class="w-full relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input type="text" id="text" v-model="querySearch2" @keyup.enter="searchPrinter(querySearch2)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Mã máy in">
            </div>
            <div class="w-full relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input type="text" id="text" v-model="querySearch" @keyup.enter="searchName(querySearch)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Tên tài liệu">
            </div>
            
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3" style="width: 150px;">
                            <div class="flex items-center">
                                Mã đơn in
                                <a @click="() => changeOrder(2, 'id')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center" style="width: 100px;">
                                Máy in
                                <a @click="() => changeOrder(0, 'printer')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center" style="width: 250px;">
                                Tên tài liệu
                                <a @click="() => changeOrder(1, 'name')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3" style="width: 135px;">
                            <div class="flex items-center">
                                Khổ giấy
                                <a @click="() => changeOrder(3, 'size')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3" style="width: 200px;">
                            <div class="flex items-center">
                                Ngày dự kiến
                                <a @click="() => changeOrder(4, 'estDate')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3" style="width: 200px;">
                            <div class="flex items-center">
                                Ngày thực tế
                                <a @click="() => changeOrder(5, 'date')" class="hover:cursor-pointer"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3" style="width: 175px;">
                            <div class="flex items-center">
                                Trạng thái
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b hover:bg-gray-100 hover:cursor-pointer" v-for="(order, index) in toShow.slice((this.pagination.page - 1) * this.pagination.perPage, Math.min(this.pagination.page * this.pagination.perPage, this.toShow.length))" :key="index" @click="$router.push(`/orders/${order.id}`)">
                        <td class="px-6 py-4">
                            {{ order.id }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.printer }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.size }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.estDate }}
                        </td>
                        <td class="px-6 py-4">
                            {{ order.date }}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div class="flex flex-row" v-if="order.status == 'Đã in'"> 
                                <svg class="w-4 h-4 text-green-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                {{ order.status }} 
                            </div>
                            <div class="flex flex-row" v-if="order.status == 'Đang in'"> 
                                <svg class="w-4 h-4 mr-2" style="color:darkgoldenrod" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                {{ order.status }} 
                            </div>
                            <div class="flex flex-row" v-if="order.status == 'Đã hủy'"> 
                                <svg class="w-4 h-4 text-red-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                {{ order.status }} 
                            </div>
                        </th>
                    </tr>
                    <tr class="bg-white border-b" v-if="pagination.page === pagination.total" v-for="n in pagination.extra" :key="n">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            &nbsp;
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>  
        <nav aria-label="Page navigation">
            <ul class="flex items-center -space-x-px h-8 text-sm mb-16">
                <li>
                <a @click="pagination.page = Math.max(1, pagination.page - 1)" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                    <span class="sr-only">Previous</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </a>
                </li>
                <li v-for="(page, index) in pagination.pageRange" :key="index">
                    <a v-if="page === -1" @click="pagination.page = page" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
                    <a v-else @click="pagination.page = page" :aria-current="pagination.page === page ? 'page' : null" :class="pagination.page === page ? 'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700': 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'">{{ page }}</a>
                </li>
                <li>
                <a @click="pagination.page = Math.min(pagination.total, pagination.page + 1)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                    <span class="sr-only">Next</span>
                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
                </li>
            </ul>
        </nav> 
    </div>

</template>

<script>
export default {
    name: 'Orders',
    data () {
        return {
            orders: [],
            toShow: [],
            sort_list: [0, 0, 0, 0, 0, 0],
            filterName: '',
            filterPrinter: '',
            filterID: '',
            pagination: {
                page: 1,
                perPage: 20,
                total: 0,
                extra: 0,
                pageRange: []
            },
        }
    },
    async mounted() {
        this.setupData();
    },
    methods: {
        sortCol(order, col) {
            this.toShow.sort((a, b) => {
                if (a[col] < b[col]) {
                    return order;
                }
                if (a[col] > b[col]) {
                    return -order;
                }
                return 0;
            });
        },
        totalPages() {
            if(this.toShow.length === 0)  this.pagination.total = 1;
            else this.pagination.total = Math.ceil(this.toShow.length / this.pagination.perPage);

            
            this.pagination.extra = this.pagination.total * this.pagination.perPage - this.toShow.length;
        },
        pageNumbers() {
            if(this.pagination.total <= 5) {
                this.pagination.pageRange = Array.from({length: this.pagination.total}, (_, i) => i + 1);
            }
            else {
                this.pagination.pageRange = [1, 2, -1, this.pagination.total - 1, this.pagination.total];
            }
        },
        setupData() {
            let example3 = {
                status: this.$store.state.cancel? 'Đã hủy':'Đang in',
                id: 'SPS_1000',
                printer: 'CS1 - 111114',
                name: 'cnpm_btl.pdf',
                size: 'A5',
                estDate: '06 - 12 - 2023',
                date: this.$store.state.cancel? '15 - 12 - 2023' : '',
            }

            let example2 = {
                status: 'Đã in',
                id: 'SPS_1001',
                printer: 'CS1 - 111112',
                name: 'cnpm_exam.pdf',
                size: 'A4',
                estDate: '09 - 12 - 2023',
                date: '10 - 12 - 2023',
            }

            let example = {
                status: 'Đã in',
                id: 'SPS_1002',
                printer: 'CS2 - 112116',
                name: 'cnpm_note.docx',
                size: 'A3',
                estDate: '13 - 12 - 2023',
                date: '11 - 12 - 2023',
            }

            if(this.$store.state.printer != null && this.$store.state.fileName != null) {
                // let test = {
                //     id: this.$store.state.fileSettings.id,
                //     status: 'Đang in',
                //     printer: this.$store.state.fileSettings.printer,
                //     name: this.$store.state.fileSettings.name,
                //     size: this.$store.state.fileSettings.size,
                //     estDate: '30 - 12 - 2023',
                //     date: '',
                // }

                let test =  {
                    id: 'SPS_1337',
                    status: 'Đang in',
                    printer: this.$store.state.printer,
                    name: this.$store.state.fileName,
                    size: 'A4',
                    estDate: '30 - 12 - 2023',
                    date: '',
                }

                this.orders = [test, example, example2, example3];
            }
            else {
                this.orders = [example, example2, example3];
            }

            this.toShow = this.orders;
            this.totalPages();
            this.pageNumbers();
        },
        changeOrder(idx, columnName) {
            this.sort_list[idx] === 0? this.sortCol(-1, columnName): this.sortCol(1, columnName);
            this.sort_list = this.sort_list.map((value, index) => index === idx ? value ^ 1 : 0);
        },
        searchName(name) {
            this.filterName = name;
            this.filter();
        },
        searchPrinter(printer) {
            this.filterPrinter = printer;
            this.filter();
        },
        searchID(id) {
            this.filterID = id;
            this.filter();
        },
        filter() {
            this.toShow = this.orders;
            if(this.filterName !== '' && this.filterName !== null){
                let filteredOrders = this.orders.filter(order => order.name.includes(this.filterName));
                this.toShow = filteredOrders;
            }
            if(this.filterPrinter !== '' && this.filterPrinter !== null){
                let filteredOrders = this.orders.filter(order => order.printer.includes(this.filterPrinter));
                this.toShow = filteredOrders;
            }
            if(this.filterID !== '' && this.filterID !== null){
                let filteredOrders = this.orders.filter(order => order.id.includes(this.filterID));
                this.toShow = filteredOrders;
            }

            this.totalPages();
            this.pageNumbers();
        }
    }
}
</script>

<style>

</style>