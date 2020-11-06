import React from 'react';
import { useSelector, useDispatch } from 'dva';
import { useIntl } from 'umi';

export default () => {
  const dispatch = useDispatch();
  const { currentLang } = useSelector(state => state.global);
  const { formatMessage } = useIntl();

  return (
    <div>
      <h1>Page index</h1>
      <div>{formatMessage({ id: 'aaa' })}</div>
      <div>current language is: {currentLang}</div>
      <div
        onClick={() =>
          dispatch({
            type: 'global/langChange',
            payload: {
              currentLang: 'id_ID',
            },
          })
        }
      >
        change to id_ID
      </div>
      <div
        onClick={() =>
          dispatch({
            type: 'global/langChange',
            payload: {
              currentLang: 'en_US',
            },
          })
        }
      >
        change to en_US
      </div>
    </div>
  );
};
