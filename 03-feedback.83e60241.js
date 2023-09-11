!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",r=0/0,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return v.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function g(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function S(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":i(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return r;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=f.test(e);return o||l.test(e)?c(e.slice(2),o?2:8):u.test(e)?r:+e}n=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var i,r,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){var n=e-l,i=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||s&&i>=a}function h(){var e,n,i,o=b();if(j(o))return w(o);// Restart the timer.
f=setTimeout(h,(e=o-l,n=o-c,i=t-e,s?p(i,a-n):i))}function w(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,v&&i)?m(e):(i=r=void 0,u))}function E(){var e,n=b(),o=j(n);if(i=arguments,r=this,l=n,o){if(void 0===f)return(// Reset any `maxWait` timer.
c=e=l,// Start the timer for the trailing edge.
f=setTimeout(h,t),d?m(e):u);if(s)return(// Handle invocations in a tight loop.
f=setTimeout(h,t),m(l))}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?y(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},E.flush=function(){return void 0===f?u:w(b())},E}(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),h=j.querySelector("[name='email']"),w=j.querySelector("[name='message']"),E=j.querySelector("[type='submit']");j.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){e.preventDefault();var t={Email:h.value,Message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))},500)),window.addEventListener("load",function(){var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(e){h.value=t.Email,w.value=t.Message;// return textarea.value = getItemTextParse.Message 
return}}),E.addEventListener("click",function(e){if(e.preventDefault(),""===h.value||""===w.value)return alert("Всі поля повинні бути заповнені");console.log({Email:h.value,Message:w.value}),h.value="",w.value="",localStorage.removeItem("feedback-form-state")})}();//# sourceMappingURL=03-feedback.83e60241.js.map

//# sourceMappingURL=03-feedback.83e60241.js.map
