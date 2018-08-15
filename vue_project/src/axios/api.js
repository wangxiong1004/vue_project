/**
 * api接口统一管理
 */
import { get } from './index';

// 首页
export const apiIndex = params => get('v1/app/appindex', params);
// 检查token是否存在或过期
export const tokenCheck = params => get('v1/user/token_check', params);
// 转让列表
export const list = params => get('v1/loan/list', params);
// 登录
export const signin = params => get('v1/user/signin', params);
