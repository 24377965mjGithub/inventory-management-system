$(document).ready(function () {
    // role query
    $.get('/api/getroleslist', function (res) {
        // append
        res.forEach(element => {
            $('#role').append(`
                <option value="${element.roleName}">${element.roleName}</option>
            `)
        });
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'slideOutUp',
        responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:1
            // },
            1000:{
                items:1
            }
        }
    });
})