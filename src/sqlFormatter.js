// import Db2Formatter from './languages/Db2Formatter';
// import MariaDbFormatter from './languages/MariaDbFormatter';
// import MySqlFormatter from './languages/MySqlFormatter';
// import N1qlFormatter from './languages/N1qlFormatter';
// import PlSqlFormatter from './languages/PlSqlFormatter';
// import PostgreSqlFormatter from './languages/PostgreSqlFormatter';
// import RedshiftFormatter from './languages/RedshiftFormatter';
// import SparkSqlFormatter from './languages/SparkSqlFormatter';
// import TSqlFormatter from './languages/TSqlFormatter';
// import StandardSqlFormatter from './languages/StandardSqlFormatter';
import TinybirdFormatter from './languages/TinybirdFormatter';

const formatters = {
  // db2: Db2Formatter,
  // mariadb: MariaDbFormatter,
  // mysql: MySqlFormatter,
  // n1ql: N1qlFormatter,
  // plsql: PlSqlFormatter,
  // postgresql: PostgreSqlFormatter,
  // redshift: RedshiftFormatter,
  // spark: SparkSqlFormatter,
  // sql: StandardSqlFormatter,
  // tsql: TSqlFormatter,
  tinybird: TinybirdFormatter,
};

/**
 * Format whitespace in a query to make it easier to read.
 *
 * @param {String} query
 * @param {Object} cfg
 *  @param {String} cfg.language Query language, default is Standard SQL
 *  @param {String} cfg.indent Characters used for indentation, default is "  " (2 spaces)
 *  @param {Boolean} cfg.uppercase Converts keywords to uppercase
 *  @param {Integer} cfg.linesBetweenQueries How many line breaks between queries
 *  @param {Object} cfg.params Collection of params for placeholder replacement
 * @return {String}
 */
export const format = (query, cfg = {}) => {
  if (typeof query !== 'string') {
    throw new Error('Invalid query argument. Extected string, instead got ' + typeof query);
  }

  return new TinybirdFormatter(cfg).format(query);
};

export const supportedDialects = Object.keys(formatters);
