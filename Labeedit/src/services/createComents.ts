import api from './api';
export const key = '@labeedit';
import { Dispatch } from 'redux';

export const createPost = async (
  token: string,
  contents: string,
  id: string,
  stateIsLoading: (isLoading: boolean) => void,
) => {
  const url = `/coments/${id}`;
  stateIsLoading(true);
  const headers = {
    Authorization: token,
  };
  const body = {
    contents,
  };

  try {
    const response = await api.post(url, body, { headers });
  } catch (error) {
    console.error('Erro ao criar o post:', error);
  } finally {
    stateIsLoading(false);
  }
};
