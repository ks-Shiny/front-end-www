function pagination(posts, options) {
    if (!posts) throw new TypeError('posts is required!');

    const { length } = posts;
    // eslint-disable-next-line no-prototype-builtins
    const perPage = options.hasOwnProperty('perPage') ? +options.perPage : 1;
    const totalPage = perPage ? Math.ceil(length / perPage) : 1;
    const result = [];

    function makeData(i) {
        const data = {
            posts: perPage ? posts.slice(perPage * (i - 1), perPage * i) : posts,
            prev: 0,
            // prev_link: '',
            next: 0,
            totalPage,
            // next_link: '',
        };

        if (i > 1) {
            data.prev = i - 1;
            // data.prev_link = formatURL(data.prev);
        }

        if (i < totalPage) {
            data.next = i + 1;
            // data.next_link = formatURL(data.next);
        }

        return data;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPage; i++) {
        result.push({
            data: makeData(i),
        });
    }

    return result;
}

module.exports = pagination;
