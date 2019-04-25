"use strict";
const Vue = require('vue');

const init = function (options){

    Vue.config.debug = true;//开启错误提示
    Vue.config.devtools = true;
    const vm = new Vue({
        el: options.el,
        template: options.template,
        data: options.data,
        methods: {
            handleClick (bookObj){  //处理预约单，参数为预约单对象，如：bookObj.bookId; bookObj.companyName
                options.handleClick && options.handleClick(bookObj);
                this.$forceUpdate();
            }			
        }
    })

};

/** Define the export point for module */
module.exports = {
    init: init
}