window.loadComponent = function ( component ) {
    let comp = document.createElement( "script" );
    comp.setAttribute( "src", component );
    comp.setAttribute( "async", "false" );

    let head = document.head;
    head.appendChild( comp );

    return new Promise( ( res ) => {
        comp.addEventListener( 'load', res );
    } );
}

window.loadComponents = function ( components ) {
    let promises = [];
    
    components.forEach( ( compToLoad ) => {
        promises.push( window.loadComponent( compToLoad ) );
    } );

    return Promise.all( promises );
}
