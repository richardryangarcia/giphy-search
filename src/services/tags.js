import {postRequest as Post, getRequest as Get} from '../configs/axios';

export const updateTags = (gifId, tag) => {
  return Post('update-tags', {gifId, tag});
}

export const getTags = () => {
  return Get('get-tags');
}
