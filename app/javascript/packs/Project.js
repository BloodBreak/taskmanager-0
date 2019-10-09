require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


$(document).ready(function() {
	@paintIt = (element, backgroundColor, textColor) ->
  element.style.backgroundColor = backgroundColor
  if textColor?
    element.style.color = textColor
});