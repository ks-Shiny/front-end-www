// eslint-disable-next-line import/prefer-default-export
export const pageBreak = (list, num, size) => {
    const start = Math.max(num - 1, 0) * size;
    const end = start + size - 0;
    return list.slice(start, end);
};
