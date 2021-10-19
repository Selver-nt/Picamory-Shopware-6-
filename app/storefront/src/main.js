import QuantityFieldPlugin from './plugin/quantity-field/quantity-field.plugin'

window.PluginManager.override('OffCanvasCart', QuantityFieldPlugin, '[data-offcanvas-cart]')

$(".js-offcanvas-cart-change-quantity-btn").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input.js-offcanvas-cart-change-quantity").val();

    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }

    $(function () {
        $button.parent().find("input.js-offcanvas-cart-change-quantity").attr('value', newVal).change();
    });

    $button.parent().find("input.js-offcanvas-cart-change-quantity").change(function() {
        $(this).closest("form.cart-item-quantity-container").submit();
    });

});

window.PluginManager.register('QuantityField', QuantityFieldPlugin, '[data-quantity-field]');
