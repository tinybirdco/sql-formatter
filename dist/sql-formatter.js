(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sqlFormatter"] = factory();
	else
		root["sqlFormatter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sqlFormatter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/editor-languages/lib/clickhouse/builtins.js":
/*!******************************************************************!*\
  !*** ./node_modules/editor-languages/lib/clickhouse/builtins.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  'plus',
  'minus',
  'multiply',
  'divide',
  'intDiv',
  'intDivOrZero',
  'modulo',
  'negate',
  'abs',
  'bitAnd',
  [
    'bitCount',
    'fn()',
    `
  **bitCount(column_name)**

  Calculate the number of set bits in the supplied integer number
  `,
    'bitCount(column_name)',
    'column_name'
  ],
  'bitOr',
  'bitXor',
  'bitNot',
  'bitShiftLeft',
  'bitShiftRight',
  'equals',
  'notEquals',
  'less',
  'greater',
  'lessOrEquals',
  'greaterOrEquals',
  'toUInt8',
  'toUInt16',
  'toUInt32',
  'toUInt64',
  'toInt8',
  'toInt16',
  'toInt32',
  'toInt64',
  'toFloat32',
  'toFloat64',
  'toUInt8OrZero',
  'toUInt16OrZero',
  'toUInt32OrZero',
  'toUInt64OrZero',
  'toInt8OrZero',
  'toInt16OrZero',
  'toInt32OrZero',
  'toInt64OrZero',
  'toFloat32OrZero',
  'toFloat64OrZero',
  'toDecimal32',
  'toDecimal64',
  'toDecimal128',
  [
    'toDate',
    'fn()',
    `
  **toDate(column_name)**

  Converts value to date without time. [Learn more](https://clickhouse.yandex/docs/en/query_language/functions/type_conversion_functions/#todate-todatetime)
  `,
    `toDate(column_name)`,
    `column_name`
  ],
  'toDateTime',
  'toString',
  'toFixedString',
  'toStringCutToZero',
  'toUnixTimestamp64Milli',
  'fromUnixTimestamp64Milli',
  'toUnixTimestamp64Micro',
  'fromUnixTimestamp64Micro',
  'toUnixTimestamp64Nano',
  'fromUnixTimestamp64Nano',
  'reinterpretAsUInt8',
  'reinterpretAsUInt16',
  'reinterpretAsUInt32',
  'reinterpretAsUInt64',
  'reinterpretAsInt8',
  'reinterpretAsInt16',
  'reinterpretAsInt32',
  'reinterpretAsInt64',
  'reinterpretAsFloat32',
  'reinterpretAsFloat64',
  'reinterpretAsDate',
  'reinterpretAsDateTime',
  'reinterpretAsString',
  [
    'startsWith',
    'fn()',
    `
  **startsWith(str, prefix)**
  
  Returns 1 whether string starts with the specified prefix, otherwise it returns 0.
  `,
    `startsWith(str, prefix)`,
    'str'
  ],
  [
    'endsWith',
    'fn()',
    `
  **endsWith(str, suffix)**
  
  Returns 1 if the string ends with the specified suffix, otherwise it returns 0.
  `,
    `endsWith(str, suffix)`,
    'str'
  ],
  'toYear',
  'toMonth',
  'toDayOfMonth',
  'toDayOfWeek',
  'toHour',
  'toMinute',
  'toSecond',
  'toMonday',
  [
    'toStartOfWeek',
    'fn()',
    `
  **toStartOfWeek(t, [mode])**

  Rounds down a date or date with time to the nearest Sunday or Monday by mode. Returns the date. The mode argument works exactly like the mode argument to [toWeek()](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#toweek-date-mode). For the single-argument syntax, a mode value of 0 is used, where week 1 is the first one with a Sunday in the given year. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofweek-t-mode)
  `,
    `toStartOfWeek(column_or_date_or_datetime)`,
    `column_or_date_or_datetime`
  ],
  [
    'toStartOfMonth',
    'fn()',
    `
  **toStartOfMonth(t)**

  Rounds down a date or date with time to the first day of the month. Returns the date. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofmonth)
  `,
    `toStartOfMonth(column_or_date_or_datetime)`,
    `column_or_date_or_datetime`
  ],
  [
    'toStartOfQuarter',
    'fn()',
    `
  **toStartOfQuarter(t)**

  Rounds down a date or date with time to the first day of the quarter. The first day of the quarter is either 1 January, 1 April, 1 July, or 1 October. Returns the date. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofquarter)
  `,
    `toStartOfQuarter(column_or_date_or_datetime)`,
    `column_or_date_or_datetime`
  ],
  [
    'toStartOfYear',
    'fn()',
    `
  **toStartOfYear(t)**

  Rounds down a date or date with time to the first day of the year. Returns the date. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofyear)
  `,
    `toStartOfYear(column_or_date_or_datetime)`,
    `column_or_date_or_datetime`
  ],
  [
    'toStartOfDay',
    'fn()',
    `
  **toStartOfDay(t)**

  Rounds down a date with time to the start of the day. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofday)
  `,
    `toStartOfDay(column_or_datetime)`,
    `column_or_datetime`
  ],
  [
    'toStartOfHour',
    'fn()',
    `
  **toStartOfHour(t)**

  Rounds down date with time to the start of the hour. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofhour)
  `,
    `toStartOfHour(column_or_datetime)`,
    `column_or_datetime`
  ],
  [
    'toStartOfMinute',
    'fn()',
    `
  **toStartOfMinute(t)**

  Rounds down a date with time to the start of the minute. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofminute)
  `,
    `toStartOfMinute(column_or_datetime)`,
    `column_or_datetime`
  ],
  [
    'toStartOfFiveMinute',
    'fn()',
    `
  **toStartOfFiveMinute(t)**

  Rounds down a date with time to the start of the five-minute interval. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartoffiveminute)
  `,
    `toStartOfFiveMinute(column_or_datetime)`,
    `column_or_datetime`
  ],
  [
    'toStartOfFifteenMinutes',
    'fn()',
    `
  **toStartOfFifteenMinutes(t)**

  Rounds down a date with time to the start of the fifteen-minute interval. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartoffifteenminutes)
  `,
    `toStartOfFifteenMinutes(column_or_datetime)`,
    `column_or_datetime`
  ],
  [
    'toStartOfInterval',
    'fn()',
    `
  **toStartOfInterval(t, INTERVAL x unit [, time_zone])**

  This is a generalization of other functions named toStartOf*. For example, toStartOfInterval(t, INTERVAL 1 year) returns the same as toStartOfYear(t), toStartOfInterval(t, INTERVAL 1 month) returns the same as toStartOfMonth(t), toStartOfInterval(t, INTERVAL 1 day) returns the same as toStartOfDay(t), toStartOfInterval(t, INTERVAL 15 minute) returns the same as toStartOfFifteenMinutes(t) etc. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#tostartofinterval-time-or-data-interval-x-unit-time-zone)
  `,
    `toStartOfInterval(column_or_date_or_datetime, INTERVAL x unit)`,
    `column_or_date_or_datetime`
  ],
  'toTime',
  'toRelativeYearNum',
  'toRelativeMonthNum',
  'toRelativeWeekNum',
  'toRelativeDayNum',
  'toRelativeHourNum',
  'toRelativeMinuteNum',
  'toRelativeSecondNum',
  'toYYYYMM',
  'toYYYYMMDD',
  'toYYYYMMDDhhmmss',
  [
    'addYears',
    'fn()',
    `
  **addYears(column_name, number_of_years)**

  Function adds specified number of years to a Date/DateTime and then return the Date/DateTime.
  `,
    `addYears(column_name, 1)`,
    `column_name`
  ],
  [
    'addMonths',
    'fn()',
    `
  **addMonths(column_name, number_of_months)**

  Function adds specified number of months to a Date/DateTime and then return the Date/DateTime.
  `,
    `addMonths(column_name, 1)`,
    `column_name`
  ],
  [
    'addWeeks',
    'fn()',
    `
  **addWeeks(column_name, number_of_weeks)**

  Function adds specified number of weeks to a Date/DateTime and then return the Date/DateTime.
  `,
    `addWeeks(column_name, 1)`,
    `column_name`
  ],
  [
    'addDays',
    'fn()',
    `
  **addDays(column_name, number_of_days)**

  Function adds specified number of days to a Date/DateTime and then return the Date/DateTime.
  `,
    `addDays(column_name, 1)`,
    `column_name`
  ],
  [
    'addHours',
    'fn()',
    `
  **addHours(column_name, number_of_hours)**

  Function adds specified number of hours to a Date/DateTime and then return the Date/DateTime.
  `,
    `addHours(column_name, 1)`,
    `column_name`
  ],
  [
    'addMinutes',
    'fn()',
    `
  **addMinutes(column_name, number_of_minutes)**

  Function adds specified number of minutes to a Date/DateTime and then return the Date/DateTime.
  `,
    `addMinutes(column_name, 1)`,
    `column_name`
  ],
  [
    'addSeconds',
    'fn()',
    `
  **addSeconds(column_name, number_of_seconds)**

  Function adds specified number of seconds to a Date/DateTime and then return the Date/DateTime.
  `,
    `addSeconds(column_name, 1)`,
    `column_name`
  ],
  [
    'addQuarters',
    'fn()',
    `
  **addQuarters(column_name, number_of_quarters)**

  Function adds specified number of quarters to a Date/DateTime and then return the Date/DateTime.
  `,
    `addQuarters(column_name, 1)`,
    `column_name`
  ],
  [
    'now',
    'fn()',
    `
  **now()**
  
  Returns the current time at one of the moments of request execution. [Learn more](https://clickhouse.yandex/docs/en/query_language/functions/date_time_functions/#now)
  `,
    `now()`
  ],
  'now64',
  [
    'today',
    'fn()',
    `
  **today()**
  
  Accepts zero arguments and returns the current date at one of the moments of request execution. The same as 'toDate(now())'. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#today)
  `,
    `today()`
  ],
  [
    'yesterday',
    'fn()',
    `
  **yesterday()**
  
  Accepts zero arguments and returns yesterday's date at one of the moments of request execution. The same as 'today() - 1'. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/date_time_functions/#yesterday)
  `,
    `yesterday()`
  ],
  'timeSlot',
  'timeSlots',
  'formatDateTime',
  'empty',
  'notEmpty',
  'length',
  'lengthUTF8',
  'lower',
  'upper',
  'lowerUTF8',
  'upperUTF8',
  'reverse',
  'reverseUTF8',
  'concat',
  'substring',
  'substringUTF8',
  'appendTrailingCharIfAbsent',
  'convertCharset',
  'base64Encode',
  'base64Decode',
  'tryBase64Decode',
  'position',
  'positionUTF8',
  'match',
  'extract',
  'extractAll',
  'like',
  'notLike',
  'replaceOne',
  'replaceAll',
  'replaceRegexpOne',
  'replaceRegexpAll',
  'emptyArrayUInt8',
  'emptyArrayUInt16',
  'emptyArrayUInt32',
  'emptyArrayUInt64',
  'emptyArrayInt8',
  'emptyArrayInt16',
  'emptyArrayInt32',
  'emptyArrayInt64',
  'emptyArrayFloat32',
  'emptyArrayFloat64',
  'emptyArrayDate',
  'emptyArrayDateTime',
  'emptyArrayString',
  'emptyArrayToSingle',
  'range',
  'array',
  'arrayConcat',
  'arrayElement',
  'has',
  'hasAll',
  'hasAny',
  'indexOf',
  'countEqual',
  'arrayEnumerate',
  'arrayEnumerateUniq',
  'arrayJoin',
  'arrayPopBack',
  'arrayPopFront',
  'arrayPushBack',
  'arrayPushFront',
  'arrayResize',
  'arraySlice',
  'arrayUniq',
  'operator',
  'arrayMap',
  'arrayFilter',
  'arrayCount',
  'arrayExists',
  'arrayAll',
  'arraySum',
  'arrayCumSum',
  'arraySort',
  'arrayReverseSort',
  'arrayFirst',
  'arrayFirstIndex',
  [
    'arrayZip',
    'fn()',
    `
  **arrayZip(arr1, arr2, ..., arrN)**

  Allows to combine multiple arrays of equal lengths into one array of tuples.
  `,
    'arrayZip(arr1)'
  ],
  'splitByChar',
  'splitByString',
  'arrayStringConcat',
  'alphaTokens',
  'protocol',
  'domain',
  'domainWithoutWWW',
  'topLevelDomain',
  'firstSignificantSubdomain',
  'cutToFirstSignificantSubdomain',
  'path',
  'pathFull',
  'queryString',
  'fragment',
  'queryStringAndFragment',
  'extractURLParameter',
  'extractURLParameters',
  'extractURLParameterNames',
  'URLHierarchy',
  'URLPathHierarchy',
  'decodeURLComponent',
  'cutWWW',
  'cutQueryString',
  'cutFragment',
  'cutQueryStringAndFragment',
  'cutURLParameter',
  'IPv4NumToString',
  'IPv4StringToNum',
  'IPv4NumToStringClassC',
  'IPv6NumToString',
  'IPv6StringToNum',
  'rand',
  'rand64',
  'randConstant',
  'halfMD5',
  'MD5',
  'sipHash64',
  'sipHash128',
  'cityHash64',
  'intHash32',
  'intHash64',
  'SHA224',
  'SHA256',
  'URLHash',
  'hex',
  'unhex',
  'UUIDStringToNum',
  'UUIDNumToString',
  'bitmaskToList',
  'bitmaskToArray',
  'floor',
  'ceil',
  'round',
  'roundToExp2',
  'roundDuration',
  'roundAge',
  'if',
  'multiIf',
  'ifNotFinite',
  'e',
  'pi',
  'exp',
  'log',
  'exp2',
  'log2',
  'exp10',
  'log10',
  'sqrt',
  'cbrt',
  'erf',
  'erfc',
  'lgamma',
  'tgamma',
  'sin',
  'cos',
  'tan',
  'asin',
  'acos',
  'atan',
  'pow',
  'regionToCity',
  'regionToArea',
  'regionToDistrict',
  'regionToCountry',
  'regionToContinent',
  'regionToPopulation',
  'regionIn',
  'regionHierarchy',
  'regionToName',
  'greatCircleDistance',
  'greatCircleAngle',
  'pointInEllipses',
  'pointInPolygon',
  'geoDistance',
  'geohashEncode',
  'geohashDecode',
  'geohashesInBox',
  'OSIn',
  'SEIn',
  'dictGetUInt8',
  'dictGetUInt16',
  'dictGetUInt32',
  'dictGetUInt64',
  'dictGetInt8',
  'dictGetInt16',
  'dictGetInt32',
  'dictGetInt64',
  'dictGetFloat32',
  'dictGetFloat64',
  'dictGetDate',
  'dictGetDateTime',
  'dictGetString',
  'dictGetUUID',
  'dictGetTOrDefault',
  'dictIsIn',
  'dictGetHierarchy',
  'dictHas',
  'visitParamHas',
  'visitParamExtractUInt',
  'visitParamExtractInt',
  'visitParamExtractFloat',
  'visitParamExtractBool',
  'visitParamExtractRaw',
  'visitParamExtractString',
  'in',
  'tuple',
  'tupleElement',
  'hostName',
  'visibleWidth',
  'toTypeName',
  'blockSize',
  'materialize',
  'ignore',
  'sleep',
  'currentDatabase',
  [
    'joinGet',
    'fn()',
    `
  **joinGet(data_source_name, 'column_value', 'join_keys')**

  Extract data from the table the same way as from a dictionary
  `,
    `joinGet(data_source_name, 'column_value', 'join_keys')`,
    `data_source_name`
  ],
  'hasColumnInTable',
  'formatReadableSize',
  'isConstant',
  'isFinite',
  'isInfinite',
  'isNaN',
  'isNull',
  'isNotNull',
  'coalesce',
  'ifNull',
  'nullIf',
  'assumeNotNull',
  'toNullable',
  'bar',
  'transform',
  'notIn',
  'least',
  'greatest',
  'uptime',
  'version',
  'rowNumberInAllBlocks',
  'runningDifference',
  'MACNumToString',
  'MACStringToNum',
  'MACStringToOUI',
  'getSizeOfEnumType',
  'toColumnTypeName',
  'dumpColumnStructure',
  'defaultValueOfArgumentType',
  'indexHint',
  'replicate',
  'globalIn',
  'globalNotIn',
  'lambda',
  'count',
  'any',
  'anyHeavy',
  'anyLast',
  'groupBitAnd',
  'groupBitOr',
  'groupBitXor',
  'min',
  'max',
  'argMin',
  'argMax',
  'sum',
  'sumWithOverflow',
  'sumMap',
  'avg',
  'avgWeighted',
  [
    'uniq',
    'fn()',
    `
  **uniq(x)**

  Calculates the approximate number of different values of the argument. Works for numbers, strings, dates, and dates with times. [Learn more](https://clickhouse-docs.readthedocs.io/en/latest/agg_functions/#uniq-x)
  `,
    `uniq(x)`,
    'x'
  ],
  [
    'uniqHLL12',
    'fn()',
    `
  **uniqHLL12(x)**

  Uses the HyperLogLog algorithm to approximate the number of different values of the argument. It uses 212 5-bit cells. [Learn more](https://clickhouse-docs.readthedocs.io/en/latest/agg_functions/#uniqhll12-x)
  `,
    `uniqHLL12(x)`,
    'x'
  ],
  [
    'uniqExact',
    'fn()',
    `
  **uniqExact(x)**

  Exact number of different values of the argument. There is no reason to fear approximations, so it’s better to use the ‘uniq’ function. You should use the ‘uniqExact’ function if you definitely need an exact result. [Learn more](https://clickhouse-docs.readthedocs.io/en/latest/agg_functions/#uniqexact-x)
  `,
    `uniqExact(x)`,
    'x'
  ],
  [
    'uniqCombined',
    'fn()',
    `
  **uniqCombined(x)**

  Approximately computes the number of different values ​​of the argument. Works for numbers, strings, dates, date-with-time. [Learn more](https://clickhouse-docs.readthedocs.io/en/latest/agg_functions/#uniqcombined-x)
  `,
    `uniqCombined(x)`,
    'x'
  ],
  'aggThrow',
  'groupArray',
  'groupArraySample',
  'groupArrayInsertAt',
  'groupUniqArray',
  'median',
  'medianTiming',
  'medianDeterministic',
  'medianTimingWeighted',
  'varSamp',
  'varPop',
  'stddevSamp',
  'stddevPop',
  'covarSamp',
  'covarPop',
  'topK',
  [
    'corr',
    'fn()',
    `
  **corr(x,y)**

  Calculates the Pearson correlation coefficient. [Learn more](https://clickhouse.yandex/docs/en/query_language/agg_functions/reference/#corr-x-y)
  `,
    `cor(x,y)`,
    'x'
  ],
  [
    'histogram',
    'fn()',
    `
  **histogram(number_of_bins)(values)**

  Calculates an adaptive histogram. It doesn't guarantee precise results. [Learn more](https://clickhouse.yandex/docs/en/query_language/agg_functions/parametric_functions/#histogram)
  `,
    `histogram(number_of_bins)(values)`,
    'number_of_bins'
  ],
  'quantile',
  'quantiles',
  'quantileTiming',
  'quantilesTiming',
  'quantileTimingWeighted',
  'quantilesTimingWeighted',
  'quantileDeterministic',
  'quantilesDeterministic',
  'quantileExact',
  'quantileExactWeighted',
  'quantileTDigest',
  'sequenceMatch',
  'sequenceCount',
  'windowFunnel',
  'retention',
  'uniqUpTo',
  [
    'countIf',
    'fn()',
    `
  **countIf(condition)**

  Count the number of rows that satifies a condition. [Learn more](https://clickhouse-docs.readthedocs.io/en/latest/agg_functions/#if-combinator-conditional-aggregate-functions)
  `,
    `countIf(cond)`,
    'cond'
  ],
  'anyIf',
  'anyLastIf',
  'minIf',
  'maxIf',
  'argMinIf',
  'argMaxIf',
  'sumIf',
  'avgIf',
  'uniqIf',
  'uniqHLL12If',
  'uniqExactIf',
  'groupArrayIf',
  'groupUniqArrayIf',
  'medianIf',
  'medianTimingIf',
  'medianDeterministicIf',
  'medianTimingWeightedIf',
  'varSampIf',
  'varPopIf',
  'stddevSampIf',
  'stddevPopIf',
  'covarSampIf',
  'covarPopIf',
  'corrIf',
  'quantileIf',
  'quantilesIf',
  'quantileTimingIf',
  'quantilesTimingIf',
  'quantileTimingWeightedIf',
  'quantilesTimingWeightedIf',
  'quantileDeterministicIf',
  'quantilesDeterministicIf',
  'sequenceMatchIf',
  'uniqUpToIf',
  'arraySplit',
  'arrayReduce',
  'arrayReduceInRanges',
  'countArray',
  'anyArray',
  'anyLastArray',
  'minArray',
  'maxArray',
  'argMinArray',
  'argMaxArray',
  'sumArray',
  'avgArray',
  'uniqArray',
  'uniqHLL12Array',
  'uniqExactArray',
  'groupArrayArray',
  'groupUniqArrayArray',
  'medianArray',
  'medianTimingArray',
  'medianDeterministicArray',
  'medianTimingWeightedArray',
  'varSampArray',
  'varPopArray',
  'stddevSampArray',
  'stddevPopArray',
  'covarSampArray',
  'covarPopArray',
  'corrArray',
  'quantileArray',
  'quantilesArray',
  'quantileTimingArray',
  'quantilesTimingArray',
  'quantileTimingWeightedArray',
  'quantilesTimingWeightedArray',
  'quantileDeterministicArray',
  'quantilesDeterministicArray',
  'sequenceMatchArray',
  'uniqUpToArray',
  'countState',
  'anyState',
  'anyLastState',
  'minState',
  'maxState',
  'argMinState',
  'argMaxState',
  'sumState',
  'avgState',
  'uniqState',
  'uniqHLL12State',
  'uniqExactState',
  'groupArrayState',
  'groupUniqArrayState',
  'medianState',
  'medianTimingState',
  'medianDeterministicState',
  'medianTimingWeightedState',
  'varSampState',
  'varPopState',
  'stddevSampState',
  'stddevPopState',
  'covarSampState',
  'covarPopState',
  'corrState',
  'quantileState',
  'quantilesState',
  'quantileTimingState',
  'quantilesTimingState',
  'quantileTimingWeightedState',
  'quantilesTimingWeightedState',
  'quantileDeterministicState',
  'quantilesDeterministicState',
  'sequenceMatchState',
  'uniqUpToState',
  'countMerge',
  'anyMerge',
  'anyLastMerge',
  'minMerge',
  'maxMerge',
  'argMinMerge',
  'argMaxMerge',
  'sumMerge',
  'avgMerge',
  'uniqMerge',
  'uniqHLL12Merge',
  'uniqExactMerge',
  'groupArrayMerge',
  'groupUniqArrayMerge',
  'medianMerge',
  'medianTimingMerge',
  'medianDeterministicMerge',
  'medianTimingWeightedMerge',
  'varSampMerge',
  'varPopMerge',
  'stddevSampMerge',
  'stddevPopMerge',
  'covarSampMerge',
  'covarPopMerge',
  'corrMerge',
  'quantileMerge',
  'quantilesMerge',
  'quantileTimingMerge',
  'quantilesTimingMerge',
  'quantileTimingWeightedMerge',
  'quantilesTimingWeightedMerge',
  'quantileDeterministicMerge',
  'quantilesDeterministicMerge',
  'sequenceMatchMerge',
  'uniqUpToMerge',
  'file',
  'merge',
  'numbers',
  'remote',
  'url',
  'jdbc',
  [
    'JSONExtractString',
    'fn()',
    `
  **JSONExtractString(json[, indices_or_keys]…)**
  
  Parses a JSON and extract a string. This function is similar to visitParamExtractString functions. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/json_functions/#jsonextractstringjson-indices-or-keys)
  `,
    `JSONExtractString(json[, indices_or_keys]…)`,
    'json'
  ],
  [
    'JSONExtractBool',
    'fn()',
    `
  **JSONExtractBool(json[, indices_or_keys]…)**
  
  Parses a JSON and extract a value. These functions are similar to visitParam functions. If the value does not exist or has a wrong type, 0 will be returned. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/json_functions/#jsonextractbooljson-indices-or-keys)
  `,
    `JSONExtractBool(json[, indices_or_keys]…)`,
    'json'
  ],
  [
    'JSONExtract',
    'fn()',
    `
  **JSONExtract(json[, indices_or_keys]…)**
  
  Parses a JSON and extract a value of the given ClickHouse data type. [Learn more](https://clickhouse.tech/docs/en/query_language/functions/json_functions/#jsonextractjson-indices-or-keys-return-type)
  `,
    `JSONExtract(json[, indices_or_keys]…)`,
    'json'
  ],
  [
    'JSONExtractArrayRaw',
    'fn()',
    `
  **JSONExtractArrayRaw(json)**

  Returns an array on unparsed json array elements from JSON string
  `,
    `JSONExtractArrayRaw(json)`,
    'json'
  ],
  'initializeAggregation',
  'parseDateTimeBestEffortUS'
]);


/***/ }),

