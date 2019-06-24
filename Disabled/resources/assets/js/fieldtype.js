Vue.component('disabled-fieldtype', {

    mixins: [Fieldtype],

    template: '<input type="text" class="form-control type-text" disabled v-model="data">',

    data: function() {
        return {
            //
        };
    }

});
