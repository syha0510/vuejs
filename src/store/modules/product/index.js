export default {
    namespaced: true,
    state: {
        title:'Quản lý sản phẩm',
        products:[
            {   
                id:1,
                name: 'iPhone 12 Pro Max Chính Hãng',
                image: 'https://product.hstatic.net/1000340016/product/iphone-12-mini-red-select-2020_684ae3ca65004da18be7d151f3c9b222.png',
                price: 32990000,
                quantity: 566,
            },
            {
                id:2,
                name: 'iPhone 12 Chính Hãng (VN/A)',
                image: '',
                price: 21790000,
                quantity: 123,
            },
            {   
                id:3,
                name: 'iPhone 11 Chính hãng',
                image: 'https://bizweb.dktcdn.net/100/442/323/products/f7651bda-0818-4111-a0e7-866e39216285.jpg?v=1640591271370',
                price: 16690000,
                quantity: 0,
    
            },
            {   
                id:4,
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                image: 'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-white-200-org.png',
                price: 12190000,
                quantity: 1023,
            },
            {
                id:5,
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                image: '',
                price: 26500000,
                quantity: 0,
            }
        ],
    },
    getters: {
      // Khai báo getters
    },
    mutations: {
       changeTitle(state){
            state.title='Title mớiaa'
       }
    },
  }