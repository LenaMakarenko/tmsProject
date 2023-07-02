export function rgbaToHex(r: number, g: number, b: number, a: number) {
    const maxOpacityValue = 'ff'

    const outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
        Math.round(a * 255)
            .toString(16)
            .substring(0, 2),
    ]

    let result: string = ''

    // Pad single-digit output values
    outParts.forEach(function (part, i) {
        result += part.length === 1 ? (outParts[i] = '0' + part) : part
    })

    return `#${
        result.endsWith(maxOpacityValue)
            ? result.replace(maxOpacityValue, '')
            : result
    }`
}