/***/ "./node_modules/editor-languages/lib/clickhouse/keywords.js":
/*!******************************************************************!*\
  !*** ./node_modules/editor-languages/lib/clickhouse/keywords.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  'database',
  'table',
  'view',
  'as',
  'attach',
  'drop',
  'detach',
  'rename',
  'alter',
  'show',
  'databases',
  'tables',
  'processlist',
  'describe',
  'exists',
  'use',
  'set',
  'optimize',
  'insert',
  'into',
  'select',
  'from',
  'sample',
  'join',
  'inner',
  'left',
  'right',
  'on',
  'where',
  'prewhere',
  [
    'group',
    'keyword',
    `
  **GROUP BY column_name**
  `,
    'GROUP BY column_name',
    'column_name'
  ],
  [
    'between',
    'keyword',
    `
  **BETWEEN cond1 AND cond2**
  
  Shortcut for filter between two values. 
`,
    'BETWEEN cond1 AND cond2',
    'cond1'
  ],
  'by',
  'with',
  'totals',
  'having',
  [
    'order',
    'keyword',
    `
  **ORDER BY column_name**
  `,
    'ORDER BY column_name',
    'column_name'
  ],
  'asc',
  'desc',
  'distinct',
  'limit',
  'union',
  'all',
  'format',
  'in',
  'engine',
  'kill',
  'query',
  'null',
  'and',
  'is',
  'or',
  'not',
  'xor'
]);


/***/ }),

/***/ "./src/core/Formatter.js":
/*!*******************************!*\
  !*** ./src/core/Formatter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formatter; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
/* harmony import */ var _Indentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Indentation */ "./src/core/Indentation.js");
/* harmony import */ var _InlineBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineBlock */ "./src/core/InlineBlock.js");
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Params */ "./src/core/Params.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ "./src/core/token.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Formatter = /*#__PURE__*/function () {
  /**
   * @param {Object} cfg
   *  @param {String} cfg.language
   *  @param {String} cfg.indent
   *  @param {Boolean} cfg.uppercase
   *  @param {Integer} cfg.linesBetweenQueries
   *  @param {Object} cfg.params
   */
  function Formatter(cfg) {
    _classCallCheck(this, Formatter);

    this.cfg = cfg;
    this.indentation = new _Indentation__WEBPACK_IMPORTED_MODULE_1__["default"](this.cfg.indent);
    this.inlineBlock = new _InlineBlock__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.params = new _Params__WEBPACK_IMPORTED_MODULE_3__["default"](this.cfg.params);
    this.previousReservedToken = {};
    this.tokens = [];
    this.index = 0;
  }
  /**
   * SQL Tokenizer for this formatter, provided by subclasses.
   */


  _createClass(Formatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      throw new Error('tokenizer() not implemented by subclass');
    }
    /**
     * Reprocess and modify a token based on parsed context.
     *
     * @param {Object} token The token to modify
     *  @param {String} token.type
     *  @param {String} token.value
     * @return {Object} new token or the original
     *  @return {String} token.type
     *  @return {String} token.value
     */

  }, {
    key: "tokenOverride",
    value: function tokenOverride(token) {
      // subclasses can override this to modify tokens during formatting
      return token;
    }
    /**
     * Formats whitespace in a SQL string to make it easier to read.
     *
     * @param {String} query The SQL query string
     * @return {String} formatted query
     */

  }, {
    key: "format",
    value: function format(query) {
      this.tokens = this.tokenizer().tokenize(query);
      var formattedQuery = this.getFormattedQueryFromTokens();
      return formattedQuery.trim();
    }
  }, {
    key: "getFormattedQueryFromTokens",
    value: function getFormattedQueryFromTokens() {
      var _this = this;

      var formattedQuery = '';
      this.tokens.forEach(function (token, index) {
        _this.index = index;
        token = _this.tokenOverride(token);

        if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT) {
          formattedQuery = _this.formatLineComment(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT) {
          formattedQuery = _this.formatBlockComment(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL) {
          formattedQuery = _this.formatTopLevelReservedWord(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT) {
          formattedQuery = _this.formatTopLevelReservedWordNoIndent(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE) {
          formattedQuery = _this.formatNewlineReservedWord(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED) {
          formattedQuery = _this.formatWithSpaces(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN) {
          formattedQuery = _this.formatOpeningParentheses(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN) {
          formattedQuery = _this.formatClosingParentheses(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].PLACEHOLDER) {
          formattedQuery = _this.formatPlaceholder(token, formattedQuery);
        } else if (token.value === ',') {
          formattedQuery = _this.formatComma(token, formattedQuery);
        } else if (token.value === ':') {
          formattedQuery = _this.formatWithSpaceAfter(token, formattedQuery);
        } else if (token.value === '.') {
          formattedQuery = _this.formatWithoutSpaces(token, formattedQuery);
        } else if (token.value === ';') {
          formattedQuery = _this.formatQuerySeparator(token, formattedQuery);
        } else {
          formattedQuery = _this.formatWithSpaces(token, formattedQuery);
        }
      });
      return formattedQuery;
    }
  }, {
    key: "formatLineComment",
    value: function formatLineComment(token, query) {
      return this.addNewline(query + this.show(token));
    }
  }, {
    key: "formatBlockComment",
    value: function formatBlockComment(token, query) {
      return this.addNewline(this.addNewline(query) + this.indentComment(token.value));
    }
  }, {
    key: "indentComment",
    value: function indentComment(comment) {
      return comment.replace(/\n[\t ]*/g, '\n' + this.indentation.getIndent() + ' ');
    }
  }, {
    key: "formatTopLevelReservedWordNoIndent",
    value: function formatTopLevelReservedWordNoIndent(token, query) {
      this.indentation.decreaseTopLevel();
      query = this.addNewline(query) + this.equalizeWhitespace(this.show(token));
      return this.addNewline(query);
    }
  }, {
    key: "formatTopLevelReservedWord",
    value: function formatTopLevelReservedWord(token, query) {
      this.indentation.decreaseTopLevel();
      query = this.addNewline(query);
      this.indentation.increaseTopLevel();
      query += this.equalizeWhitespace(this.show(token));
      return this.addNewline(query);
    }
  }, {
    key: "formatNewlineReservedWord",
    value: function formatNewlineReservedWord(token, query) {
      if (Object(_token__WEBPACK_IMPORTED_MODULE_5__["isAnd"])(token) && Object(_token__WEBPACK_IMPORTED_MODULE_5__["isBetween"])(this.tokenLookBehind(2))) {
        return this.formatWithSpaces(token, query);
      }

      return this.addNewline(query) + this.equalizeWhitespace(this.show(token)) + ' ';
    } // Replace any sequence of whitespace characters with single space

  }, {
    key: "equalizeWhitespace",
    value: function equalizeWhitespace(string) {
      return string.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/g, ' ');
    } // Opening parentheses increase the block indent level and start a new line

  }, {
    key: "formatOpeningParentheses",
    value: function formatOpeningParentheses(token, query) {
      var _preserveWhitespaceFo, _this$tokenLookBehind;

      // Take out the preceding space unless there was whitespace there in the original query
      // or another opening parens or line comment
      var preserveWhitespaceFor = (_preserveWhitespaceFo = {}, _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN, true), _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT, true), _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPERATOR, true), _preserveWhitespaceFo);

      if (token.whitespaceBefore.length === 0 && !preserveWhitespaceFor[(_this$tokenLookBehind = this.tokenLookBehind()) === null || _this$tokenLookBehind === void 0 ? void 0 : _this$tokenLookBehind.type]) {
        query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query);
      }

      query += this.show(token);
      this.inlineBlock.beginIfPossible(this.tokens, this.index);

      if (!this.inlineBlock.isActive()) {
        this.indentation.increaseBlockLevel();
        query = this.addNewline(query);
      }

      return query;
    } // Closing parentheses decrease the block indent level

  }, {
    key: "formatClosingParentheses",
    value: function formatClosingParentheses(token, query) {
      if (this.inlineBlock.isActive()) {
        this.inlineBlock.end();
        return this.formatWithSpaceAfter(token, query);
      } else {
        this.indentation.decreaseBlockLevel();
        return this.formatWithSpaces(token, this.addNewline(query));
      }
    }
  }, {
    key: "formatPlaceholder",
    value: function formatPlaceholder(token, query) {
      return query + this.params.get(token) + ' ';
    } // Commas start a new line (unless within inline parentheses or SQL "LIMIT" clause)

  }, {
    key: "formatComma",
    value: function formatComma(token, query) {
      query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + ' ';

      if (this.inlineBlock.isActive()) {
        return query;
      } else if (Object(_token__WEBPACK_IMPORTED_MODULE_5__["isLimit"])(this.previousReservedToken)) {
        return query;
      } else {
        return this.addNewline(query);
      }
    }
  }, {
    key: "formatWithSpaceAfter",
    value: function formatWithSpaceAfter(token, query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + ' ';
    }
  }, {
    key: "formatWithoutSpaces",
    value: function formatWithoutSpaces(token, query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token);
    }
  }, {
    key: "formatWithSpaces",
    value: function formatWithSpaces(token, query) {
      return query + this.show(token) + ' ';
    }
  }, {
    key: "formatQuerySeparator",
    value: function formatQuerySeparator(token, query) {
      this.indentation.resetIndentation();
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + '\n'.repeat(this.cfg.linesBetweenQueries || 1);
    } // Converts token to string (uppercasing it if needed)

  }, {
    key: "show",
    value: function show(_ref) {
      var type = _ref.type,
          value = _ref.value;

      if (this.cfg.uppercase && (type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN)) {
        return value.toUpperCase();
      } else {
        return value;
      }
    }
  }, {
    key: "addNewline",
    value: function addNewline(query) {
      query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query);

      if (!query.endsWith('\n')) {
        query += '\n';
      }

      return query + this.indentation.getIndent();
    }
  }, {
    key: "tokenLookBehind",
    value: function tokenLookBehind() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.tokens[this.index - n];
    }
  }, {
    key: "tokenLookAhead",
    value: function tokenLookAhead() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.tokens[this.index + n];
    }
  }]);

  return Formatter;
}();



/***/ }),

/***/ "./src/core/Indentation.js":
/*!*********************************!*\
  !*** ./src/core/Indentation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Indentation; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var INDENT_TYPE_TOP_LEVEL = 'top-level';
var INDENT_TYPE_BLOCK_LEVEL = 'block-level';
/**
 * Manages indentation levels.
 *
 * There are two types of indentation levels:
 *
 * - BLOCK_LEVEL : increased by open-parenthesis
 * - TOP_LEVEL : increased by RESERVED_TOP_LEVEL words
 */

var Indentation = /*#__PURE__*/function () {
  /**
   * @param {String} indent Indent value, default is "  " (2 spaces)
   */
  function Indentation(indent) {
    _classCallCheck(this, Indentation);

    this.indent = indent || '  ';
    this.indentTypes = [];
  }
  /**
   * Returns current indentation string.
   * @return {String}
   */


  _createClass(Indentation, [{
    key: "getIndent",
    value: function getIndent() {
      return this.indent.repeat(this.indentTypes.length);
    }
    /**
     * Increases indentation by one top-level indent.
     */

  }, {
    key: "increaseTopLevel",
    value: function increaseTopLevel() {
      this.indentTypes.push(INDENT_TYPE_TOP_LEVEL);
    }
    /**
     * Increases indentation by one block-level indent.
     */

  }, {
    key: "increaseBlockLevel",
    value: function increaseBlockLevel() {
      this.indentTypes.push(INDENT_TYPE_BLOCK_LEVEL);
    }
    /**
     * Decreases indentation by one top-level indent.
     * Does nothing when the previous indent is not top-level.
     */

  }, {
    key: "decreaseTopLevel",
    value: function decreaseTopLevel() {
      if (this.indentTypes.length > 0 && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["last"])(this.indentTypes) === INDENT_TYPE_TOP_LEVEL) {
        this.indentTypes.pop();
      }
    }
    /**
     * Decreases indentation by one block-level indent.
     * If there are top-level indents within the block-level indent,
     * throws away these as well.
     */

  }, {
    key: "decreaseBlockLevel",
    value: function decreaseBlockLevel() {
      while (this.indentTypes.length > 0) {
        var type = this.indentTypes.pop();

        if (type !== INDENT_TYPE_TOP_LEVEL) {
          break;
        }
      }
    }
  }, {
    key: "resetIndentation",
    value: function resetIndentation() {
      this.indentTypes = [];
    }
  }]);

  return Indentation;
}();



/***/ }),

/***/ "./src/core/InlineBlock.js":
/*!*********************************!*\
  !*** ./src/core/InlineBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineBlock; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var INLINE_MAX_LENGTH = 50;
/**
 * Bookkeeper for inline blocks.
 *
 * Inline blocks are parenthized expressions that are shorter than INLINE_MAX_LENGTH.
 * These blocks are formatted on a single line, unlike longer parenthized
 * expressions where open-parenthesis causes newline and increase of indentation.
 */

var InlineBlock = /*#__PURE__*/function () {
  function InlineBlock() {
    _classCallCheck(this, InlineBlock);

    this.level = 0;
  }
  /**
   * Begins inline block when lookahead through upcoming tokens determines
   * that the block would be smaller than INLINE_MAX_LENGTH.
   * @param  {Object[]} tokens Array of all tokens
   * @param  {Number} index Current token position
   */


  _createClass(InlineBlock, [{
    key: "beginIfPossible",
    value: function beginIfPossible(tokens, index) {
      if (this.level === 0 && this.isInlineBlock(tokens, index)) {
        this.level = 1;
      } else if (this.level > 0) {
        this.level++;
      } else {
        this.level = 0;
      }
    }
    /**
     * Finishes current inline block.
     * There might be several nested ones.
     */

  }, {
    key: "end",
    value: function end() {
      this.level--;
    }
    /**
     * True when inside an inline block
     * @return {Boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.level > 0;
    } // Check if this should be an inline parentheses block
    // Examples are "NOW()", "COUNT(*)", "int(10)", key(`somecolumn`), DECIMAL(7,2)

  }, {
    key: "isInlineBlock",
    value: function isInlineBlock(tokens, index) {
      var length = 0;
      var level = 0;

      for (var i = index; i < tokens.length; i++) {
        var token = tokens[i];
        length += token.value.length; // Overran max length

        if (length > INLINE_MAX_LENGTH) {
          return false;
        }

        if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN) {
          level++;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN) {
          level--;

          if (level === 0) {
            return true;
          }
        }

        if (this.isForbiddenToken(token)) {
          return false;
        }
      }

      return false;
    } // Reserved words that cause newlines, comments and semicolons
    // are not allowed inside inline parentheses block

  }, {
    key: "isForbiddenToken",
    value: function isForbiddenToken(_ref) {
      var type = _ref.type,
          value = _ref.value;
      return type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].COMMENT || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT || value === ';';
    }
  }]);

  return InlineBlock;
}();



/***/ }),

/***/ "./src/core/Params.js":
/*!****************************!*\
  !*** ./src/core/Params.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Params; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles placeholder replacement with given params.
 */
var Params = /*#__PURE__*/function () {
  /**
   * @param {Object} params
   */
  function Params(params) {
    _classCallCheck(this, Params);

    this.params = params;
    this.index = 0;
  }
  /**
   * Returns param value that matches given placeholder with param key.
   * @param {Object} token
   *   @param {String} token.key Placeholder key
   *   @param {String} token.value Placeholder value
   * @return {String} param or token.value when params are missing
   */


  _createClass(Params, [{
    key: "get",
    value: function get(_ref) {
      var key = _ref.key,
          value = _ref.value;

      if (!this.params) {
        return value;
      }

      if (key) {
        return this.params[key];
      }

      return this.params[this.index++];
    }
  }]);

  return Params;
}();



/***/ }),

