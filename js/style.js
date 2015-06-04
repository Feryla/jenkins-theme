var $jq = jQuery.noConflict(true);

function updateSelectors() {
    if (window.location.pathname !== '/') {
        $jq('a[href="' + window.location.pathname + '"].task-link').addClass("white-text");
    }

}

$jq(document).ready(function() {
    updateSelectors();
});
