var $jq = jQuery.noConflict(true);

function updateSelectors() {
    if (window.location.pathname !== '/') {
        $jq('a[href="' + window.location.pathname + '"].task-link').addClass("white-text");
    }
}

$jq(document).change(function() {
    updateSelectors();
});

$jq(document).bind('DOMSubtreeModified', function () {
    $jq('th.pane').attr('colspan', 4);
});
