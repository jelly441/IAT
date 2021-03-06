import {
  queryTreeList,
  queryAddSubFolder,
  queryDeleteFolder,
  queryAddCase,
  queryDeleteCase,
  queryCopyCase,
  queryTreeInfo,
  queryUpdateFolderName,
  queryUpdateSample,
  querySampleInfo,
  queryDebugSample,
  queryExtractList,
  queryUpdateTreeIndex,
} from '@/services/api';
import { routerRedux } from 'dva/router';
import { reloadAuthorized } from '@/utils/Authorized';
import {message} from 'antd'

export default {
  namespace: 'interfaceCase',
  state: {
    treeList:[],
    extractList:[],
    infoData:{},
  },

  effects: {
    *queryUpdateSample({ payload }, { call,put  }) {
      const response = yield call(queryUpdateSample, payload);
      if (response) {
        switch (response.code) {
          case 0:
            // message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryUpdateTreeIndex({ payload }, { call,put  }) {
      const response = yield call(queryUpdateTreeIndex, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryAddSubFolder({ payload }, { call,put  }) {
      const response = yield call(queryAddSubFolder, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryUpdateFolderName({ payload }, { call,put  }) {
      const response = yield call(queryUpdateFolderName, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryDeleteFolder({ payload }, { call,put  }) {
      const response = yield call(queryDeleteFolder, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryCopyCase({ payload }, { call,put  }) {
      const response = yield call(queryCopyCase, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryDeleteCase({ payload }, { call,put  }) {
      const response = yield call(queryDeleteCase, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryAddCase({ payload }, { call,put  }) {
      const response = yield call(queryAddCase, payload);
      if (response) {
        switch (response.code) {
          case 0:
            message.success(response.msg);
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryTreeList({ payload }, { call,put  }) {
      yield put({type: 'updateState', payload: {treeList:[]}});
      const response = yield call(queryTreeList, payload);
      if (response) {
        switch (response.code) {
          case 0:
            yield put({type: 'updateState', payload: {treeList:response.content}});
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryExtractList({ payload }, { call,put  }) {
      yield put({type: 'updateState', payload: {extractList:[]}});
      const response = yield call(queryExtractList, payload);
      if (response) {
        switch (response.code) {
          case 0:
            yield put({type: 'updateState', payload: {extractList:response.content}});
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryDebugSample({ payload }, { call,put  }) {
      yield put({type: 'updateState', payload: {debugInfo:{}}});
      const response = yield call(queryDebugSample, payload);
      if (response) {
        switch (response.code) {
          case 0:
            yield put({type: 'updateState', payload: {debugInfo:response.content}});
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *querySampleInfo({ payload }, { call,put  }) {
      yield put({type: 'updateState', payload: {sampleInfo:null}});
      const response = yield call(querySampleInfo, payload);
      if (response) {
        switch (response.code) {
          case 0:
            yield put({type: 'updateState', payload: {sampleInfo:response.content}});
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
    *queryTreeInfo({ payload }, { call,put  }) {
      yield put({type: 'updateState', payload: {infoData:{}}});
      const response = yield call(queryTreeInfo, payload);
      if (response) {
        switch (response.code) {
          case 0:
            yield put({type: 'updateState', payload: {infoData:response.content}});
            break;
          case 10001:
            message.warning(response.msg);
            break;
          case 10002:
            message.warning(response.msg);
            break;
          case 99999:
            reloadAuthorized();
            message.error(response.msg);
            yield put(routerRedux.push('/user/login'));
            break;
          default:
            message.warning('出现了什么鬼');
        }
      } else {
        message.error('服务器异常！');
      }
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
