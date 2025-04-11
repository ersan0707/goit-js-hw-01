function getElementWidth(content ,padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // sağ ve sol için 2 katı
    const borderWidth = parseFloat(border) * 2;   // sağ ve sol için 2 katı
  
    const totalWidth = contentWidth + paddingWidth + borderWidth;
  
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
