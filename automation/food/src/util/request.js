import axios from 'axios';
const service = axios.create({
    timeout: 60000, // 统一设置超时时间
});

module.exports = service;