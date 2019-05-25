import {getRequest as Get, postRequest as Post} from '../configs/axios';

export const getTrendingGifs = (params) => {
  return Get('trending', params);
}

export const searchGifs = (params) => {
  return Get('search', params);
}

export const getFavoriteGifs = (params) => {
  return Get('get-favorites', params);
}

export const updateFavoritesGifs = (gif_id) => {
  return Post('update-favorites', {gif_id})
}