/***/ "./src/core/Tokenizer.js":
/*!*******************************!*\
  !*** ./src/core/Tokenizer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tokenizer; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
/* harmony import */ var _regexFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexFactory */ "./src/core/regexFactory.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Tokenizer = /*#__PURE__*/function () {
  /**
   * @param {Object} cfg
   *  @param {String[]} cfg.reservedWords Reserved words in SQL
   *  @param {String[]} cfg.reservedTopLevelWords Words that are set to new line separately
   *  @param {String[]} cfg.reservedNewlineWords Words that are set to newline
   *  @param {String[]} cfg.reservedTopLevelWordsNoIndent Words that are top level but have no indentation
   *  @param {String[]} cfg.stringTypes String types to enable: "", '', ``, [], N''
   *  @param {String[]} cfg.openParens Opening parentheses to enable, like (, [
   *  @param {String[]} cfg.closeParens Closing parentheses to enable, like ), ]
   *  @param {String[]} cfg.indexedPlaceholderTypes Prefixes for indexed placeholders, like ?
   *  @param {String[]} cfg.namedPlaceholderTypes Prefixes for named placeholders, like @ and :
   *  @param {String[]} cfg.lineCommentTypes Line comments to enable, like # and --
   *  @param {String[]} cfg.specialWordChars Special chars that can be found inside of words, like @ and #
   *  @param {String[]} [cfg.operator] Additional operators to recognize
   */
  function Tokenizer(cfg) {
    _classCallCheck(this, Tokenizer);

    this.WHITESPACE_REGEX = /^([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)/;
    this.NUMBER_REGEX = /^((\x2D[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?[0-9]+(\.[0-9]+)?([Ee]\x2D?[0-9]+(\.[0-9]+)?)?|0x[0-9A-Fa-f]+|0b[01]+)\b/;
    this.OPERATOR_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createOperatorRegex"](['<>', '<=', '>='].concat(_toConsumableArray(cfg.operators || [])));
    this.BLOCK_COMMENT_REGEX = /^(\/\*(?:(?![])[\s\S])*?(?:\*\/|$))/;
    this.LINE_COMMENT_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createLineCommentRegex"](cfg.lineCommentTypes);
    this.RESERVED_TOP_LEVEL_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedTopLevelWords);
    this.RESERVED_TOP_LEVEL_NO_INDENT_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedTopLevelWordsNoIndent);
    this.RESERVED_NEWLINE_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedNewlineWords);
    this.RESERVED_PLAIN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedWords);
    this.WORD_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createWordRegex"](cfg.specialWordChars);
    this.STRING_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createStringRegex"](cfg.stringTypes);
    this.OPEN_PAREN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createParenRegex"](cfg.openParens);
    this.CLOSE_PAREN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createParenRegex"](cfg.closeParens);
    this.INDEXED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.indexedPlaceholderTypes, '[0-9]*');
    this.IDENT_NAMED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.namedPlaceholderTypes, '[a-zA-Z0-9._$]+');
    this.STRING_NAMED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.namedPlaceholderTypes, _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createStringPattern"](cfg.stringTypes));
  }
  /**
   * Takes a SQL string and breaks it into tokens.
   * Each token is an object with type and value.
   *
   * @param {String} input The SQL string
   * @return {Object[]} tokens An array of tokens.
   *  @return {String} token.type
   *  @return {String} token.value
   *  @return {String} token.whitespaceBefore Preceding whitespace
   */


  _createClass(Tokenizer, [{
    key: "tokenize",
    value: function tokenize(input) {
      var tokens = [];
      var token; // Keep processing the string until it is empty

      while (input.length) {
        // grab any preceding whitespace
        var whitespaceBefore = this.getWhitespace(input);
        input = input.substring(whitespaceBefore.length);

        if (input.length) {
          // Get the next token and the token type
          token = this.getNextToken(input, token); // Advance the string

          input = input.substring(token.value.length);
          tokens.push(_objectSpread(_objectSpread({}, token), {}, {
            whitespaceBefore: whitespaceBefore
          }));
        }
      }

      return tokens;
    }
  }, {
    key: "getWhitespace",
    value: function getWhitespace(input) {
      var matches = input.match(this.WHITESPACE_REGEX);
      return matches ? matches[1] : '';
    }
  }, {
    key: "getNextToken",
    value: function getNextToken(input, previousToken) {
      return this.getCommentToken(input) || this.getStringToken(input) || this.getOpenParenToken(input) || this.getCloseParenToken(input) || this.getPlaceholderToken(input) || this.getNumberToken(input) || this.getReservedWordToken(input, previousToken) || this.getWordToken(input) || this.getOperatorToken(input);
    }
  }, {
    key: "getCommentToken",
    value: function getCommentToken(input) {
      return this.getLineCommentToken(input) || this.getBlockCommentToken(input);
    }
  }, {
    key: "getLineCommentToken",
    value: function getLineCommentToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT,
        regex: this.LINE_COMMENT_REGEX
      });
    }
  }, {
    key: "getBlockCommentToken",
    value: function getBlockCommentToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT,
        regex: this.BLOCK_COMMENT_REGEX
      });
    }
  }, {
    key: "getStringToken",
    value: function getStringToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].STRING,
        regex: this.STRING_REGEX
      });
    }
  }, {
    key: "getOpenParenToken",
    value: function getOpenParenToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN,
        regex: this.OPEN_PAREN_REGEX
      });
    }
  }, {
    key: "getCloseParenToken",
    value: function getCloseParenToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN,
        regex: this.CLOSE_PAREN_REGEX
      });
    }
  }, {
    key: "getPlaceholderToken",
    value: function getPlaceholderToken(input) {
      return this.getIdentNamedPlaceholderToken(input) || this.getStringNamedPlaceholderToken(input) || this.getIndexedPlaceholderToken(input);
    }
  }, {
    key: "getIdentNamedPlaceholderToken",
    value: function getIdentNamedPlaceholderToken(input) {
      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.IDENT_NAMED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return v.slice(1);
        }
      });
    }
  }, {
    key: "getStringNamedPlaceholderToken",
    value: function getStringNamedPlaceholderToken(input) {
      var _this = this;

      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.STRING_NAMED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return _this.getEscapedPlaceholderKey({
            key: v.slice(2, -1),
            quoteChar: v.slice(-1)
          });
        }
      });
    }
  }, {
    key: "getIndexedPlaceholderToken",
    value: function getIndexedPlaceholderToken(input) {
      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.INDEXED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return v.slice(1);
        }
      });
    }
  }, {
    key: "getPlaceholderTokenWithKey",
    value: function getPlaceholderTokenWithKey(_ref) {
      var input = _ref.input,
          regex = _ref.regex,
          parseKey = _ref.parseKey;
      var token = this.getTokenOnFirstMatch({
        input: input,
        regex: regex,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].PLACEHOLDER
      });

      if (token) {
        token.key = parseKey(token.value);
      }

      return token;
    }
  }, {
    key: "getEscapedPlaceholderKey",
    value: function getEscapedPlaceholderKey(_ref2) {
      var key = _ref2.key,
          quoteChar = _ref2.quoteChar;
      return key.replace(new RegExp(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["escapeRegExp"])('\\' + quoteChar), 'gu'), quoteChar);
    } // Decimal, binary, or hex numbers

  }, {
    key: "getNumberToken",
    value: function getNumberToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER,
        regex: this.NUMBER_REGEX
      });
    } // Punctuation and symbols

  }, {
    key: "getOperatorToken",
    value: function getOperatorToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPERATOR,
        regex: this.OPERATOR_REGEX
      });
    }
  }, {
    key: "getReservedWordToken",
    value: function getReservedWordToken(input, previousToken) {
      // A reserved word cannot be preceded by a "."
      // this makes it so in "mytable.from", "from" is not considered a reserved word
      if (previousToken && previousToken.value && previousToken.value === '.') {
        return undefined;
      }

      return this.getTopLevelReservedToken(input) || this.getNewlineReservedToken(input) || this.getTopLevelReservedTokenNoIndent(input) || this.getPlainReservedToken(input);
    }
  }, {
    key: "getTopLevelReservedToken",
    value: function getTopLevelReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL,
        regex: this.RESERVED_TOP_LEVEL_REGEX
      });
    }
  }, {
    key: "getNewlineReservedToken",
    value: function getNewlineReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE,
        regex: this.RESERVED_NEWLINE_REGEX
      });
    }
  }, {
    key: "getTopLevelReservedTokenNoIndent",
    value: function getTopLevelReservedTokenNoIndent(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT,
        regex: this.RESERVED_TOP_LEVEL_NO_INDENT_REGEX
      });
    }
  }, {
    key: "getPlainReservedToken",
    value: function getPlainReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED,
        regex: this.RESERVED_PLAIN_REGEX
      });
    }
  }, {
    key: "getWordToken",
    value: function getWordToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].WORD,
        regex: this.WORD_REGEX
      });
    }
  }, {
    key: "getTokenOnFirstMatch",
    value: function getTokenOnFirstMatch(_ref3) {
      var input = _ref3.input,
          type = _ref3.type,
          regex = _ref3.regex;
      var matches = input.match(regex);
      return matches ? {
        type: type,
        value: matches[1]
      } : undefined;
    }
  }]);

  return Tokenizer;
}();



/***/ }),

/***/ "./src/core/regexFactory.js":
/*!**********************************!*\
  !*** ./src/core/regexFactory.js ***!
  \**********************************/
/*! exports provided: createOperatorRegex, createLineCommentRegex, createReservedWordRegex, createWordRegex, createStringRegex, createStringPattern, createParenRegex, createPlaceholderRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperatorRegex", function() { return createOperatorRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineCommentRegex", function() { return createLineCommentRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservedWordRegex", function() { return createReservedWordRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWordRegex", function() { return createWordRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringRegex", function() { return createStringRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringPattern", function() { return createStringPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParenRegex", function() { return createParenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlaceholderRegex", function() { return createPlaceholderRegex; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

function createOperatorRegex(multiLetterOperators) {
  return new RegExp("^(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortByLengthDesc"])(multiLetterOperators).map(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"]).join('|'), "|.)"), 'u');
}
function createLineCommentRegex(lineCommentTypes) {
  return new RegExp("^((?:".concat(lineCommentTypes.map(function (c) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"])(c);
  }).join('|'), ").*?)(?:\r\n|\r|\n|$)"), 'u');
}
function createReservedWordRegex(reservedWords) {
  if (reservedWords.length === 0) {
    return new RegExp("^\b$", 'u');
  }

  var reservedWordsPattern = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortByLengthDesc"])(reservedWords).join('|').replace(/ /g, '\\s+').replace('{%', '\\{%').replace('%}', '%\\}');
  return new RegExp("^(".concat(reservedWordsPattern, ")"), 'iu');
}
function createWordRegex() {
  var specialChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new RegExp("^([\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}".concat(specialChars.join(''), "]+)"), 'u');
}
function createStringRegex(stringTypes) {
  return new RegExp('^(' + createStringPattern(stringTypes) + ')', 'u');
} // This enables the following string patterns:
// 1. backtick quoted string using `` to escape
// 2. square bracket quoted string (SQL Server) using ]] to escape
// 3. double quoted string using "" or \" to escape
// 4. single quoted string using '' or \' to escape
// 5. national character quoted string using N'' or N\' to escape
// 6. Unicode single-quoted string using \' to escape
// 7. Unicode double-quoted string using \" to escape
// 8. PostgreSQL dollar-quoted strings

function createStringPattern(stringTypes) {
  var patterns = {
    '``': '((`[^`]*($|`))+)',
    '{}': '((\\{[^\\}]*($|\\}))+)',
    '[]': '((\\[[^\\]]*($|\\]))(\\][^\\]]*($|\\]))*)',
    '""': '(("[^"\\\\]*(?:\\\\.[^"\\\\]*)*("|$))+)',
    "''": "(('[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    "N''": "((N'[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    "U&''": "((U&'[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    'U&""': '((U&"[^"\\\\]*(?:\\\\.[^"\\\\]*)*("|$))+)',
    $$: '((?<tag>\\$\\w*\\$)[\\s\\S]*?(?:\\k<tag>|$))'
  };
  return stringTypes.map(function (t) {
    return patterns[t];
  }).join('|');
}
function createParenRegex(parens) {
  return new RegExp('^(' + parens.map(escapeParen).join('|') + ')', 'iu');
}

function escapeParen(paren) {
  if (paren.length === 1) {
    // A single punctuation character
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"])(paren);
  } else {
    // longer word
    return '\\b' + paren + '\\b';
  }
}

function createPlaceholderRegex(types, pattern) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(types)) {
    return false;
  }

  var typesRegex = types.map(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"]).join('|');
  return new RegExp("^((?:".concat(typesRegex, ")(?:").concat(pattern, "))"), 'u');
}

/***/ }),

/***/ "./src/core/token.js":
/*!***************************!*\
  !*** ./src/core/token.js ***!
  \***************************/
/*! exports provided: isAnd, isBetween, isLimit, isSet, isBy, isWindow, isEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnd", function() { return isAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLimit", function() { return isLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBy", function() { return isBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");


var isToken = function isToken(type, regex) {
  return function (token) {
    return (token === null || token === void 0 ? void 0 : token.type) === type && regex.test(token === null || token === void 0 ? void 0 : token.value);
  };
};

var isAnd = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE, /^AND$/i);
var isBetween = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED, /^BETWEEN$/i);
var isLimit = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^LIMIT$/i);
var isSet = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^[S\u017F]ET$/i);
var isBy = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED, /^BY$/i);
var isWindow = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^WINDOW$/i);
var isEnd = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN, /^END$/i);

/***/ }),

/***/ "./src/core/tokenTypes.js":
/*!********************************!*\
  !*** ./src/core/tokenTypes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Constants for token types
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  WORD: 'word',
  STRING: 'string',
  RESERVED: 'reserved',
  RESERVED_TOP_LEVEL: 'reserved-top-level',
  RESERVED_TOP_LEVEL_NO_INDENT: 'reserved-top-level-no-indent',
  RESERVED_NEWLINE: 'reserved-newline',
  OPERATOR: 'operator',
  OPEN_PAREN: 'open-paren',
  CLOSE_PAREN: 'close-paren',
  LINE_COMMENT: 'line-comment',
  BLOCK_COMMENT: 'block-comment',
  NUMBER: 'number',
  PLACEHOLDER: 'placeholder'
});

/***/ }),

/***/ "./src/languages/TinybirdFormatter.js":
/*!********************************************!*\
  !*** ./src/languages/TinybirdFormatter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TinybirdFormatter; });
/* harmony import */ var editor_languages_lib_clickhouse_keywords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editor-languages/lib/clickhouse/keywords */ "./node_modules/editor-languages/lib/clickhouse/keywords.js");
/* harmony import */ var editor_languages_lib_clickhouse_builtins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor-languages/lib/clickhouse/builtins */ "./node_modules/editor-languages/lib/clickhouse/builtins.js");
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var reservedWords = [].concat(_toConsumableArray(editor_languages_lib_clickhouse_keywords__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (item) {
  return Array.isArray(item) ? item[0] : item;
})), _toConsumableArray(editor_languages_lib_clickhouse_builtins__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (item) {
  return Array.isArray(item) ? item[0] : item;
})));
var reservedTopLevelWords = ['CASE', 'END', 'EXCEPT', '{% end %}', 'FROM', 'ORDER BY', 'HAVING', 'GROUP BY', 'LIMIT', 'SELECT', 'WHERE', 'WITH', 'PREWHERE'];
var reservedTopLevelWordsNoIndent = ['UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', '{%', 'ELSE', 'OR', 'WHEN', 'JOIN', 'INNER JOIN', 'ANY LEFT JOIN', 'ANY RIGHT JOIN', 'ANY INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

var TinybirdFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(TinybirdFormatter, _Formatter);

  var _super = _createSuper(TinybirdFormatter);

  function TinybirdFormatter() {
    _classCallCheck(this, TinybirdFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(TinybirdFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_3__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", "U&''", 'U&""', '$$'],
        openParens: ['(', '['],
        closeParens: [')', ']'],
        indexedPlaceholderTypes: ['$'],
        namedPlaceholderTypes: [],
        lineCommentTypes: ['--'],
        specialWordChars: ['{%', '%}', '{{', '}}'],
        operators: ['!=', '<<', '>>', '||/', '|/', '::', '->>', '->', '~~*', '~~', '!~~*', '!~~', '~*', '!~*', '!~', '!!', '%']
      });
    }
  }]);

  return TinybirdFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/sqlFormatter.js":
/*!*****************************!*\
  !*** ./src/sqlFormatter.js ***!
  \*****************************/
/*! exports provided: format, supportedDialects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedDialects", function() { return supportedDialects; });
/* harmony import */ var _languages_TinybirdFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages/TinybirdFormatter */ "./src/languages/TinybirdFormatter.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var formatters = {
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
  tinybird: _languages_TinybirdFormatter__WEBPACK_IMPORTED_MODULE_0__["default"]
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

var format = function format(query) {
  var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof query !== 'string') {
    throw new Error('Invalid query argument. Extected string, instead got ' + _typeof(query));
  }

  return new _languages_TinybirdFormatter__WEBPACK_IMPORTED_MODULE_0__["default"](cfg).format(query);
};
var supportedDialects = Object.keys(formatters);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: trimSpacesEnd, last, isEmpty, escapeRegExp, sortByLengthDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimSpacesEnd", function() { return trimSpacesEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLengthDesc", function() { return sortByLengthDesc; });
// Only removes spaces, not newlines
var trimSpacesEnd = function trimSpacesEnd(str) {
  return str.replace(/[\t ]+$/, '');
}; // Last element from array

var last = function last(arr) {
  return arr[arr.length - 1];
}; // True array is empty, or it's not an array at all

var isEmpty = function isEmpty(arr) {
  return !Array.isArray(arr) || arr.length === 0;
}; // Escapes regex special chars

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[\$\(-\+\.\?\[-\^\{-\}]/g, '\\$&');
}; // Sorts strings by length, so that longer ones are first
// Also sorts alphabetically after sorting by length.

