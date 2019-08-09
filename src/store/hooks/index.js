import { useEffect } from 'react';
import { getUser } from '../actions/auth';

export const useSetUser = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return [];
};

export default useSetUser;
