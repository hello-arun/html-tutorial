export function drawCircle(cx, cy, r = 5) {
    var svgns = "http://www.w3.org/2000/svg";
    const svg = document.querySelector("g")
    const circle = document.createElementNS(svgns, "circle")
    circle.setAttributeNS(null, "cx", cx)
    circle.setAttributeNS(null, "cy", cy)
    circle.setAttributeNS(null, "r", r)
    svg.append(circle)
}