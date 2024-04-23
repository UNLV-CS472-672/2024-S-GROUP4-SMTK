const {
	RegExpMatcher,
	englishDataset,
	englishRecommendedTransformers,
} = require('obscenity');

export default function vulgar(input) {
    const matcher = new RegExpMatcher({
        ...englishDataset.build(),
        ...englishRecommendedTransformers,
    });
    return matcher.hasMatch(input);
}
