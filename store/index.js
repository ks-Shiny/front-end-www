import articleList from '../data/data';

const articleType = Object.keys(articleList.data);
// const size = 15;
// articleType.forEach((item) => {
//     const data = articleList.data[item];
//     data.pageSize = size;
//     data.totalPage = Math.ceil(data / size) || 1;
// });

// eslint-disable-next-line import/prefer-default-export
export const state = () => Object.assign({ articleType }, articleList.data);
