import { Toast } from 'mint-ui';
import { apiIndex } from '@/axios/api';

const getters = {};

const state = {
    appIndex: null
};

const mutations = {
    appIndex(state, data) {
        console.log(data);
        state.appIndex = data;
    }
};

const actions = {
    appIndex: ({commit}) => {
        apiIndex().then(res => {
//          console.log(res)

            if (res.code === 0) {
                commit('appIndex', res.data);
            } else {
                Toast({
                    message: res.msg,
                    duration: 1500
                });
            }
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
