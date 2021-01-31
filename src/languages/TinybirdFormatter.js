import keywords from 'editor-languages/lib/clickhouse/keywords';
import builtins from 'editor-languages/lib/clickhouse/builtins';
import Formatter from '../core/Formatter';
import Tokenizer from '../core/Tokenizer';

const reservedWords = [
  ...keywords.map((item) => (Array.isArray(item) ? item[0] : item)),
  ...builtins.map((item) => (Array.isArray(item) ? item[0] : item)),
];

const reservedTopLevelWords = [
  'CASE',
  'END',
  'EXCEPT',
  'FROM',
  'ORDER BY',
  'HAVING',
  'GROUP BY',
  'LIMIT',
  'SELECT',
  'WHERE',
  'WITH',
  'PREWHERE',
];

const reservedTopLevelWordsNoIndent = ['UNION', 'UNION ALL'];

const reservedNewlineWords = [
  'AND',
  'ELSE',
  'OR',
  'WHEN',
  'JOIN',
  'INNER JOIN',
  'ANY LEFT JOIN',
  'ANY RIGHT JOIN',
  'ANY INNER JOIN',
  'LEFT JOIN',
  'LEFT OUTER JOIN',
  'RIGHT JOIN',
  'RIGHT OUTER JOIN',
  'FULL JOIN',
  'FULL OUTER JOIN',
  'CROSS JOIN',
  'NATURAL JOIN',
];

export default class TinybirdFormatter extends Formatter {
  tokenizer() {
    return new Tokenizer({
      reservedWords,
      reservedTopLevelWords,
      reservedNewlineWords,
      reservedTopLevelWordsNoIndent,
      stringTypes: [`""`, "''", "U&''", 'U&""', '$$'],
      openParens: ['(', '['],
      closeParens: [')', ']'],
      indexedPlaceholderTypes: ['$'],
      namedPlaceholderTypes: [],
      lineCommentTypes: ['--'],
      specialWordChars: ['{%', '%}', '{{', '}}'],
      operators: [
        '!=',
        '<<',
        '>>',
        '||/',
        '|/',
        '::',
        '->>',
        '->',
        '~~*',
        '~~',
        '!~~*',
        '!~~',
        '~*',
        '!~*',
        '!~',
        '!!',
        '%',
      ],
    });
  }
}
