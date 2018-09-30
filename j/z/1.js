'use strict';

/* global $, jQuery */

function solution() {
    console.log('ready');
    $('.comment-list').each(function(index) {
        // console.log( index + ": " + $( this ).text() );
        $( this ).text('Loading...');
        // console.log(this.innerHTML);
    });

    let jsonRes = [];
    fetch('https://www.example.com/comments?count=10')
    .then(res => res.json())
    .then((data) => {
        console.log('data', data);
        $('.comment-list').each(function(index) {
            $(this).text('');
            data.forEach((el) => {
                var node = `
                <div class="comment-item">
                    <div class="comment-item__username">${el.username}</div>
                    <div class="comment-item__message">${el.message}</div>
                </div>
                `;
                $(this).append(node);
            });
            console.log(this.innerHTML);
        });
    })
    .catch((e) => {
        console.log(e)
        $('.comment-list').each(function(index) {
        $( this ).text('');
        console.log('catch', this.innerHTML);
    });
    })

}
