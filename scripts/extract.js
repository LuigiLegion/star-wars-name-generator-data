/* eslint-disable complexity */

// Imports
import { maleOneOfSix } from '../data/raw/male/male-1-of-6';
import { maleTwoOfSix } from '../data/raw/male/male-2-of-6';
import { maleThreeOfSix } from '../data/raw/male/male-3-of-6';
import { maleFourOfSix } from '../data/raw/male/male-4-of-6';
import { maleFiveOfSix } from '../data/raw/male/male-5-of-6';
import { maleSixOfSix } from '../data/raw/male/male-6-of-6';
import { femaleOneOfTwo } from '../data/raw/female/female-1-of-2';
import { femaleTwoOfTwo } from '../data/raw/female/female-2-of-2';

// Initializations
const extractFullNames = articles =>
  articles.items.reduce((acc, curArticle) => {
    if (
      !curArticle.title.includes("'s ") &&
      !curArticle.title.includes("s' ") &&
      !curArticle.title.includes('0') &&
      !curArticle.title.includes('1') &&
      !curArticle.title.includes('2') &&
      !curArticle.title.includes('3') &&
      !curArticle.title.includes('4') &&
      !curArticle.title.includes('5') &&
      !curArticle.title.includes('6') &&
      !curArticle.title.includes('7') &&
      !curArticle.title.includes('8') &&
      !curArticle.title.includes('9')
    ) {
      const curArticleTitleWords = curArticle.title.split(' ');

      if (
        curArticleTitleWords[0] !== 'The' &&
        curArticleTitleWords[0] !== 'Unidentified'
      ) {
        acc.push(curArticle.title);
      }
    }

    return acc;
  }, []);

const printFullNames = fullNames => console.log(JSON.stringify(fullNames));

// Checks
printFullNames(extractFullNames(maleOneOfSix));
printFullNames(extractFullNames(maleTwoOfSix));
printFullNames(extractFullNames(maleThreeOfSix));
printFullNames(extractFullNames(maleFourOfSix));
printFullNames(extractFullNames(maleFiveOfSix));
printFullNames(extractFullNames(maleSixOfSix));
printFullNames(extractFullNames(femaleOneOfTwo));
printFullNames(extractFullNames(femaleTwoOfTwo));
