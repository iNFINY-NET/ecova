$(document).ready(function () {
    $('.counter').each(function () {
        var $this = $(this);
        if ($this.attr('data-count').indexOf('+') > -1) {
            countTo = $this.attr('data-count').replace(/[,+]/g, "");

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

                {
                    duration: 5000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text($this.attr('data-count'));
                    }

                });

        } else {
            countTo = $this.attr('data-count');
            $(this).prop('countTo', 0).animate({
                countTo: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
});