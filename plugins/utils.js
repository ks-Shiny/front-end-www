// eslint-disable-next-line import/prefer-default-export
export const replaceImgSrc = (html) => {
    const result = html.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
        (match, capture) => `<img src="${capture.replace('./images', '/images/docs')}">`,
    );
    return result;
};
