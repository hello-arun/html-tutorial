export function drawCircle(cx, cy,name, r = 5) {
    var svgns = "http://www.w3.org/2000/svg";
    const g = document.querySelector("g")
    const circle = document.createElementNS(svgns, "circle")
    circle.setAttributeNS(null, "cx", cx)
    circle.setAttributeNS(null, "cy", cy)
    circle.setAttributeNS(null, "r", r)
    const text = document.createElementNS(svgns,"text")
    text.setAttributeNS(null, "x", cx)
    text.setAttributeNS(null, "y", cy)
    text.textContent=name
    g.append(circle)
    g.append(text)
}




