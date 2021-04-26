import axios from 'axios'

const API = axios.create({
        baseURL:'https://api.coingecko.com/api/v3/coins/markets',
        params:{
            vs_currency:'usd',
            order:'market_cap_desc',
            per_page:100,
            page:1,
            sparkline:false,
            price_change_percentage:'24h',
        }
    })

export default API