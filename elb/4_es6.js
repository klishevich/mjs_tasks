const metadata = {
    title: {
        name: 'Hi there'
    },
    translations: [
    {
        locale: 'de',
        localizationTags: [],
        lastEdit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: {
            otherName: 'Bye'
        }
    }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
const { title: titleFirst, translations: [{title: titleSecond}] } = metadata;
const res = { ...titleFirst, ...titleSecond };
console.log(res);