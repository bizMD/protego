function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<section class="header-box widget_slot" id="widget_slot_header"></section><section class="wall-of-counters"><div class="row"><span class="cell widget_slot" id="widget_slot_1"></span><span class="cell widget_slot" id="widget_slot_2"></span><span class="cell widget_slot" id="widget_slot_3"></span><span class="cell widget_slot" id="widget_slot_4"></span><span class="cell widget_slot" id="widget_slot_5"></span><span class="cell widget_slot" id="widget_slot_6"></span><span class="cell widget_slot" id="widget_slot_7"></span><span class="cell widget_slot" id="widget_slot_8"></span><span class="cell widget_slot" id="widget_slot_9"></span><span class="cell widget_slot" id="widget_slot_10"></span><span class="cell widget_slot" id="widget_slot_11"></span><span class="cell widget_slot" id="widget_slot_12"></span><span class="cell widget_slot" id="widget_slot_13"></span><span class="cell widget_slot" id="widget_slot_14"></span><span class="cell widget_slot" id="widget_slot_15"></span><span class="cell widget_slot" id="widget_slot_16"></span><span class="cell widget_slot" id="widget_slot_17"></span><span class="cell widget_slot" id="widget_slot_18"></span><span class="cell widget_slot" id="widget_slot_19"></span></div></section><section class="footer-box widget_slot" id="widget_slot_footer"></section>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);