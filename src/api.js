import axios from 'axios';

const request = axios.create({


    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyBXN6Uf4dAkZCyImcGynVuqC4ZarpLqwCA'
    },

})

export default request
