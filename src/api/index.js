import axios from 'axios'
// import store from "../store";
// import router from "../router";

const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
  baseURL:`${baseUrl}/api`,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})



export default {
    getListProduct(data){
        return apiAxios({
            method:'get',
            url:`/products?q=${data.search}&page=${data.page}`
        })
    },

    updateProduct(data){
        return apiAxios({
            method:'post',
            url:`/products/${data.id}`,
            data:{
              name:data.name,
              price:data.price,
              description:data.description
            }
        })
    },
    saveProduct(data){
        return apiAxios({
            method:'post',
            url:'/products',
            data: data
        })
    },
    deleteProduct(data){
      return apiAxios({
            method:'delete',
            url:`/products/${data}`,
        })
    },


}