import { PaginationDTO } from 'src/common/base';

export const PaginationToQuery = (pagination: PaginationDTO) => {
  const limit = pagination.limit ? pagination.limit : '10';
  const page = pagination.page ? pagination.page : '1';
  const skip = parseInt(limit) * (parseInt(page) - 1);
  const take = parseInt(limit);
  return { skip, take };
};
