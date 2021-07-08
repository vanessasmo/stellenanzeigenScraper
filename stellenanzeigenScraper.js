const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
    try {
        const { data } = await axios.get(
            'https://www.futureofvoice.com/jobs'
        );
        const $ = cheerio.load(data);
        const postTitles = [];

        $('div.nectar-list-item').each((_idx, el) => {
            const postTitle = $(el).text()
            postTitles.push(postTitle)
        });

        return postTitles;
    } catch (error) {
        throw error;
    }
};

getPostTitles()
    .then((postTitles) => console.log(postTitles));