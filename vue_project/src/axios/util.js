import { Indicator } from 'mint-ui';

let baseURL;
let needLoadingRequestCount = 0;

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    baseURL = 'https://api.dolabank.club/';
} else if (process.env.NODE_ENV === 'debug') {
    baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://www.dolabank.com/apigateway/';
}

function startLoading() {
    console.log('startLoading =============');
    Indicator.open({
      text: '拼命加载...',
      spinnerType: 'triple-bounce'
    });
};

function endLoading() {
     console.log('endLoading==========');
    Indicator.close();
};

// const tryCloseLoading = () => {
// if (needLoadingRequestCount === 0) {
//  endLoading()
// }
// }

export const BASE_URL = baseURL;

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
};

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) {
        return;
    }
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        endLoading();
//      _.debounce(tryCloseLoading, 300)()
    }
};
