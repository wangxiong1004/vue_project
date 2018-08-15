import {
  Toast
} from 'mint-ui';

const config = {
    DURATION: 2000,
    MOBILE_NULL_MSG: '请输入手机号！',
    MOBILE_ERROR_MSG: '请输入正确的手机号！',
    PASSWD_NULL_MSG: '请输入密码！'
};

export default {
    mobile(mobile) {
        if (!mobile) {
            Toast({
              message: config.MOBILE_NULL_MSG,
              position: 'bottom',
              duration: config.DURATION
            });
            return false;
        } else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile))) {
            Toast({
              message: config.MOBILE_ERROR_MSG,
              position: 'bottom',
              duration: config.DURATION
            });
            return false;
        } else {
            return true;
        }
    },
    passwd(passwd) {
        if (!passwd) {
          Toast({
            message: config.PASSWD_NULL_MSG,
            position: 'bottom',
            duration: config.DURATION
          });
          return false;
        } else {
          return true;
        }
    }
};
