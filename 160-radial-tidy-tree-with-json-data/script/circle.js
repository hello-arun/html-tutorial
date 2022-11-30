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



export function drawLine(x1,y1, x2,y2) {
    var svgns = "http://www.w3.org/2000/svg";
    const g = document.querySelector("g")
    const line = document.createElementNS(svgns, "line")
    line.setAttributeNS(null, "x1", x1)
    line.setAttributeNS(null, "y1", y1)
    line.setAttributeNS(null, "x2", x2)
    line.setAttributeNS(null, "y2", y2)
    g.append(line)
}











