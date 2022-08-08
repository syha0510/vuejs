import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    todos: [
      { id: 1, text: 'task 1', done: true },
      { id: 2, text: 'task 2', done: false },
      { id: 3, text: 'task 3', done: false },
      { id: 4, text: 'task 4', done: true }
    ],

    nullImage:'https://lamdong.gov.vn/Shared%20Documents/images/noPhoto.jpg',
    carts:[],
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
    // bai2
    listProduct2:{
      id:'SP'+ Math.floor(Math.random()*10000),
      name:'',
      price:'',
      quantity:''
  },
  error:{
      name:'',
      price:'',
      quantity:''
  },
 
  checkBtn:true,
  notAllow:'cursor:not-allowed',
  red:'color:red',
  green:'color:green',
  currentPage:1,
  itemPage:5,
  start:0,
  end:5,
  newLists:[]
  },



  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo => todo.done)
    },
    getTodoById:state => (id) =>{
      return state.todos.find(todo=> todo.id ===id)
    },

    // BaiTap1
    total(state) {
      var total = 0;
          state.carts.map((product) => {
            total += product.quantity*product.price
          })
          return total;
    },
  },
  mutations: {
    // Khai báo mutations
    increment(state,input){
      state.count += input.number,
      console.log(input.name)
    },

  //bai1

    addCart(state,data){
      let index = state.products.findIndex((product) => {return product.id === data.id})
    if(data.quantity == 0){
        alert('Sản phẩm hết hàng')
        return false
    }
    let productCart = state.carts.filter((product) =>{
        return product.id == data.id
    })
    if (productCart.length > 0) {
          let indexInCart = state.carts.findIndex((cart) => {return cart.id === data.id})
          if (indexInCart !== -1) {
            state.carts[indexInCart].quantity++
            state.products[index].quantity--
          }
      } else {

        state.carts.push({
          ...data,
          quantity: 1,
        })
        state.products[index].quantity--
      }
  },
  removeCart(state,id){
    let indexInCart = state.carts.findIndex((cart) => {return cart.id === id})
    state.carts.splice(indexInCart,1)
  },

  // bai2
  handlePro(state){
    let index = state.newLists.findIndex((data) => data.id == state.listProduct2.id)
    if(index >= 0){
      state.newLists.splice(index,1,state.List2)
       state.listProduct2 = {
        id:'SP'+ Math.floor(Math.random()*10000),
        name:'',
        price:'',
        quantity:''
      }
      state.checkBtn = true  
    }else{
      state.newLists.push(state.listProduct2)
      state.listProduct2 = {
        id:'SP'+ Math.floor(Math.random()*10000),
        name:'',
        price:'',
        quantity:''
      }
      state.checkBtn = true   
    }

  },
  reset(state){
    state.listProduct2 = {
      id:'SP'+ Math.floor(Math.random()*10000),
      name:'',
      price:'',
      quantity:''
    }
    state.checkBtn = true
  },
  deleteProduct(state,id){
    let indexInCart = state.newLists.findIndex((data) => {return data.id === id})
    state.newLists.splice(indexInCart,1)
  },
  editProduct(state,data){
    state.listProduct2 = Object.assign({},data)
    state.checkBtn = false
  },
  next(state){
    var totalPage = Math.ceil(state.newLists.length / state.itemPage)
    state.currentPage++;
    if (state.currentPage > totalPage) {
        state.currentPage = totalPage
    }
    state.start = (state.currentPage - 1) * state.itemPage
    state.end = state.currentPage * state.itemPage
  },
  prev(state){
    state.currentPage--;
    if (state.currentPage <= 1) {
        state.currentPage = 1
    }
    state.start = (state.currentPage - 1) * state.itemPage
    state.end = state.currentPage * state.itemPage  
  },



}
})

export default store