import vulgar from './vulgarLang';
import {
	RegExpMatcher,
	TextCensor,
	englishDataset,
	englishRecommendedTransformers,
} from 'obscenity';

export default function censor(input) {
    if (vulgar(input)) {
        const matcher = new RegExpMatcher({
            ...englishDataset.build(),
            ...englishRecommendedTransformers,
        });
        const censor = new TextCensor();
        const matches = matcher.getAllMatches(input);
        return censor.applyTo(input, matches);
    }
    return input;
}
