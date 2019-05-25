import {postRequest as Post} from '../configs/axios';

export const createMongoUser = (uid, firstName, lastName, email) => {
  return Post('register', {uid, firstName, lastName, email})
}
