
import axios from 'axios';
import { Toast } from 'mint-ui';
import { BASE_URL, showFullScreenLoading, tryHideFullScreenLoading } from './util';
import Util from '../util';

const instance = axios.create({
    baseURL: BASE_URL, // 基础路径
    timeout: 10000, // 请求超时时间
    headers: { // 请求头

    }
});

// 设置请求头
// Vue.prototype.$http = axios;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // post请求头

// 请求拦截器
instance.interceptors.request.use(config => {
    config.headers.common['X-Dola-Time'] = Util.getSeconds();
    config.headers.common['X-Dola-ClientID'] = Util.getGuid();

    if (config.showLoading) {
        showFullScreenLoading();
    }

    return config;
}, error => {
    return Promise.error(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
    if (response.config.showLoading) {
        tryHideFullScreenLoading();
    }
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    Toast({
        message: error.response.data.message,
        duration: 1500,
        forbidClick: true
    });
    return Promise.reject(error.response);
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} isShowLoading [是否显示loading]
 * @param {String} platform [请求的平台 ios andrio wechat]
 */
export function get(url, params, isShowLoading, platform) {
    let Codekey = Util.getRrandomStr();
    let token = Util.getCookie('token');
    platform = platform || 'wechat';
    params = Util.getParams(platform, token, params);
    params = Util.encryption(Codekey, params, 'code');

    isShowLoading = typeof isShowLoading === 'undefined';

    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: {
                data: params
            },
            headers: {
              'X-Dola-Code': Codekey
            },
            showLoading: isShowLoading
        }).then(res => {
            var key = res.headers['x-dola-edoc'];
            var data = res.data;
            var str = Util.decrypt(key, data, 'code');
            data = JSON.parse(str);

            resolve(data);
        }).catch(err => {
            reject(err.data);
        });
    });
};
