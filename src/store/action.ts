import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user';

export const setGenre = createAction('setGenre', (value: string) => ({
  payload: value,
}));

export const loadFilms = createAction<Films>('loadFilms');

export const setisLoadingFilms = createAction<boolean>('setisLoadingFilms');

export const setAuthorizationStatus = createAction<AuthorizationStatus>(
  'setAuthorizationStatus'
);

export const setUser = createAction<UserData>('setUser');