var sortByLengthDesc = function sortByLengthDesc(strings) {
  return strings.sort(function (a, b) {
    return b.length - a.length || a.localeCompare(b);
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NxbEZvcm1hdHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9ub2RlX21vZHVsZXMvZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9idWlsdGlucy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9ub2RlX21vZHVsZXMvZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9Gb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5saW5lQmxvY2suanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvUGFyYW1zLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9jb3JlL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9yZWdleEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW5UeXBlcy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL1RpbnliaXJkRm9ybWF0dGVyLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9zcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkZvcm1hdHRlciIsImNmZyIsImluZGVudGF0aW9uIiwiSW5kZW50YXRpb24iLCJpbmRlbnQiLCJpbmxpbmVCbG9jayIsIklubGluZUJsb2NrIiwicGFyYW1zIiwiUGFyYW1zIiwicHJldmlvdXNSZXNlcnZlZFRva2VuIiwidG9rZW5zIiwiaW5kZXgiLCJFcnJvciIsInRva2VuIiwicXVlcnkiLCJ0b2tlbml6ZXIiLCJ0b2tlbml6ZSIsImZvcm1hdHRlZFF1ZXJ5IiwiZ2V0Rm9ybWF0dGVkUXVlcnlGcm9tVG9rZW5zIiwidHJpbSIsImZvckVhY2giLCJ0b2tlbk92ZXJyaWRlIiwidHlwZSIsInRva2VuVHlwZXMiLCJMSU5FX0NPTU1FTlQiLCJmb3JtYXRMaW5lQ29tbWVudCIsIkJMT0NLX0NPTU1FTlQiLCJmb3JtYXRCbG9ja0NvbW1lbnQiLCJSRVNFUlZFRF9UT1BfTEVWRUwiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCIsIlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZE5vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORSIsImZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQiLCJSRVNFUlZFRCIsImZvcm1hdFdpdGhTcGFjZXMiLCJPUEVOX1BBUkVOIiwiZm9ybWF0T3BlbmluZ1BhcmVudGhlc2VzIiwiQ0xPU0VfUEFSRU4iLCJmb3JtYXRDbG9zaW5nUGFyZW50aGVzZXMiLCJQTEFDRUhPTERFUiIsImZvcm1hdFBsYWNlaG9sZGVyIiwidmFsdWUiLCJmb3JtYXRDb21tYSIsImZvcm1hdFdpdGhTcGFjZUFmdGVyIiwiZm9ybWF0V2l0aG91dFNwYWNlcyIsImZvcm1hdFF1ZXJ5U2VwYXJhdG9yIiwiYWRkTmV3bGluZSIsInNob3ciLCJpbmRlbnRDb21tZW50IiwiY29tbWVudCIsInJlcGxhY2UiLCJnZXRJbmRlbnQiLCJkZWNyZWFzZVRvcExldmVsIiwiZXF1YWxpemVXaGl0ZXNwYWNlIiwiaW5jcmVhc2VUb3BMZXZlbCIsImlzQW5kIiwiaXNCZXR3ZWVuIiwidG9rZW5Mb29rQmVoaW5kIiwic3RyaW5nIiwicHJlc2VydmVXaGl0ZXNwYWNlRm9yIiwiT1BFUkFUT1IiLCJ3aGl0ZXNwYWNlQmVmb3JlIiwibGVuZ3RoIiwidHJpbVNwYWNlc0VuZCIsImJlZ2luSWZQb3NzaWJsZSIsImlzQWN0aXZlIiwiaW5jcmVhc2VCbG9ja0xldmVsIiwiZW5kIiwiZGVjcmVhc2VCbG9ja0xldmVsIiwiZ2V0IiwiaXNMaW1pdCIsInJlc2V0SW5kZW50YXRpb24iLCJyZXBlYXQiLCJsaW5lc0JldHdlZW5RdWVyaWVzIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJlbmRzV2l0aCIsIm4iLCJJTkRFTlRfVFlQRV9UT1BfTEVWRUwiLCJJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCIsImluZGVudFR5cGVzIiwicHVzaCIsImxhc3QiLCJwb3AiLCJJTkxJTkVfTUFYX0xFTkdUSCIsImxldmVsIiwiaXNJbmxpbmVCbG9jayIsImkiLCJpc0ZvcmJpZGRlblRva2VuIiwiQ09NTUVOVCIsImtleSIsIlRva2VuaXplciIsIldISVRFU1BBQ0VfUkVHRVgiLCJOVU1CRVJfUkVHRVgiLCJPUEVSQVRPUl9SRUdFWCIsInJlZ2V4RmFjdG9yeSIsIm9wZXJhdG9ycyIsIkJMT0NLX0NPTU1FTlRfUkVHRVgiLCJMSU5FX0NPTU1FTlRfUkVHRVgiLCJsaW5lQ29tbWVudFR5cGVzIiwiUkVTRVJWRURfVE9QX0xFVkVMX1JFR0VYIiwicmVzZXJ2ZWRUb3BMZXZlbFdvcmRzIiwiUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVF9SRUdFWCIsInJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORV9SRUdFWCIsInJlc2VydmVkTmV3bGluZVdvcmRzIiwiUkVTRVJWRURfUExBSU5fUkVHRVgiLCJyZXNlcnZlZFdvcmRzIiwiV09SRF9SRUdFWCIsInNwZWNpYWxXb3JkQ2hhcnMiLCJTVFJJTkdfUkVHRVgiLCJzdHJpbmdUeXBlcyIsIk9QRU5fUEFSRU5fUkVHRVgiLCJvcGVuUGFyZW5zIiwiQ0xPU0VfUEFSRU5fUkVHRVgiLCJjbG9zZVBhcmVucyIsIklOREVYRURfUExBQ0VIT0xERVJfUkVHRVgiLCJpbmRleGVkUGxhY2Vob2xkZXJUeXBlcyIsIklERU5UX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwibmFtZWRQbGFjZWhvbGRlclR5cGVzIiwiU1RSSU5HX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwiaW5wdXQiLCJnZXRXaGl0ZXNwYWNlIiwic3Vic3RyaW5nIiwiZ2V0TmV4dFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwicHJldmlvdXNUb2tlbiIsImdldENvbW1lbnRUb2tlbiIsImdldFN0cmluZ1Rva2VuIiwiZ2V0T3BlblBhcmVuVG9rZW4iLCJnZXRDbG9zZVBhcmVuVG9rZW4iLCJnZXRQbGFjZWhvbGRlclRva2VuIiwiZ2V0TnVtYmVyVG9rZW4iLCJnZXRSZXNlcnZlZFdvcmRUb2tlbiIsImdldFdvcmRUb2tlbiIsImdldE9wZXJhdG9yVG9rZW4iLCJnZXRMaW5lQ29tbWVudFRva2VuIiwiZ2V0QmxvY2tDb21tZW50VG9rZW4iLCJnZXRUb2tlbk9uRmlyc3RNYXRjaCIsInJlZ2V4IiwiU1RSSU5HIiwiZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRTdHJpbmdOYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRJbmRleGVkUGxhY2Vob2xkZXJUb2tlbiIsImdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5IiwicGFyc2VLZXkiLCJ2Iiwic2xpY2UiLCJnZXRFc2NhcGVkUGxhY2Vob2xkZXJLZXkiLCJxdW90ZUNoYXIiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJOVU1CRVIiLCJ1bmRlZmluZWQiLCJnZXRUb3BMZXZlbFJlc2VydmVkVG9rZW4iLCJnZXROZXdsaW5lUmVzZXJ2ZWRUb2tlbiIsImdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbk5vSW5kZW50IiwiZ2V0UGxhaW5SZXNlcnZlZFRva2VuIiwiV09SRCIsImNyZWF0ZU9wZXJhdG9yUmVnZXgiLCJtdWx0aUxldHRlck9wZXJhdG9ycyIsInNvcnRCeUxlbmd0aERlc2MiLCJtYXAiLCJqb2luIiwiY3JlYXRlTGluZUNvbW1lbnRSZWdleCIsImMiLCJjcmVhdGVSZXNlcnZlZFdvcmRSZWdleCIsInJlc2VydmVkV29yZHNQYXR0ZXJuIiwiY3JlYXRlV29yZFJlZ2V4Iiwic3BlY2lhbENoYXJzIiwiY3JlYXRlU3RyaW5nUmVnZXgiLCJjcmVhdGVTdHJpbmdQYXR0ZXJuIiwicGF0dGVybnMiLCIkJCIsInQiLCJjcmVhdGVQYXJlblJlZ2V4IiwicGFyZW5zIiwiZXNjYXBlUGFyZW4iLCJwYXJlbiIsImNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgiLCJ0eXBlcyIsInBhdHRlcm4iLCJpc0VtcHR5IiwidHlwZXNSZWdleCIsImlzVG9rZW4iLCJ0ZXN0IiwiaXNTZXQiLCJpc0J5IiwiaXNXaW5kb3ciLCJpc0VuZCIsImtleXdvcmRzIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImJ1aWx0aW5zIiwiVGlueWJpcmRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXJzIiwidGlueWJpcmQiLCJmb3JtYXQiLCJzdXBwb3J0ZWREaWFsZWN0cyIsIk9iamVjdCIsImtleXMiLCJzdHIiLCJhcnIiLCJzdHJpbmdzIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LFNBQVlBLE1BQU0sQ0FBQ1IsT0FBUCxDQUFlLDBCQUFmLEVBQXVDLE1BQXZDLENBQVo7QUFBQSxDQUFyQixDLENBRVA7QUFDQTs7QUFDTyxJQUFNZ0gsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDMkMsT0FBRDtBQUFBLFNBQzlCQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQixXQUFPQSxDQUFDLENBQUNsSixNQUFGLEdBQVdpSixDQUFDLENBQUNqSixNQUFiLElBQXVCaUosQ0FBQyxDQUFDRSxhQUFGLENBQWdCRCxDQUFoQixDQUE5QjtBQUNELEdBRkQsQ0FEOEI7QUFBQSxDQUF6QixDIiwiZmlsZSI6InNxbC1mb3JtYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzcWxGb3JtYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3FsRm9ybWF0dGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zcWxGb3JtYXR0ZXIuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gICdwbHVzJyxcbiAgJ21pbnVzJyxcbiAgJ211bHRpcGx5JyxcbiAgJ2RpdmlkZScsXG4gICdpbnREaXYnLFxuICAnaW50RGl2T3JaZXJvJyxcbiAgJ21vZHVsbycsXG4gICduZWdhdGUnLFxuICAnYWJzJyxcbiAgJ2JpdEFuZCcsXG4gIFtcbiAgICAnYml0Q291bnQnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqYml0Q291bnQoY29sdW1uX25hbWUpKipcblxuICBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZXQgYml0cyBpbiB0aGUgc3VwcGxpZWQgaW50ZWdlciBudW1iZXJcbiAgYCxcbiAgICAnYml0Q291bnQoY29sdW1uX25hbWUpJyxcbiAgICAnY29sdW1uX25hbWUnXG4gIF0sXG4gICdiaXRPcicsXG4gICdiaXRYb3InLFxuICAnYml0Tm90JyxcbiAgJ2JpdFNoaWZ0TGVmdCcsXG4gICdiaXRTaGlmdFJpZ2h0JyxcbiAgJ2VxdWFscycsXG4gICdub3RFcXVhbHMnLFxuICAnbGVzcycsXG4gICdncmVhdGVyJyxcbiAgJ2xlc3NPckVxdWFscycsXG4gICdncmVhdGVyT3JFcXVhbHMnLFxuICAndG9VSW50OCcsXG4gICd0b1VJbnQxNicsXG4gICd0b1VJbnQzMicsXG4gICd0b1VJbnQ2NCcsXG4gICd0b0ludDgnLFxuICAndG9JbnQxNicsXG4gICd0b0ludDMyJyxcbiAgJ3RvSW50NjQnLFxuICAndG9GbG9hdDMyJyxcbiAgJ3RvRmxvYXQ2NCcsXG4gICd0b1VJbnQ4T3JaZXJvJyxcbiAgJ3RvVUludDE2T3JaZXJvJyxcbiAgJ3RvVUludDMyT3JaZXJvJyxcbiAgJ3RvVUludDY0T3JaZXJvJyxcbiAgJ3RvSW50OE9yWmVybycsXG4gICd0b0ludDE2T3JaZXJvJyxcbiAgJ3RvSW50MzJPclplcm8nLFxuICAndG9JbnQ2NE9yWmVybycsXG4gICd0b0Zsb2F0MzJPclplcm8nLFxuICAndG9GbG9hdDY0T3JaZXJvJyxcbiAgJ3RvRGVjaW1hbDMyJyxcbiAgJ3RvRGVjaW1hbDY0JyxcbiAgJ3RvRGVjaW1hbDEyOCcsXG4gIFtcbiAgICAndG9EYXRlJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvRGF0ZShjb2x1bW5fbmFtZSkqKlxuXG4gIENvbnZlcnRzIHZhbHVlIHRvIGRhdGUgd2l0aG91dCB0aW1lLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnlhbmRleC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy90eXBlX2NvbnZlcnNpb25fZnVuY3Rpb25zLyN0b2RhdGUtdG9kYXRldGltZSlcbiAgYCxcbiAgICBgdG9EYXRlKGNvbHVtbl9uYW1lKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICAndG9EYXRlVGltZScsXG4gICd0b1N0cmluZycsXG4gICd0b0ZpeGVkU3RyaW5nJyxcbiAgJ3RvU3RyaW5nQ3V0VG9aZXJvJyxcbiAgJ3RvVW5peFRpbWVzdGFtcDY0TWlsbGknLFxuICAnZnJvbVVuaXhUaW1lc3RhbXA2NE1pbGxpJyxcbiAgJ3RvVW5peFRpbWVzdGFtcDY0TWljcm8nLFxuICAnZnJvbVVuaXhUaW1lc3RhbXA2NE1pY3JvJyxcbiAgJ3RvVW5peFRpbWVzdGFtcDY0TmFubycsXG4gICdmcm9tVW5peFRpbWVzdGFtcDY0TmFubycsXG4gICdyZWludGVycHJldEFzVUludDgnLFxuICAncmVpbnRlcnByZXRBc1VJbnQxNicsXG4gICdyZWludGVycHJldEFzVUludDMyJyxcbiAgJ3JlaW50ZXJwcmV0QXNVSW50NjQnLFxuICAncmVpbnRlcnByZXRBc0ludDgnLFxuICAncmVpbnRlcnByZXRBc0ludDE2JyxcbiAgJ3JlaW50ZXJwcmV0QXNJbnQzMicsXG4gICdyZWludGVycHJldEFzSW50NjQnLFxuICAncmVpbnRlcnByZXRBc0Zsb2F0MzInLFxuICAncmVpbnRlcnByZXRBc0Zsb2F0NjQnLFxuICAncmVpbnRlcnByZXRBc0RhdGUnLFxuICAncmVpbnRlcnByZXRBc0RhdGVUaW1lJyxcbiAgJ3JlaW50ZXJwcmV0QXNTdHJpbmcnLFxuICBbXG4gICAgJ3N0YXJ0c1dpdGgnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqc3RhcnRzV2l0aChzdHIsIHByZWZpeCkqKlxuICBcbiAgUmV0dXJucyAxIHdoZXRoZXIgc3RyaW5nIHN0YXJ0cyB3aXRoIHRoZSBzcGVjaWZpZWQgcHJlZml4LCBvdGhlcndpc2UgaXQgcmV0dXJucyAwLlxuICBgLFxuICAgIGBzdGFydHNXaXRoKHN0ciwgcHJlZml4KWAsXG4gICAgJ3N0cidcbiAgXSxcbiAgW1xuICAgICdlbmRzV2l0aCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiplbmRzV2l0aChzdHIsIHN1ZmZpeCkqKlxuICBcbiAgUmV0dXJucyAxIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBzcGVjaWZpZWQgc3VmZml4LCBvdGhlcndpc2UgaXQgcmV0dXJucyAwLlxuICBgLFxuICAgIGBlbmRzV2l0aChzdHIsIHN1ZmZpeClgLFxuICAgICdzdHInXG4gIF0sXG4gICd0b1llYXInLFxuICAndG9Nb250aCcsXG4gICd0b0RheU9mTW9udGgnLFxuICAndG9EYXlPZldlZWsnLFxuICAndG9Ib3VyJyxcbiAgJ3RvTWludXRlJyxcbiAgJ3RvU2Vjb25kJyxcbiAgJ3RvTW9uZGF5JyxcbiAgW1xuICAgICd0b1N0YXJ0T2ZXZWVrJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZldlZWsodCwgW21vZGVdKSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIG9yIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBuZWFyZXN0IFN1bmRheSBvciBNb25kYXkgYnkgbW9kZS4gUmV0dXJucyB0aGUgZGF0ZS4gVGhlIG1vZGUgYXJndW1lbnQgd29ya3MgZXhhY3RseSBsaWtlIHRoZSBtb2RlIGFyZ3VtZW50IHRvIFt0b1dlZWsoKV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jdG93ZWVrLWRhdGUtbW9kZSkuIEZvciB0aGUgc2luZ2xlLWFyZ3VtZW50IHN5bnRheCwgYSBtb2RlIHZhbHVlIG9mIDAgaXMgdXNlZCwgd2hlcmUgd2VlayAxIGlzIHRoZSBmaXJzdCBvbmUgd2l0aCBhIFN1bmRheSBpbiB0aGUgZ2l2ZW4geWVhci4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZndlZWstdC1tb2RlKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZXZWVrKGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lKWAsXG4gICAgYGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZk1vbnRoJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZk1vbnRoKHQpKipcblxuICBSb3VuZHMgZG93biBhIGRhdGUgb3IgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGguIFJldHVybnMgdGhlIGRhdGUuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2Ztb250aClcbiAgYCxcbiAgICBgdG9TdGFydE9mTW9udGgoY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mUXVhcnRlcicsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZRdWFydGVyKHQpKipcblxuICBSb3VuZHMgZG93biBhIGRhdGUgb3IgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGUgcXVhcnRlci4gVGhlIGZpcnN0IGRheSBvZiB0aGUgcXVhcnRlciBpcyBlaXRoZXIgMSBKYW51YXJ5LCAxIEFwcmlsLCAxIEp1bHksIG9yIDEgT2N0b2Jlci4gUmV0dXJucyB0aGUgZGF0ZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZnF1YXJ0ZXIpXG4gIGAsXG4gICAgYHRvU3RhcnRPZlF1YXJ0ZXIoY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mWWVhcicsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZZZWFyKHQpKipcblxuICBSb3VuZHMgZG93biBhIGRhdGUgb3IgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGUgeWVhci4gUmV0dXJucyB0aGUgZGF0ZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZnllYXIpXG4gIGAsXG4gICAgYHRvU3RhcnRPZlllYXIoY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mRGF5JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZkRheSh0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIHdpdGggdGltZSB0byB0aGUgc3RhcnQgb2YgdGhlIGRheS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZmRheSlcbiAgYCxcbiAgICBgdG9TdGFydE9mRGF5KGNvbHVtbl9vcl9kYXRldGltZSlgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mSG91cicsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZIb3VyKHQpKipcblxuICBSb3VuZHMgZG93biBkYXRlIHdpdGggdGltZSB0byB0aGUgc3RhcnQgb2YgdGhlIGhvdXIuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2Zob3VyKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZIb3VyKGNvbHVtbl9vcl9kYXRldGltZSlgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mTWludXRlJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZk1pbnV0ZSh0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIHdpdGggdGltZSB0byB0aGUgc3RhcnQgb2YgdGhlIG1pbnV0ZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZm1pbnV0ZSlcbiAgYCxcbiAgICBgdG9TdGFydE9mTWludXRlKGNvbHVtbl9vcl9kYXRldGltZSlgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mRml2ZU1pbnV0ZScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZGaXZlTWludXRlKHQpKipcblxuICBSb3VuZHMgZG93biBhIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBzdGFydCBvZiB0aGUgZml2ZS1taW51dGUgaW50ZXJ2YWwuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZmaXZlbWludXRlKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZGaXZlTWludXRlKGNvbHVtbl9vcl9kYXRldGltZSlgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZXRpbWVgXG4gIF0sXG4gIFtcbiAgICAndG9TdGFydE9mRmlmdGVlbk1pbnV0ZXMnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdG9TdGFydE9mRmlmdGVlbk1pbnV0ZXModCkqKlxuXG4gIFJvdW5kcyBkb3duIGEgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBmaWZ0ZWVuLW1pbnV0ZSBpbnRlcnZhbC4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZmZpZnRlZW5taW51dGVzKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZGaWZ0ZWVuTWludXRlcyhjb2x1bW5fb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZkludGVydmFsJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZkludGVydmFsKHQsIElOVEVSVkFMIHggdW5pdCBbLCB0aW1lX3pvbmVdKSoqXG5cbiAgVGhpcyBpcyBhIGdlbmVyYWxpemF0aW9uIG9mIG90aGVyIGZ1bmN0aW9ucyBuYW1lZCB0b1N0YXJ0T2YqLiBGb3IgZXhhbXBsZSwgdG9TdGFydE9mSW50ZXJ2YWwodCwgSU5URVJWQUwgMSB5ZWFyKSByZXR1cm5zIHRoZSBzYW1lIGFzIHRvU3RhcnRPZlllYXIodCksIHRvU3RhcnRPZkludGVydmFsKHQsIElOVEVSVkFMIDEgbW9udGgpIHJldHVybnMgdGhlIHNhbWUgYXMgdG9TdGFydE9mTW9udGgodCksIHRvU3RhcnRPZkludGVydmFsKHQsIElOVEVSVkFMIDEgZGF5KSByZXR1cm5zIHRoZSBzYW1lIGFzIHRvU3RhcnRPZkRheSh0KSwgdG9TdGFydE9mSW50ZXJ2YWwodCwgSU5URVJWQUwgMTUgbWludXRlKSByZXR1cm5zIHRoZSBzYW1lIGFzIHRvU3RhcnRPZkZpZnRlZW5NaW51dGVzKHQpIGV0Yy4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvc3RhcnRvZmludGVydmFsLXRpbWUtb3ItZGF0YS1pbnRlcnZhbC14LXVuaXQtdGltZS16b25lKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZJbnRlcnZhbChjb2x1bW5fb3JfZGF0ZV9vcl9kYXRldGltZSwgSU5URVJWQUwgeCB1bml0KWAsXG4gICAgYGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lYFxuICBdLFxuICAndG9UaW1lJyxcbiAgJ3RvUmVsYXRpdmVZZWFyTnVtJyxcbiAgJ3RvUmVsYXRpdmVNb250aE51bScsXG4gICd0b1JlbGF0aXZlV2Vla051bScsXG4gICd0b1JlbGF0aXZlRGF5TnVtJyxcbiAgJ3RvUmVsYXRpdmVIb3VyTnVtJyxcbiAgJ3RvUmVsYXRpdmVNaW51dGVOdW0nLFxuICAndG9SZWxhdGl2ZVNlY29uZE51bScsXG4gICd0b1lZWVlNTScsXG4gICd0b1lZWVlNTUREJyxcbiAgJ3RvWVlZWU1NRERoaG1tc3MnLFxuICBbXG4gICAgJ2FkZFllYXJzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZFllYXJzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2ZfeWVhcnMpKipcblxuICBGdW5jdGlvbiBhZGRzIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkWWVhcnMoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkTW9udGhzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZE1vbnRocyhjb2x1bW5fbmFtZSwgbnVtYmVyX29mX21vbnRocykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkTW9udGhzKGNvbHVtbl9uYW1lLCAxKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICBbXG4gICAgJ2FkZFdlZWtzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZFdlZWtzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2Zfd2Vla3MpKipcblxuICBGdW5jdGlvbiBhZGRzIHNwZWNpZmllZCBudW1iZXIgb2Ygd2Vla3MgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkV2Vla3MoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkRGF5cycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGREYXlzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2ZfZGF5cykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZERheXMoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkSG91cnMnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqYWRkSG91cnMoY29sdW1uX25hbWUsIG51bWJlcl9vZl9ob3VycykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byBhIERhdGUvRGF0ZVRpbWUgYW5kIHRoZW4gcmV0dXJuIHRoZSBEYXRlL0RhdGVUaW1lLlxuICBgLFxuICAgIGBhZGRIb3Vycyhjb2x1bW5fbmFtZSwgMSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgW1xuICAgICdhZGRNaW51dGVzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZE1pbnV0ZXMoY29sdW1uX25hbWUsIG51bWJlcl9vZl9taW51dGVzKSoqXG5cbiAgRnVuY3Rpb24gYWRkcyBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkTWludXRlcyhjb2x1bW5fbmFtZSwgMSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgW1xuICAgICdhZGRTZWNvbmRzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZFNlY29uZHMoY29sdW1uX25hbWUsIG51bWJlcl9vZl9zZWNvbmRzKSoqXG5cbiAgRnVuY3Rpb24gYWRkcyBzcGVjaWZpZWQgbnVtYmVyIG9mIHNlY29uZHMgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkU2Vjb25kcyhjb2x1bW5fbmFtZSwgMSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgW1xuICAgICdhZGRRdWFydGVycycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRRdWFydGVycyhjb2x1bW5fbmFtZSwgbnVtYmVyX29mX3F1YXJ0ZXJzKSoqXG5cbiAgRnVuY3Rpb24gYWRkcyBzcGVjaWZpZWQgbnVtYmVyIG9mIHF1YXJ0ZXJzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZFF1YXJ0ZXJzKGNvbHVtbl9uYW1lLCAxKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICBbXG4gICAgJ25vdycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipub3coKSoqXG4gIFxuICBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWUgYXQgb25lIG9mIHRoZSBtb21lbnRzIG9mIHJlcXVlc3QgZXhlY3V0aW9uLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnlhbmRleC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyNub3cpXG4gIGAsXG4gICAgYG5vdygpYFxuICBdLFxuICAnbm93NjQnLFxuICBbXG4gICAgJ3RvZGF5JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvZGF5KCkqKlxuICBcbiAgQWNjZXB0cyB6ZXJvIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB0aGUgY3VycmVudCBkYXRlIGF0IG9uZSBvZiB0aGUgbW9tZW50cyBvZiByZXF1ZXN0IGV4ZWN1dGlvbi4gVGhlIHNhbWUgYXMgJ3RvRGF0ZShub3coKSknLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jdG9kYXkpXG4gIGAsXG4gICAgYHRvZGF5KClgXG4gIF0sXG4gIFtcbiAgICAneWVzdGVyZGF5JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnllc3RlcmRheSgpKipcbiAgXG4gIEFjY2VwdHMgemVybyBhcmd1bWVudHMgYW5kIHJldHVybnMgeWVzdGVyZGF5J3MgZGF0ZSBhdCBvbmUgb2YgdGhlIG1vbWVudHMgb2YgcmVxdWVzdCBleGVjdXRpb24uIFRoZSBzYW1lIGFzICd0b2RheSgpIC0gMScuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN5ZXN0ZXJkYXkpXG4gIGAsXG4gICAgYHllc3RlcmRheSgpYFxuICBdLFxuICAndGltZVNsb3QnLFxuICAndGltZVNsb3RzJyxcbiAgJ2Zvcm1hdERhdGVUaW1lJyxcbiAgJ2VtcHR5JyxcbiAgJ25vdEVtcHR5JyxcbiAgJ2xlbmd0aCcsXG4gICdsZW5ndGhVVEY4JyxcbiAgJ2xvd2VyJyxcbiAgJ3VwcGVyJyxcbiAgJ2xvd2VyVVRGOCcsXG4gICd1cHBlclVURjgnLFxuICAncmV2ZXJzZScsXG4gICdyZXZlcnNlVVRGOCcsXG4gICdjb25jYXQnLFxuICAnc3Vic3RyaW5nJyxcbiAgJ3N1YnN0cmluZ1VURjgnLFxuICAnYXBwZW5kVHJhaWxpbmdDaGFySWZBYnNlbnQnLFxuICAnY29udmVydENoYXJzZXQnLFxuICAnYmFzZTY0RW5jb2RlJyxcbiAgJ2Jhc2U2NERlY29kZScsXG4gICd0cnlCYXNlNjREZWNvZGUnLFxuICAncG9zaXRpb24nLFxuICAncG9zaXRpb25VVEY4JyxcbiAgJ21hdGNoJyxcbiAgJ2V4dHJhY3QnLFxuICAnZXh0cmFjdEFsbCcsXG4gICdsaWtlJyxcbiAgJ25vdExpa2UnLFxuICAncmVwbGFjZU9uZScsXG4gICdyZXBsYWNlQWxsJyxcbiAgJ3JlcGxhY2VSZWdleHBPbmUnLFxuICAncmVwbGFjZVJlZ2V4cEFsbCcsXG4gICdlbXB0eUFycmF5VUludDgnLFxuICAnZW1wdHlBcnJheVVJbnQxNicsXG4gICdlbXB0eUFycmF5VUludDMyJyxcbiAgJ2VtcHR5QXJyYXlVSW50NjQnLFxuICAnZW1wdHlBcnJheUludDgnLFxuICAnZW1wdHlBcnJheUludDE2JyxcbiAgJ2VtcHR5QXJyYXlJbnQzMicsXG4gICdlbXB0eUFycmF5SW50NjQnLFxuICAnZW1wdHlBcnJheUZsb2F0MzInLFxuICAnZW1wdHlBcnJheUZsb2F0NjQnLFxuICAnZW1wdHlBcnJheURhdGUnLFxuICAnZW1wdHlBcnJheURhdGVUaW1lJyxcbiAgJ2VtcHR5QXJyYXlTdHJpbmcnLFxuICAnZW1wdHlBcnJheVRvU2luZ2xlJyxcbiAgJ3JhbmdlJyxcbiAgJ2FycmF5JyxcbiAgJ2FycmF5Q29uY2F0JyxcbiAgJ2FycmF5RWxlbWVudCcsXG4gICdoYXMnLFxuICAnaGFzQWxsJyxcbiAgJ2hhc0FueScsXG4gICdpbmRleE9mJyxcbiAgJ2NvdW50RXF1YWwnLFxuICAnYXJyYXlFbnVtZXJhdGUnLFxuICAnYXJyYXlFbnVtZXJhdGVVbmlxJyxcbiAgJ2FycmF5Sm9pbicsXG4gICdhcnJheVBvcEJhY2snLFxuICAnYXJyYXlQb3BGcm9udCcsXG4gICdhcnJheVB1c2hCYWNrJyxcbiAgJ2FycmF5UHVzaEZyb250JyxcbiAgJ2FycmF5UmVzaXplJyxcbiAgJ2FycmF5U2xpY2UnLFxuICAnYXJyYXlVbmlxJyxcbiAgJ29wZXJhdG9yJyxcbiAgJ2FycmF5TWFwJyxcbiAgJ2FycmF5RmlsdGVyJyxcbiAgJ2FycmF5Q291bnQnLFxuICAnYXJyYXlFeGlzdHMnLFxuICAnYXJyYXlBbGwnLFxuICAnYXJyYXlTdW0nLFxuICAnYXJyYXlDdW1TdW0nLFxuICAnYXJyYXlTb3J0JyxcbiAgJ2FycmF5UmV2ZXJzZVNvcnQnLFxuICAnYXJyYXlGaXJzdCcsXG4gICdhcnJheUZpcnN0SW5kZXgnLFxuICBbXG4gICAgJ2FycmF5WmlwJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFycmF5WmlwKGFycjEsIGFycjIsIC4uLiwgYXJyTikqKlxuXG4gIEFsbG93cyB0byBjb21iaW5lIG11bHRpcGxlIGFycmF5cyBvZiBlcXVhbCBsZW5ndGhzIGludG8gb25lIGFycmF5IG9mIHR1cGxlcy5cbiAgYCxcbiAgICAnYXJyYXlaaXAoYXJyMSknXG4gIF0sXG4gICdzcGxpdEJ5Q2hhcicsXG4gICdzcGxpdEJ5U3RyaW5nJyxcbiAgJ2FycmF5U3RyaW5nQ29uY2F0JyxcbiAgJ2FscGhhVG9rZW5zJyxcbiAgJ3Byb3RvY29sJyxcbiAgJ2RvbWFpbicsXG4gICdkb21haW5XaXRob3V0V1dXJyxcbiAgJ3RvcExldmVsRG9tYWluJyxcbiAgJ2ZpcnN0U2lnbmlmaWNhbnRTdWJkb21haW4nLFxuICAnY3V0VG9GaXJzdFNpZ25pZmljYW50U3ViZG9tYWluJyxcbiAgJ3BhdGgnLFxuICAncGF0aEZ1bGwnLFxuICAncXVlcnlTdHJpbmcnLFxuICAnZnJhZ21lbnQnLFxuICAncXVlcnlTdHJpbmdBbmRGcmFnbWVudCcsXG4gICdleHRyYWN0VVJMUGFyYW1ldGVyJyxcbiAgJ2V4dHJhY3RVUkxQYXJhbWV0ZXJzJyxcbiAgJ2V4dHJhY3RVUkxQYXJhbWV0ZXJOYW1lcycsXG4gICdVUkxIaWVyYXJjaHknLFxuICAnVVJMUGF0aEhpZXJhcmNoeScsXG4gICdkZWNvZGVVUkxDb21wb25lbnQnLFxuICAnY3V0V1dXJyxcbiAgJ2N1dFF1ZXJ5U3RyaW5nJyxcbiAgJ2N1dEZyYWdtZW50JyxcbiAgJ2N1dFF1ZXJ5U3RyaW5nQW5kRnJhZ21lbnQnLFxuICAnY3V0VVJMUGFyYW1ldGVyJyxcbiAgJ0lQdjROdW1Ub1N0cmluZycsXG4gICdJUHY0U3RyaW5nVG9OdW0nLFxuICAnSVB2NE51bVRvU3RyaW5nQ2xhc3NDJyxcbiAgJ0lQdjZOdW1Ub1N0cmluZycsXG4gICdJUHY2U3RyaW5nVG9OdW0nLFxuICAncmFuZCcsXG4gICdyYW5kNjQnLFxuICAncmFuZENvbnN0YW50JyxcbiAgJ2hhbGZNRDUnLFxuICAnTUQ1JyxcbiAgJ3NpcEhhc2g2NCcsXG4gICdzaXBIYXNoMTI4JyxcbiAgJ2NpdHlIYXNoNjQnLFxuICAnaW50SGFzaDMyJyxcbiAgJ2ludEhhc2g2NCcsXG4gICdTSEEyMjQnLFxuICAnU0hBMjU2JyxcbiAgJ1VSTEhhc2gnLFxuICAnaGV4JyxcbiAgJ3VuaGV4JyxcbiAgJ1VVSURTdHJpbmdUb051bScsXG4gICdVVUlETnVtVG9TdHJpbmcnLFxuICAnYml0bWFza1RvTGlzdCcsXG4gICdiaXRtYXNrVG9BcnJheScsXG4gICdmbG9vcicsXG4gICdjZWlsJyxcbiAgJ3JvdW5kJyxcbiAgJ3JvdW5kVG9FeHAyJyxcbiAgJ3JvdW5kRHVyYXRpb24nLFxuICAncm91bmRBZ2UnLFxuICAnaWYnLFxuICAnbXVsdGlJZicsXG4gICdpZk5vdEZpbml0ZScsXG4gICdlJyxcbiAgJ3BpJyxcbiAgJ2V4cCcsXG4gICdsb2cnLFxuICAnZXhwMicsXG4gICdsb2cyJyxcbiAgJ2V4cDEwJyxcbiAgJ2xvZzEwJyxcbiAgJ3NxcnQnLFxuICAnY2JydCcsXG4gICdlcmYnLFxuICAnZXJmYycsXG4gICdsZ2FtbWEnLFxuICAndGdhbW1hJyxcbiAgJ3NpbicsXG4gICdjb3MnLFxuICAndGFuJyxcbiAgJ2FzaW4nLFxuICAnYWNvcycsXG4gICdhdGFuJyxcbiAgJ3BvdycsXG4gICdyZWdpb25Ub0NpdHknLFxuICAncmVnaW9uVG9BcmVhJyxcbiAgJ3JlZ2lvblRvRGlzdHJpY3QnLFxuICAncmVnaW9uVG9Db3VudHJ5JyxcbiAgJ3JlZ2lvblRvQ29udGluZW50JyxcbiAgJ3JlZ2lvblRvUG9wdWxhdGlvbicsXG4gICdyZWdpb25JbicsXG4gICdyZWdpb25IaWVyYXJjaHknLFxuICAncmVnaW9uVG9OYW1lJyxcbiAgJ2dyZWF0Q2lyY2xlRGlzdGFuY2UnLFxuICAnZ3JlYXRDaXJjbGVBbmdsZScsXG4gICdwb2ludEluRWxsaXBzZXMnLFxuICAncG9pbnRJblBvbHlnb24nLFxuICAnZ2VvRGlzdGFuY2UnLFxuICAnZ2VvaGFzaEVuY29kZScsXG4gICdnZW9oYXNoRGVjb2RlJyxcbiAgJ2dlb2hhc2hlc0luQm94JyxcbiAgJ09TSW4nLFxuICAnU0VJbicsXG4gICdkaWN0R2V0VUludDgnLFxuICAnZGljdEdldFVJbnQxNicsXG4gICdkaWN0R2V0VUludDMyJyxcbiAgJ2RpY3RHZXRVSW50NjQnLFxuICAnZGljdEdldEludDgnLFxuICAnZGljdEdldEludDE2JyxcbiAgJ2RpY3RHZXRJbnQzMicsXG4gICdkaWN0R2V0SW50NjQnLFxuICAnZGljdEdldEZsb2F0MzInLFxuICAnZGljdEdldEZsb2F0NjQnLFxuICAnZGljdEdldERhdGUnLFxuICAnZGljdEdldERhdGVUaW1lJyxcbiAgJ2RpY3RHZXRTdHJpbmcnLFxuICAnZGljdEdldFVVSUQnLFxuICAnZGljdEdldFRPckRlZmF1bHQnLFxuICAnZGljdElzSW4nLFxuICAnZGljdEdldEhpZXJhcmNoeScsXG4gICdkaWN0SGFzJyxcbiAgJ3Zpc2l0UGFyYW1IYXMnLFxuICAndmlzaXRQYXJhbUV4dHJhY3RVSW50JyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0SW50JyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0RmxvYXQnLFxuICAndmlzaXRQYXJhbUV4dHJhY3RCb29sJyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0UmF3JyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0U3RyaW5nJyxcbiAgJ2luJyxcbiAgJ3R1cGxlJyxcbiAgJ3R1cGxlRWxlbWVudCcsXG4gICdob3N0TmFtZScsXG4gICd2aXNpYmxlV2lkdGgnLFxuICAndG9UeXBlTmFtZScsXG4gICdibG9ja1NpemUnLFxuICAnbWF0ZXJpYWxpemUnLFxuICAnaWdub3JlJyxcbiAgJ3NsZWVwJyxcbiAgJ2N1cnJlbnREYXRhYmFzZScsXG4gIFtcbiAgICAnam9pbkdldCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipqb2luR2V0KGRhdGFfc291cmNlX25hbWUsICdjb2x1bW5fdmFsdWUnLCAnam9pbl9rZXlzJykqKlxuXG4gIEV4dHJhY3QgZGF0YSBmcm9tIHRoZSB0YWJsZSB0aGUgc2FtZSB3YXkgYXMgZnJvbSBhIGRpY3Rpb25hcnlcbiAgYCxcbiAgICBgam9pbkdldChkYXRhX3NvdXJjZV9uYW1lLCAnY29sdW1uX3ZhbHVlJywgJ2pvaW5fa2V5cycpYCxcbiAgICBgZGF0YV9zb3VyY2VfbmFtZWBcbiAgXSxcbiAgJ2hhc0NvbHVtbkluVGFibGUnLFxuICAnZm9ybWF0UmVhZGFibGVTaXplJyxcbiAgJ2lzQ29uc3RhbnQnLFxuICAnaXNGaW5pdGUnLFxuICAnaXNJbmZpbml0ZScsXG4gICdpc05hTicsXG4gICdpc051bGwnLFxuICAnaXNOb3ROdWxsJyxcbiAgJ2NvYWxlc2NlJyxcbiAgJ2lmTnVsbCcsXG4gICdudWxsSWYnLFxuICAnYXNzdW1lTm90TnVsbCcsXG4gICd0b051bGxhYmxlJyxcbiAgJ2JhcicsXG4gICd0cmFuc2Zvcm0nLFxuICAnbm90SW4nLFxuICAnbGVhc3QnLFxuICAnZ3JlYXRlc3QnLFxuICAndXB0aW1lJyxcbiAgJ3ZlcnNpb24nLFxuICAncm93TnVtYmVySW5BbGxCbG9ja3MnLFxuICAncnVubmluZ0RpZmZlcmVuY2UnLFxuICAnTUFDTnVtVG9TdHJpbmcnLFxuICAnTUFDU3RyaW5nVG9OdW0nLFxuICAnTUFDU3RyaW5nVG9PVUknLFxuICAnZ2V0U2l6ZU9mRW51bVR5cGUnLFxuICAndG9Db2x1bW5UeXBlTmFtZScsXG4gICdkdW1wQ29sdW1uU3RydWN0dXJlJyxcbiAgJ2RlZmF1bHRWYWx1ZU9mQXJndW1lbnRUeXBlJyxcbiAgJ2luZGV4SGludCcsXG4gICdyZXBsaWNhdGUnLFxuICAnZ2xvYmFsSW4nLFxuICAnZ2xvYmFsTm90SW4nLFxuICAnbGFtYmRhJyxcbiAgJ2NvdW50JyxcbiAgJ2FueScsXG4gICdhbnlIZWF2eScsXG4gICdhbnlMYXN0JyxcbiAgJ2dyb3VwQml0QW5kJyxcbiAgJ2dyb3VwQml0T3InLFxuICAnZ3JvdXBCaXRYb3InLFxuICAnbWluJyxcbiAgJ21heCcsXG4gICdhcmdNaW4nLFxuICAnYXJnTWF4JyxcbiAgJ3N1bScsXG4gICdzdW1XaXRoT3ZlcmZsb3cnLFxuICAnc3VtTWFwJyxcbiAgJ2F2ZycsXG4gICdhdmdXZWlnaHRlZCcsXG4gIFtcbiAgICAndW5pcScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip1bmlxKHgpKipcblxuICBDYWxjdWxhdGVzIHRoZSBhcHByb3hpbWF0ZSBudW1iZXIgb2YgZGlmZmVyZW50IHZhbHVlcyBvZiB0aGUgYXJndW1lbnQuIFdvcmtzIGZvciBudW1iZXJzLCBzdHJpbmdzLCBkYXRlcywgYW5kIGRhdGVzIHdpdGggdGltZXMuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UtZG9jcy5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvYWdnX2Z1bmN0aW9ucy8jdW5pcS14KVxuICBgLFxuICAgIGB1bmlxKHgpYCxcbiAgICAneCdcbiAgXSxcbiAgW1xuICAgICd1bmlxSExMMTInLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdW5pcUhMTDEyKHgpKipcblxuICBVc2VzIHRoZSBIeXBlckxvZ0xvZyBhbGdvcml0aG0gdG8gYXBwcm94aW1hdGUgdGhlIG51bWJlciBvZiBkaWZmZXJlbnQgdmFsdWVzIG9mIHRoZSBhcmd1bWVudC4gSXQgdXNlcyAyMTIgNS1iaXQgY2VsbHMuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UtZG9jcy5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvYWdnX2Z1bmN0aW9ucy8jdW5pcWhsbDEyLXgpXG4gIGAsXG4gICAgYHVuaXFITEwxMih4KWAsXG4gICAgJ3gnXG4gIF0sXG4gIFtcbiAgICAndW5pcUV4YWN0JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnVuaXFFeGFjdCh4KSoqXG5cbiAgRXhhY3QgbnVtYmVyIG9mIGRpZmZlcmVudCB2YWx1ZXMgb2YgdGhlIGFyZ3VtZW50LiBUaGVyZSBpcyBubyByZWFzb24gdG8gZmVhciBhcHByb3hpbWF0aW9ucywgc28gaXTigJlzIGJldHRlciB0byB1c2UgdGhlIOKAmHVuaXHigJkgZnVuY3Rpb24uIFlvdSBzaG91bGQgdXNlIHRoZSDigJh1bmlxRXhhY3TigJkgZnVuY3Rpb24gaWYgeW91IGRlZmluaXRlbHkgbmVlZCBhbiBleGFjdCByZXN1bHQuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UtZG9jcy5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvYWdnX2Z1bmN0aW9ucy8jdW5pcWV4YWN0LXgpXG4gIGAsXG4gICAgYHVuaXFFeGFjdCh4KWAsXG4gICAgJ3gnXG4gIF0sXG4gIFtcbiAgICAndW5pcUNvbWJpbmVkJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnVuaXFDb21iaW5lZCh4KSoqXG5cbiAgQXBwcm94aW1hdGVseSBjb21wdXRlcyB0aGUgbnVtYmVyIG9mIGRpZmZlcmVudCB2YWx1ZXMg4oCL4oCLb2YgdGhlIGFyZ3VtZW50LiBXb3JrcyBmb3IgbnVtYmVycywgc3RyaW5ncywgZGF0ZXMsIGRhdGUtd2l0aC10aW1lLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLWRvY3MucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L2FnZ19mdW5jdGlvbnMvI3VuaXFjb21iaW5lZC14KVxuICBgLFxuICAgIGB1bmlxQ29tYmluZWQoeClgLFxuICAgICd4J1xuICBdLFxuICAnYWdnVGhyb3cnLFxuICAnZ3JvdXBBcnJheScsXG4gICdncm91cEFycmF5U2FtcGxlJyxcbiAgJ2dyb3VwQXJyYXlJbnNlcnRBdCcsXG4gICdncm91cFVuaXFBcnJheScsXG4gICdtZWRpYW4nLFxuICAnbWVkaWFuVGltaW5nJyxcbiAgJ21lZGlhbkRldGVybWluaXN0aWMnLFxuICAnbWVkaWFuVGltaW5nV2VpZ2h0ZWQnLFxuICAndmFyU2FtcCcsXG4gICd2YXJQb3AnLFxuICAnc3RkZGV2U2FtcCcsXG4gICdzdGRkZXZQb3AnLFxuICAnY292YXJTYW1wJyxcbiAgJ2NvdmFyUG9wJyxcbiAgJ3RvcEsnLFxuICBbXG4gICAgJ2NvcnInLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqY29ycih4LHkpKipcblxuICBDYWxjdWxhdGVzIHRoZSBQZWFyc29uIGNvcnJlbGF0aW9uIGNvZWZmaWNpZW50LiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnlhbmRleC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2FnZ19mdW5jdGlvbnMvcmVmZXJlbmNlLyNjb3JyLXgteSlcbiAgYCxcbiAgICBgY29yKHgseSlgLFxuICAgICd4J1xuICBdLFxuICBbXG4gICAgJ2hpc3RvZ3JhbScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipoaXN0b2dyYW0obnVtYmVyX29mX2JpbnMpKHZhbHVlcykqKlxuXG4gIENhbGN1bGF0ZXMgYW4gYWRhcHRpdmUgaGlzdG9ncmFtLiBJdCBkb2Vzbid0IGd1YXJhbnRlZSBwcmVjaXNlIHJlc3VsdHMuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UueWFuZGV4L2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvYWdnX2Z1bmN0aW9ucy9wYXJhbWV0cmljX2Z1bmN0aW9ucy8jaGlzdG9ncmFtKVxuICBgLFxuICAgIGBoaXN0b2dyYW0obnVtYmVyX29mX2JpbnMpKHZhbHVlcylgLFxuICAgICdudW1iZXJfb2ZfYmlucydcbiAgXSxcbiAgJ3F1YW50aWxlJyxcbiAgJ3F1YW50aWxlcycsXG4gICdxdWFudGlsZVRpbWluZycsXG4gICdxdWFudGlsZXNUaW1pbmcnLFxuICAncXVhbnRpbGVUaW1pbmdXZWlnaHRlZCcsXG4gICdxdWFudGlsZXNUaW1pbmdXZWlnaHRlZCcsXG4gICdxdWFudGlsZURldGVybWluaXN0aWMnLFxuICAncXVhbnRpbGVzRGV0ZXJtaW5pc3RpYycsXG4gICdxdWFudGlsZUV4YWN0JyxcbiAgJ3F1YW50aWxlRXhhY3RXZWlnaHRlZCcsXG4gICdxdWFudGlsZVREaWdlc3QnLFxuICAnc2VxdWVuY2VNYXRjaCcsXG4gICdzZXF1ZW5jZUNvdW50JyxcbiAgJ3dpbmRvd0Z1bm5lbCcsXG4gICdyZXRlbnRpb24nLFxuICAndW5pcVVwVG8nLFxuICBbXG4gICAgJ2NvdW50SWYnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqY291bnRJZihjb25kaXRpb24pKipcblxuICBDb3VudCB0aGUgbnVtYmVyIG9mIHJvd3MgdGhhdCBzYXRpZmllcyBhIGNvbmRpdGlvbi4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS1kb2NzLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9hZ2dfZnVuY3Rpb25zLyNpZi1jb21iaW5hdG9yLWNvbmRpdGlvbmFsLWFnZ3JlZ2F0ZS1mdW5jdGlvbnMpXG4gIGAsXG4gICAgYGNvdW50SWYoY29uZClgLFxuICAgICdjb25kJ1xuICBdLFxuICAnYW55SWYnLFxuICAnYW55TGFzdElmJyxcbiAgJ21pbklmJyxcbiAgJ21heElmJyxcbiAgJ2FyZ01pbklmJyxcbiAgJ2FyZ01heElmJyxcbiAgJ3N1bUlmJyxcbiAgJ2F2Z0lmJyxcbiAgJ3VuaXFJZicsXG4gICd1bmlxSExMMTJJZicsXG4gICd1bmlxRXhhY3RJZicsXG4gICdncm91cEFycmF5SWYnLFxuICAnZ3JvdXBVbmlxQXJyYXlJZicsXG4gICdtZWRpYW5JZicsXG4gICdtZWRpYW5UaW1pbmdJZicsXG4gICdtZWRpYW5EZXRlcm1pbmlzdGljSWYnLFxuICAnbWVkaWFuVGltaW5nV2VpZ2h0ZWRJZicsXG4gICd2YXJTYW1wSWYnLFxuICAndmFyUG9wSWYnLFxuICAnc3RkZGV2U2FtcElmJyxcbiAgJ3N0ZGRldlBvcElmJyxcbiAgJ2NvdmFyU2FtcElmJyxcbiAgJ2NvdmFyUG9wSWYnLFxuICAnY29ycklmJyxcbiAgJ3F1YW50aWxlSWYnLFxuICAncXVhbnRpbGVzSWYnLFxuICAncXVhbnRpbGVUaW1pbmdJZicsXG4gICdxdWFudGlsZXNUaW1pbmdJZicsXG4gICdxdWFudGlsZVRpbWluZ1dlaWdodGVkSWYnLFxuICAncXVhbnRpbGVzVGltaW5nV2VpZ2h0ZWRJZicsXG4gICdxdWFudGlsZURldGVybWluaXN0aWNJZicsXG4gICdxdWFudGlsZXNEZXRlcm1pbmlzdGljSWYnLFxuICAnc2VxdWVuY2VNYXRjaElmJyxcbiAgJ3VuaXFVcFRvSWYnLFxuICAnYXJyYXlTcGxpdCcsXG4gICdhcnJheVJlZHVjZScsXG4gICdhcnJheVJlZHVjZUluUmFuZ2VzJyxcbiAgJ2NvdW50QXJyYXknLFxuICAnYW55QXJyYXknLFxuICAnYW55TGFzdEFycmF5JyxcbiAgJ21pbkFycmF5JyxcbiAgJ21heEFycmF5JyxcbiAgJ2FyZ01pbkFycmF5JyxcbiAgJ2FyZ01heEFycmF5JyxcbiAgJ3N1bUFycmF5JyxcbiAgJ2F2Z0FycmF5JyxcbiAgJ3VuaXFBcnJheScsXG4gICd1bmlxSExMMTJBcnJheScsXG4gICd1bmlxRXhhY3RBcnJheScsXG4gICdncm91cEFycmF5QXJyYXknLFxuICAnZ3JvdXBVbmlxQXJyYXlBcnJheScsXG4gICdtZWRpYW5BcnJheScsXG4gICdtZWRpYW5UaW1pbmdBcnJheScsXG4gICdtZWRpYW5EZXRlcm1pbmlzdGljQXJyYXknLFxuICAnbWVkaWFuVGltaW5nV2VpZ2h0ZWRBcnJheScsXG4gICd2YXJTYW1wQXJyYXknLFxuICAndmFyUG9wQXJyYXknLFxuICAnc3RkZGV2U2FtcEFycmF5JyxcbiAgJ3N0ZGRldlBvcEFycmF5JyxcbiAgJ2NvdmFyU2FtcEFycmF5JyxcbiAgJ2NvdmFyUG9wQXJyYXknLFxuICAnY29yckFycmF5JyxcbiAgJ3F1YW50aWxlQXJyYXknLFxuICAncXVhbnRpbGVzQXJyYXknLFxuICAncXVhbnRpbGVUaW1pbmdBcnJheScsXG4gICdxdWFudGlsZXNUaW1pbmdBcnJheScsXG4gICdxdWFudGlsZVRpbWluZ1dlaWdodGVkQXJyYXknLFxuICAncXVhbnRpbGVzVGltaW5nV2VpZ2h0ZWRBcnJheScsXG4gICdxdWFudGlsZURldGVybWluaXN0aWNBcnJheScsXG4gICdxdWFudGlsZXNEZXRlcm1pbmlzdGljQXJyYXknLFxuICAnc2VxdWVuY2VNYXRjaEFycmF5JyxcbiAgJ3VuaXFVcFRvQXJyYXknLFxuICAnY291bnRTdGF0ZScsXG4gICdhbnlTdGF0ZScsXG4gICdhbnlMYXN0U3RhdGUnLFxuICAnbWluU3RhdGUnLFxuICAnbWF4U3RhdGUnLFxuICAnYXJnTWluU3RhdGUnLFxuICAnYXJnTWF4U3RhdGUnLFxuICAnc3VtU3RhdGUnLFxuICAnYXZnU3RhdGUnLFxuICAndW5pcVN0YXRlJyxcbiAgJ3VuaXFITEwxMlN0YXRlJyxcbiAgJ3VuaXFFeGFjdFN0YXRlJyxcbiAgJ2dyb3VwQXJyYXlTdGF0ZScsXG4gICdncm91cFVuaXFBcnJheVN0YXRlJyxcbiAgJ21lZGlhblN0YXRlJyxcbiAgJ21lZGlhblRpbWluZ1N0YXRlJyxcbiAgJ21lZGlhbkRldGVybWluaXN0aWNTdGF0ZScsXG4gICdtZWRpYW5UaW1pbmdXZWlnaHRlZFN0YXRlJyxcbiAgJ3ZhclNhbXBTdGF0ZScsXG4gICd2YXJQb3BTdGF0ZScsXG4gICdzdGRkZXZTYW1wU3RhdGUnLFxuICAnc3RkZGV2UG9wU3RhdGUnLFxuICAnY292YXJTYW1wU3RhdGUnLFxuICAnY292YXJQb3BTdGF0ZScsXG4gICdjb3JyU3RhdGUnLFxuICAncXVhbnRpbGVTdGF0ZScsXG4gICdxdWFudGlsZXNTdGF0ZScsXG4gICdxdWFudGlsZVRpbWluZ1N0YXRlJyxcbiAgJ3F1YW50aWxlc1RpbWluZ1N0YXRlJyxcbiAgJ3F1YW50aWxlVGltaW5nV2VpZ2h0ZWRTdGF0ZScsXG4gICdxdWFudGlsZXNUaW1pbmdXZWlnaHRlZFN0YXRlJyxcbiAgJ3F1YW50aWxlRGV0ZXJtaW5pc3RpY1N0YXRlJyxcbiAgJ3F1YW50aWxlc0RldGVybWluaXN0aWNTdGF0ZScsXG4gICdzZXF1ZW5jZU1hdGNoU3RhdGUnLFxuICAndW5pcVVwVG9TdGF0ZScsXG4gICdjb3VudE1lcmdlJyxcbiAgJ2FueU1lcmdlJyxcbiAgJ2FueUxhc3RNZXJnZScsXG4gICdtaW5NZXJnZScsXG4gICdtYXhNZXJnZScsXG4gICdhcmdNaW5NZXJnZScsXG4gICdhcmdNYXhNZXJnZScsXG4gICdzdW1NZXJnZScsXG4gICdhdmdNZXJnZScsXG4gICd1bmlxTWVyZ2UnLFxuICAndW5pcUhMTDEyTWVyZ2UnLFxuICAndW5pcUV4YWN0TWVyZ2UnLFxuICAnZ3JvdXBBcnJheU1lcmdlJyxcbiAgJ2dyb3VwVW5pcUFycmF5TWVyZ2UnLFxuICAnbWVkaWFuTWVyZ2UnLFxuICAnbWVkaWFuVGltaW5nTWVyZ2UnLFxuICAnbWVkaWFuRGV0ZXJtaW5pc3RpY01lcmdlJyxcbiAgJ21lZGlhblRpbWluZ1dlaWdodGVkTWVyZ2UnLFxuICAndmFyU2FtcE1lcmdlJyxcbiAgJ3ZhclBvcE1lcmdlJyxcbiAgJ3N0ZGRldlNhbXBNZXJnZScsXG4gICdzdGRkZXZQb3BNZXJnZScsXG4gICdjb3ZhclNhbXBNZXJnZScsXG4gICdjb3ZhclBvcE1lcmdlJyxcbiAgJ2NvcnJNZXJnZScsXG4gICdxdWFudGlsZU1lcmdlJyxcbiAgJ3F1YW50aWxlc01lcmdlJyxcbiAgJ3F1YW50aWxlVGltaW5nTWVyZ2UnLFxuICAncXVhbnRpbGVzVGltaW5nTWVyZ2UnLFxuICAncXVhbnRpbGVUaW1pbmdXZWlnaHRlZE1lcmdlJyxcbiAgJ3F1YW50aWxlc1RpbWluZ1dlaWdodGVkTWVyZ2UnLFxuICAncXVhbnRpbGVEZXRlcm1pbmlzdGljTWVyZ2UnLFxuICAncXVhbnRpbGVzRGV0ZXJtaW5pc3RpY01lcmdlJyxcbiAgJ3NlcXVlbmNlTWF0Y2hNZXJnZScsXG4gICd1bmlxVXBUb01lcmdlJyxcbiAgJ2ZpbGUnLFxuICAnbWVyZ2UnLFxuICAnbnVtYmVycycsXG4gICdyZW1vdGUnLFxuICAndXJsJyxcbiAgJ2pkYmMnLFxuICBbXG4gICAgJ0pTT05FeHRyYWN0U3RyaW5nJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKkpTT05FeHRyYWN0U3RyaW5nKGpzb25bLCBpbmRpY2VzX29yX2tleXNd4oCmKSoqXG4gIFxuICBQYXJzZXMgYSBKU09OIGFuZCBleHRyYWN0IGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHNpbWlsYXIgdG8gdmlzaXRQYXJhbUV4dHJhY3RTdHJpbmcgZnVuY3Rpb25zLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvanNvbl9mdW5jdGlvbnMvI2pzb25leHRyYWN0c3RyaW5nanNvbi1pbmRpY2VzLW9yLWtleXMpXG4gIGAsXG4gICAgYEpTT05FeHRyYWN0U3RyaW5nKGpzb25bLCBpbmRpY2VzX29yX2tleXNd4oCmKWAsXG4gICAgJ2pzb24nXG4gIF0sXG4gIFtcbiAgICAnSlNPTkV4dHJhY3RCb29sJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKkpTT05FeHRyYWN0Qm9vbChqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApikqKlxuICBcbiAgUGFyc2VzIGEgSlNPTiBhbmQgZXh0cmFjdCBhIHZhbHVlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHNpbWlsYXIgdG8gdmlzaXRQYXJhbSBmdW5jdGlvbnMuIElmIHRoZSB2YWx1ZSBkb2VzIG5vdCBleGlzdCBvciBoYXMgYSB3cm9uZyB0eXBlLCAwIHdpbGwgYmUgcmV0dXJuZWQuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9qc29uX2Z1bmN0aW9ucy8janNvbmV4dHJhY3Rib29sanNvbi1pbmRpY2VzLW9yLWtleXMpXG4gIGAsXG4gICAgYEpTT05FeHRyYWN0Qm9vbChqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApilgLFxuICAgICdqc29uJ1xuICBdLFxuICBbXG4gICAgJ0pTT05FeHRyYWN0JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKkpTT05FeHRyYWN0KGpzb25bLCBpbmRpY2VzX29yX2tleXNd4oCmKSoqXG4gIFxuICBQYXJzZXMgYSBKU09OIGFuZCBleHRyYWN0IGEgdmFsdWUgb2YgdGhlIGdpdmVuIENsaWNrSG91c2UgZGF0YSB0eXBlLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvanNvbl9mdW5jdGlvbnMvI2pzb25leHRyYWN0anNvbi1pbmRpY2VzLW9yLWtleXMtcmV0dXJuLXR5cGUpXG4gIGAsXG4gICAgYEpTT05FeHRyYWN0KGpzb25bLCBpbmRpY2VzX29yX2tleXNd4oCmKWAsXG4gICAgJ2pzb24nXG4gIF0sXG4gIFtcbiAgICAnSlNPTkV4dHJhY3RBcnJheVJhdycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipKU09ORXh0cmFjdEFycmF5UmF3KGpzb24pKipcblxuICBSZXR1cm5zIGFuIGFycmF5IG9uIHVucGFyc2VkIGpzb24gYXJyYXkgZWxlbWVudHMgZnJvbSBKU09OIHN0cmluZ1xuICBgLFxuICAgIGBKU09ORXh0cmFjdEFycmF5UmF3KGpzb24pYCxcbiAgICAnanNvbidcbiAgXSxcbiAgJ2luaXRpYWxpemVBZ2dyZWdhdGlvbicsXG4gICdwYXJzZURhdGVUaW1lQmVzdEVmZm9ydFVTJ1xuXVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICAnZGF0YWJhc2UnLFxuICAndGFibGUnLFxuICAndmlldycsXG4gICdhcycsXG4gICdhdHRhY2gnLFxuICAnZHJvcCcsXG4gICdkZXRhY2gnLFxuICAncmVuYW1lJyxcbiAgJ2FsdGVyJyxcbiAgJ3Nob3cnLFxuICAnZGF0YWJhc2VzJyxcbiAgJ3RhYmxlcycsXG4gICdwcm9jZXNzbGlzdCcsXG4gICdkZXNjcmliZScsXG4gICdleGlzdHMnLFxuICAndXNlJyxcbiAgJ3NldCcsXG4gICdvcHRpbWl6ZScsXG4gICdpbnNlcnQnLFxuICAnaW50bycsXG4gICdzZWxlY3QnLFxuICAnZnJvbScsXG4gICdzYW1wbGUnLFxuICAnam9pbicsXG4gICdpbm5lcicsXG4gICdsZWZ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ29uJyxcbiAgJ3doZXJlJyxcbiAgJ3ByZXdoZXJlJyxcbiAgW1xuICAgICdncm91cCcsXG4gICAgJ2tleXdvcmQnLFxuICAgIGBcbiAgKipHUk9VUCBCWSBjb2x1bW5fbmFtZSoqXG4gIGAsXG4gICAgJ0dST1VQIEJZIGNvbHVtbl9uYW1lJyxcbiAgICAnY29sdW1uX25hbWUnXG4gIF0sXG4gIFtcbiAgICAnYmV0d2VlbicsXG4gICAgJ2tleXdvcmQnLFxuICAgIGBcbiAgKipCRVRXRUVOIGNvbmQxIEFORCBjb25kMioqXG4gIFxuICBTaG9ydGN1dCBmb3IgZmlsdGVyIGJldHdlZW4gdHdvIHZhbHVlcy4gXG5gLFxuICAgICdCRVRXRUVOIGNvbmQxIEFORCBjb25kMicsXG4gICAgJ2NvbmQxJ1xuICBdLFxuICAnYnknLFxuICAnd2l0aCcsXG4gICd0b3RhbHMnLFxuICAnaGF2aW5nJyxcbiAgW1xuICAgICdvcmRlcicsXG4gICAgJ2tleXdvcmQnLFxuICAgIGBcbiAgKipPUkRFUiBCWSBjb2x1bW5fbmFtZSoqXG4gIGAsXG4gICAgJ09SREVSIEJZIGNvbHVtbl9uYW1lJyxcbiAgICAnY29sdW1uX25hbWUnXG4gIF0sXG4gICdhc2MnLFxuICAnZGVzYycsXG4gICdkaXN0aW5jdCcsXG4gICdsaW1pdCcsXG4gICd1bmlvbicsXG4gICdhbGwnLFxuICAnZm9ybWF0JyxcbiAgJ2luJyxcbiAgJ2VuZ2luZScsXG4gICdraWxsJyxcbiAgJ3F1ZXJ5JyxcbiAgJ251bGwnLFxuICAnYW5kJyxcbiAgJ2lzJyxcbiAgJ29yJyxcbiAgJ25vdCcsXG4gICd4b3InXG5dXG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xuaW1wb3J0IEluZGVudGF0aW9uIGZyb20gJy4vSW5kZW50YXRpb24nO1xuaW1wb3J0IElubGluZUJsb2NrIGZyb20gJy4vSW5saW5lQmxvY2snO1xuaW1wb3J0IFBhcmFtcyBmcm9tICcuL1BhcmFtcyc7XG5pbXBvcnQgeyB0cmltU3BhY2VzRW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNBbmQsIGlzQmV0d2VlbiwgaXNMaW1pdCB9IGZyb20gJy4vdG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtYXR0ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5sYW5ndWFnZVxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5pbmRlbnRcbiAgICogIEBwYXJhbSB7Qm9vbGVhbn0gY2ZnLnVwcGVyY2FzZVxuICAgKiAgQHBhcmFtIHtJbnRlZ2VyfSBjZmcubGluZXNCZXR3ZWVuUXVlcmllc1xuICAgKiAgQHBhcmFtIHtPYmplY3R9IGNmZy5wYXJhbXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNmZykge1xuICAgIHRoaXMuY2ZnID0gY2ZnO1xuICAgIHRoaXMuaW5kZW50YXRpb24gPSBuZXcgSW5kZW50YXRpb24odGhpcy5jZmcuaW5kZW50KTtcbiAgICB0aGlzLmlubGluZUJsb2NrID0gbmV3IElubGluZUJsb2NrKCk7XG4gICAgdGhpcy5wYXJhbXMgPSBuZXcgUGFyYW1zKHRoaXMuY2ZnLnBhcmFtcyk7XG4gICAgdGhpcy5wcmV2aW91c1Jlc2VydmVkVG9rZW4gPSB7fTtcbiAgICB0aGlzLnRva2VucyA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNRTCBUb2tlbml6ZXIgZm9yIHRoaXMgZm9ybWF0dGVyLCBwcm92aWRlZCBieSBzdWJjbGFzc2VzLlxuICAgKi9cbiAgdG9rZW5pemVyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndG9rZW5pemVyKCkgbm90IGltcGxlbWVudGVkIGJ5IHN1YmNsYXNzJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcm9jZXNzIGFuZCBtb2RpZnkgYSB0b2tlbiBiYXNlZCBvbiBwYXJzZWQgY29udGV4dC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuIFRoZSB0b2tlbiB0byBtb2RpZnlcbiAgICogIEBwYXJhbSB7U3RyaW5nfSB0b2tlbi50eXBlXG4gICAqICBAcGFyYW0ge1N0cmluZ30gdG9rZW4udmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSBuZXcgdG9rZW4gb3IgdGhlIG9yaWdpbmFsXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLnR5cGVcbiAgICogIEByZXR1cm4ge1N0cmluZ30gdG9rZW4udmFsdWVcbiAgICovXG4gIHRva2VuT3ZlcnJpZGUodG9rZW4pIHtcbiAgICAvLyBzdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIG1vZGlmeSB0b2tlbnMgZHVyaW5nIGZvcm1hdHRpbmdcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0cyB3aGl0ZXNwYWNlIGluIGEgU1FMIHN0cmluZyB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVGhlIFNRTCBxdWVyeSBzdHJpbmdcbiAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWQgcXVlcnlcbiAgICovXG4gIGZvcm1hdChxdWVyeSkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbml6ZXIoKS50b2tlbml6ZShxdWVyeSk7XG4gICAgY29uc3QgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmdldEZvcm1hdHRlZFF1ZXJ5RnJvbVRva2VucygpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFF1ZXJ5LnRyaW0oKTtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZFF1ZXJ5RnJvbVRva2VucygpIHtcbiAgICBsZXQgZm9ybWF0dGVkUXVlcnkgPSAnJztcblxuICAgIHRoaXMudG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5PdmVycmlkZSh0b2tlbik7XG5cbiAgICAgIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLkxJTkVfQ09NTUVOVCkge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0TGluZUNvbW1lbnQodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5CTE9DS19DT01NRU5UKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRCbG9ja0NvbW1lbnQodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuID0gdG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVCkge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0VG9wTGV2ZWxSZXNlcnZlZFdvcmROb0luZGVudCh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbiA9IHRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX05FV0xJTkUpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1Jlc2VydmVkVG9rZW4gPSB0b2tlbjtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRCkge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbiA9IHRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLk9QRU5fUEFSRU4pIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdE9wZW5pbmdQYXJlbnRoZXNlcyh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLkNMT1NFX1BBUkVOKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRDbG9zaW5nUGFyZW50aGVzZXModG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5QTEFDRUhPTERFUikge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0UGxhY2Vob2xkZXIodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICcsJykge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0Q29tbWEodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICc6Jykge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0V2l0aFNwYWNlQWZ0ZXIodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICcuJykge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0V2l0aG91dFNwYWNlcyh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi52YWx1ZSA9PT0gJzsnKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRRdWVyeVNlcGFyYXRvcih0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFdpdGhTcGFjZXModG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0dGVkUXVlcnk7XG4gIH1cblxuICBmb3JtYXRMaW5lQ29tbWVudCh0b2tlbiwgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5ICsgdGhpcy5zaG93KHRva2VuKSk7XG4gIH1cblxuICBmb3JtYXRCbG9ja0NvbW1lbnQodG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZSh0aGlzLmFkZE5ld2xpbmUocXVlcnkpICsgdGhpcy5pbmRlbnRDb21tZW50KHRva2VuLnZhbHVlKSk7XG4gIH1cblxuICBpbmRlbnRDb21tZW50KGNvbW1lbnQpIHtcbiAgICByZXR1cm4gY29tbWVudC5yZXBsYWNlKC9cXG5bIFxcdF0qL2d1LCAnXFxuJyArIHRoaXMuaW5kZW50YXRpb24uZ2V0SW5kZW50KCkgKyAnICcpO1xuICB9XG5cbiAgZm9ybWF0VG9wTGV2ZWxSZXNlcnZlZFdvcmROb0luZGVudCh0b2tlbiwgcXVlcnkpIHtcbiAgICB0aGlzLmluZGVudGF0aW9uLmRlY3JlYXNlVG9wTGV2ZWwoKTtcbiAgICBxdWVyeSA9IHRoaXMuYWRkTmV3bGluZShxdWVyeSkgKyB0aGlzLmVxdWFsaXplV2hpdGVzcGFjZSh0aGlzLnNob3codG9rZW4pKTtcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcbiAgfVxuXG4gIGZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkKHRva2VuLCBxdWVyeSkge1xuICAgIHRoaXMuaW5kZW50YXRpb24uZGVjcmVhc2VUb3BMZXZlbCgpO1xuXG4gICAgcXVlcnkgPSB0aGlzLmFkZE5ld2xpbmUocXVlcnkpO1xuXG4gICAgdGhpcy5pbmRlbnRhdGlvbi5pbmNyZWFzZVRvcExldmVsKCk7XG5cbiAgICBxdWVyeSArPSB0aGlzLmVxdWFsaXplV2hpdGVzcGFjZSh0aGlzLnNob3codG9rZW4pKTtcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcbiAgfVxuXG4gIGZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQodG9rZW4sIHF1ZXJ5KSB7XG4gICAgaWYgKGlzQW5kKHRva2VuKSAmJiBpc0JldHdlZW4odGhpcy50b2tlbkxvb2tCZWhpbmQoMikpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3BhY2VzKHRva2VuLCBxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFkZE5ld2xpbmUocXVlcnkpICsgdGhpcy5lcXVhbGl6ZVdoaXRlc3BhY2UodGhpcy5zaG93KHRva2VuKSkgKyAnICc7XG4gIH1cblxuICAvLyBSZXBsYWNlIGFueSBzZXF1ZW5jZSBvZiB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2l0aCBzaW5nbGUgc3BhY2VcbiAgZXF1YWxpemVXaGl0ZXNwYWNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFxzKy9ndSwgJyAnKTtcbiAgfVxuXG4gIC8vIE9wZW5pbmcgcGFyZW50aGVzZXMgaW5jcmVhc2UgdGhlIGJsb2NrIGluZGVudCBsZXZlbCBhbmQgc3RhcnQgYSBuZXcgbGluZVxuICBmb3JtYXRPcGVuaW5nUGFyZW50aGVzZXModG9rZW4sIHF1ZXJ5KSB7XG4gICAgLy8gVGFrZSBvdXQgdGhlIHByZWNlZGluZyBzcGFjZSB1bmxlc3MgdGhlcmUgd2FzIHdoaXRlc3BhY2UgdGhlcmUgaW4gdGhlIG9yaWdpbmFsIHF1ZXJ5XG4gICAgLy8gb3IgYW5vdGhlciBvcGVuaW5nIHBhcmVucyBvciBsaW5lIGNvbW1lbnRcbiAgICBjb25zdCBwcmVzZXJ2ZVdoaXRlc3BhY2VGb3IgPSB7XG4gICAgICBbdG9rZW5UeXBlcy5PUEVOX1BBUkVOXTogdHJ1ZSxcbiAgICAgIFt0b2tlblR5cGVzLkxJTkVfQ09NTUVOVF06IHRydWUsXG4gICAgICBbdG9rZW5UeXBlcy5PUEVSQVRPUl06IHRydWUsXG4gICAgfTtcbiAgICBpZiAoXG4gICAgICB0b2tlbi53aGl0ZXNwYWNlQmVmb3JlLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgIXByZXNlcnZlV2hpdGVzcGFjZUZvclt0aGlzLnRva2VuTG9va0JlaGluZCgpPy50eXBlXVxuICAgICkge1xuICAgICAgcXVlcnkgPSB0cmltU3BhY2VzRW5kKHF1ZXJ5KTtcbiAgICB9XG4gICAgcXVlcnkgKz0gdGhpcy5zaG93KHRva2VuKTtcblxuICAgIHRoaXMuaW5saW5lQmxvY2suYmVnaW5JZlBvc3NpYmxlKHRoaXMudG9rZW5zLCB0aGlzLmluZGV4KTtcblxuICAgIGlmICghdGhpcy5pbmxpbmVCbG9jay5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmluZGVudGF0aW9uLmluY3JlYXNlQmxvY2tMZXZlbCgpO1xuICAgICAgcXVlcnkgPSB0aGlzLmFkZE5ld2xpbmUocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvLyBDbG9zaW5nIHBhcmVudGhlc2VzIGRlY3JlYXNlIHRoZSBibG9jayBpbmRlbnQgbGV2ZWxcbiAgZm9ybWF0Q2xvc2luZ1BhcmVudGhlc2VzKHRva2VuLCBxdWVyeSkge1xuICAgIGlmICh0aGlzLmlubGluZUJsb2NrLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuaW5saW5lQmxvY2suZW5kKCk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3BhY2VBZnRlcih0b2tlbiwgcXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGVudGF0aW9uLmRlY3JlYXNlQmxvY2tMZXZlbCgpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0UGxhY2Vob2xkZXIodG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5ICsgdGhpcy5wYXJhbXMuZ2V0KHRva2VuKSArICcgJztcbiAgfVxuXG4gIC8vIENvbW1hcyBzdGFydCBhIG5ldyBsaW5lICh1bmxlc3Mgd2l0aGluIGlubGluZSBwYXJlbnRoZXNlcyBvciBTUUwgXCJMSU1JVFwiIGNsYXVzZSlcbiAgZm9ybWF0Q29tbWEodG9rZW4sIHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSB0cmltU3BhY2VzRW5kKHF1ZXJ5KSArIHRoaXMuc2hvdyh0b2tlbikgKyAnICc7XG5cbiAgICBpZiAodGhpcy5pbmxpbmVCbG9jay5pc0FjdGl2ZSgpKSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfSBlbHNlIGlmIChpc0xpbWl0KHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuKSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRXaXRoU3BhY2VBZnRlcih0b2tlbiwgcXVlcnkpIHtcbiAgICByZXR1cm4gdHJpbVNwYWNlc0VuZChxdWVyeSkgKyB0aGlzLnNob3codG9rZW4pICsgJyAnO1xuICB9XG5cbiAgZm9ybWF0V2l0aG91dFNwYWNlcyh0b2tlbiwgcXVlcnkpIHtcbiAgICByZXR1cm4gdHJpbVNwYWNlc0VuZChxdWVyeSkgKyB0aGlzLnNob3codG9rZW4pO1xuICB9XG5cbiAgZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgcXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgKyB0aGlzLnNob3codG9rZW4pICsgJyAnO1xuICB9XG5cbiAgZm9ybWF0UXVlcnlTZXBhcmF0b3IodG9rZW4sIHF1ZXJ5KSB7XG4gICAgdGhpcy5pbmRlbnRhdGlvbi5yZXNldEluZGVudGF0aW9uKCk7XG4gICAgcmV0dXJuIHRyaW1TcGFjZXNFbmQocXVlcnkpICsgdGhpcy5zaG93KHRva2VuKSArICdcXG4nLnJlcGVhdCh0aGlzLmNmZy5saW5lc0JldHdlZW5RdWVyaWVzIHx8IDEpO1xuICB9XG5cbiAgLy8gQ29udmVydHMgdG9rZW4gdG8gc3RyaW5nICh1cHBlcmNhc2luZyBpdCBpZiBuZWVkZWQpXG4gIHNob3coeyB0eXBlLCB2YWx1ZSB9KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jZmcudXBwZXJjYXNlICYmXG4gICAgICAodHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRCB8fFxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTCB8fFxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQgfHxcbiAgICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FIHx8XG4gICAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuT1BFTl9QQVJFTiB8fFxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLkNMT1NFX1BBUkVOKVxuICAgICkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBhZGROZXdsaW5lKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSB0cmltU3BhY2VzRW5kKHF1ZXJ5KTtcbiAgICBpZiAoIXF1ZXJ5LmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgcXVlcnkgKz0gJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeSArIHRoaXMuaW5kZW50YXRpb24uZ2V0SW5kZW50KCk7XG4gIH1cblxuICB0b2tlbkxvb2tCZWhpbmQobiA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCAtIG5dO1xuICB9XG5cbiAgdG9rZW5Mb29rQWhlYWQobiA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCArIG5dO1xuICB9XG59XG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBJTkRFTlRfVFlQRV9UT1BfTEVWRUwgPSAndG9wLWxldmVsJztcbmNvbnN0IElOREVOVF9UWVBFX0JMT0NLX0xFVkVMID0gJ2Jsb2NrLWxldmVsJztcblxuLyoqXG4gKiBNYW5hZ2VzIGluZGVudGF0aW9uIGxldmVscy5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGluZGVudGF0aW9uIGxldmVsczpcbiAqXG4gKiAtIEJMT0NLX0xFVkVMIDogaW5jcmVhc2VkIGJ5IG9wZW4tcGFyZW50aGVzaXNcbiAqIC0gVE9QX0xFVkVMIDogaW5jcmVhc2VkIGJ5IFJFU0VSVkVEX1RPUF9MRVZFTCB3b3Jkc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRlbnRhdGlvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5kZW50IEluZGVudCB2YWx1ZSwgZGVmYXVsdCBpcyBcIiAgXCIgKDIgc3BhY2VzKVxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5kZW50KSB7XG4gICAgdGhpcy5pbmRlbnQgPSBpbmRlbnQgfHwgJyAgJztcbiAgICB0aGlzLmluZGVudFR5cGVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IGluZGVudGF0aW9uIHN0cmluZy5cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0SW5kZW50KCkge1xuICAgIHJldHVybiB0aGlzLmluZGVudC5yZXBlYXQodGhpcy5pbmRlbnRUeXBlcy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlcyBpbmRlbnRhdGlvbiBieSBvbmUgdG9wLWxldmVsIGluZGVudC5cbiAgICovXG4gIGluY3JlYXNlVG9wTGV2ZWwoKSB7XG4gICAgdGhpcy5pbmRlbnRUeXBlcy5wdXNoKElOREVOVF9UWVBFX1RPUF9MRVZFTCk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIGluZGVudGF0aW9uIGJ5IG9uZSBibG9jay1sZXZlbCBpbmRlbnQuXG4gICAqL1xuICBpbmNyZWFzZUJsb2NrTGV2ZWwoKSB7XG4gICAgdGhpcy5pbmRlbnRUeXBlcy5wdXNoKElOREVOVF9UWVBFX0JMT0NLX0xFVkVMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgaW5kZW50YXRpb24gYnkgb25lIHRvcC1sZXZlbCBpbmRlbnQuXG4gICAqIERvZXMgbm90aGluZyB3aGVuIHRoZSBwcmV2aW91cyBpbmRlbnQgaXMgbm90IHRvcC1sZXZlbC5cbiAgICovXG4gIGRlY3JlYXNlVG9wTGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMuaW5kZW50VHlwZXMubGVuZ3RoID4gMCAmJiBsYXN0KHRoaXMuaW5kZW50VHlwZXMpID09PSBJTkRFTlRfVFlQRV9UT1BfTEVWRUwpIHtcbiAgICAgIHRoaXMuaW5kZW50VHlwZXMucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlcyBpbmRlbnRhdGlvbiBieSBvbmUgYmxvY2stbGV2ZWwgaW5kZW50LlxuICAgKiBJZiB0aGVyZSBhcmUgdG9wLWxldmVsIGluZGVudHMgd2l0aGluIHRoZSBibG9jay1sZXZlbCBpbmRlbnQsXG4gICAqIHRocm93cyBhd2F5IHRoZXNlIGFzIHdlbGwuXG4gICAqL1xuICBkZWNyZWFzZUJsb2NrTGV2ZWwoKSB7XG4gICAgd2hpbGUgKHRoaXMuaW5kZW50VHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuaW5kZW50VHlwZXMucG9wKCk7XG4gICAgICBpZiAodHlwZSAhPT0gSU5ERU5UX1RZUEVfVE9QX0xFVkVMKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0SW5kZW50YXRpb24oKSB7XG4gICAgdGhpcy5pbmRlbnRUeXBlcyA9IFtdO1xuICB9XG59XG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xuXG5jb25zdCBJTkxJTkVfTUFYX0xFTkdUSCA9IDUwO1xuXG4vKipcbiAqIEJvb2trZWVwZXIgZm9yIGlubGluZSBibG9ja3MuXG4gKlxuICogSW5saW5lIGJsb2NrcyBhcmUgcGFyZW50aGl6ZWQgZXhwcmVzc2lvbnMgdGhhdCBhcmUgc2hvcnRlciB0aGFuIElOTElORV9NQVhfTEVOR1RILlxuICogVGhlc2UgYmxvY2tzIGFyZSBmb3JtYXR0ZWQgb24gYSBzaW5nbGUgbGluZSwgdW5saWtlIGxvbmdlciBwYXJlbnRoaXplZFxuICogZXhwcmVzc2lvbnMgd2hlcmUgb3Blbi1wYXJlbnRoZXNpcyBjYXVzZXMgbmV3bGluZSBhbmQgaW5jcmVhc2Ugb2YgaW5kZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElubGluZUJsb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQmVnaW5zIGlubGluZSBibG9jayB3aGVuIGxvb2thaGVhZCB0aHJvdWdoIHVwY29taW5nIHRva2VucyBkZXRlcm1pbmVzXG4gICAqIHRoYXQgdGhlIGJsb2NrIHdvdWxkIGJlIHNtYWxsZXIgdGhhbiBJTkxJTkVfTUFYX0xFTkdUSC5cbiAgICogQHBhcmFtICB7T2JqZWN0W119IHRva2VucyBBcnJheSBvZiBhbGwgdG9rZW5zXG4gICAqIEBwYXJhbSAge051bWJlcn0gaW5kZXggQ3VycmVudCB0b2tlbiBwb3NpdGlvblxuICAgKi9cbiAgYmVnaW5JZlBvc3NpYmxlKHRva2VucywgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMCAmJiB0aGlzLmlzSW5saW5lQmxvY2sodG9rZW5zLCBpbmRleCkpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA+IDApIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmlzaGVzIGN1cnJlbnQgaW5saW5lIGJsb2NrLlxuICAgKiBUaGVyZSBtaWdodCBiZSBzZXZlcmFsIG5lc3RlZCBvbmVzLlxuICAgKi9cbiAgZW5kKCkge1xuICAgIHRoaXMubGV2ZWwtLTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIHdoZW4gaW5zaWRlIGFuIGlubGluZSBibG9ja1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV2ZWwgPiAwO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBzaG91bGQgYmUgYW4gaW5saW5lIHBhcmVudGhlc2VzIGJsb2NrXG4gIC8vIEV4YW1wbGVzIGFyZSBcIk5PVygpXCIsIFwiQ09VTlQoKilcIiwgXCJpbnQoMTApXCIsIGtleShgc29tZWNvbHVtbmApLCBERUNJTUFMKDcsMilcbiAgaXNJbmxpbmVCbG9jayh0b2tlbnMsIGluZGV4KSB7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBsZW5ndGggKz0gdG9rZW4udmFsdWUubGVuZ3RoO1xuXG4gICAgICAvLyBPdmVycmFuIG1heCBsZW5ndGhcbiAgICAgIGlmIChsZW5ndGggPiBJTkxJTkVfTUFYX0xFTkdUSCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLk9QRU5fUEFSRU4pIHtcbiAgICAgICAgbGV2ZWwrKztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5DTE9TRV9QQVJFTikge1xuICAgICAgICBsZXZlbC0tO1xuICAgICAgICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0ZvcmJpZGRlblRva2VuKHRva2VuKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFJlc2VydmVkIHdvcmRzIHRoYXQgY2F1c2UgbmV3bGluZXMsIGNvbW1lbnRzIGFuZCBzZW1pY29sb25zXG4gIC8vIGFyZSBub3QgYWxsb3dlZCBpbnNpZGUgaW5saW5lIHBhcmVudGhlc2VzIGJsb2NrXG4gIGlzRm9yYmlkZGVuVG9rZW4oeyB0eXBlLCB2YWx1ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMIHx8XG4gICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX05FV0xJTkUgfHxcbiAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuQ09NTUVOVCB8fFxuICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5CTE9DS19DT01NRU5UIHx8XG4gICAgICB2YWx1ZSA9PT0gJzsnXG4gICAgKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBIYW5kbGVzIHBsYWNlaG9sZGVyIHJlcGxhY2VtZW50IHdpdGggZ2l2ZW4gcGFyYW1zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbXMge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYXJhbSB2YWx1ZSB0aGF0IG1hdGNoZXMgZ2l2ZW4gcGxhY2Vob2xkZXIgd2l0aCBwYXJhbSBrZXkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICAgKiAgIEBwYXJhbSB7U3RyaW5nfSB0b2tlbi5rZXkgUGxhY2Vob2xkZXIga2V5XG4gICAqICAgQHBhcmFtIHtTdHJpbmd9IHRva2VuLnZhbHVlIFBsYWNlaG9sZGVyIHZhbHVlXG4gICAqIEByZXR1cm4ge1N0cmluZ30gcGFyYW0gb3IgdG9rZW4udmFsdWUgd2hlbiBwYXJhbXMgYXJlIG1pc3NpbmdcbiAgICovXG4gIGdldCh7IGtleSwgdmFsdWUgfSkge1xuICAgIGlmICghdGhpcy5wYXJhbXMpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyYW1zW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcmFtc1t0aGlzLmluZGV4KytdO1xuICB9XG59XG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xuaW1wb3J0ICogYXMgcmVnZXhGYWN0b3J5IGZyb20gJy4vcmVnZXhGYWN0b3J5JztcbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW5pemVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5yZXNlcnZlZFdvcmRzIFJlc2VydmVkIHdvcmRzIGluIFNRTFxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnJlc2VydmVkVG9wTGV2ZWxXb3JkcyBXb3JkcyB0aGF0IGFyZSBzZXQgdG8gbmV3IGxpbmUgc2VwYXJhdGVseVxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnJlc2VydmVkTmV3bGluZVdvcmRzIFdvcmRzIHRoYXQgYXJlIHNldCB0byBuZXdsaW5lXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcucmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQgV29yZHMgdGhhdCBhcmUgdG9wIGxldmVsIGJ1dCBoYXZlIG5vIGluZGVudGF0aW9uXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcuc3RyaW5nVHlwZXMgU3RyaW5nIHR5cGVzIHRvIGVuYWJsZTogXCJcIiwgJycsIGBgLCBbXSwgTicnXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcub3BlblBhcmVucyBPcGVuaW5nIHBhcmVudGhlc2VzIHRvIGVuYWJsZSwgbGlrZSAoLCBbXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcuY2xvc2VQYXJlbnMgQ2xvc2luZyBwYXJlbnRoZXNlcyB0byBlbmFibGUsIGxpa2UgKSwgXVxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLmluZGV4ZWRQbGFjZWhvbGRlclR5cGVzIFByZWZpeGVzIGZvciBpbmRleGVkIHBsYWNlaG9sZGVycywgbGlrZSA/XG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcubmFtZWRQbGFjZWhvbGRlclR5cGVzIFByZWZpeGVzIGZvciBuYW1lZCBwbGFjZWhvbGRlcnMsIGxpa2UgQCBhbmQgOlxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLmxpbmVDb21tZW50VHlwZXMgTGluZSBjb21tZW50cyB0byBlbmFibGUsIGxpa2UgIyBhbmQgLS1cbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5zcGVjaWFsV29yZENoYXJzIFNwZWNpYWwgY2hhcnMgdGhhdCBjYW4gYmUgZm91bmQgaW5zaWRlIG9mIHdvcmRzLCBsaWtlIEAgYW5kICNcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IFtjZmcub3BlcmF0b3JdIEFkZGl0aW9uYWwgb3BlcmF0b3JzIHRvIHJlY29nbml6ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY2ZnKSB7XG4gICAgdGhpcy5XSElURVNQQUNFX1JFR0VYID0gL14oXFxzKykvdTtcbiAgICB0aGlzLk5VTUJFUl9SRUdFWCA9IC9eKCgtXFxzKik/WzAtOV0rKFxcLlswLTldKyk/KFtlRV0tP1swLTldKyhcXC5bMC05XSspPyk/fDB4WzAtOWEtZkEtRl0rfDBiWzAxXSspXFxiL3U7XG5cbiAgICB0aGlzLk9QRVJBVE9SX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZU9wZXJhdG9yUmVnZXgoW1xuICAgICAgJzw+JyxcbiAgICAgICc8PScsXG4gICAgICAnPj0nLFxuICAgICAgLi4uKGNmZy5vcGVyYXRvcnMgfHwgW10pLFxuICAgIF0pO1xuXG4gICAgdGhpcy5CTE9DS19DT01NRU5UX1JFR0VYID0gL14oXFwvXFwqW15dKj8oPzpcXCpcXC98JCkpL3U7XG4gICAgdGhpcy5MSU5FX0NPTU1FTlRfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlTGluZUNvbW1lbnRSZWdleChjZmcubGluZUNvbW1lbnRUeXBlcyk7XG5cbiAgICB0aGlzLlJFU0VSVkVEX1RPUF9MRVZFTF9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVSZXNlcnZlZFdvcmRSZWdleChjZmcucmVzZXJ2ZWRUb3BMZXZlbFdvcmRzKTtcbiAgICB0aGlzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlRfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoXG4gICAgICBjZmcucmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnRcbiAgICApO1xuICAgIHRoaXMuUkVTRVJWRURfTkVXTElORV9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVSZXNlcnZlZFdvcmRSZWdleChjZmcucmVzZXJ2ZWROZXdsaW5lV29yZHMpO1xuICAgIHRoaXMuUkVTRVJWRURfUExBSU5fUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoY2ZnLnJlc2VydmVkV29yZHMpO1xuXG4gICAgdGhpcy5XT1JEX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVdvcmRSZWdleChjZmcuc3BlY2lhbFdvcmRDaGFycyk7XG4gICAgdGhpcy5TVFJJTkdfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlU3RyaW5nUmVnZXgoY2ZnLnN0cmluZ1R5cGVzKTtcblxuICAgIHRoaXMuT1BFTl9QQVJFTl9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVQYXJlblJlZ2V4KGNmZy5vcGVuUGFyZW5zKTtcbiAgICB0aGlzLkNMT1NFX1BBUkVOX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVBhcmVuUmVnZXgoY2ZnLmNsb3NlUGFyZW5zKTtcblxuICAgIHRoaXMuSU5ERVhFRF9QTEFDRUhPTERFUl9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVQbGFjZWhvbGRlclJlZ2V4KFxuICAgICAgY2ZnLmluZGV4ZWRQbGFjZWhvbGRlclR5cGVzLFxuICAgICAgJ1swLTldKidcbiAgICApO1xuICAgIHRoaXMuSURFTlRfTkFNRURfUExBQ0VIT0xERVJfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGxhY2Vob2xkZXJSZWdleChcbiAgICAgIGNmZy5uYW1lZFBsYWNlaG9sZGVyVHlwZXMsXG4gICAgICAnW2EtekEtWjAtOS5fJF0rJ1xuICAgICk7XG4gICAgdGhpcy5TVFJJTkdfTkFNRURfUExBQ0VIT0xERVJfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGxhY2Vob2xkZXJSZWdleChcbiAgICAgIGNmZy5uYW1lZFBsYWNlaG9sZGVyVHlwZXMsXG4gICAgICByZWdleEZhY3RvcnkuY3JlYXRlU3RyaW5nUGF0dGVybihjZmcuc3RyaW5nVHlwZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIFNRTCBzdHJpbmcgYW5kIGJyZWFrcyBpdCBpbnRvIHRva2Vucy5cbiAgICogRWFjaCB0b2tlbiBpcyBhbiBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBTUUwgc3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSB0b2tlbnMgQW4gYXJyYXkgb2YgdG9rZW5zLlxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi50eXBlXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLnZhbHVlXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLndoaXRlc3BhY2VCZWZvcmUgUHJlY2VkaW5nIHdoaXRlc3BhY2VcbiAgICovXG4gIHRva2VuaXplKGlucHV0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgbGV0IHRva2VuO1xuXG4gICAgLy8gS2VlcCBwcm9jZXNzaW5nIHRoZSBzdHJpbmcgdW50aWwgaXQgaXMgZW1wdHlcbiAgICB3aGlsZSAoaW5wdXQubGVuZ3RoKSB7XG4gICAgICAvLyBncmFiIGFueSBwcmVjZWRpbmcgd2hpdGVzcGFjZVxuICAgICAgY29uc3Qgd2hpdGVzcGFjZUJlZm9yZSA9IHRoaXMuZ2V0V2hpdGVzcGFjZShpbnB1dCk7XG4gICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZyh3aGl0ZXNwYWNlQmVmb3JlLmxlbmd0aCk7XG5cbiAgICAgIGlmIChpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHRva2VuIGFuZCB0aGUgdG9rZW4gdHlwZVxuICAgICAgICB0b2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKGlucHV0LCB0b2tlbik7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIHN0cmluZ1xuICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZyh0b2tlbi52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIHRva2Vucy5wdXNoKHsgLi4udG9rZW4sIHdoaXRlc3BhY2VCZWZvcmUgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRXaGl0ZXNwYWNlKGlucHV0KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHRoaXMuV0hJVEVTUEFDRV9SRUdFWCk7XG4gICAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogJyc7XG4gIH1cblxuICBnZXROZXh0VG9rZW4oaW5wdXQsIHByZXZpb3VzVG9rZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRDb21tZW50VG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldFN0cmluZ1Rva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXRPcGVuUGFyZW5Ub2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0Q2xvc2VQYXJlblRva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXROdW1iZXJUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0UmVzZXJ2ZWRXb3JkVG9rZW4oaW5wdXQsIHByZXZpb3VzVG9rZW4pIHx8XG4gICAgICB0aGlzLmdldFdvcmRUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0T3BlcmF0b3JUb2tlbihpbnB1dClcbiAgICApO1xuICB9XG5cbiAgZ2V0Q29tbWVudFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGluZUNvbW1lbnRUb2tlbihpbnB1dCkgfHwgdGhpcy5nZXRCbG9ja0NvbW1lbnRUb2tlbihpbnB1dCk7XG4gIH1cblxuICBnZXRMaW5lQ29tbWVudFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLkxJTkVfQ09NTUVOVCxcbiAgICAgIHJlZ2V4OiB0aGlzLkxJTkVfQ09NTUVOVF9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJsb2NrQ29tbWVudFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLkJMT0NLX0NPTU1FTlQsXG4gICAgICByZWdleDogdGhpcy5CTE9DS19DT01NRU5UX1JFR0VYLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RyaW5nVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuU1RSSU5HLFxuICAgICAgcmVnZXg6IHRoaXMuU1RSSU5HX1JFR0VYLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0T3BlblBhcmVuVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuT1BFTl9QQVJFTixcbiAgICAgIHJlZ2V4OiB0aGlzLk9QRU5fUEFSRU5fUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRDbG9zZVBhcmVuVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuQ0xPU0VfUEFSRU4sXG4gICAgICByZWdleDogdGhpcy5DTE9TRV9QQVJFTl9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRJZGVudE5hbWVkUGxhY2Vob2xkZXJUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0U3RyaW5nTmFtZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXRJbmRleGVkUGxhY2Vob2xkZXJUb2tlbihpbnB1dClcbiAgICApO1xuICB9XG5cbiAgZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQbGFjZWhvbGRlclRva2VuV2l0aEtleSh7XG4gICAgICBpbnB1dCxcbiAgICAgIHJlZ2V4OiB0aGlzLklERU5UX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYLFxuICAgICAgcGFyc2VLZXk6ICh2KSA9PiB2LnNsaWNlKDEpLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RyaW5nTmFtZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGxhY2Vob2xkZXJUb2tlbldpdGhLZXkoe1xuICAgICAgaW5wdXQsXG4gICAgICByZWdleDogdGhpcy5TVFJJTkdfTkFNRURfUExBQ0VIT0xERVJfUkVHRVgsXG4gICAgICBwYXJzZUtleTogKHYpID0+XG4gICAgICAgIHRoaXMuZ2V0RXNjYXBlZFBsYWNlaG9sZGVyS2V5KHsga2V5OiB2LnNsaWNlKDIsIC0xKSwgcXVvdGVDaGFyOiB2LnNsaWNlKC0xKSB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEluZGV4ZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGxhY2Vob2xkZXJUb2tlbldpdGhLZXkoe1xuICAgICAgaW5wdXQsXG4gICAgICByZWdleDogdGhpcy5JTkRFWEVEX1BMQUNFSE9MREVSX1JFR0VYLFxuICAgICAgcGFyc2VLZXk6ICh2KSA9PiB2LnNsaWNlKDEpLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXJUb2tlbldpdGhLZXkoeyBpbnB1dCwgcmVnZXgsIHBhcnNlS2V5IH0pIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goeyBpbnB1dCwgcmVnZXgsIHR5cGU6IHRva2VuVHlwZXMuUExBQ0VIT0xERVIgfSk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0b2tlbi5rZXkgPSBwYXJzZUtleSh0b2tlbi52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIGdldEVzY2FwZWRQbGFjZWhvbGRlcktleSh7IGtleSwgcXVvdGVDaGFyIH0pIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoJ1xcXFwnICsgcXVvdGVDaGFyKSwgJ2d1JyksIHF1b3RlQ2hhcik7XG4gIH1cblxuICAvLyBEZWNpbWFsLCBiaW5hcnksIG9yIGhleCBudW1iZXJzXG4gIGdldE51bWJlclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLk5VTUJFUixcbiAgICAgIHJlZ2V4OiB0aGlzLk5VTUJFUl9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFB1bmN0dWF0aW9uIGFuZCBzeW1ib2xzXG4gIGdldE9wZXJhdG9yVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuT1BFUkFUT1IsXG4gICAgICByZWdleDogdGhpcy5PUEVSQVRPUl9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlc2VydmVkV29yZFRva2VuKGlucHV0LCBwcmV2aW91c1Rva2VuKSB7XG4gICAgLy8gQSByZXNlcnZlZCB3b3JkIGNhbm5vdCBiZSBwcmVjZWRlZCBieSBhIFwiLlwiXG4gICAgLy8gdGhpcyBtYWtlcyBpdCBzbyBpbiBcIm15dGFibGUuZnJvbVwiLCBcImZyb21cIiBpcyBub3QgY29uc2lkZXJlZCBhIHJlc2VydmVkIHdvcmRcbiAgICBpZiAocHJldmlvdXNUb2tlbiAmJiBwcmV2aW91c1Rva2VuLnZhbHVlICYmIHByZXZpb3VzVG9rZW4udmFsdWUgPT09ICcuJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXROZXdsaW5lUmVzZXJ2ZWRUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuTm9JbmRlbnQoaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldFBsYWluUmVzZXJ2ZWRUb2tlbihpbnB1dClcbiAgICApO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTCxcbiAgICAgIHJlZ2V4OiB0aGlzLlJFU0VSVkVEX1RPUF9MRVZFTF9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldE5ld2xpbmVSZXNlcnZlZFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVEX05FV0xJTkUsXG4gICAgICByZWdleDogdGhpcy5SRVNFUlZFRF9ORVdMSU5FX1JFR0VYLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuTm9JbmRlbnQoaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVCxcbiAgICAgIHJlZ2V4OiB0aGlzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlRfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRQbGFpblJlc2VydmVkVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuUkVTRVJWRUQsXG4gICAgICByZWdleDogdGhpcy5SRVNFUlZFRF9QTEFJTl9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFdvcmRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5XT1JELFxuICAgICAgcmVnZXg6IHRoaXMuV09SRF9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRva2VuT25GaXJzdE1hdGNoKHsgaW5wdXQsIHR5cGUsIHJlZ2V4IH0pIHtcbiAgICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXMgPyB7IHR5cGUsIHZhbHVlOiBtYXRjaGVzWzFdIH0gOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGVzY2FwZVJlZ0V4cCwgaXNFbXB0eSwgc29ydEJ5TGVuZ3RoRGVzYyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yUmVnZXgobXVsdGlMZXR0ZXJPcGVyYXRvcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgYF4oJHtzb3J0QnlMZW5ndGhEZXNjKG11bHRpTGV0dGVyT3BlcmF0b3JzKS5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCd8Jyl9fC4pYCxcbiAgICAndSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmVDb21tZW50UmVnZXgobGluZUNvbW1lbnRUeXBlcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICBgXigoPzoke2xpbmVDb21tZW50VHlwZXMubWFwKChjKSA9PiBlc2NhcGVSZWdFeHAoYykpLmpvaW4oJ3wnKX0pLio/KSg/OlxcclxcbnxcXHJ8XFxufCQpYCxcbiAgICAndSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc2VydmVkV29yZFJlZ2V4KHJlc2VydmVkV29yZHMpIHtcbiAgaWYgKHJlc2VydmVkV29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXGIkYCwgJ3UnKTtcbiAgfVxuICBjb25zdCByZXNlcnZlZFdvcmRzUGF0dGVybiA9IHNvcnRCeUxlbmd0aERlc2MocmVzZXJ2ZWRXb3JkcylcbiAgICAuam9pbignfCcpXG4gICAgLnJlcGxhY2UoLyAvZ3UsICdcXFxccysnKVxuICAgIC5yZXBsYWNlKCd7JScsICdcXFxceyUnKVxuICAgIC5yZXBsYWNlKCclfScsICclXFxcXH0nKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4oJHtyZXNlcnZlZFdvcmRzUGF0dGVybn0pYCwgJ2l1Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JkUmVnZXgoc3BlY2lhbENoYXJzID0gW10pIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgYF4oW1xcXFxwe0FscGhhYmV0aWN9XFxcXHB7TWFya31cXFxccHtEZWNpbWFsX051bWJlcn1cXFxccHtDb25uZWN0b3JfUHVuY3R1YXRpb259XFxcXHB7Sm9pbl9Db250cm9sfSR7c3BlY2lhbENoYXJzLmpvaW4oXG4gICAgICAnJ1xuICAgICl9XSspYCxcbiAgICAndSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ1JlZ2V4KHN0cmluZ1R5cGVzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBjcmVhdGVTdHJpbmdQYXR0ZXJuKHN0cmluZ1R5cGVzKSArICcpJywgJ3UnKTtcbn1cblxuLy8gVGhpcyBlbmFibGVzIHRoZSBmb2xsb3dpbmcgc3RyaW5nIHBhdHRlcm5zOlxuLy8gMS4gYmFja3RpY2sgcXVvdGVkIHN0cmluZyB1c2luZyBgYCB0byBlc2NhcGVcbi8vIDIuIHNxdWFyZSBicmFja2V0IHF1b3RlZCBzdHJpbmcgKFNRTCBTZXJ2ZXIpIHVzaW5nIF1dIHRvIGVzY2FwZVxuLy8gMy4gZG91YmxlIHF1b3RlZCBzdHJpbmcgdXNpbmcgXCJcIiBvciBcXFwiIHRvIGVzY2FwZVxuLy8gNC4gc2luZ2xlIHF1b3RlZCBzdHJpbmcgdXNpbmcgJycgb3IgXFwnIHRvIGVzY2FwZVxuLy8gNS4gbmF0aW9uYWwgY2hhcmFjdGVyIHF1b3RlZCBzdHJpbmcgdXNpbmcgTicnIG9yIE5cXCcgdG8gZXNjYXBlXG4vLyA2LiBVbmljb2RlIHNpbmdsZS1xdW90ZWQgc3RyaW5nIHVzaW5nIFxcJyB0byBlc2NhcGVcbi8vIDcuIFVuaWNvZGUgZG91YmxlLXF1b3RlZCBzdHJpbmcgdXNpbmcgXFxcIiB0byBlc2NhcGVcbi8vIDguIFBvc3RncmVTUUwgZG9sbGFyLXF1b3RlZCBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyaW5nUGF0dGVybihzdHJpbmdUeXBlcykge1xuICBjb25zdCBwYXR0ZXJucyA9IHtcbiAgICAnYGAnOiAnKChgW15gXSooJHxgKSkrKScsXG4gICAgJ3t9JzogJygoXFxcXHtbXlxcXFx9XSooJHxcXFxcfSkpKyknLFxuICAgICdbXSc6ICcoKFxcXFxbW15cXFxcXV0qKCR8XFxcXF0pKShcXFxcXVteXFxcXF1dKigkfFxcXFxdKSkqKScsXG4gICAgJ1wiXCInOiAnKChcIlteXCJcXFxcXFxcXF0qKD86XFxcXFxcXFwuW15cIlxcXFxcXFxcXSopKihcInwkKSkrKScsXG4gICAgXCInJ1wiOiBcIigoJ1teJ1xcXFxcXFxcXSooPzpcXFxcXFxcXC5bXidcXFxcXFxcXF0qKSooJ3wkKSkrKVwiLFxuICAgIFwiTicnXCI6IFwiKChOJ1teJ1xcXFxcXFxcXSooPzpcXFxcXFxcXC5bXidcXFxcXFxcXF0qKSooJ3wkKSkrKVwiLFxuICAgIFwiVSYnJ1wiOiBcIigoVSYnW14nXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteJ1xcXFxcXFxcXSopKignfCQpKSspXCIsXG4gICAgJ1UmXCJcIic6ICcoKFUmXCJbXlwiXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteXCJcXFxcXFxcXF0qKSooXCJ8JCkpKyknLFxuICAgICQkOiAnKCg/PHRhZz5cXFxcJFxcXFx3KlxcXFwkKVtcXFxcc1xcXFxTXSo/KD86XFxcXGs8dGFnPnwkKSknLFxuICB9O1xuXG4gIHJldHVybiBzdHJpbmdUeXBlcy5tYXAoKHQpID0+IHBhdHRlcm5zW3RdKS5qb2luKCd8Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJlblJlZ2V4KHBhcmVucykge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGFyZW5zLm1hcChlc2NhcGVQYXJlbikuam9pbignfCcpICsgJyknLCAnaXUnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUGFyZW4ocGFyZW4pIHtcbiAgaWYgKHBhcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIEEgc2luZ2xlIHB1bmN0dWF0aW9uIGNoYXJhY3RlclxuICAgIHJldHVybiBlc2NhcGVSZWdFeHAocGFyZW4pO1xuICB9IGVsc2Uge1xuICAgIC8vIGxvbmdlciB3b3JkXG4gICAgcmV0dXJuICdcXFxcYicgKyBwYXJlbiArICdcXFxcYic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgodHlwZXMsIHBhdHRlcm4pIHtcbiAgaWYgKGlzRW1wdHkodHlwZXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHR5cGVzUmVnZXggPSB0eXBlcy5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCd8Jyk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4oKD86JHt0eXBlc1JlZ2V4fSkoPzoke3BhdHRlcm59KSlgLCAndScpO1xufVxuIiwiaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi90b2tlblR5cGVzJztcblxuY29uc3QgaXNUb2tlbiA9ICh0eXBlLCByZWdleCkgPT4gKHRva2VuKSA9PiB0b2tlbj8udHlwZSA9PT0gdHlwZSAmJiByZWdleC50ZXN0KHRva2VuPy52YWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBpc0FuZCA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FLCAvXkFORCQvaXUpO1xuXG5leHBvcnQgY29uc3QgaXNCZXR3ZWVuID0gaXNUb2tlbih0b2tlblR5cGVzLlJFU0VSVkVELCAvXkJFVFdFRU4kL2l1KTtcblxuZXhwb3J0IGNvbnN0IGlzTGltaXQgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMLCAvXkxJTUlUJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsIC9eU0VUJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc0J5ID0gaXNUb2tlbih0b2tlblR5cGVzLlJFU0VSVkVELCAvXkJZJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc1dpbmRvdyA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsIC9eV0lORE9XJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc0VuZCA9IGlzVG9rZW4odG9rZW5UeXBlcy5DTE9TRV9QQVJFTiwgL15FTkQkL2l1KTtcbiIsIi8qKlxuICogQ29uc3RhbnRzIGZvciB0b2tlbiB0eXBlc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFdPUkQ6ICd3b3JkJyxcbiAgU1RSSU5HOiAnc3RyaW5nJyxcbiAgUkVTRVJWRUQ6ICdyZXNlcnZlZCcsXG4gIFJFU0VSVkVEX1RPUF9MRVZFTDogJ3Jlc2VydmVkLXRvcC1sZXZlbCcsXG4gIFJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQ6ICdyZXNlcnZlZC10b3AtbGV2ZWwtbm8taW5kZW50JyxcbiAgUkVTRVJWRURfTkVXTElORTogJ3Jlc2VydmVkLW5ld2xpbmUnLFxuICBPUEVSQVRPUjogJ29wZXJhdG9yJyxcbiAgT1BFTl9QQVJFTjogJ29wZW4tcGFyZW4nLFxuICBDTE9TRV9QQVJFTjogJ2Nsb3NlLXBhcmVuJyxcbiAgTElORV9DT01NRU5UOiAnbGluZS1jb21tZW50JyxcbiAgQkxPQ0tfQ09NTUVOVDogJ2Jsb2NrLWNvbW1lbnQnLFxuICBOVU1CRVI6ICdudW1iZXInLFxuICBQTEFDRUhPTERFUjogJ3BsYWNlaG9sZGVyJyxcbn07XG4iLCJpbXBvcnQga2V5d29yZHMgZnJvbSAnZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9rZXl3b3Jkcyc7XG5pbXBvcnQgYnVpbHRpbnMgZnJvbSAnZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9idWlsdGlucyc7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gJy4uL2NvcmUvRm9ybWF0dGVyJztcbmltcG9ydCBUb2tlbml6ZXIgZnJvbSAnLi4vY29yZS9Ub2tlbml6ZXInO1xuXG5jb25zdCByZXNlcnZlZFdvcmRzID0gW1xuICAuLi5rZXl3b3Jkcy5tYXAoKGl0ZW0pID0+IChBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW0pKSxcbiAgLi4uYnVpbHRpbnMubWFwKChpdGVtKSA9PiAoQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtKSksXG5dO1xuXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXG4gICdDQVNFJyxcbiAgJ0VORCcsXG4gICdFWENFUFQnLFxuICAneyUgZW5kICV9JyxcbiAgJ0ZST00nLFxuICAnT1JERVIgQlknLFxuICAnSEFWSU5HJyxcbiAgJ0dST1VQIEJZJyxcbiAgJ0xJTUlUJyxcbiAgJ1NFTEVDVCcsXG4gICdXSEVSRScsXG4gICdXSVRIJyxcbiAgJ1BSRVdIRVJFJyxcbl07XG5cbmNvbnN0IHJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50ID0gWydVTklPTicsICdVTklPTiBBTEwnXTtcblxuY29uc3QgcmVzZXJ2ZWROZXdsaW5lV29yZHMgPSBbXG4gICdBTkQnLFxuICAneyUnLFxuICAnRUxTRScsXG4gICdPUicsXG4gICdXSEVOJyxcbiAgJ0pPSU4nLFxuICAnSU5ORVIgSk9JTicsXG4gICdBTlkgTEVGVCBKT0lOJyxcbiAgJ0FOWSBSSUdIVCBKT0lOJyxcbiAgJ0FOWSBJTk5FUiBKT0lOJyxcbiAgJ0xFRlQgSk9JTicsXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxuICAnUklHSFQgSk9JTicsXG4gICdSSUdIVCBPVVRFUiBKT0lOJyxcbiAgJ0ZVTEwgSk9JTicsXG4gICdGVUxMIE9VVEVSIEpPSU4nLFxuICAnQ1JPU1MgSk9JTicsXG4gICdOQVRVUkFMIEpPSU4nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueWJpcmRGb3JtYXR0ZXIgZXh0ZW5kcyBGb3JtYXR0ZXIge1xuICB0b2tlbml6ZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xuICAgICAgcmVzZXJ2ZWRXb3JkcyxcbiAgICAgIHJlc2VydmVkVG9wTGV2ZWxXb3JkcyxcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxuICAgICAgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQsXG4gICAgICBzdHJpbmdUeXBlczogW2BcIlwiYCwgXCInJ1wiLCBcIlUmJydcIiwgJ1UmXCJcIicsICckJCddLFxuICAgICAgb3BlblBhcmVuczogWycoJywgJ1snXSxcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnXSddLFxuICAgICAgaW5kZXhlZFBsYWNlaG9sZGVyVHlwZXM6IFsnJCddLFxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbXSxcbiAgICAgIGxpbmVDb21tZW50VHlwZXM6IFsnLS0nXSxcbiAgICAgIHNwZWNpYWxXb3JkQ2hhcnM6IFsneyUnLCAnJX0nLCAne3snLCAnfX0nXSxcbiAgICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnIT0nLFxuICAgICAgICAnPDwnLFxuICAgICAgICAnPj4nLFxuICAgICAgICAnfHwvJyxcbiAgICAgICAgJ3wvJyxcbiAgICAgICAgJzo6JyxcbiAgICAgICAgJy0+PicsXG4gICAgICAgICctPicsXG4gICAgICAgICd+fionLFxuICAgICAgICAnfn4nLFxuICAgICAgICAnIX5+KicsXG4gICAgICAgICchfn4nLFxuICAgICAgICAnfionLFxuICAgICAgICAnIX4qJyxcbiAgICAgICAgJyF+JyxcbiAgICAgICAgJyEhJyxcbiAgICAgICAgJyUnLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IERiMkZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9EYjJGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IE1hcmlhRGJGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvTWFyaWFEYkZvcm1hdHRlcic7XG4vLyBpbXBvcnQgTXlTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvTXlTcWxGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IE4xcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvTjFxbEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgUGxTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvUGxTcWxGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IFBvc3RncmVTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvUG9zdGdyZVNxbEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgUmVkc2hpZnRGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvUmVkc2hpZnRGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IFNwYXJrU3FsRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL1NwYXJrU3FsRm9ybWF0dGVyJztcbi8vIGltcG9ydCBUU3FsRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL1RTcWxGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IFN0YW5kYXJkU3FsRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL1N0YW5kYXJkU3FsRm9ybWF0dGVyJztcbmltcG9ydCBUaW55YmlyZEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9UaW55YmlyZEZvcm1hdHRlcic7XG5cbmNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIGRiMjogRGIyRm9ybWF0dGVyLFxuICAvLyBtYXJpYWRiOiBNYXJpYURiRm9ybWF0dGVyLFxuICAvLyBteXNxbDogTXlTcWxGb3JtYXR0ZXIsXG4gIC8vIG4xcWw6IE4xcWxGb3JtYXR0ZXIsXG4gIC8vIHBsc3FsOiBQbFNxbEZvcm1hdHRlcixcbiAgLy8gcG9zdGdyZXNxbDogUG9zdGdyZVNxbEZvcm1hdHRlcixcbiAgLy8gcmVkc2hpZnQ6IFJlZHNoaWZ0Rm9ybWF0dGVyLFxuICAvLyBzcGFyazogU3BhcmtTcWxGb3JtYXR0ZXIsXG4gIC8vIHNxbDogU3RhbmRhcmRTcWxGb3JtYXR0ZXIsXG4gIC8vIHRzcWw6IFRTcWxGb3JtYXR0ZXIsXG4gIHRpbnliaXJkOiBUaW55YmlyZEZvcm1hdHRlcixcbn07XG5cbi8qKlxuICogRm9ybWF0IHdoaXRlc3BhY2UgaW4gYSBxdWVyeSB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeVxuICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICogIEBwYXJhbSB7U3RyaW5nfSBjZmcubGFuZ3VhZ2UgUXVlcnkgbGFuZ3VhZ2UsIGRlZmF1bHQgaXMgU3RhbmRhcmQgU1FMXG4gKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5pbmRlbnQgQ2hhcmFjdGVycyB1c2VkIGZvciBpbmRlbnRhdGlvbiwgZGVmYXVsdCBpcyBcIiAgXCIgKDIgc3BhY2VzKVxuICogIEBwYXJhbSB7Qm9vbGVhbn0gY2ZnLnVwcGVyY2FzZSBDb252ZXJ0cyBrZXl3b3JkcyB0byB1cHBlcmNhc2VcbiAqICBAcGFyYW0ge0ludGVnZXJ9IGNmZy5saW5lc0JldHdlZW5RdWVyaWVzIEhvdyBtYW55IGxpbmUgYnJlYWtzIGJldHdlZW4gcXVlcmllc1xuICogIEBwYXJhbSB7T2JqZWN0fSBjZmcucGFyYW1zIENvbGxlY3Rpb24gb2YgcGFyYW1zIGZvciBwbGFjZWhvbGRlciByZXBsYWNlbWVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gKHF1ZXJ5LCBjZmcgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBxdWVyeSBhcmd1bWVudC4gRXh0ZWN0ZWQgc3RyaW5nLCBpbnN0ZWFkIGdvdCAnICsgdHlwZW9mIHF1ZXJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVGlueWJpcmRGb3JtYXR0ZXIoY2ZnKS5mb3JtYXQocXVlcnkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZERpYWxlY3RzID0gT2JqZWN0LmtleXMoZm9ybWF0dGVycyk7XG4iLCIvLyBPbmx5IHJlbW92ZXMgc3BhY2VzLCBub3QgbmV3bGluZXNcbmV4cG9ydCBjb25zdCB0cmltU3BhY2VzRW5kID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL1sgXFx0XSskL3UsICcnKTtcblxuLy8gTGFzdCBlbGVtZW50IGZyb20gYXJyYXlcbmV4cG9ydCBjb25zdCBsYXN0ID0gKGFycikgPT4gYXJyW2Fyci5sZW5ndGggLSAxXTtcblxuLy8gVHJ1ZSBhcnJheSBpcyBlbXB0eSwgb3IgaXQncyBub3QgYW4gYXJyYXkgYXQgYWxsXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChhcnIpID0+ICFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA9PT0gMDtcblxuLy8gRXNjYXBlcyByZWdleCBzcGVjaWFsIGNoYXJzXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9ndSwgJ1xcXFwkJicpO1xuXG4vLyBTb3J0cyBzdHJpbmdzIGJ5IGxlbmd0aCwgc28gdGhhdCBsb25nZXIgb25lcyBhcmUgZmlyc3Rcbi8vIEFsc28gc29ydHMgYWxwaGFiZXRpY2FsbHkgYWZ0ZXIgc29ydGluZyBieSBsZW5ndGguXG5leHBvcnQgY29uc3Qgc29ydEJ5TGVuZ3RoRGVzYyA9IChzdHJpbmdzKSA9PlxuICBzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aCB8fCBhLmxvY2FsZUNvbXBhcmUoYik7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==