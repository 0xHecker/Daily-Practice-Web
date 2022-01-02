function rgb(r, g, b) {
    return `${r}, ${g}, ${b}`;
}

function makeColor = (r, g, b) => {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    }
    return color;

}