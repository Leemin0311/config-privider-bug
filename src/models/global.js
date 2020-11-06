import { setLocale } from 'umi';

export const languages = [
  {
    title: 'id_ID',
    key: 'id_ID',
  },
  {
    title: 'en_US',
    key: 'en_US',
  },
];

export const defaultLang = 'en_US';

export default {
  namespace: 'global',
  state: {
    languages,
    currentLang: defaultLang,
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *langChange({ payload }, { put }) {
      setLocale(payload.currentLang, false);
      yield put({
        type: 'setData',
        payload,
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return () => {
        console.trace('test model');
      };
    },
  },
};
