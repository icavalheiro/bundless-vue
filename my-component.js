Vue.component( 'my-component', {
    mounted: function () {
        console.log( 'mounted!' );
    },
    props: {
        test: String
    },
    template: `
        <div class="my-component">
            <h1>My component</h1>
            <p><slot></slot></p>
        </div>
    `,
} );