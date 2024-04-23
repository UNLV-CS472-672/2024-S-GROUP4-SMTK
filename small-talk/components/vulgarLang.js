const {
	RegExpMatcher,
	englishDataset,
	englishRecommendedTransformers,
} = require('obscenity');

export default async function vulgar(input) {
    const matcher = new RegExpMatcher({
        ...englishDataset.build(),
        ...englishRecommendedTransformers,
    });
    if (matcher.hasMatch(input)) {
        return true;
    }
    return false;
}
