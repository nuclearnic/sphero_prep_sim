module.exports = 
{
    x_pos: 0,
    y_pos: 0,
    speak: "Hello Human",


    roll: function(distance, direction)
    {
        rads = direction * ( Math.PI / 180 );
        this.x_pos += distance * Math.cos(rads)
        this.y_pos += distance * Math.sin(rads)
    }
};

