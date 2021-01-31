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

  var reservedWordsPattern = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortByLengthDesc"])(reservedWords).join('|').replace(/ /g, '\\s+');
  return new RegExp("^(".concat(reservedWordsPattern, ")\\b"), 'iu');
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
var reservedTopLevelWords = ['CASE', 'END', 'EXCEPT', 'FROM', 'ORDER BY', 'HAVING', 'GROUP BY', 'LIMIT', 'SELECT', 'WHERE', 'WITH', 'PREWHERE'];
var reservedTopLevelWordsNoIndent = ['UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', 'JOIN', 'INNER JOIN', 'ANY LEFT JOIN', 'ANY RIGHT JOIN', 'ANY INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NxbEZvcm1hdHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9ub2RlX21vZHVsZXMvZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9idWlsdGlucy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9ub2RlX21vZHVsZXMvZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9Gb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5saW5lQmxvY2suanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvUGFyYW1zLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9jb3JlL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9yZWdleEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW5UeXBlcy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL1RpbnliaXJkRm9ybWF0dGVyLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9zcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkZvcm1hdHRlciIsImNmZyIsImluZGVudGF0aW9uIiwiSW5kZW50YXRpb24iLCJpbmRlbnQiLCJpbmxpbmVCbG9jayIsIklubGluZUJsb2NrIiwicGFyYW1zIiwiUGFyYW1zIiwicHJldmlvdXNSZXNlcnZlZFRva2VuIiwidG9rZW5zIiwiaW5kZXgiLCJFcnJvciIsInRva2VuIiwicXVlcnkiLCJ0b2tlbml6ZXIiLCJ0b2tlbml6ZSIsImZvcm1hdHRlZFF1ZXJ5IiwiZ2V0Rm9ybWF0dGVkUXVlcnlGcm9tVG9rZW5zIiwidHJpbSIsImZvckVhY2giLCJ0b2tlbk92ZXJyaWRlIiwidHlwZSIsInRva2VuVHlwZXMiLCJMSU5FX0NPTU1FTlQiLCJmb3JtYXRMaW5lQ29tbWVudCIsIkJMT0NLX0NPTU1FTlQiLCJmb3JtYXRCbG9ja0NvbW1lbnQiLCJSRVNFUlZFRF9UT1BfTEVWRUwiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCIsIlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZE5vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORSIsImZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQiLCJSRVNFUlZFRCIsImZvcm1hdFdpdGhTcGFjZXMiLCJPUEVOX1BBUkVOIiwiZm9ybWF0T3BlbmluZ1BhcmVudGhlc2VzIiwiQ0xPU0VfUEFSRU4iLCJmb3JtYXRDbG9zaW5nUGFyZW50aGVzZXMiLCJQTEFDRUhPTERFUiIsImZvcm1hdFBsYWNlaG9sZGVyIiwidmFsdWUiLCJmb3JtYXRDb21tYSIsImZvcm1hdFdpdGhTcGFjZUFmdGVyIiwiZm9ybWF0V2l0aG91dFNwYWNlcyIsImZvcm1hdFF1ZXJ5U2VwYXJhdG9yIiwiYWRkTmV3bGluZSIsInNob3ciLCJpbmRlbnRDb21tZW50IiwiY29tbWVudCIsInJlcGxhY2UiLCJnZXRJbmRlbnQiLCJkZWNyZWFzZVRvcExldmVsIiwiZXF1YWxpemVXaGl0ZXNwYWNlIiwiaW5jcmVhc2VUb3BMZXZlbCIsImlzQW5kIiwiaXNCZXR3ZWVuIiwidG9rZW5Mb29rQmVoaW5kIiwic3RyaW5nIiwicHJlc2VydmVXaGl0ZXNwYWNlRm9yIiwiT1BFUkFUT1IiLCJ3aGl0ZXNwYWNlQmVmb3JlIiwibGVuZ3RoIiwidHJpbVNwYWNlc0VuZCIsImJlZ2luSWZQb3NzaWJsZSIsImlzQWN0aXZlIiwiaW5jcmVhc2VCbG9ja0xldmVsIiwiZW5kIiwiZGVjcmVhc2VCbG9ja0xldmVsIiwiZ2V0IiwiaXNMaW1pdCIsInJlc2V0SW5kZW50YXRpb24iLCJyZXBlYXQiLCJsaW5lc0JldHdlZW5RdWVyaWVzIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJlbmRzV2l0aCIsIm4iLCJJTkRFTlRfVFlQRV9UT1BfTEVWRUwiLCJJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCIsImluZGVudFR5cGVzIiwicHVzaCIsImxhc3QiLCJwb3AiLCJJTkxJTkVfTUFYX0xFTkdUSCIsImxldmVsIiwiaXNJbmxpbmVCbG9jayIsImkiLCJpc0ZvcmJpZGRlblRva2VuIiwiQ09NTUVOVCIsImtleSIsIlRva2VuaXplciIsIldISVRFU1BBQ0VfUkVHRVgiLCJOVU1CRVJfUkVHRVgiLCJPUEVSQVRPUl9SRUdFWCIsInJlZ2V4RmFjdG9yeSIsIm9wZXJhdG9ycyIsIkJMT0NLX0NPTU1FTlRfUkVHRVgiLCJMSU5FX0NPTU1FTlRfUkVHRVgiLCJsaW5lQ29tbWVudFR5cGVzIiwiUkVTRVJWRURfVE9QX0xFVkVMX1JFR0VYIiwicmVzZXJ2ZWRUb3BMZXZlbFdvcmRzIiwiUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVF9SRUdFWCIsInJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORV9SRUdFWCIsInJlc2VydmVkTmV3bGluZVdvcmRzIiwiUkVTRVJWRURfUExBSU5fUkVHRVgiLCJyZXNlcnZlZFdvcmRzIiwiV09SRF9SRUdFWCIsInNwZWNpYWxXb3JkQ2hhcnMiLCJTVFJJTkdfUkVHRVgiLCJzdHJpbmdUeXBlcyIsIk9QRU5fUEFSRU5fUkVHRVgiLCJvcGVuUGFyZW5zIiwiQ0xPU0VfUEFSRU5fUkVHRVgiLCJjbG9zZVBhcmVucyIsIklOREVYRURfUExBQ0VIT0xERVJfUkVHRVgiLCJpbmRleGVkUGxhY2Vob2xkZXJUeXBlcyIsIklERU5UX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwibmFtZWRQbGFjZWhvbGRlclR5cGVzIiwiU1RSSU5HX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwiaW5wdXQiLCJnZXRXaGl0ZXNwYWNlIiwic3Vic3RyaW5nIiwiZ2V0TmV4dFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwicHJldmlvdXNUb2tlbiIsImdldENvbW1lbnRUb2tlbiIsImdldFN0cmluZ1Rva2VuIiwiZ2V0T3BlblBhcmVuVG9rZW4iLCJnZXRDbG9zZVBhcmVuVG9rZW4iLCJnZXRQbGFjZWhvbGRlclRva2VuIiwiZ2V0TnVtYmVyVG9rZW4iLCJnZXRSZXNlcnZlZFdvcmRUb2tlbiIsImdldFdvcmRUb2tlbiIsImdldE9wZXJhdG9yVG9rZW4iLCJnZXRMaW5lQ29tbWVudFRva2VuIiwiZ2V0QmxvY2tDb21tZW50VG9rZW4iLCJnZXRUb2tlbk9uRmlyc3RNYXRjaCIsInJlZ2V4IiwiU1RSSU5HIiwiZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRTdHJpbmdOYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRJbmRleGVkUGxhY2Vob2xkZXJUb2tlbiIsImdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5IiwicGFyc2VLZXkiLCJ2Iiwic2xpY2UiLCJnZXRFc2NhcGVkUGxhY2Vob2xkZXJLZXkiLCJxdW90ZUNoYXIiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJOVU1CRVIiLCJ1bmRlZmluZWQiLCJnZXRUb3BMZXZlbFJlc2VydmVkVG9rZW4iLCJnZXROZXdsaW5lUmVzZXJ2ZWRUb2tlbiIsImdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbk5vSW5kZW50IiwiZ2V0UGxhaW5SZXNlcnZlZFRva2VuIiwiV09SRCIsImNyZWF0ZU9wZXJhdG9yUmVnZXgiLCJtdWx0aUxldHRlck9wZXJhdG9ycyIsInNvcnRCeUxlbmd0aERlc2MiLCJtYXAiLCJqb2luIiwiY3JlYXRlTGluZUNvbW1lbnRSZWdleCIsImMiLCJjcmVhdGVSZXNlcnZlZFdvcmRSZWdleCIsInJlc2VydmVkV29yZHNQYXR0ZXJuIiwiY3JlYXRlV29yZFJlZ2V4Iiwic3BlY2lhbENoYXJzIiwiY3JlYXRlU3RyaW5nUmVnZXgiLCJjcmVhdGVTdHJpbmdQYXR0ZXJuIiwicGF0dGVybnMiLCIkJCIsInQiLCJjcmVhdGVQYXJlblJlZ2V4IiwicGFyZW5zIiwiZXNjYXBlUGFyZW4iLCJwYXJlbiIsImNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgiLCJ0eXBlcyIsInBhdHRlcm4iLCJpc0VtcHR5IiwidHlwZXNSZWdleCIsImlzVG9rZW4iLCJ0ZXN0IiwiaXNTZXQiLCJpc0J5IiwiaXNXaW5kb3ciLCJpc0VuZCIsImtleXdvcmRzIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsImJ1aWx0aW5zIiwiVGlueWJpcmRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXJzIiwidGlueWJpcmQiLCJmb3JtYXQiLCJzdXBwb3J0ZWREaWFsZWN0cyIsIk9iamVjdCIsImtleXMiLCJzdHIiLCJhcnIiLCJzdHJpbmdzIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzJDLE9BQUQ7QUFBQSxTQUM5QkEsT0FBTyxDQUFDQyxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsV0FBT0EsQ0FBQyxDQUFDbEosTUFBRixHQUFXaUosQ0FBQyxDQUFDakosTUFBYixJQUF1QmlKLENBQUMsQ0FBQ0UsYUFBRixDQUFnQkQsQ0FBaEIsQ0FBOUI7QUFDRCxHQUZELENBRDhCO0FBQUEsQ0FBekIsQyIsImZpbGUiOiJzcWwtZm9ybWF0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3FsRm9ybWF0dGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNxbEZvcm1hdHRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3FsRm9ybWF0dGVyLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICAncGx1cycsXG4gICdtaW51cycsXG4gICdtdWx0aXBseScsXG4gICdkaXZpZGUnLFxuICAnaW50RGl2JyxcbiAgJ2ludERpdk9yWmVybycsXG4gICdtb2R1bG8nLFxuICAnbmVnYXRlJyxcbiAgJ2FicycsXG4gICdiaXRBbmQnLFxuICBbXG4gICAgJ2JpdENvdW50JyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmJpdENvdW50KGNvbHVtbl9uYW1lKSoqXG5cbiAgQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2V0IGJpdHMgaW4gdGhlIHN1cHBsaWVkIGludGVnZXIgbnVtYmVyXG4gIGAsXG4gICAgJ2JpdENvdW50KGNvbHVtbl9uYW1lKScsXG4gICAgJ2NvbHVtbl9uYW1lJ1xuICBdLFxuICAnYml0T3InLFxuICAnYml0WG9yJyxcbiAgJ2JpdE5vdCcsXG4gICdiaXRTaGlmdExlZnQnLFxuICAnYml0U2hpZnRSaWdodCcsXG4gICdlcXVhbHMnLFxuICAnbm90RXF1YWxzJyxcbiAgJ2xlc3MnLFxuICAnZ3JlYXRlcicsXG4gICdsZXNzT3JFcXVhbHMnLFxuICAnZ3JlYXRlck9yRXF1YWxzJyxcbiAgJ3RvVUludDgnLFxuICAndG9VSW50MTYnLFxuICAndG9VSW50MzInLFxuICAndG9VSW50NjQnLFxuICAndG9JbnQ4JyxcbiAgJ3RvSW50MTYnLFxuICAndG9JbnQzMicsXG4gICd0b0ludDY0JyxcbiAgJ3RvRmxvYXQzMicsXG4gICd0b0Zsb2F0NjQnLFxuICAndG9VSW50OE9yWmVybycsXG4gICd0b1VJbnQxNk9yWmVybycsXG4gICd0b1VJbnQzMk9yWmVybycsXG4gICd0b1VJbnQ2NE9yWmVybycsXG4gICd0b0ludDhPclplcm8nLFxuICAndG9JbnQxNk9yWmVybycsXG4gICd0b0ludDMyT3JaZXJvJyxcbiAgJ3RvSW50NjRPclplcm8nLFxuICAndG9GbG9hdDMyT3JaZXJvJyxcbiAgJ3RvRmxvYXQ2NE9yWmVybycsXG4gICd0b0RlY2ltYWwzMicsXG4gICd0b0RlY2ltYWw2NCcsXG4gICd0b0RlY2ltYWwxMjgnLFxuICBbXG4gICAgJ3RvRGF0ZScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b0RhdGUoY29sdW1uX25hbWUpKipcblxuICBDb252ZXJ0cyB2YWx1ZSB0byBkYXRlIHdpdGhvdXQgdGltZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS55YW5kZXgvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvdHlwZV9jb252ZXJzaW9uX2Z1bmN0aW9ucy8jdG9kYXRlLXRvZGF0ZXRpbWUpXG4gIGAsXG4gICAgYHRvRGF0ZShjb2x1bW5fbmFtZSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgJ3RvRGF0ZVRpbWUnLFxuICAndG9TdHJpbmcnLFxuICAndG9GaXhlZFN0cmluZycsXG4gICd0b1N0cmluZ0N1dFRvWmVybycsXG4gICd0b1VuaXhUaW1lc3RhbXA2NE1pbGxpJyxcbiAgJ2Zyb21Vbml4VGltZXN0YW1wNjRNaWxsaScsXG4gICd0b1VuaXhUaW1lc3RhbXA2NE1pY3JvJyxcbiAgJ2Zyb21Vbml4VGltZXN0YW1wNjRNaWNybycsXG4gICd0b1VuaXhUaW1lc3RhbXA2NE5hbm8nLFxuICAnZnJvbVVuaXhUaW1lc3RhbXA2NE5hbm8nLFxuICAncmVpbnRlcnByZXRBc1VJbnQ4JyxcbiAgJ3JlaW50ZXJwcmV0QXNVSW50MTYnLFxuICAncmVpbnRlcnByZXRBc1VJbnQzMicsXG4gICdyZWludGVycHJldEFzVUludDY0JyxcbiAgJ3JlaW50ZXJwcmV0QXNJbnQ4JyxcbiAgJ3JlaW50ZXJwcmV0QXNJbnQxNicsXG4gICdyZWludGVycHJldEFzSW50MzInLFxuICAncmVpbnRlcnByZXRBc0ludDY0JyxcbiAgJ3JlaW50ZXJwcmV0QXNGbG9hdDMyJyxcbiAgJ3JlaW50ZXJwcmV0QXNGbG9hdDY0JyxcbiAgJ3JlaW50ZXJwcmV0QXNEYXRlJyxcbiAgJ3JlaW50ZXJwcmV0QXNEYXRlVGltZScsXG4gICdyZWludGVycHJldEFzU3RyaW5nJyxcbiAgW1xuICAgICdzdGFydHNXaXRoJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnN0YXJ0c1dpdGgoc3RyLCBwcmVmaXgpKipcbiAgXG4gIFJldHVybnMgMSB3aGV0aGVyIHN0cmluZyBzdGFydHMgd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgMC5cbiAgYCxcbiAgICBgc3RhcnRzV2l0aChzdHIsIHByZWZpeClgLFxuICAgICdzdHInXG4gIF0sXG4gIFtcbiAgICAnZW5kc1dpdGgnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqZW5kc1dpdGgoc3RyLCBzdWZmaXgpKipcbiAgXG4gIFJldHVybnMgMSBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCB0aGUgc3BlY2lmaWVkIHN1ZmZpeCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgMC5cbiAgYCxcbiAgICBgZW5kc1dpdGgoc3RyLCBzdWZmaXgpYCxcbiAgICAnc3RyJ1xuICBdLFxuICAndG9ZZWFyJyxcbiAgJ3RvTW9udGgnLFxuICAndG9EYXlPZk1vbnRoJyxcbiAgJ3RvRGF5T2ZXZWVrJyxcbiAgJ3RvSG91cicsXG4gICd0b01pbnV0ZScsXG4gICd0b1NlY29uZCcsXG4gICd0b01vbmRheScsXG4gIFtcbiAgICAndG9TdGFydE9mV2VlaycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZXZWVrKHQsIFttb2RlXSkqKlxuXG4gIFJvdW5kcyBkb3duIGEgZGF0ZSBvciBkYXRlIHdpdGggdGltZSB0byB0aGUgbmVhcmVzdCBTdW5kYXkgb3IgTW9uZGF5IGJ5IG1vZGUuIFJldHVybnMgdGhlIGRhdGUuIFRoZSBtb2RlIGFyZ3VtZW50IHdvcmtzIGV4YWN0bHkgbGlrZSB0aGUgbW9kZSBhcmd1bWVudCB0byBbdG9XZWVrKCldKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3Rvd2Vlay1kYXRlLW1vZGUpLiBGb3IgdGhlIHNpbmdsZS1hcmd1bWVudCBzeW50YXgsIGEgbW9kZSB2YWx1ZSBvZiAwIGlzIHVzZWQsIHdoZXJlIHdlZWsgMSBpcyB0aGUgZmlyc3Qgb25lIHdpdGggYSBTdW5kYXkgaW4gdGhlIGdpdmVuIHllYXIuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2Z3ZWVrLXQtbW9kZSlcbiAgYCxcbiAgICBgdG9TdGFydE9mV2Vlayhjb2x1bW5fb3JfZGF0ZV9vcl9kYXRldGltZSlgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZV9vcl9kYXRldGltZWBcbiAgXSxcbiAgW1xuICAgICd0b1N0YXJ0T2ZNb250aCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZNb250aCh0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIG9yIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoLiBSZXR1cm5zIHRoZSBkYXRlLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jdG9zdGFydG9mbW9udGgpXG4gIGAsXG4gICAgYHRvU3RhcnRPZk1vbnRoKGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lKWAsXG4gICAgYGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZlF1YXJ0ZXInLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdG9TdGFydE9mUXVhcnRlcih0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIG9yIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHF1YXJ0ZXIuIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHF1YXJ0ZXIgaXMgZWl0aGVyIDEgSmFudWFyeSwgMSBBcHJpbCwgMSBKdWx5LCBvciAxIE9jdG9iZXIuIFJldHVybnMgdGhlIGRhdGUuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZxdWFydGVyKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZRdWFydGVyKGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lKWAsXG4gICAgYGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZlllYXInLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdG9TdGFydE9mWWVhcih0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIG9yIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHllYXIuIFJldHVybnMgdGhlIGRhdGUuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2Z5ZWFyKVxuICBgLFxuICAgIGB0b1N0YXJ0T2ZZZWFyKGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lKWAsXG4gICAgYGNvbHVtbl9vcl9kYXRlX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZkRheScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZEYXkodCkqKlxuXG4gIFJvdW5kcyBkb3duIGEgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBkYXkuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZkYXkpXG4gIGAsXG4gICAgYHRvU3RhcnRPZkRheShjb2x1bW5fb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZkhvdXInLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdG9TdGFydE9mSG91cih0KSoqXG5cbiAgUm91bmRzIGRvd24gZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBob3VyLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jdG9zdGFydG9maG91cilcbiAgYCxcbiAgICBgdG9TdGFydE9mSG91cihjb2x1bW5fb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZk1pbnV0ZScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZNaW51dGUodCkqKlxuXG4gIFJvdW5kcyBkb3duIGEgZGF0ZSB3aXRoIHRpbWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBtaW51dGUuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZtaW51dGUpXG4gIGAsXG4gICAgYHRvU3RhcnRPZk1pbnV0ZShjb2x1bW5fb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZkZpdmVNaW51dGUnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdG9TdGFydE9mRml2ZU1pbnV0ZSh0KSoqXG5cbiAgUm91bmRzIGRvd24gYSBkYXRlIHdpdGggdGltZSB0byB0aGUgc3RhcnQgb2YgdGhlIGZpdmUtbWludXRlIGludGVydmFsLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jdG9zdGFydG9mZml2ZW1pbnV0ZSlcbiAgYCxcbiAgICBgdG9TdGFydE9mRml2ZU1pbnV0ZShjb2x1bW5fb3JfZGF0ZXRpbWUpYCxcbiAgICBgY29sdW1uX29yX2RhdGV0aW1lYFxuICBdLFxuICBbXG4gICAgJ3RvU3RhcnRPZkZpZnRlZW5NaW51dGVzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnRvU3RhcnRPZkZpZnRlZW5NaW51dGVzKHQpKipcblxuICBSb3VuZHMgZG93biBhIGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBzdGFydCBvZiB0aGUgZmlmdGVlbi1taW51dGUgaW50ZXJ2YWwuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZmaWZ0ZWVubWludXRlcylcbiAgYCxcbiAgICBgdG9TdGFydE9mRmlmdGVlbk1pbnV0ZXMoY29sdW1uX29yX2RhdGV0aW1lKWAsXG4gICAgYGNvbHVtbl9vcl9kYXRldGltZWBcbiAgXSxcbiAgW1xuICAgICd0b1N0YXJ0T2ZJbnRlcnZhbCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b1N0YXJ0T2ZJbnRlcnZhbCh0LCBJTlRFUlZBTCB4IHVuaXQgWywgdGltZV96b25lXSkqKlxuXG4gIFRoaXMgaXMgYSBnZW5lcmFsaXphdGlvbiBvZiBvdGhlciBmdW5jdGlvbnMgbmFtZWQgdG9TdGFydE9mKi4gRm9yIGV4YW1wbGUsIHRvU3RhcnRPZkludGVydmFsKHQsIElOVEVSVkFMIDEgeWVhcikgcmV0dXJucyB0aGUgc2FtZSBhcyB0b1N0YXJ0T2ZZZWFyKHQpLCB0b1N0YXJ0T2ZJbnRlcnZhbCh0LCBJTlRFUlZBTCAxIG1vbnRoKSByZXR1cm5zIHRoZSBzYW1lIGFzIHRvU3RhcnRPZk1vbnRoKHQpLCB0b1N0YXJ0T2ZJbnRlcnZhbCh0LCBJTlRFUlZBTCAxIGRheSkgcmV0dXJucyB0aGUgc2FtZSBhcyB0b1N0YXJ0T2ZEYXkodCksIHRvU3RhcnRPZkludGVydmFsKHQsIElOVEVSVkFMIDE1IG1pbnV0ZSkgcmV0dXJucyB0aGUgc2FtZSBhcyB0b1N0YXJ0T2ZGaWZ0ZWVuTWludXRlcyh0KSBldGMuIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UudGVjaC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2Z1bmN0aW9ucy9kYXRlX3RpbWVfZnVuY3Rpb25zLyN0b3N0YXJ0b2ZpbnRlcnZhbC10aW1lLW9yLWRhdGEtaW50ZXJ2YWwteC11bml0LXRpbWUtem9uZSlcbiAgYCxcbiAgICBgdG9TdGFydE9mSW50ZXJ2YWwoY29sdW1uX29yX2RhdGVfb3JfZGF0ZXRpbWUsIElOVEVSVkFMIHggdW5pdClgLFxuICAgIGBjb2x1bW5fb3JfZGF0ZV9vcl9kYXRldGltZWBcbiAgXSxcbiAgJ3RvVGltZScsXG4gICd0b1JlbGF0aXZlWWVhck51bScsXG4gICd0b1JlbGF0aXZlTW9udGhOdW0nLFxuICAndG9SZWxhdGl2ZVdlZWtOdW0nLFxuICAndG9SZWxhdGl2ZURheU51bScsXG4gICd0b1JlbGF0aXZlSG91ck51bScsXG4gICd0b1JlbGF0aXZlTWludXRlTnVtJyxcbiAgJ3RvUmVsYXRpdmVTZWNvbmROdW0nLFxuICAndG9ZWVlZTU0nLFxuICAndG9ZWVlZTU1ERCcsXG4gICd0b1lZWVlNTUREaGhtbXNzJyxcbiAgW1xuICAgICdhZGRZZWFycycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRZZWFycyhjb2x1bW5fbmFtZSwgbnVtYmVyX29mX3llYXJzKSoqXG5cbiAgRnVuY3Rpb24gYWRkcyBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZFllYXJzKGNvbHVtbl9uYW1lLCAxKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICBbXG4gICAgJ2FkZE1vbnRocycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRNb250aHMoY29sdW1uX25hbWUsIG51bWJlcl9vZl9tb250aHMpKipcblxuICBGdW5jdGlvbiBhZGRzIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZE1vbnRocyhjb2x1bW5fbmFtZSwgMSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgW1xuICAgICdhZGRXZWVrcycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRXZWVrcyhjb2x1bW5fbmFtZSwgbnVtYmVyX29mX3dlZWtzKSoqXG5cbiAgRnVuY3Rpb24gYWRkcyBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWtzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZFdlZWtzKGNvbHVtbl9uYW1lLCAxKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICBbXG4gICAgJ2FkZERheXMnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqYWRkRGF5cyhjb2x1bW5fbmFtZSwgbnVtYmVyX29mX2RheXMpKipcblxuICBGdW5jdGlvbiBhZGRzIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byBhIERhdGUvRGF0ZVRpbWUgYW5kIHRoZW4gcmV0dXJuIHRoZSBEYXRlL0RhdGVUaW1lLlxuICBgLFxuICAgIGBhZGREYXlzKGNvbHVtbl9uYW1lLCAxKWAsXG4gICAgYGNvbHVtbl9uYW1lYFxuICBdLFxuICBbXG4gICAgJ2FkZEhvdXJzJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmFkZEhvdXJzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2ZfaG91cnMpKipcblxuICBGdW5jdGlvbiBhZGRzIHNwZWNpZmllZCBudW1iZXIgb2YgaG91cnMgdG8gYSBEYXRlL0RhdGVUaW1lIGFuZCB0aGVuIHJldHVybiB0aGUgRGF0ZS9EYXRlVGltZS5cbiAgYCxcbiAgICBgYWRkSG91cnMoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkTWludXRlcycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRNaW51dGVzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2ZfbWludXRlcykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZE1pbnV0ZXMoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkU2Vjb25kcycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphZGRTZWNvbmRzKGNvbHVtbl9uYW1lLCBudW1iZXJfb2Zfc2Vjb25kcykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIHRvIGEgRGF0ZS9EYXRlVGltZSBhbmQgdGhlbiByZXR1cm4gdGhlIERhdGUvRGF0ZVRpbWUuXG4gIGAsXG4gICAgYGFkZFNlY29uZHMoY29sdW1uX25hbWUsIDEpYCxcbiAgICBgY29sdW1uX25hbWVgXG4gIF0sXG4gIFtcbiAgICAnYWRkUXVhcnRlcnMnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqYWRkUXVhcnRlcnMoY29sdW1uX25hbWUsIG51bWJlcl9vZl9xdWFydGVycykqKlxuXG4gIEZ1bmN0aW9uIGFkZHMgc3BlY2lmaWVkIG51bWJlciBvZiBxdWFydGVycyB0byBhIERhdGUvRGF0ZVRpbWUgYW5kIHRoZW4gcmV0dXJuIHRoZSBEYXRlL0RhdGVUaW1lLlxuICBgLFxuICAgIGBhZGRRdWFydGVycyhjb2x1bW5fbmFtZSwgMSlgLFxuICAgIGBjb2x1bW5fbmFtZWBcbiAgXSxcbiAgW1xuICAgICdub3cnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqbm93KCkqKlxuICBcbiAgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lIGF0IG9uZSBvZiB0aGUgbW9tZW50cyBvZiByZXF1ZXN0IGV4ZWN1dGlvbi4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS55YW5kZXgvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jbm93KVxuICBgLFxuICAgIGBub3coKWBcbiAgXSxcbiAgJ25vdzY0JyxcbiAgW1xuICAgICd0b2RheScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip0b2RheSgpKipcbiAgXG4gIEFjY2VwdHMgemVybyBhcmd1bWVudHMgYW5kIHJldHVybnMgdGhlIGN1cnJlbnQgZGF0ZSBhdCBvbmUgb2YgdGhlIG1vbWVudHMgb2YgcmVxdWVzdCBleGVjdXRpb24uIFRoZSBzYW1lIGFzICd0b0RhdGUobm93KCkpJy4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2RhdGVfdGltZV9mdW5jdGlvbnMvI3RvZGF5KVxuICBgLFxuICAgIGB0b2RheSgpYFxuICBdLFxuICBbXG4gICAgJ3llc3RlcmRheScsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip5ZXN0ZXJkYXkoKSoqXG4gIFxuICBBY2NlcHRzIHplcm8gYXJndW1lbnRzIGFuZCByZXR1cm5zIHllc3RlcmRheSdzIGRhdGUgYXQgb25lIG9mIHRoZSBtb21lbnRzIG9mIHJlcXVlc3QgZXhlY3V0aW9uLiBUaGUgc2FtZSBhcyAndG9kYXkoKSAtIDEnLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvZGF0ZV90aW1lX2Z1bmN0aW9ucy8jeWVzdGVyZGF5KVxuICBgLFxuICAgIGB5ZXN0ZXJkYXkoKWBcbiAgXSxcbiAgJ3RpbWVTbG90JyxcbiAgJ3RpbWVTbG90cycsXG4gICdmb3JtYXREYXRlVGltZScsXG4gICdlbXB0eScsXG4gICdub3RFbXB0eScsXG4gICdsZW5ndGgnLFxuICAnbGVuZ3RoVVRGOCcsXG4gICdsb3dlcicsXG4gICd1cHBlcicsXG4gICdsb3dlclVURjgnLFxuICAndXBwZXJVVEY4JyxcbiAgJ3JldmVyc2UnLFxuICAncmV2ZXJzZVVURjgnLFxuICAnY29uY2F0JyxcbiAgJ3N1YnN0cmluZycsXG4gICdzdWJzdHJpbmdVVEY4JyxcbiAgJ2FwcGVuZFRyYWlsaW5nQ2hhcklmQWJzZW50JyxcbiAgJ2NvbnZlcnRDaGFyc2V0JyxcbiAgJ2Jhc2U2NEVuY29kZScsXG4gICdiYXNlNjREZWNvZGUnLFxuICAndHJ5QmFzZTY0RGVjb2RlJyxcbiAgJ3Bvc2l0aW9uJyxcbiAgJ3Bvc2l0aW9uVVRGOCcsXG4gICdtYXRjaCcsXG4gICdleHRyYWN0JyxcbiAgJ2V4dHJhY3RBbGwnLFxuICAnbGlrZScsXG4gICdub3RMaWtlJyxcbiAgJ3JlcGxhY2VPbmUnLFxuICAncmVwbGFjZUFsbCcsXG4gICdyZXBsYWNlUmVnZXhwT25lJyxcbiAgJ3JlcGxhY2VSZWdleHBBbGwnLFxuICAnZW1wdHlBcnJheVVJbnQ4JyxcbiAgJ2VtcHR5QXJyYXlVSW50MTYnLFxuICAnZW1wdHlBcnJheVVJbnQzMicsXG4gICdlbXB0eUFycmF5VUludDY0JyxcbiAgJ2VtcHR5QXJyYXlJbnQ4JyxcbiAgJ2VtcHR5QXJyYXlJbnQxNicsXG4gICdlbXB0eUFycmF5SW50MzInLFxuICAnZW1wdHlBcnJheUludDY0JyxcbiAgJ2VtcHR5QXJyYXlGbG9hdDMyJyxcbiAgJ2VtcHR5QXJyYXlGbG9hdDY0JyxcbiAgJ2VtcHR5QXJyYXlEYXRlJyxcbiAgJ2VtcHR5QXJyYXlEYXRlVGltZScsXG4gICdlbXB0eUFycmF5U3RyaW5nJyxcbiAgJ2VtcHR5QXJyYXlUb1NpbmdsZScsXG4gICdyYW5nZScsXG4gICdhcnJheScsXG4gICdhcnJheUNvbmNhdCcsXG4gICdhcnJheUVsZW1lbnQnLFxuICAnaGFzJyxcbiAgJ2hhc0FsbCcsXG4gICdoYXNBbnknLFxuICAnaW5kZXhPZicsXG4gICdjb3VudEVxdWFsJyxcbiAgJ2FycmF5RW51bWVyYXRlJyxcbiAgJ2FycmF5RW51bWVyYXRlVW5pcScsXG4gICdhcnJheUpvaW4nLFxuICAnYXJyYXlQb3BCYWNrJyxcbiAgJ2FycmF5UG9wRnJvbnQnLFxuICAnYXJyYXlQdXNoQmFjaycsXG4gICdhcnJheVB1c2hGcm9udCcsXG4gICdhcnJheVJlc2l6ZScsXG4gICdhcnJheVNsaWNlJyxcbiAgJ2FycmF5VW5pcScsXG4gICdvcGVyYXRvcicsXG4gICdhcnJheU1hcCcsXG4gICdhcnJheUZpbHRlcicsXG4gICdhcnJheUNvdW50JyxcbiAgJ2FycmF5RXhpc3RzJyxcbiAgJ2FycmF5QWxsJyxcbiAgJ2FycmF5U3VtJyxcbiAgJ2FycmF5Q3VtU3VtJyxcbiAgJ2FycmF5U29ydCcsXG4gICdhcnJheVJldmVyc2VTb3J0JyxcbiAgJ2FycmF5Rmlyc3QnLFxuICAnYXJyYXlGaXJzdEluZGV4JyxcbiAgW1xuICAgICdhcnJheVppcCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKiphcnJheVppcChhcnIxLCBhcnIyLCAuLi4sIGFyck4pKipcblxuICBBbGxvd3MgdG8gY29tYmluZSBtdWx0aXBsZSBhcnJheXMgb2YgZXF1YWwgbGVuZ3RocyBpbnRvIG9uZSBhcnJheSBvZiB0dXBsZXMuXG4gIGAsXG4gICAgJ2FycmF5WmlwKGFycjEpJ1xuICBdLFxuICAnc3BsaXRCeUNoYXInLFxuICAnc3BsaXRCeVN0cmluZycsXG4gICdhcnJheVN0cmluZ0NvbmNhdCcsXG4gICdhbHBoYVRva2VucycsXG4gICdwcm90b2NvbCcsXG4gICdkb21haW4nLFxuICAnZG9tYWluV2l0aG91dFdXVycsXG4gICd0b3BMZXZlbERvbWFpbicsXG4gICdmaXJzdFNpZ25pZmljYW50U3ViZG9tYWluJyxcbiAgJ2N1dFRvRmlyc3RTaWduaWZpY2FudFN1YmRvbWFpbicsXG4gICdwYXRoJyxcbiAgJ3BhdGhGdWxsJyxcbiAgJ3F1ZXJ5U3RyaW5nJyxcbiAgJ2ZyYWdtZW50JyxcbiAgJ3F1ZXJ5U3RyaW5nQW5kRnJhZ21lbnQnLFxuICAnZXh0cmFjdFVSTFBhcmFtZXRlcicsXG4gICdleHRyYWN0VVJMUGFyYW1ldGVycycsXG4gICdleHRyYWN0VVJMUGFyYW1ldGVyTmFtZXMnLFxuICAnVVJMSGllcmFyY2h5JyxcbiAgJ1VSTFBhdGhIaWVyYXJjaHknLFxuICAnZGVjb2RlVVJMQ29tcG9uZW50JyxcbiAgJ2N1dFdXVycsXG4gICdjdXRRdWVyeVN0cmluZycsXG4gICdjdXRGcmFnbWVudCcsXG4gICdjdXRRdWVyeVN0cmluZ0FuZEZyYWdtZW50JyxcbiAgJ2N1dFVSTFBhcmFtZXRlcicsXG4gICdJUHY0TnVtVG9TdHJpbmcnLFxuICAnSVB2NFN0cmluZ1RvTnVtJyxcbiAgJ0lQdjROdW1Ub1N0cmluZ0NsYXNzQycsXG4gICdJUHY2TnVtVG9TdHJpbmcnLFxuICAnSVB2NlN0cmluZ1RvTnVtJyxcbiAgJ3JhbmQnLFxuICAncmFuZDY0JyxcbiAgJ3JhbmRDb25zdGFudCcsXG4gICdoYWxmTUQ1JyxcbiAgJ01ENScsXG4gICdzaXBIYXNoNjQnLFxuICAnc2lwSGFzaDEyOCcsXG4gICdjaXR5SGFzaDY0JyxcbiAgJ2ludEhhc2gzMicsXG4gICdpbnRIYXNoNjQnLFxuICAnU0hBMjI0JyxcbiAgJ1NIQTI1NicsXG4gICdVUkxIYXNoJyxcbiAgJ2hleCcsXG4gICd1bmhleCcsXG4gICdVVUlEU3RyaW5nVG9OdW0nLFxuICAnVVVJRE51bVRvU3RyaW5nJyxcbiAgJ2JpdG1hc2tUb0xpc3QnLFxuICAnYml0bWFza1RvQXJyYXknLFxuICAnZmxvb3InLFxuICAnY2VpbCcsXG4gICdyb3VuZCcsXG4gICdyb3VuZFRvRXhwMicsXG4gICdyb3VuZER1cmF0aW9uJyxcbiAgJ3JvdW5kQWdlJyxcbiAgJ2lmJyxcbiAgJ211bHRpSWYnLFxuICAnaWZOb3RGaW5pdGUnLFxuICAnZScsXG4gICdwaScsXG4gICdleHAnLFxuICAnbG9nJyxcbiAgJ2V4cDInLFxuICAnbG9nMicsXG4gICdleHAxMCcsXG4gICdsb2cxMCcsXG4gICdzcXJ0JyxcbiAgJ2NicnQnLFxuICAnZXJmJyxcbiAgJ2VyZmMnLFxuICAnbGdhbW1hJyxcbiAgJ3RnYW1tYScsXG4gICdzaW4nLFxuICAnY29zJyxcbiAgJ3RhbicsXG4gICdhc2luJyxcbiAgJ2Fjb3MnLFxuICAnYXRhbicsXG4gICdwb3cnLFxuICAncmVnaW9uVG9DaXR5JyxcbiAgJ3JlZ2lvblRvQXJlYScsXG4gICdyZWdpb25Ub0Rpc3RyaWN0JyxcbiAgJ3JlZ2lvblRvQ291bnRyeScsXG4gICdyZWdpb25Ub0NvbnRpbmVudCcsXG4gICdyZWdpb25Ub1BvcHVsYXRpb24nLFxuICAncmVnaW9uSW4nLFxuICAncmVnaW9uSGllcmFyY2h5JyxcbiAgJ3JlZ2lvblRvTmFtZScsXG4gICdncmVhdENpcmNsZURpc3RhbmNlJyxcbiAgJ2dyZWF0Q2lyY2xlQW5nbGUnLFxuICAncG9pbnRJbkVsbGlwc2VzJyxcbiAgJ3BvaW50SW5Qb2x5Z29uJyxcbiAgJ2dlb0Rpc3RhbmNlJyxcbiAgJ2dlb2hhc2hFbmNvZGUnLFxuICAnZ2VvaGFzaERlY29kZScsXG4gICdnZW9oYXNoZXNJbkJveCcsXG4gICdPU0luJyxcbiAgJ1NFSW4nLFxuICAnZGljdEdldFVJbnQ4JyxcbiAgJ2RpY3RHZXRVSW50MTYnLFxuICAnZGljdEdldFVJbnQzMicsXG4gICdkaWN0R2V0VUludDY0JyxcbiAgJ2RpY3RHZXRJbnQ4JyxcbiAgJ2RpY3RHZXRJbnQxNicsXG4gICdkaWN0R2V0SW50MzInLFxuICAnZGljdEdldEludDY0JyxcbiAgJ2RpY3RHZXRGbG9hdDMyJyxcbiAgJ2RpY3RHZXRGbG9hdDY0JyxcbiAgJ2RpY3RHZXREYXRlJyxcbiAgJ2RpY3RHZXREYXRlVGltZScsXG4gICdkaWN0R2V0U3RyaW5nJyxcbiAgJ2RpY3RHZXRVVUlEJyxcbiAgJ2RpY3RHZXRUT3JEZWZhdWx0JyxcbiAgJ2RpY3RJc0luJyxcbiAgJ2RpY3RHZXRIaWVyYXJjaHknLFxuICAnZGljdEhhcycsXG4gICd2aXNpdFBhcmFtSGFzJyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0VUludCcsXG4gICd2aXNpdFBhcmFtRXh0cmFjdEludCcsXG4gICd2aXNpdFBhcmFtRXh0cmFjdEZsb2F0JyxcbiAgJ3Zpc2l0UGFyYW1FeHRyYWN0Qm9vbCcsXG4gICd2aXNpdFBhcmFtRXh0cmFjdFJhdycsXG4gICd2aXNpdFBhcmFtRXh0cmFjdFN0cmluZycsXG4gICdpbicsXG4gICd0dXBsZScsXG4gICd0dXBsZUVsZW1lbnQnLFxuICAnaG9zdE5hbWUnLFxuICAndmlzaWJsZVdpZHRoJyxcbiAgJ3RvVHlwZU5hbWUnLFxuICAnYmxvY2tTaXplJyxcbiAgJ21hdGVyaWFsaXplJyxcbiAgJ2lnbm9yZScsXG4gICdzbGVlcCcsXG4gICdjdXJyZW50RGF0YWJhc2UnLFxuICBbXG4gICAgJ2pvaW5HZXQnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqam9pbkdldChkYXRhX3NvdXJjZV9uYW1lLCAnY29sdW1uX3ZhbHVlJywgJ2pvaW5fa2V5cycpKipcblxuICBFeHRyYWN0IGRhdGEgZnJvbSB0aGUgdGFibGUgdGhlIHNhbWUgd2F5IGFzIGZyb20gYSBkaWN0aW9uYXJ5XG4gIGAsXG4gICAgYGpvaW5HZXQoZGF0YV9zb3VyY2VfbmFtZSwgJ2NvbHVtbl92YWx1ZScsICdqb2luX2tleXMnKWAsXG4gICAgYGRhdGFfc291cmNlX25hbWVgXG4gIF0sXG4gICdoYXNDb2x1bW5JblRhYmxlJyxcbiAgJ2Zvcm1hdFJlYWRhYmxlU2l6ZScsXG4gICdpc0NvbnN0YW50JyxcbiAgJ2lzRmluaXRlJyxcbiAgJ2lzSW5maW5pdGUnLFxuICAnaXNOYU4nLFxuICAnaXNOdWxsJyxcbiAgJ2lzTm90TnVsbCcsXG4gICdjb2FsZXNjZScsXG4gICdpZk51bGwnLFxuICAnbnVsbElmJyxcbiAgJ2Fzc3VtZU5vdE51bGwnLFxuICAndG9OdWxsYWJsZScsXG4gICdiYXInLFxuICAndHJhbnNmb3JtJyxcbiAgJ25vdEluJyxcbiAgJ2xlYXN0JyxcbiAgJ2dyZWF0ZXN0JyxcbiAgJ3VwdGltZScsXG4gICd2ZXJzaW9uJyxcbiAgJ3Jvd051bWJlckluQWxsQmxvY2tzJyxcbiAgJ3J1bm5pbmdEaWZmZXJlbmNlJyxcbiAgJ01BQ051bVRvU3RyaW5nJyxcbiAgJ01BQ1N0cmluZ1RvTnVtJyxcbiAgJ01BQ1N0cmluZ1RvT1VJJyxcbiAgJ2dldFNpemVPZkVudW1UeXBlJyxcbiAgJ3RvQ29sdW1uVHlwZU5hbWUnLFxuICAnZHVtcENvbHVtblN0cnVjdHVyZScsXG4gICdkZWZhdWx0VmFsdWVPZkFyZ3VtZW50VHlwZScsXG4gICdpbmRleEhpbnQnLFxuICAncmVwbGljYXRlJyxcbiAgJ2dsb2JhbEluJyxcbiAgJ2dsb2JhbE5vdEluJyxcbiAgJ2xhbWJkYScsXG4gICdjb3VudCcsXG4gICdhbnknLFxuICAnYW55SGVhdnknLFxuICAnYW55TGFzdCcsXG4gICdncm91cEJpdEFuZCcsXG4gICdncm91cEJpdE9yJyxcbiAgJ2dyb3VwQml0WG9yJyxcbiAgJ21pbicsXG4gICdtYXgnLFxuICAnYXJnTWluJyxcbiAgJ2FyZ01heCcsXG4gICdzdW0nLFxuICAnc3VtV2l0aE92ZXJmbG93JyxcbiAgJ3N1bU1hcCcsXG4gICdhdmcnLFxuICAnYXZnV2VpZ2h0ZWQnLFxuICBbXG4gICAgJ3VuaXEnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqdW5pcSh4KSoqXG5cbiAgQ2FsY3VsYXRlcyB0aGUgYXBwcm94aW1hdGUgbnVtYmVyIG9mIGRpZmZlcmVudCB2YWx1ZXMgb2YgdGhlIGFyZ3VtZW50LiBXb3JrcyBmb3IgbnVtYmVycywgc3RyaW5ncywgZGF0ZXMsIGFuZCBkYXRlcyB3aXRoIHRpbWVzLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLWRvY3MucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L2FnZ19mdW5jdGlvbnMvI3VuaXEteClcbiAgYCxcbiAgICBgdW5pcSh4KWAsXG4gICAgJ3gnXG4gIF0sXG4gIFtcbiAgICAndW5pcUhMTDEyJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKnVuaXFITEwxMih4KSoqXG5cbiAgVXNlcyB0aGUgSHlwZXJMb2dMb2cgYWxnb3JpdGhtIHRvIGFwcHJveGltYXRlIHRoZSBudW1iZXIgb2YgZGlmZmVyZW50IHZhbHVlcyBvZiB0aGUgYXJndW1lbnQuIEl0IHVzZXMgMjEyIDUtYml0IGNlbGxzLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLWRvY3MucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L2FnZ19mdW5jdGlvbnMvI3VuaXFobGwxMi14KVxuICBgLFxuICAgIGB1bmlxSExMMTIoeClgLFxuICAgICd4J1xuICBdLFxuICBbXG4gICAgJ3VuaXFFeGFjdCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip1bmlxRXhhY3QoeCkqKlxuXG4gIEV4YWN0IG51bWJlciBvZiBkaWZmZXJlbnQgdmFsdWVzIG9mIHRoZSBhcmd1bWVudC4gVGhlcmUgaXMgbm8gcmVhc29uIHRvIGZlYXIgYXBwcm94aW1hdGlvbnMsIHNvIGl04oCZcyBiZXR0ZXIgdG8gdXNlIHRoZSDigJh1bmlx4oCZIGZ1bmN0aW9uLiBZb3Ugc2hvdWxkIHVzZSB0aGUg4oCYdW5pcUV4YWN04oCZIGZ1bmN0aW9uIGlmIHlvdSBkZWZpbml0ZWx5IG5lZWQgYW4gZXhhY3QgcmVzdWx0LiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLWRvY3MucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L2FnZ19mdW5jdGlvbnMvI3VuaXFleGFjdC14KVxuICBgLFxuICAgIGB1bmlxRXhhY3QoeClgLFxuICAgICd4J1xuICBdLFxuICBbXG4gICAgJ3VuaXFDb21iaW5lZCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKip1bmlxQ29tYmluZWQoeCkqKlxuXG4gIEFwcHJveGltYXRlbHkgY29tcHV0ZXMgdGhlIG51bWJlciBvZiBkaWZmZXJlbnQgdmFsdWVzIOKAi+KAi29mIHRoZSBhcmd1bWVudC4gV29ya3MgZm9yIG51bWJlcnMsIHN0cmluZ3MsIGRhdGVzLCBkYXRlLXdpdGgtdGltZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS1kb2NzLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9hZ2dfZnVuY3Rpb25zLyN1bmlxY29tYmluZWQteClcbiAgYCxcbiAgICBgdW5pcUNvbWJpbmVkKHgpYCxcbiAgICAneCdcbiAgXSxcbiAgJ2FnZ1Rocm93JyxcbiAgJ2dyb3VwQXJyYXknLFxuICAnZ3JvdXBBcnJheVNhbXBsZScsXG4gICdncm91cEFycmF5SW5zZXJ0QXQnLFxuICAnZ3JvdXBVbmlxQXJyYXknLFxuICAnbWVkaWFuJyxcbiAgJ21lZGlhblRpbWluZycsXG4gICdtZWRpYW5EZXRlcm1pbmlzdGljJyxcbiAgJ21lZGlhblRpbWluZ1dlaWdodGVkJyxcbiAgJ3ZhclNhbXAnLFxuICAndmFyUG9wJyxcbiAgJ3N0ZGRldlNhbXAnLFxuICAnc3RkZGV2UG9wJyxcbiAgJ2NvdmFyU2FtcCcsXG4gICdjb3ZhclBvcCcsXG4gICd0b3BLJyxcbiAgW1xuICAgICdjb3JyJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmNvcnIoeCx5KSoqXG5cbiAgQ2FsY3VsYXRlcyB0aGUgUGVhcnNvbiBjb3JyZWxhdGlvbiBjb2VmZmljaWVudC4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS55YW5kZXgvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9hZ2dfZnVuY3Rpb25zL3JlZmVyZW5jZS8jY29yci14LXkpXG4gIGAsXG4gICAgYGNvcih4LHkpYCxcbiAgICAneCdcbiAgXSxcbiAgW1xuICAgICdoaXN0b2dyYW0nLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqaGlzdG9ncmFtKG51bWJlcl9vZl9iaW5zKSh2YWx1ZXMpKipcblxuICBDYWxjdWxhdGVzIGFuIGFkYXB0aXZlIGhpc3RvZ3JhbS4gSXQgZG9lc24ndCBndWFyYW50ZWUgcHJlY2lzZSByZXN1bHRzLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnlhbmRleC9kb2NzL2VuL3F1ZXJ5X2xhbmd1YWdlL2FnZ19mdW5jdGlvbnMvcGFyYW1ldHJpY19mdW5jdGlvbnMvI2hpc3RvZ3JhbSlcbiAgYCxcbiAgICBgaGlzdG9ncmFtKG51bWJlcl9vZl9iaW5zKSh2YWx1ZXMpYCxcbiAgICAnbnVtYmVyX29mX2JpbnMnXG4gIF0sXG4gICdxdWFudGlsZScsXG4gICdxdWFudGlsZXMnLFxuICAncXVhbnRpbGVUaW1pbmcnLFxuICAncXVhbnRpbGVzVGltaW5nJyxcbiAgJ3F1YW50aWxlVGltaW5nV2VpZ2h0ZWQnLFxuICAncXVhbnRpbGVzVGltaW5nV2VpZ2h0ZWQnLFxuICAncXVhbnRpbGVEZXRlcm1pbmlzdGljJyxcbiAgJ3F1YW50aWxlc0RldGVybWluaXN0aWMnLFxuICAncXVhbnRpbGVFeGFjdCcsXG4gICdxdWFudGlsZUV4YWN0V2VpZ2h0ZWQnLFxuICAncXVhbnRpbGVURGlnZXN0JyxcbiAgJ3NlcXVlbmNlTWF0Y2gnLFxuICAnc2VxdWVuY2VDb3VudCcsXG4gICd3aW5kb3dGdW5uZWwnLFxuICAncmV0ZW50aW9uJyxcbiAgJ3VuaXFVcFRvJyxcbiAgW1xuICAgICdjb3VudElmJyxcbiAgICAnZm4oKScsXG4gICAgYFxuICAqKmNvdW50SWYoY29uZGl0aW9uKSoqXG5cbiAgQ291bnQgdGhlIG51bWJlciBvZiByb3dzIHRoYXQgc2F0aWZpZXMgYSBjb25kaXRpb24uIFtMZWFybiBtb3JlXShodHRwczovL2NsaWNraG91c2UtZG9jcy5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvYWdnX2Z1bmN0aW9ucy8jaWYtY29tYmluYXRvci1jb25kaXRpb25hbC1hZ2dyZWdhdGUtZnVuY3Rpb25zKVxuICBgLFxuICAgIGBjb3VudElmKGNvbmQpYCxcbiAgICAnY29uZCdcbiAgXSxcbiAgJ2FueUlmJyxcbiAgJ2FueUxhc3RJZicsXG4gICdtaW5JZicsXG4gICdtYXhJZicsXG4gICdhcmdNaW5JZicsXG4gICdhcmdNYXhJZicsXG4gICdzdW1JZicsXG4gICdhdmdJZicsXG4gICd1bmlxSWYnLFxuICAndW5pcUhMTDEySWYnLFxuICAndW5pcUV4YWN0SWYnLFxuICAnZ3JvdXBBcnJheUlmJyxcbiAgJ2dyb3VwVW5pcUFycmF5SWYnLFxuICAnbWVkaWFuSWYnLFxuICAnbWVkaWFuVGltaW5nSWYnLFxuICAnbWVkaWFuRGV0ZXJtaW5pc3RpY0lmJyxcbiAgJ21lZGlhblRpbWluZ1dlaWdodGVkSWYnLFxuICAndmFyU2FtcElmJyxcbiAgJ3ZhclBvcElmJyxcbiAgJ3N0ZGRldlNhbXBJZicsXG4gICdzdGRkZXZQb3BJZicsXG4gICdjb3ZhclNhbXBJZicsXG4gICdjb3ZhclBvcElmJyxcbiAgJ2NvcnJJZicsXG4gICdxdWFudGlsZUlmJyxcbiAgJ3F1YW50aWxlc0lmJyxcbiAgJ3F1YW50aWxlVGltaW5nSWYnLFxuICAncXVhbnRpbGVzVGltaW5nSWYnLFxuICAncXVhbnRpbGVUaW1pbmdXZWlnaHRlZElmJyxcbiAgJ3F1YW50aWxlc1RpbWluZ1dlaWdodGVkSWYnLFxuICAncXVhbnRpbGVEZXRlcm1pbmlzdGljSWYnLFxuICAncXVhbnRpbGVzRGV0ZXJtaW5pc3RpY0lmJyxcbiAgJ3NlcXVlbmNlTWF0Y2hJZicsXG4gICd1bmlxVXBUb0lmJyxcbiAgJ2FycmF5U3BsaXQnLFxuICAnYXJyYXlSZWR1Y2UnLFxuICAnYXJyYXlSZWR1Y2VJblJhbmdlcycsXG4gICdjb3VudEFycmF5JyxcbiAgJ2FueUFycmF5JyxcbiAgJ2FueUxhc3RBcnJheScsXG4gICdtaW5BcnJheScsXG4gICdtYXhBcnJheScsXG4gICdhcmdNaW5BcnJheScsXG4gICdhcmdNYXhBcnJheScsXG4gICdzdW1BcnJheScsXG4gICdhdmdBcnJheScsXG4gICd1bmlxQXJyYXknLFxuICAndW5pcUhMTDEyQXJyYXknLFxuICAndW5pcUV4YWN0QXJyYXknLFxuICAnZ3JvdXBBcnJheUFycmF5JyxcbiAgJ2dyb3VwVW5pcUFycmF5QXJyYXknLFxuICAnbWVkaWFuQXJyYXknLFxuICAnbWVkaWFuVGltaW5nQXJyYXknLFxuICAnbWVkaWFuRGV0ZXJtaW5pc3RpY0FycmF5JyxcbiAgJ21lZGlhblRpbWluZ1dlaWdodGVkQXJyYXknLFxuICAndmFyU2FtcEFycmF5JyxcbiAgJ3ZhclBvcEFycmF5JyxcbiAgJ3N0ZGRldlNhbXBBcnJheScsXG4gICdzdGRkZXZQb3BBcnJheScsXG4gICdjb3ZhclNhbXBBcnJheScsXG4gICdjb3ZhclBvcEFycmF5JyxcbiAgJ2NvcnJBcnJheScsXG4gICdxdWFudGlsZUFycmF5JyxcbiAgJ3F1YW50aWxlc0FycmF5JyxcbiAgJ3F1YW50aWxlVGltaW5nQXJyYXknLFxuICAncXVhbnRpbGVzVGltaW5nQXJyYXknLFxuICAncXVhbnRpbGVUaW1pbmdXZWlnaHRlZEFycmF5JyxcbiAgJ3F1YW50aWxlc1RpbWluZ1dlaWdodGVkQXJyYXknLFxuICAncXVhbnRpbGVEZXRlcm1pbmlzdGljQXJyYXknLFxuICAncXVhbnRpbGVzRGV0ZXJtaW5pc3RpY0FycmF5JyxcbiAgJ3NlcXVlbmNlTWF0Y2hBcnJheScsXG4gICd1bmlxVXBUb0FycmF5JyxcbiAgJ2NvdW50U3RhdGUnLFxuICAnYW55U3RhdGUnLFxuICAnYW55TGFzdFN0YXRlJyxcbiAgJ21pblN0YXRlJyxcbiAgJ21heFN0YXRlJyxcbiAgJ2FyZ01pblN0YXRlJyxcbiAgJ2FyZ01heFN0YXRlJyxcbiAgJ3N1bVN0YXRlJyxcbiAgJ2F2Z1N0YXRlJyxcbiAgJ3VuaXFTdGF0ZScsXG4gICd1bmlxSExMMTJTdGF0ZScsXG4gICd1bmlxRXhhY3RTdGF0ZScsXG4gICdncm91cEFycmF5U3RhdGUnLFxuICAnZ3JvdXBVbmlxQXJyYXlTdGF0ZScsXG4gICdtZWRpYW5TdGF0ZScsXG4gICdtZWRpYW5UaW1pbmdTdGF0ZScsXG4gICdtZWRpYW5EZXRlcm1pbmlzdGljU3RhdGUnLFxuICAnbWVkaWFuVGltaW5nV2VpZ2h0ZWRTdGF0ZScsXG4gICd2YXJTYW1wU3RhdGUnLFxuICAndmFyUG9wU3RhdGUnLFxuICAnc3RkZGV2U2FtcFN0YXRlJyxcbiAgJ3N0ZGRldlBvcFN0YXRlJyxcbiAgJ2NvdmFyU2FtcFN0YXRlJyxcbiAgJ2NvdmFyUG9wU3RhdGUnLFxuICAnY29yclN0YXRlJyxcbiAgJ3F1YW50aWxlU3RhdGUnLFxuICAncXVhbnRpbGVzU3RhdGUnLFxuICAncXVhbnRpbGVUaW1pbmdTdGF0ZScsXG4gICdxdWFudGlsZXNUaW1pbmdTdGF0ZScsXG4gICdxdWFudGlsZVRpbWluZ1dlaWdodGVkU3RhdGUnLFxuICAncXVhbnRpbGVzVGltaW5nV2VpZ2h0ZWRTdGF0ZScsXG4gICdxdWFudGlsZURldGVybWluaXN0aWNTdGF0ZScsXG4gICdxdWFudGlsZXNEZXRlcm1pbmlzdGljU3RhdGUnLFxuICAnc2VxdWVuY2VNYXRjaFN0YXRlJyxcbiAgJ3VuaXFVcFRvU3RhdGUnLFxuICAnY291bnRNZXJnZScsXG4gICdhbnlNZXJnZScsXG4gICdhbnlMYXN0TWVyZ2UnLFxuICAnbWluTWVyZ2UnLFxuICAnbWF4TWVyZ2UnLFxuICAnYXJnTWluTWVyZ2UnLFxuICAnYXJnTWF4TWVyZ2UnLFxuICAnc3VtTWVyZ2UnLFxuICAnYXZnTWVyZ2UnLFxuICAndW5pcU1lcmdlJyxcbiAgJ3VuaXFITEwxMk1lcmdlJyxcbiAgJ3VuaXFFeGFjdE1lcmdlJyxcbiAgJ2dyb3VwQXJyYXlNZXJnZScsXG4gICdncm91cFVuaXFBcnJheU1lcmdlJyxcbiAgJ21lZGlhbk1lcmdlJyxcbiAgJ21lZGlhblRpbWluZ01lcmdlJyxcbiAgJ21lZGlhbkRldGVybWluaXN0aWNNZXJnZScsXG4gICdtZWRpYW5UaW1pbmdXZWlnaHRlZE1lcmdlJyxcbiAgJ3ZhclNhbXBNZXJnZScsXG4gICd2YXJQb3BNZXJnZScsXG4gICdzdGRkZXZTYW1wTWVyZ2UnLFxuICAnc3RkZGV2UG9wTWVyZ2UnLFxuICAnY292YXJTYW1wTWVyZ2UnLFxuICAnY292YXJQb3BNZXJnZScsXG4gICdjb3JyTWVyZ2UnLFxuICAncXVhbnRpbGVNZXJnZScsXG4gICdxdWFudGlsZXNNZXJnZScsXG4gICdxdWFudGlsZVRpbWluZ01lcmdlJyxcbiAgJ3F1YW50aWxlc1RpbWluZ01lcmdlJyxcbiAgJ3F1YW50aWxlVGltaW5nV2VpZ2h0ZWRNZXJnZScsXG4gICdxdWFudGlsZXNUaW1pbmdXZWlnaHRlZE1lcmdlJyxcbiAgJ3F1YW50aWxlRGV0ZXJtaW5pc3RpY01lcmdlJyxcbiAgJ3F1YW50aWxlc0RldGVybWluaXN0aWNNZXJnZScsXG4gICdzZXF1ZW5jZU1hdGNoTWVyZ2UnLFxuICAndW5pcVVwVG9NZXJnZScsXG4gICdmaWxlJyxcbiAgJ21lcmdlJyxcbiAgJ251bWJlcnMnLFxuICAncmVtb3RlJyxcbiAgJ3VybCcsXG4gICdqZGJjJyxcbiAgW1xuICAgICdKU09ORXh0cmFjdFN0cmluZycsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipKU09ORXh0cmFjdFN0cmluZyhqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApikqKlxuICBcbiAgUGFyc2VzIGEgSlNPTiBhbmQgZXh0cmFjdCBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBzaW1pbGFyIHRvIHZpc2l0UGFyYW1FeHRyYWN0U3RyaW5nIGZ1bmN0aW9ucy4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2pzb25fZnVuY3Rpb25zLyNqc29uZXh0cmFjdHN0cmluZ2pzb24taW5kaWNlcy1vci1rZXlzKVxuICBgLFxuICAgIGBKU09ORXh0cmFjdFN0cmluZyhqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApilgLFxuICAgICdqc29uJ1xuICBdLFxuICBbXG4gICAgJ0pTT05FeHRyYWN0Qm9vbCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipKU09ORXh0cmFjdEJvb2woanNvblssIGluZGljZXNfb3Jfa2V5c13igKYpKipcbiAgXG4gIFBhcnNlcyBhIEpTT04gYW5kIGV4dHJhY3QgYSB2YWx1ZS4gVGhlc2UgZnVuY3Rpb25zIGFyZSBzaW1pbGFyIHRvIHZpc2l0UGFyYW0gZnVuY3Rpb25zLiBJZiB0aGUgdmFsdWUgZG9lcyBub3QgZXhpc3Qgb3IgaGFzIGEgd3JvbmcgdHlwZSwgMCB3aWxsIGJlIHJldHVybmVkLiBbTGVhcm4gbW9yZV0oaHR0cHM6Ly9jbGlja2hvdXNlLnRlY2gvZG9jcy9lbi9xdWVyeV9sYW5ndWFnZS9mdW5jdGlvbnMvanNvbl9mdW5jdGlvbnMvI2pzb25leHRyYWN0Ym9vbGpzb24taW5kaWNlcy1vci1rZXlzKVxuICBgLFxuICAgIGBKU09ORXh0cmFjdEJvb2woanNvblssIGluZGljZXNfb3Jfa2V5c13igKYpYCxcbiAgICAnanNvbidcbiAgXSxcbiAgW1xuICAgICdKU09ORXh0cmFjdCcsXG4gICAgJ2ZuKCknLFxuICAgIGBcbiAgKipKU09ORXh0cmFjdChqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApikqKlxuICBcbiAgUGFyc2VzIGEgSlNPTiBhbmQgZXh0cmFjdCBhIHZhbHVlIG9mIHRoZSBnaXZlbiBDbGlja0hvdXNlIGRhdGEgdHlwZS4gW0xlYXJuIG1vcmVdKGh0dHBzOi8vY2xpY2tob3VzZS50ZWNoL2RvY3MvZW4vcXVlcnlfbGFuZ3VhZ2UvZnVuY3Rpb25zL2pzb25fZnVuY3Rpb25zLyNqc29uZXh0cmFjdGpzb24taW5kaWNlcy1vci1rZXlzLXJldHVybi10eXBlKVxuICBgLFxuICAgIGBKU09ORXh0cmFjdChqc29uWywgaW5kaWNlc19vcl9rZXlzXeKApilgLFxuICAgICdqc29uJ1xuICBdLFxuICBbXG4gICAgJ0pTT05FeHRyYWN0QXJyYXlSYXcnLFxuICAgICdmbigpJyxcbiAgICBgXG4gICoqSlNPTkV4dHJhY3RBcnJheVJhdyhqc29uKSoqXG5cbiAgUmV0dXJucyBhbiBhcnJheSBvbiB1bnBhcnNlZCBqc29uIGFycmF5IGVsZW1lbnRzIGZyb20gSlNPTiBzdHJpbmdcbiAgYCxcbiAgICBgSlNPTkV4dHJhY3RBcnJheVJhdyhqc29uKWAsXG4gICAgJ2pzb24nXG4gIF0sXG4gICdpbml0aWFsaXplQWdncmVnYXRpb24nLFxuICAncGFyc2VEYXRlVGltZUJlc3RFZmZvcnRVUydcbl1cbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RhdGFiYXNlJyxcbiAgJ3RhYmxlJyxcbiAgJ3ZpZXcnLFxuICAnYXMnLFxuICAnYXR0YWNoJyxcbiAgJ2Ryb3AnLFxuICAnZGV0YWNoJyxcbiAgJ3JlbmFtZScsXG4gICdhbHRlcicsXG4gICdzaG93JyxcbiAgJ2RhdGFiYXNlcycsXG4gICd0YWJsZXMnLFxuICAncHJvY2Vzc2xpc3QnLFxuICAnZGVzY3JpYmUnLFxuICAnZXhpc3RzJyxcbiAgJ3VzZScsXG4gICdzZXQnLFxuICAnb3B0aW1pemUnLFxuICAnaW5zZXJ0JyxcbiAgJ2ludG8nLFxuICAnc2VsZWN0JyxcbiAgJ2Zyb20nLFxuICAnc2FtcGxlJyxcbiAgJ2pvaW4nLFxuICAnaW5uZXInLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdvbicsXG4gICd3aGVyZScsXG4gICdwcmV3aGVyZScsXG4gIFtcbiAgICAnZ3JvdXAnLFxuICAgICdrZXl3b3JkJyxcbiAgICBgXG4gICoqR1JPVVAgQlkgY29sdW1uX25hbWUqKlxuICBgLFxuICAgICdHUk9VUCBCWSBjb2x1bW5fbmFtZScsXG4gICAgJ2NvbHVtbl9uYW1lJ1xuICBdLFxuICBbXG4gICAgJ2JldHdlZW4nLFxuICAgICdrZXl3b3JkJyxcbiAgICBgXG4gICoqQkVUV0VFTiBjb25kMSBBTkQgY29uZDIqKlxuICBcbiAgU2hvcnRjdXQgZm9yIGZpbHRlciBiZXR3ZWVuIHR3byB2YWx1ZXMuIFxuYCxcbiAgICAnQkVUV0VFTiBjb25kMSBBTkQgY29uZDInLFxuICAgICdjb25kMSdcbiAgXSxcbiAgJ2J5JyxcbiAgJ3dpdGgnLFxuICAndG90YWxzJyxcbiAgJ2hhdmluZycsXG4gIFtcbiAgICAnb3JkZXInLFxuICAgICdrZXl3b3JkJyxcbiAgICBgXG4gICoqT1JERVIgQlkgY29sdW1uX25hbWUqKlxuICBgLFxuICAgICdPUkRFUiBCWSBjb2x1bW5fbmFtZScsXG4gICAgJ2NvbHVtbl9uYW1lJ1xuICBdLFxuICAnYXNjJyxcbiAgJ2Rlc2MnLFxuICAnZGlzdGluY3QnLFxuICAnbGltaXQnLFxuICAndW5pb24nLFxuICAnYWxsJyxcbiAgJ2Zvcm1hdCcsXG4gICdpbicsXG4gICdlbmdpbmUnLFxuICAna2lsbCcsXG4gICdxdWVyeScsXG4gICdudWxsJyxcbiAgJ2FuZCcsXG4gICdpcycsXG4gICdvcicsXG4gICdub3QnLFxuICAneG9yJ1xuXVxuIiwiaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi90b2tlblR5cGVzJztcbmltcG9ydCBJbmRlbnRhdGlvbiBmcm9tICcuL0luZGVudGF0aW9uJztcbmltcG9ydCBJbmxpbmVCbG9jayBmcm9tICcuL0lubGluZUJsb2NrJztcbmltcG9ydCBQYXJhbXMgZnJvbSAnLi9QYXJhbXMnO1xuaW1wb3J0IHsgdHJpbVNwYWNlc0VuZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzQW5kLCBpc0JldHdlZW4sIGlzTGltaXQgfSBmcm9tICcuL3Rva2VuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybWF0dGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogIEBwYXJhbSB7U3RyaW5nfSBjZmcubGFuZ3VhZ2VcbiAgICogIEBwYXJhbSB7U3RyaW5nfSBjZmcuaW5kZW50XG4gICAqICBAcGFyYW0ge0Jvb2xlYW59IGNmZy51cHBlcmNhc2VcbiAgICogIEBwYXJhbSB7SW50ZWdlcn0gY2ZnLmxpbmVzQmV0d2VlblF1ZXJpZXNcbiAgICogIEBwYXJhbSB7T2JqZWN0fSBjZmcucGFyYW1zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjZmcpIHtcbiAgICB0aGlzLmNmZyA9IGNmZztcbiAgICB0aGlzLmluZGVudGF0aW9uID0gbmV3IEluZGVudGF0aW9uKHRoaXMuY2ZnLmluZGVudCk7XG4gICAgdGhpcy5pbmxpbmVCbG9jayA9IG5ldyBJbmxpbmVCbG9jaygpO1xuICAgIHRoaXMucGFyYW1zID0gbmV3IFBhcmFtcyh0aGlzLmNmZy5wYXJhbXMpO1xuICAgIHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuID0ge307XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTUUwgVG9rZW5pemVyIGZvciB0aGlzIGZvcm1hdHRlciwgcHJvdmlkZWQgYnkgc3ViY2xhc3Nlcy5cbiAgICovXG4gIHRva2VuaXplcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rva2VuaXplcigpIG5vdCBpbXBsZW1lbnRlZCBieSBzdWJjbGFzcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJvY2VzcyBhbmQgbW9kaWZ5IGEgdG9rZW4gYmFzZWQgb24gcGFyc2VkIGNvbnRleHQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbiBUaGUgdG9rZW4gdG8gbW9kaWZ5XG4gICAqICBAcGFyYW0ge1N0cmluZ30gdG9rZW4udHlwZVxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IHRva2VuLnZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gbmV3IHRva2VuIG9yIHRoZSBvcmlnaW5hbFxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi50eXBlXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLnZhbHVlXG4gICAqL1xuICB0b2tlbk92ZXJyaWRlKHRva2VuKSB7XG4gICAgLy8gc3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBtb2RpZnkgdG9rZW5zIGR1cmluZyBmb3JtYXR0aW5nXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgd2hpdGVzcGFjZSBpbiBhIFNRTCBzdHJpbmcgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFRoZSBTUUwgcXVlcnkgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gZm9ybWF0dGVkIHF1ZXJ5XG4gICAqL1xuICBmb3JtYXQocXVlcnkpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5pemVyKCkudG9rZW5pemUocXVlcnkpO1xuICAgIGNvbnN0IGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5nZXRGb3JtYXR0ZWRRdWVyeUZyb21Ub2tlbnMoKTtcblxuICAgIHJldHVybiBmb3JtYXR0ZWRRdWVyeS50cmltKCk7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRRdWVyeUZyb21Ub2tlbnMoKSB7XG4gICAgbGV0IGZvcm1hdHRlZFF1ZXJ5ID0gJyc7XG5cbiAgICB0aGlzLnRva2Vucy5mb3JFYWNoKCh0b2tlbiwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuT3ZlcnJpZGUodG9rZW4pO1xuXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5MSU5FX0NPTU1FTlQpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdExpbmVDb21tZW50KHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuQkxPQ0tfQ09NTUVOVCkge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0QmxvY2tDb21tZW50KHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbiA9IHRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkTm9JbmRlbnQodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1Jlc2VydmVkVG9rZW4gPSB0b2tlbjtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXROZXdsaW5lUmVzZXJ2ZWRXb3JkKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuID0gdG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRUQpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFdpdGhTcGFjZXModG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1Jlc2VydmVkVG9rZW4gPSB0b2tlbjtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5PUEVOX1BBUkVOKSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRPcGVuaW5nUGFyZW50aGVzZXModG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5DTE9TRV9QQVJFTikge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0Q2xvc2luZ1BhcmVudGhlc2VzKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUExBQ0VIT0xERVIpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFBsYWNlaG9sZGVyKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnZhbHVlID09PSAnLCcpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdENvbW1hKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnZhbHVlID09PSAnOicpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFdpdGhTcGFjZUFmdGVyKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnZhbHVlID09PSAnLicpIHtcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFdpdGhvdXRTcGFjZXModG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICc7Jykge1xuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0UXVlcnlTZXBhcmF0b3IodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRXaXRoU3BhY2VzKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFF1ZXJ5O1xuICB9XG5cbiAgZm9ybWF0TGluZUNvbW1lbnQodG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZShxdWVyeSArIHRoaXMuc2hvdyh0b2tlbikpO1xuICB9XG5cbiAgZm9ybWF0QmxvY2tDb21tZW50KHRva2VuLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmFkZE5ld2xpbmUodGhpcy5hZGROZXdsaW5lKHF1ZXJ5KSArIHRoaXMuaW5kZW50Q29tbWVudCh0b2tlbi52YWx1ZSkpO1xuICB9XG5cbiAgaW5kZW50Q29tbWVudChjb21tZW50KSB7XG4gICAgcmV0dXJuIGNvbW1lbnQucmVwbGFjZSgvXFxuWyBcXHRdKi9ndSwgJ1xcbicgKyB0aGlzLmluZGVudGF0aW9uLmdldEluZGVudCgpICsgJyAnKTtcbiAgfVxuXG4gIGZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkTm9JbmRlbnQodG9rZW4sIHF1ZXJ5KSB7XG4gICAgdGhpcy5pbmRlbnRhdGlvbi5kZWNyZWFzZVRvcExldmVsKCk7XG4gICAgcXVlcnkgPSB0aGlzLmFkZE5ld2xpbmUocXVlcnkpICsgdGhpcy5lcXVhbGl6ZVdoaXRlc3BhY2UodGhpcy5zaG93KHRva2VuKSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZShxdWVyeSk7XG4gIH1cblxuICBmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCh0b2tlbiwgcXVlcnkpIHtcbiAgICB0aGlzLmluZGVudGF0aW9uLmRlY3JlYXNlVG9wTGV2ZWwoKTtcblxuICAgIHF1ZXJ5ID0gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcblxuICAgIHRoaXMuaW5kZW50YXRpb24uaW5jcmVhc2VUb3BMZXZlbCgpO1xuXG4gICAgcXVlcnkgKz0gdGhpcy5lcXVhbGl6ZVdoaXRlc3BhY2UodGhpcy5zaG93KHRva2VuKSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZShxdWVyeSk7XG4gIH1cblxuICBmb3JtYXROZXdsaW5lUmVzZXJ2ZWRXb3JkKHRva2VuLCBxdWVyeSkge1xuICAgIGlmIChpc0FuZCh0b2tlbikgJiYgaXNCZXR3ZWVuKHRoaXMudG9rZW5Mb29rQmVoaW5kKDIpKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgcXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KSArIHRoaXMuZXF1YWxpemVXaGl0ZXNwYWNlKHRoaXMuc2hvdyh0b2tlbikpICsgJyAnO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBhbnkgc2VxdWVuY2Ugb2Ygd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHdpdGggc2luZ2xlIHNwYWNlXG4gIGVxdWFsaXplV2hpdGVzcGFjZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvZ3UsICcgJyk7XG4gIH1cblxuICAvLyBPcGVuaW5nIHBhcmVudGhlc2VzIGluY3JlYXNlIHRoZSBibG9jayBpbmRlbnQgbGV2ZWwgYW5kIHN0YXJ0IGEgbmV3IGxpbmVcbiAgZm9ybWF0T3BlbmluZ1BhcmVudGhlc2VzKHRva2VuLCBxdWVyeSkge1xuICAgIC8vIFRha2Ugb3V0IHRoZSBwcmVjZWRpbmcgc3BhY2UgdW5sZXNzIHRoZXJlIHdhcyB3aGl0ZXNwYWNlIHRoZXJlIGluIHRoZSBvcmlnaW5hbCBxdWVyeVxuICAgIC8vIG9yIGFub3RoZXIgb3BlbmluZyBwYXJlbnMgb3IgbGluZSBjb21tZW50XG4gICAgY29uc3QgcHJlc2VydmVXaGl0ZXNwYWNlRm9yID0ge1xuICAgICAgW3Rva2VuVHlwZXMuT1BFTl9QQVJFTl06IHRydWUsXG4gICAgICBbdG9rZW5UeXBlcy5MSU5FX0NPTU1FTlRdOiB0cnVlLFxuICAgICAgW3Rva2VuVHlwZXMuT1BFUkFUT1JdOiB0cnVlLFxuICAgIH07XG4gICAgaWYgKFxuICAgICAgdG9rZW4ud2hpdGVzcGFjZUJlZm9yZS5sZW5ndGggPT09IDAgJiZcbiAgICAgICFwcmVzZXJ2ZVdoaXRlc3BhY2VGb3JbdGhpcy50b2tlbkxvb2tCZWhpbmQoKT8udHlwZV1cbiAgICApIHtcbiAgICAgIHF1ZXJ5ID0gdHJpbVNwYWNlc0VuZChxdWVyeSk7XG4gICAgfVxuICAgIHF1ZXJ5ICs9IHRoaXMuc2hvdyh0b2tlbik7XG5cbiAgICB0aGlzLmlubGluZUJsb2NrLmJlZ2luSWZQb3NzaWJsZSh0aGlzLnRva2VucywgdGhpcy5pbmRleCk7XG5cbiAgICBpZiAoIXRoaXMuaW5saW5lQmxvY2suaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5pbmRlbnRhdGlvbi5pbmNyZWFzZUJsb2NrTGV2ZWwoKTtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLy8gQ2xvc2luZyBwYXJlbnRoZXNlcyBkZWNyZWFzZSB0aGUgYmxvY2sgaW5kZW50IGxldmVsXG4gIGZvcm1hdENsb3NpbmdQYXJlbnRoZXNlcyh0b2tlbiwgcXVlcnkpIHtcbiAgICBpZiAodGhpcy5pbmxpbmVCbG9jay5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmlubGluZUJsb2NrLmVuZCgpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFNwYWNlQWZ0ZXIodG9rZW4sIHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRlbnRhdGlvbi5kZWNyZWFzZUJsb2NrTGV2ZWwoKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTcGFjZXModG9rZW4sIHRoaXMuYWRkTmV3bGluZShxdWVyeSkpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFBsYWNlaG9sZGVyKHRva2VuLCBxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSArIHRoaXMucGFyYW1zLmdldCh0b2tlbikgKyAnICc7XG4gIH1cblxuICAvLyBDb21tYXMgc3RhcnQgYSBuZXcgbGluZSAodW5sZXNzIHdpdGhpbiBpbmxpbmUgcGFyZW50aGVzZXMgb3IgU1FMIFwiTElNSVRcIiBjbGF1c2UpXG4gIGZvcm1hdENvbW1hKHRva2VuLCBxdWVyeSkge1xuICAgIHF1ZXJ5ID0gdHJpbVNwYWNlc0VuZChxdWVyeSkgKyB0aGlzLnNob3codG9rZW4pICsgJyAnO1xuXG4gICAgaWYgKHRoaXMuaW5saW5lQmxvY2suaXNBY3RpdmUoKSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAoaXNMaW1pdCh0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbikpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZShxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0V2l0aFNwYWNlQWZ0ZXIodG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRyaW1TcGFjZXNFbmQocXVlcnkpICsgdGhpcy5zaG93KHRva2VuKSArICcgJztcbiAgfVxuXG4gIGZvcm1hdFdpdGhvdXRTcGFjZXModG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRyaW1TcGFjZXNFbmQocXVlcnkpICsgdGhpcy5zaG93KHRva2VuKTtcbiAgfVxuXG4gIGZvcm1hdFdpdGhTcGFjZXModG9rZW4sIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5ICsgdGhpcy5zaG93KHRva2VuKSArICcgJztcbiAgfVxuXG4gIGZvcm1hdFF1ZXJ5U2VwYXJhdG9yKHRva2VuLCBxdWVyeSkge1xuICAgIHRoaXMuaW5kZW50YXRpb24ucmVzZXRJbmRlbnRhdGlvbigpO1xuICAgIHJldHVybiB0cmltU3BhY2VzRW5kKHF1ZXJ5KSArIHRoaXMuc2hvdyh0b2tlbikgKyAnXFxuJy5yZXBlYXQodGhpcy5jZmcubGluZXNCZXR3ZWVuUXVlcmllcyB8fCAxKTtcbiAgfVxuXG4gIC8vIENvbnZlcnRzIHRva2VuIHRvIHN0cmluZyAodXBwZXJjYXNpbmcgaXQgaWYgbmVlZGVkKVxuICBzaG93KHsgdHlwZSwgdmFsdWUgfSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2ZnLnVwcGVyY2FzZSAmJlxuICAgICAgKHR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRUQgfHxcbiAgICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwgfHxcbiAgICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUxfTk9fSU5ERU5UIHx8XG4gICAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRURfTkVXTElORSB8fFxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLk9QRU5fUEFSRU4gfHxcbiAgICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5DTE9TRV9QQVJFTilcbiAgICApIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkTmV3bGluZShxdWVyeSkge1xuICAgIHF1ZXJ5ID0gdHJpbVNwYWNlc0VuZChxdWVyeSk7XG4gICAgaWYgKCFxdWVyeS5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgIHF1ZXJ5ICs9ICdcXG4nO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkgKyB0aGlzLmluZGVudGF0aW9uLmdldEluZGVudCgpO1xuICB9XG5cbiAgdG9rZW5Mb29rQmVoaW5kKG4gPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXggLSBuXTtcbiAgfVxuXG4gIHRva2VuTG9va0FoZWFkKG4gPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXggKyBuXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGFzdCB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgSU5ERU5UX1RZUEVfVE9QX0xFVkVMID0gJ3RvcC1sZXZlbCc7XG5jb25zdCBJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCA9ICdibG9jay1sZXZlbCc7XG5cbi8qKlxuICogTWFuYWdlcyBpbmRlbnRhdGlvbiBsZXZlbHMuXG4gKlxuICogVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBpbmRlbnRhdGlvbiBsZXZlbHM6XG4gKlxuICogLSBCTE9DS19MRVZFTCA6IGluY3JlYXNlZCBieSBvcGVuLXBhcmVudGhlc2lzXG4gKiAtIFRPUF9MRVZFTCA6IGluY3JlYXNlZCBieSBSRVNFUlZFRF9UT1BfTEVWRUwgd29yZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZW50YXRpb24ge1xuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IGluZGVudCBJbmRlbnQgdmFsdWUsIGRlZmF1bHQgaXMgXCIgIFwiICgyIHNwYWNlcylcbiAgICovXG4gIGNvbnN0cnVjdG9yKGluZGVudCkge1xuICAgIHRoaXMuaW5kZW50ID0gaW5kZW50IHx8ICcgICc7XG4gICAgdGhpcy5pbmRlbnRUeXBlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBpbmRlbnRhdGlvbiBzdHJpbmcuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdldEluZGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRlbnQucmVwZWF0KHRoaXMuaW5kZW50VHlwZXMubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZXMgaW5kZW50YXRpb24gYnkgb25lIHRvcC1sZXZlbCBpbmRlbnQuXG4gICAqL1xuICBpbmNyZWFzZVRvcExldmVsKCkge1xuICAgIHRoaXMuaW5kZW50VHlwZXMucHVzaChJTkRFTlRfVFlQRV9UT1BfTEVWRUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlcyBpbmRlbnRhdGlvbiBieSBvbmUgYmxvY2stbGV2ZWwgaW5kZW50LlxuICAgKi9cbiAgaW5jcmVhc2VCbG9ja0xldmVsKCkge1xuICAgIHRoaXMuaW5kZW50VHlwZXMucHVzaChJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCk7XG4gIH1cblxuICAvKipcbiAgICogRGVjcmVhc2VzIGluZGVudGF0aW9uIGJ5IG9uZSB0b3AtbGV2ZWwgaW5kZW50LlxuICAgKiBEb2VzIG5vdGhpbmcgd2hlbiB0aGUgcHJldmlvdXMgaW5kZW50IGlzIG5vdCB0b3AtbGV2ZWwuXG4gICAqL1xuICBkZWNyZWFzZVRvcExldmVsKCkge1xuICAgIGlmICh0aGlzLmluZGVudFR5cGVzLmxlbmd0aCA+IDAgJiYgbGFzdCh0aGlzLmluZGVudFR5cGVzKSA9PT0gSU5ERU5UX1RZUEVfVE9QX0xFVkVMKSB7XG4gICAgICB0aGlzLmluZGVudFR5cGVzLnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgaW5kZW50YXRpb24gYnkgb25lIGJsb2NrLWxldmVsIGluZGVudC5cbiAgICogSWYgdGhlcmUgYXJlIHRvcC1sZXZlbCBpbmRlbnRzIHdpdGhpbiB0aGUgYmxvY2stbGV2ZWwgaW5kZW50LFxuICAgKiB0aHJvd3MgYXdheSB0aGVzZSBhcyB3ZWxsLlxuICAgKi9cbiAgZGVjcmVhc2VCbG9ja0xldmVsKCkge1xuICAgIHdoaWxlICh0aGlzLmluZGVudFR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmluZGVudFR5cGVzLnBvcCgpO1xuICAgICAgaWYgKHR5cGUgIT09IElOREVOVF9UWVBFX1RPUF9MRVZFTCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNldEluZGVudGF0aW9uKCkge1xuICAgIHRoaXMuaW5kZW50VHlwZXMgPSBbXTtcbiAgfVxufVxuIiwiaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi90b2tlblR5cGVzJztcblxuY29uc3QgSU5MSU5FX01BWF9MRU5HVEggPSA1MDtcblxuLyoqXG4gKiBCb29ra2VlcGVyIGZvciBpbmxpbmUgYmxvY2tzLlxuICpcbiAqIElubGluZSBibG9ja3MgYXJlIHBhcmVudGhpemVkIGV4cHJlc3Npb25zIHRoYXQgYXJlIHNob3J0ZXIgdGhhbiBJTkxJTkVfTUFYX0xFTkdUSC5cbiAqIFRoZXNlIGJsb2NrcyBhcmUgZm9ybWF0dGVkIG9uIGEgc2luZ2xlIGxpbmUsIHVubGlrZSBsb25nZXIgcGFyZW50aGl6ZWRcbiAqIGV4cHJlc3Npb25zIHdoZXJlIG9wZW4tcGFyZW50aGVzaXMgY2F1c2VzIG5ld2xpbmUgYW5kIGluY3JlYXNlIG9mIGluZGVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVCbG9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEJlZ2lucyBpbmxpbmUgYmxvY2sgd2hlbiBsb29rYWhlYWQgdGhyb3VnaCB1cGNvbWluZyB0b2tlbnMgZGV0ZXJtaW5lc1xuICAgKiB0aGF0IHRoZSBibG9jayB3b3VsZCBiZSBzbWFsbGVyIHRoYW4gSU5MSU5FX01BWF9MRU5HVEguXG4gICAqIEBwYXJhbSAge09iamVjdFtdfSB0b2tlbnMgQXJyYXkgb2YgYWxsIHRva2Vuc1xuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGluZGV4IEN1cnJlbnQgdG9rZW4gcG9zaXRpb25cbiAgICovXG4gIGJlZ2luSWZQb3NzaWJsZSh0b2tlbnMsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDAgJiYgdGhpcy5pc0lubGluZUJsb2NrKHRva2VucywgaW5kZXgpKSB7XG4gICAgICB0aGlzLmxldmVsID0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubGV2ZWwgPiAwKSB7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2hlcyBjdXJyZW50IGlubGluZSBibG9jay5cbiAgICogVGhlcmUgbWlnaHQgYmUgc2V2ZXJhbCBuZXN0ZWQgb25lcy5cbiAgICovXG4gIGVuZCgpIHtcbiAgICB0aGlzLmxldmVsLS07XG4gIH1cblxuICAvKipcbiAgICogVHJ1ZSB3aGVuIGluc2lkZSBhbiBpbmxpbmUgYmxvY2tcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsID4gMDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoaXMgc2hvdWxkIGJlIGFuIGlubGluZSBwYXJlbnRoZXNlcyBibG9ja1xuICAvLyBFeGFtcGxlcyBhcmUgXCJOT1coKVwiLCBcIkNPVU5UKCopXCIsIFwiaW50KDEwKVwiLCBrZXkoYHNvbWVjb2x1bW5gKSwgREVDSU1BTCg3LDIpXG4gIGlzSW5saW5lQmxvY2sodG9rZW5zLCBpbmRleCkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgbGVuZ3RoICs9IHRva2VuLnZhbHVlLmxlbmd0aDtcblxuICAgICAgLy8gT3ZlcnJhbiBtYXggbGVuZ3RoXG4gICAgICBpZiAobGVuZ3RoID4gSU5MSU5FX01BWF9MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5PUEVOX1BBUkVOKSB7XG4gICAgICAgIGxldmVsKys7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuQ0xPU0VfUEFSRU4pIHtcbiAgICAgICAgbGV2ZWwtLTtcbiAgICAgICAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW5Ub2tlbih0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBSZXNlcnZlZCB3b3JkcyB0aGF0IGNhdXNlIG5ld2xpbmVzLCBjb21tZW50cyBhbmQgc2VtaWNvbG9uc1xuICAvLyBhcmUgbm90IGFsbG93ZWQgaW5zaWRlIGlubGluZSBwYXJlbnRoZXNlcyBibG9ja1xuICBpc0ZvcmJpZGRlblRva2VuKHsgdHlwZSwgdmFsdWUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTCB8fFxuICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FIHx8XG4gICAgICB0eXBlID09PSB0b2tlblR5cGVzLkNPTU1FTlQgfHxcbiAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuQkxPQ0tfQ09NTUVOVCB8fFxuICAgICAgdmFsdWUgPT09ICc7J1xuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogSGFuZGxlcyBwbGFjZWhvbGRlciByZXBsYWNlbWVudCB3aXRoIGdpdmVuIHBhcmFtcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW1zIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcGFyYW0gdmFsdWUgdGhhdCBtYXRjaGVzIGdpdmVuIHBsYWNlaG9sZGVyIHdpdGggcGFyYW0ga2V5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gdG9rZW5cbiAgICogICBAcGFyYW0ge1N0cmluZ30gdG9rZW4ua2V5IFBsYWNlaG9sZGVyIGtleVxuICAgKiAgIEBwYXJhbSB7U3RyaW5nfSB0b2tlbi52YWx1ZSBQbGFjZWhvbGRlciB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHBhcmFtIG9yIHRva2VuLnZhbHVlIHdoZW4gcGFyYW1zIGFyZSBtaXNzaW5nXG4gICAqL1xuICBnZXQoeyBrZXksIHZhbHVlIH0pIHtcbiAgICBpZiAoIXRoaXMucGFyYW1zKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmFtc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJhbXNbdGhpcy5pbmRleCsrXTtcbiAgfVxufVxuIiwiaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi90b2tlblR5cGVzJztcbmltcG9ydCAqIGFzIHJlZ2V4RmFjdG9yeSBmcm9tICcuL3JlZ2V4RmFjdG9yeSc7XG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuaXplciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcucmVzZXJ2ZWRXb3JkcyBSZXNlcnZlZCB3b3JkcyBpbiBTUUxcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5yZXNlcnZlZFRvcExldmVsV29yZHMgV29yZHMgdGhhdCBhcmUgc2V0IHRvIG5ldyBsaW5lIHNlcGFyYXRlbHlcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5yZXNlcnZlZE5ld2xpbmVXb3JkcyBXb3JkcyB0aGF0IGFyZSBzZXQgdG8gbmV3bGluZVxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50IFdvcmRzIHRoYXQgYXJlIHRvcCBsZXZlbCBidXQgaGF2ZSBubyBpbmRlbnRhdGlvblxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnN0cmluZ1R5cGVzIFN0cmluZyB0eXBlcyB0byBlbmFibGU6IFwiXCIsICcnLCBgYCwgW10sIE4nJ1xuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLm9wZW5QYXJlbnMgT3BlbmluZyBwYXJlbnRoZXNlcyB0byBlbmFibGUsIGxpa2UgKCwgW1xuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLmNsb3NlUGFyZW5zIENsb3NpbmcgcGFyZW50aGVzZXMgdG8gZW5hYmxlLCBsaWtlICksIF1cbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5pbmRleGVkUGxhY2Vob2xkZXJUeXBlcyBQcmVmaXhlcyBmb3IgaW5kZXhlZCBwbGFjZWhvbGRlcnMsIGxpa2UgP1xuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLm5hbWVkUGxhY2Vob2xkZXJUeXBlcyBQcmVmaXhlcyBmb3IgbmFtZWQgcGxhY2Vob2xkZXJzLCBsaWtlIEAgYW5kIDpcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5saW5lQ29tbWVudFR5cGVzIExpbmUgY29tbWVudHMgdG8gZW5hYmxlLCBsaWtlICMgYW5kIC0tXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcuc3BlY2lhbFdvcmRDaGFycyBTcGVjaWFsIGNoYXJzIHRoYXQgY2FuIGJlIGZvdW5kIGluc2lkZSBvZiB3b3JkcywgbGlrZSBAIGFuZCAjXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBbY2ZnLm9wZXJhdG9yXSBBZGRpdGlvbmFsIG9wZXJhdG9ycyB0byByZWNvZ25pemVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNmZykge1xuICAgIHRoaXMuV0hJVEVTUEFDRV9SRUdFWCA9IC9eKFxccyspL3U7XG4gICAgdGhpcy5OVU1CRVJfUkVHRVggPSAvXigoLVxccyopP1swLTldKyhcXC5bMC05XSspPyhbZUVdLT9bMC05XSsoXFwuWzAtOV0rKT8pP3wweFswLTlhLWZBLUZdK3wwYlswMV0rKVxcYi91O1xuXG4gICAgdGhpcy5PUEVSQVRPUl9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVPcGVyYXRvclJlZ2V4KFtcbiAgICAgICc8PicsXG4gICAgICAnPD0nLFxuICAgICAgJz49JyxcbiAgICAgIC4uLihjZmcub3BlcmF0b3JzIHx8IFtdKSxcbiAgICBdKTtcblxuICAgIHRoaXMuQkxPQ0tfQ09NTUVOVF9SRUdFWCA9IC9eKFxcL1xcKlteXSo/KD86XFwqXFwvfCQpKS91O1xuICAgIHRoaXMuTElORV9DT01NRU5UX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZUxpbmVDb21tZW50UmVnZXgoY2ZnLmxpbmVDb21tZW50VHlwZXMpO1xuXG4gICAgdGhpcy5SRVNFUlZFRF9UT1BfTEVWRUxfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoY2ZnLnJlc2VydmVkVG9wTGV2ZWxXb3Jkcyk7XG4gICAgdGhpcy5SRVNFUlZFRF9UT1BfTEVWRUxfTk9fSU5ERU5UX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVJlc2VydmVkV29yZFJlZ2V4KFxuICAgICAgY2ZnLnJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50XG4gICAgKTtcbiAgICB0aGlzLlJFU0VSVkVEX05FV0xJTkVfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoY2ZnLnJlc2VydmVkTmV3bGluZVdvcmRzKTtcbiAgICB0aGlzLlJFU0VSVkVEX1BMQUlOX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVJlc2VydmVkV29yZFJlZ2V4KGNmZy5yZXNlcnZlZFdvcmRzKTtcblxuICAgIHRoaXMuV09SRF9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVXb3JkUmVnZXgoY2ZnLnNwZWNpYWxXb3JkQ2hhcnMpO1xuICAgIHRoaXMuU1RSSU5HX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVN0cmluZ1JlZ2V4KGNmZy5zdHJpbmdUeXBlcyk7XG5cbiAgICB0aGlzLk9QRU5fUEFSRU5fUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGFyZW5SZWdleChjZmcub3BlblBhcmVucyk7XG4gICAgdGhpcy5DTE9TRV9QQVJFTl9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVQYXJlblJlZ2V4KGNmZy5jbG9zZVBhcmVucyk7XG5cbiAgICB0aGlzLklOREVYRURfUExBQ0VIT0xERVJfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGxhY2Vob2xkZXJSZWdleChcbiAgICAgIGNmZy5pbmRleGVkUGxhY2Vob2xkZXJUeXBlcyxcbiAgICAgICdbMC05XSonXG4gICAgKTtcbiAgICB0aGlzLklERU5UX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgoXG4gICAgICBjZmcubmFtZWRQbGFjZWhvbGRlclR5cGVzLFxuICAgICAgJ1thLXpBLVowLTkuXyRdKydcbiAgICApO1xuICAgIHRoaXMuU1RSSU5HX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgoXG4gICAgICBjZmcubmFtZWRQbGFjZWhvbGRlclR5cGVzLFxuICAgICAgcmVnZXhGYWN0b3J5LmNyZWF0ZVN0cmluZ1BhdHRlcm4oY2ZnLnN0cmluZ1R5cGVzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSBTUUwgc3RyaW5nIGFuZCBicmVha3MgaXQgaW50byB0b2tlbnMuXG4gICAqIEVhY2ggdG9rZW4gaXMgYW4gb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgU1FMIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gdG9rZW5zIEFuIGFycmF5IG9mIHRva2Vucy5cbiAgICogIEByZXR1cm4ge1N0cmluZ30gdG9rZW4udHlwZVxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi52YWx1ZVxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi53aGl0ZXNwYWNlQmVmb3JlIFByZWNlZGluZyB3aGl0ZXNwYWNlXG4gICAqL1xuICB0b2tlbml6ZShpbnB1dCkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCB0b2tlbjtcblxuICAgIC8vIEtlZXAgcHJvY2Vzc2luZyB0aGUgc3RyaW5nIHVudGlsIGl0IGlzIGVtcHR5XG4gICAgd2hpbGUgKGlucHV0Lmxlbmd0aCkge1xuICAgICAgLy8gZ3JhYiBhbnkgcHJlY2VkaW5nIHdoaXRlc3BhY2VcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VCZWZvcmUgPSB0aGlzLmdldFdoaXRlc3BhY2UoaW5wdXQpO1xuICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcod2hpdGVzcGFjZUJlZm9yZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCB0b2tlbiBhbmQgdGhlIHRva2VuIHR5cGVcbiAgICAgICAgdG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbihpbnB1dCwgdG9rZW4pO1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBzdHJpbmdcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcodG9rZW4udmFsdWUubGVuZ3RoKTtcblxuICAgICAgICB0b2tlbnMucHVzaCh7IC4uLnRva2VuLCB3aGl0ZXNwYWNlQmVmb3JlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0V2hpdGVzcGFjZShpbnB1dCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBpbnB1dC5tYXRjaCh0aGlzLldISVRFU1BBQ0VfUkVHRVgpO1xuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6ICcnO1xuICB9XG5cbiAgZ2V0TmV4dFRva2VuKGlucHV0LCBwcmV2aW91c1Rva2VuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0Q29tbWVudFRva2VuKGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXRTdHJpbmdUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0T3BlblBhcmVuVG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldENsb3NlUGFyZW5Ub2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXJUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0TnVtYmVyVG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldFJlc2VydmVkV29yZFRva2VuKGlucHV0LCBwcmV2aW91c1Rva2VuKSB8fFxuICAgICAgdGhpcy5nZXRXb3JkVG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldE9wZXJhdG9yVG9rZW4oaW5wdXQpXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbW1lbnRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldExpbmVDb21tZW50VG9rZW4oaW5wdXQpIHx8IHRoaXMuZ2V0QmxvY2tDb21tZW50VG9rZW4oaW5wdXQpO1xuICB9XG5cbiAgZ2V0TGluZUNvbW1lbnRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5MSU5FX0NPTU1FTlQsXG4gICAgICByZWdleDogdGhpcy5MSU5FX0NPTU1FTlRfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRCbG9ja0NvbW1lbnRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5CTE9DS19DT01NRU5ULFxuICAgICAgcmVnZXg6IHRoaXMuQkxPQ0tfQ09NTUVOVF9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0cmluZ1Rva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlNUUklORyxcbiAgICAgIHJlZ2V4OiB0aGlzLlNUUklOR19SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldE9wZW5QYXJlblRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLk9QRU5fUEFSRU4sXG4gICAgICByZWdleDogdGhpcy5PUEVOX1BBUkVOX1JFR0VYLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2xvc2VQYXJlblRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLkNMT1NFX1BBUkVOLFxuICAgICAgcmVnZXg6IHRoaXMuQ0xPU0VfUEFSRU5fUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldFN0cmluZ05hbWVkUGxhY2Vob2xkZXJUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0SW5kZXhlZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpXG4gICAgKTtcbiAgfVxuXG4gIGdldElkZW50TmFtZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGxhY2Vob2xkZXJUb2tlbldpdGhLZXkoe1xuICAgICAgaW5wdXQsXG4gICAgICByZWdleDogdGhpcy5JREVOVF9OQU1FRF9QTEFDRUhPTERFUl9SRUdFWCxcbiAgICAgIHBhcnNlS2V5OiAodikgPT4gdi5zbGljZSgxKSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0cmluZ05hbWVkUGxhY2Vob2xkZXJUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5KHtcbiAgICAgIGlucHV0LFxuICAgICAgcmVnZXg6IHRoaXMuU1RSSU5HX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYLFxuICAgICAgcGFyc2VLZXk6ICh2KSA9PlxuICAgICAgICB0aGlzLmdldEVzY2FwZWRQbGFjZWhvbGRlcktleSh7IGtleTogdi5zbGljZSgyLCAtMSksIHF1b3RlQ2hhcjogdi5zbGljZSgtMSkgfSksXG4gICAgfSk7XG4gIH1cblxuICBnZXRJbmRleGVkUGxhY2Vob2xkZXJUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5KHtcbiAgICAgIGlucHV0LFxuICAgICAgcmVnZXg6IHRoaXMuSU5ERVhFRF9QTEFDRUhPTERFUl9SRUdFWCxcbiAgICAgIHBhcnNlS2V5OiAodikgPT4gdi5zbGljZSgxKSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5KHsgaW5wdXQsIHJlZ2V4LCBwYXJzZUtleSB9KSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHsgaW5wdXQsIHJlZ2V4LCB0eXBlOiB0b2tlblR5cGVzLlBMQUNFSE9MREVSIH0pO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgdG9rZW4ua2V5ID0gcGFyc2VLZXkodG9rZW4udmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBnZXRFc2NhcGVkUGxhY2Vob2xkZXJLZXkoeyBrZXksIHF1b3RlQ2hhciB9KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKCdcXFxcJyArIHF1b3RlQ2hhciksICdndScpLCBxdW90ZUNoYXIpO1xuICB9XG5cbiAgLy8gRGVjaW1hbCwgYmluYXJ5LCBvciBoZXggbnVtYmVyc1xuICBnZXROdW1iZXJUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5OVU1CRVIsXG4gICAgICByZWdleDogdGhpcy5OVU1CRVJfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICAvLyBQdW5jdHVhdGlvbiBhbmQgc3ltYm9sc1xuICBnZXRPcGVyYXRvclRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLk9QRVJBVE9SLFxuICAgICAgcmVnZXg6IHRoaXMuT1BFUkFUT1JfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRSZXNlcnZlZFdvcmRUb2tlbihpbnB1dCwgcHJldmlvdXNUb2tlbikge1xuICAgIC8vIEEgcmVzZXJ2ZWQgd29yZCBjYW5ub3QgYmUgcHJlY2VkZWQgYnkgYSBcIi5cIlxuICAgIC8vIHRoaXMgbWFrZXMgaXQgc28gaW4gXCJteXRhYmxlLmZyb21cIiwgXCJmcm9tXCIgaXMgbm90IGNvbnNpZGVyZWQgYSByZXNlcnZlZCB3b3JkXG4gICAgaWYgKHByZXZpb3VzVG9rZW4gJiYgcHJldmlvdXNUb2tlbi52YWx1ZSAmJiBwcmV2aW91c1Rva2VuLnZhbHVlID09PSAnLicpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbihpbnB1dCkgfHxcbiAgICAgIHRoaXMuZ2V0TmV3bGluZVJlc2VydmVkVG9rZW4oaW5wdXQpIHx8XG4gICAgICB0aGlzLmdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbk5vSW5kZW50KGlucHV0KSB8fFxuICAgICAgdGhpcy5nZXRQbGFpblJlc2VydmVkVG9rZW4oaW5wdXQpXG4gICAgKTtcbiAgfVxuXG4gIGdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsXG4gICAgICByZWdleDogdGhpcy5SRVNFUlZFRF9UT1BfTEVWRUxfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXROZXdsaW5lUmVzZXJ2ZWRUb2tlbihpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcbiAgICAgIGlucHV0LFxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FLFxuICAgICAgcmVnZXg6IHRoaXMuUkVTRVJWRURfTkVXTElORV9SRUdFWCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbk5vSW5kZW50KGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQsXG4gICAgICByZWdleDogdGhpcy5SRVNFUlZFRF9UT1BfTEVWRUxfTk9fSU5ERU5UX1JFR0VYLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGxhaW5SZXNlcnZlZFRva2VuKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xuICAgICAgaW5wdXQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVELFxuICAgICAgcmVnZXg6IHRoaXMuUkVTRVJWRURfUExBSU5fUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRXb3JkVG9rZW4oaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XG4gICAgICBpbnB1dCxcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuV09SRCxcbiAgICAgIHJlZ2V4OiB0aGlzLldPUkRfUkVHRVgsXG4gICAgfSk7XG4gIH1cblxuICBnZXRUb2tlbk9uRmlyc3RNYXRjaCh7IGlucHV0LCB0eXBlLCByZWdleCB9KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICAgIHJldHVybiBtYXRjaGVzID8geyB0eXBlLCB2YWx1ZTogbWF0Y2hlc1sxXSB9IDogdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBlc2NhcGVSZWdFeHAsIGlzRW1wdHksIHNvcnRCeUxlbmd0aERlc2MgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclJlZ2V4KG11bHRpTGV0dGVyT3BlcmF0b3JzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKFxuICAgIGBeKCR7c29ydEJ5TGVuZ3RoRGVzYyhtdWx0aUxldHRlck9wZXJhdG9ycykubWFwKGVzY2FwZVJlZ0V4cCkuam9pbignfCcpfXwuKWAsXG4gICAgJ3UnXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaW5lQ29tbWVudFJlZ2V4KGxpbmVDb21tZW50VHlwZXMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgYF4oKD86JHtsaW5lQ29tbWVudFR5cGVzLm1hcCgoYykgPT4gZXNjYXBlUmVnRXhwKGMpKS5qb2luKCd8Jyl9KS4qPykoPzpcXHJcXG58XFxyfFxcbnwkKWAsXG4gICAgJ3UnXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXNlcnZlZFdvcmRSZWdleChyZXNlcnZlZFdvcmRzKSB7XG4gIGlmIChyZXNlcnZlZFdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxiJGAsICd1Jyk7XG4gIH1cbiAgY29uc3QgcmVzZXJ2ZWRXb3Jkc1BhdHRlcm4gPSBzb3J0QnlMZW5ndGhEZXNjKHJlc2VydmVkV29yZHMpLmpvaW4oJ3wnKS5yZXBsYWNlKC8gL2d1LCAnXFxcXHMrJyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKGBeKCR7cmVzZXJ2ZWRXb3Jkc1BhdHRlcm59KVxcXFxiYCwgJ2l1Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JkUmVnZXgoc3BlY2lhbENoYXJzID0gW10pIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgYF4oW1xcXFxwe0FscGhhYmV0aWN9XFxcXHB7TWFya31cXFxccHtEZWNpbWFsX051bWJlcn1cXFxccHtDb25uZWN0b3JfUHVuY3R1YXRpb259XFxcXHB7Sm9pbl9Db250cm9sfSR7c3BlY2lhbENoYXJzLmpvaW4oXG4gICAgICAnJ1xuICAgICl9XSspYCxcbiAgICAndSdcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ1JlZ2V4KHN0cmluZ1R5cGVzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBjcmVhdGVTdHJpbmdQYXR0ZXJuKHN0cmluZ1R5cGVzKSArICcpJywgJ3UnKTtcbn1cblxuLy8gVGhpcyBlbmFibGVzIHRoZSBmb2xsb3dpbmcgc3RyaW5nIHBhdHRlcm5zOlxuLy8gMS4gYmFja3RpY2sgcXVvdGVkIHN0cmluZyB1c2luZyBgYCB0byBlc2NhcGVcbi8vIDIuIHNxdWFyZSBicmFja2V0IHF1b3RlZCBzdHJpbmcgKFNRTCBTZXJ2ZXIpIHVzaW5nIF1dIHRvIGVzY2FwZVxuLy8gMy4gZG91YmxlIHF1b3RlZCBzdHJpbmcgdXNpbmcgXCJcIiBvciBcXFwiIHRvIGVzY2FwZVxuLy8gNC4gc2luZ2xlIHF1b3RlZCBzdHJpbmcgdXNpbmcgJycgb3IgXFwnIHRvIGVzY2FwZVxuLy8gNS4gbmF0aW9uYWwgY2hhcmFjdGVyIHF1b3RlZCBzdHJpbmcgdXNpbmcgTicnIG9yIE5cXCcgdG8gZXNjYXBlXG4vLyA2LiBVbmljb2RlIHNpbmdsZS1xdW90ZWQgc3RyaW5nIHVzaW5nIFxcJyB0byBlc2NhcGVcbi8vIDcuIFVuaWNvZGUgZG91YmxlLXF1b3RlZCBzdHJpbmcgdXNpbmcgXFxcIiB0byBlc2NhcGVcbi8vIDguIFBvc3RncmVTUUwgZG9sbGFyLXF1b3RlZCBzdHJpbmdzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyaW5nUGF0dGVybihzdHJpbmdUeXBlcykge1xuICBjb25zdCBwYXR0ZXJucyA9IHtcbiAgICAnYGAnOiAnKChgW15gXSooJHxgKSkrKScsXG4gICAgJ3t9JzogJygoXFxcXHtbXlxcXFx9XSooJHxcXFxcfSkpKyknLFxuICAgICdbXSc6ICcoKFxcXFxbW15cXFxcXV0qKCR8XFxcXF0pKShcXFxcXVteXFxcXF1dKigkfFxcXFxdKSkqKScsXG4gICAgJ1wiXCInOiAnKChcIlteXCJcXFxcXFxcXF0qKD86XFxcXFxcXFwuW15cIlxcXFxcXFxcXSopKihcInwkKSkrKScsXG4gICAgXCInJ1wiOiBcIigoJ1teJ1xcXFxcXFxcXSooPzpcXFxcXFxcXC5bXidcXFxcXFxcXF0qKSooJ3wkKSkrKVwiLFxuICAgIFwiTicnXCI6IFwiKChOJ1teJ1xcXFxcXFxcXSooPzpcXFxcXFxcXC5bXidcXFxcXFxcXF0qKSooJ3wkKSkrKVwiLFxuICAgIFwiVSYnJ1wiOiBcIigoVSYnW14nXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteJ1xcXFxcXFxcXSopKignfCQpKSspXCIsXG4gICAgJ1UmXCJcIic6ICcoKFUmXCJbXlwiXFxcXFxcXFxdKig/OlxcXFxcXFxcLlteXCJcXFxcXFxcXF0qKSooXCJ8JCkpKyknLFxuICAgICQkOiAnKCg/PHRhZz5cXFxcJFxcXFx3KlxcXFwkKVtcXFxcc1xcXFxTXSo/KD86XFxcXGs8dGFnPnwkKSknLFxuICB9O1xuXG4gIHJldHVybiBzdHJpbmdUeXBlcy5tYXAoKHQpID0+IHBhdHRlcm5zW3RdKS5qb2luKCd8Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJlblJlZ2V4KHBhcmVucykge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgcGFyZW5zLm1hcChlc2NhcGVQYXJlbikuam9pbignfCcpICsgJyknLCAnaXUnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUGFyZW4ocGFyZW4pIHtcbiAgaWYgKHBhcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIEEgc2luZ2xlIHB1bmN0dWF0aW9uIGNoYXJhY3RlclxuICAgIHJldHVybiBlc2NhcGVSZWdFeHAocGFyZW4pO1xuICB9IGVsc2Uge1xuICAgIC8vIGxvbmdlciB3b3JkXG4gICAgcmV0dXJuICdcXFxcYicgKyBwYXJlbiArICdcXFxcYic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgodHlwZXMsIHBhdHRlcm4pIHtcbiAgaWYgKGlzRW1wdHkodHlwZXMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHR5cGVzUmVnZXggPSB0eXBlcy5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCd8Jyk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4oKD86JHt0eXBlc1JlZ2V4fSkoPzoke3BhdHRlcm59KSlgLCAndScpO1xufVxuIiwiaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi90b2tlblR5cGVzJztcblxuY29uc3QgaXNUb2tlbiA9ICh0eXBlLCByZWdleCkgPT4gKHRva2VuKSA9PiB0b2tlbj8udHlwZSA9PT0gdHlwZSAmJiByZWdleC50ZXN0KHRva2VuPy52YWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBpc0FuZCA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FLCAvXkFORCQvaXUpO1xuXG5leHBvcnQgY29uc3QgaXNCZXR3ZWVuID0gaXNUb2tlbih0b2tlblR5cGVzLlJFU0VSVkVELCAvXkJFVFdFRU4kL2l1KTtcblxuZXhwb3J0IGNvbnN0IGlzTGltaXQgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMLCAvXkxJTUlUJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsIC9eU0VUJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc0J5ID0gaXNUb2tlbih0b2tlblR5cGVzLlJFU0VSVkVELCAvXkJZJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc1dpbmRvdyA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsIC9eV0lORE9XJC9pdSk7XG5cbmV4cG9ydCBjb25zdCBpc0VuZCA9IGlzVG9rZW4odG9rZW5UeXBlcy5DTE9TRV9QQVJFTiwgL15FTkQkL2l1KTtcbiIsIi8qKlxuICogQ29uc3RhbnRzIGZvciB0b2tlbiB0eXBlc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFdPUkQ6ICd3b3JkJyxcbiAgU1RSSU5HOiAnc3RyaW5nJyxcbiAgUkVTRVJWRUQ6ICdyZXNlcnZlZCcsXG4gIFJFU0VSVkVEX1RPUF9MRVZFTDogJ3Jlc2VydmVkLXRvcC1sZXZlbCcsXG4gIFJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQ6ICdyZXNlcnZlZC10b3AtbGV2ZWwtbm8taW5kZW50JyxcbiAgUkVTRVJWRURfTkVXTElORTogJ3Jlc2VydmVkLW5ld2xpbmUnLFxuICBPUEVSQVRPUjogJ29wZXJhdG9yJyxcbiAgT1BFTl9QQVJFTjogJ29wZW4tcGFyZW4nLFxuICBDTE9TRV9QQVJFTjogJ2Nsb3NlLXBhcmVuJyxcbiAgTElORV9DT01NRU5UOiAnbGluZS1jb21tZW50JyxcbiAgQkxPQ0tfQ09NTUVOVDogJ2Jsb2NrLWNvbW1lbnQnLFxuICBOVU1CRVI6ICdudW1iZXInLFxuICBQTEFDRUhPTERFUjogJ3BsYWNlaG9sZGVyJyxcbn07XG4iLCJpbXBvcnQga2V5d29yZHMgZnJvbSAnZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9rZXl3b3Jkcyc7XG5pbXBvcnQgYnVpbHRpbnMgZnJvbSAnZWRpdG9yLWxhbmd1YWdlcy9saWIvY2xpY2tob3VzZS9idWlsdGlucyc7XG5pbXBvcnQgRm9ybWF0dGVyIGZyb20gJy4uL2NvcmUvRm9ybWF0dGVyJztcbmltcG9ydCBUb2tlbml6ZXIgZnJvbSAnLi4vY29yZS9Ub2tlbml6ZXInO1xuXG5jb25zdCByZXNlcnZlZFdvcmRzID0gW1xuICAuLi5rZXl3b3Jkcy5tYXAoKGl0ZW0pID0+IChBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW0pKSxcbiAgLi4uYnVpbHRpbnMubWFwKChpdGVtKSA9PiAoQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtKSksXG5dO1xuXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXG4gICdDQVNFJyxcbiAgJ0VORCcsXG4gICdFWENFUFQnLFxuICAnRlJPTScsXG4gICdPUkRFUiBCWScsXG4gICdIQVZJTkcnLFxuICAnR1JPVVAgQlknLFxuICAnTElNSVQnLFxuICAnU0VMRUNUJyxcbiAgJ1dIRVJFJyxcbiAgJ1dJVEgnLFxuICAnUFJFV0hFUkUnLFxuXTtcblxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQgPSBbJ1VOSU9OJywgJ1VOSU9OIEFMTCddO1xuXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcbiAgJ0FORCcsXG4gICdFTFNFJyxcbiAgJ09SJyxcbiAgJ1dIRU4nLFxuICAnSk9JTicsXG4gICdJTk5FUiBKT0lOJyxcbiAgJ0FOWSBMRUZUIEpPSU4nLFxuICAnQU5ZIFJJR0hUIEpPSU4nLFxuICAnQU5ZIElOTkVSIEpPSU4nLFxuICAnTEVGVCBKT0lOJyxcbiAgJ0xFRlQgT1VURVIgSk9JTicsXG4gICdSSUdIVCBKT0lOJyxcbiAgJ1JJR0hUIE9VVEVSIEpPSU4nLFxuICAnRlVMTCBKT0lOJyxcbiAgJ0ZVTEwgT1VURVIgSk9JTicsXG4gICdDUk9TUyBKT0lOJyxcbiAgJ05BVFVSQUwgSk9JTicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55YmlyZEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XG4gIHRva2VuaXplcigpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuaXplcih7XG4gICAgICByZXNlcnZlZFdvcmRzLFxuICAgICAgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzLFxuICAgICAgcmVzZXJ2ZWROZXdsaW5lV29yZHMsXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcbiAgICAgIHN0cmluZ1R5cGVzOiBbYFwiXCJgLCBcIicnXCIsIFwiVSYnJ1wiLCAnVSZcIlwiJywgJyQkJ10sXG4gICAgICBvcGVuUGFyZW5zOiBbJygnLCAnWyddLFxuICAgICAgY2xvc2VQYXJlbnM6IFsnKScsICddJ10sXG4gICAgICBpbmRleGVkUGxhY2Vob2xkZXJUeXBlczogWyckJ10sXG4gICAgICBuYW1lZFBsYWNlaG9sZGVyVHlwZXM6IFtdLFxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxuICAgICAgc3BlY2lhbFdvcmRDaGFyczogWyd7JScsICclfScsICd7eycsICd9fSddLFxuICAgICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICchPScsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc+PicsXG4gICAgICAgICd8fC8nLFxuICAgICAgICAnfC8nLFxuICAgICAgICAnOjonLFxuICAgICAgICAnLT4+JyxcbiAgICAgICAgJy0+JyxcbiAgICAgICAgJ35+KicsXG4gICAgICAgICd+ficsXG4gICAgICAgICchfn4qJyxcbiAgICAgICAgJyF+ficsXG4gICAgICAgICd+KicsXG4gICAgICAgICchfionLFxuICAgICAgICAnIX4nLFxuICAgICAgICAnISEnLFxuICAgICAgICAnJScsXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgRGIyRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL0RiMkZvcm1hdHRlcic7XG4vLyBpbXBvcnQgTWFyaWFEYkZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9NYXJpYURiRm9ybWF0dGVyJztcbi8vIGltcG9ydCBNeVNxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9NeVNxbEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgTjFxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9OMXFsRm9ybWF0dGVyJztcbi8vIGltcG9ydCBQbFNxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9QbFNxbEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgUG9zdGdyZVNxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9Qb3N0Z3JlU3FsRm9ybWF0dGVyJztcbi8vIGltcG9ydCBSZWRzaGlmdEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9SZWRzaGlmdEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgU3BhcmtTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvU3BhcmtTcWxGb3JtYXR0ZXInO1xuLy8gaW1wb3J0IFRTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvVFNxbEZvcm1hdHRlcic7XG4vLyBpbXBvcnQgU3RhbmRhcmRTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvU3RhbmRhcmRTcWxGb3JtYXR0ZXInO1xuaW1wb3J0IFRpbnliaXJkRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL1RpbnliaXJkRm9ybWF0dGVyJztcblxuY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gZGIyOiBEYjJGb3JtYXR0ZXIsXG4gIC8vIG1hcmlhZGI6IE1hcmlhRGJGb3JtYXR0ZXIsXG4gIC8vIG15c3FsOiBNeVNxbEZvcm1hdHRlcixcbiAgLy8gbjFxbDogTjFxbEZvcm1hdHRlcixcbiAgLy8gcGxzcWw6IFBsU3FsRm9ybWF0dGVyLFxuICAvLyBwb3N0Z3Jlc3FsOiBQb3N0Z3JlU3FsRm9ybWF0dGVyLFxuICAvLyByZWRzaGlmdDogUmVkc2hpZnRGb3JtYXR0ZXIsXG4gIC8vIHNwYXJrOiBTcGFya1NxbEZvcm1hdHRlcixcbiAgLy8gc3FsOiBTdGFuZGFyZFNxbEZvcm1hdHRlcixcbiAgLy8gdHNxbDogVFNxbEZvcm1hdHRlcixcbiAgdGlueWJpcmQ6IFRpbnliaXJkRm9ybWF0dGVyLFxufTtcblxuLyoqXG4gKiBGb3JtYXQgd2hpdGVzcGFjZSBpbiBhIHF1ZXJ5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5sYW5ndWFnZSBRdWVyeSBsYW5ndWFnZSwgZGVmYXVsdCBpcyBTdGFuZGFyZCBTUUxcbiAqICBAcGFyYW0ge1N0cmluZ30gY2ZnLmluZGVudCBDaGFyYWN0ZXJzIHVzZWQgZm9yIGluZGVudGF0aW9uLCBkZWZhdWx0IGlzIFwiICBcIiAoMiBzcGFjZXMpXG4gKiAgQHBhcmFtIHtCb29sZWFufSBjZmcudXBwZXJjYXNlIENvbnZlcnRzIGtleXdvcmRzIHRvIHVwcGVyY2FzZVxuICogIEBwYXJhbSB7SW50ZWdlcn0gY2ZnLmxpbmVzQmV0d2VlblF1ZXJpZXMgSG93IG1hbnkgbGluZSBicmVha3MgYmV0d2VlbiBxdWVyaWVzXG4gKiAgQHBhcmFtIHtPYmplY3R9IGNmZy5wYXJhbXMgQ29sbGVjdGlvbiBvZiBwYXJhbXMgZm9yIHBsYWNlaG9sZGVyIHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAocXVlcnksIGNmZyA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHF1ZXJ5IGFyZ3VtZW50LiBFeHRlY3RlZCBzdHJpbmcsIGluc3RlYWQgZ290ICcgKyB0eXBlb2YgcXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUaW55YmlyZEZvcm1hdHRlcihjZmcpLmZvcm1hdChxdWVyeSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkRGlhbGVjdHMgPSBPYmplY3Qua2V5cyhmb3JtYXR0ZXJzKTtcbiIsIi8vIE9ubHkgcmVtb3ZlcyBzcGFjZXMsIG5vdCBuZXdsaW5lc1xuZXhwb3J0IGNvbnN0IHRyaW1TcGFjZXNFbmQgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvWyBcXHRdKyQvdSwgJycpO1xuXG4vLyBMYXN0IGVsZW1lbnQgZnJvbSBhcnJheVxuZXhwb3J0IGNvbnN0IGxhc3QgPSAoYXJyKSA9PiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuXG4vLyBUcnVlIGFycmF5IGlzIGVtcHR5LCBvciBpdCdzIG5vdCBhbiBhcnJheSBhdCBhbGxcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKGFycikgPT4gIUFycmF5LmlzQXJyYXkoYXJyKSB8fCBhcnIubGVuZ3RoID09PSAwO1xuXG4vLyBFc2NhcGVzIHJlZ2V4IHNwZWNpYWwgY2hhcnNcbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2d1LCAnXFxcXCQmJyk7XG5cbi8vIFNvcnRzIHN0cmluZ3MgYnkgbGVuZ3RoLCBzbyB0aGF0IGxvbmdlciBvbmVzIGFyZSBmaXJzdFxuLy8gQWxzbyBzb3J0cyBhbHBoYWJldGljYWxseSBhZnRlciBzb3J0aW5nIGJ5IGxlbmd0aC5cbmV4cG9ydCBjb25zdCBzb3J0QnlMZW5ndGhEZXNjID0gKHN0cmluZ3MpID0+XG4gIHN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoIHx8IGEubG9jYWxlQ29tcGFyZShiKTtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9