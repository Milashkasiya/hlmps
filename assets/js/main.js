$( 'nav, aside' ).find( 'a' )
    .mouseenter( function( )
    {
        start_sound( $('#ButtonOver') )
    })
    .click( function( )
    {
        start_sound( $('#ButtonClick') )
    });

function start_sound( selector )
{
    selector.prop( 'currentTime', 0 );
    selector[ 0 ].play( );
}