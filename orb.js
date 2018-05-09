"use strict";

module.exports =
{
    x_pos: 0,
    y_pos: 0,

    position: function ()
    {
        return [ this.x_pos, this.y_pos ];
    },

    roll: function ( distance, direction )
    {
        var rads = direction * ( Math.PI / 180 );
        this.x_pos += distance * Math.cos(rads);
        this.y_pos += distance * Math.sin(rads);
    },

    // should "connect" be mimicked? I don't really know how to do that tbh
    connect: function(work) {
        work();
    }

    // add function assert state - position and colour
    // setcolor
    // getcolor
};

{
  xOdomoter: { value: 23.98 }
  yOdomtere: { value: 23.04 }

}
