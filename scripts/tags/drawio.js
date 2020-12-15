/**
 * drawio.js | https://theme-next.js.org/docs/tag-plugins/drawio.html
 */

'use strict';

module.exports = function drawio(args, content) {
  return `<div class="drawio-placeholder" data-src="${args[0]}"></div>`;
};
