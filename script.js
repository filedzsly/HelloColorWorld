document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-color');
    const body = document.body;
    const hexCodesElement = document.getElementById('hex-codes');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.addEventListener('click', () => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();

        body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;

        hexCodesElement.textContent = `Gradient Colors: ${color1}, ${color2}, ${color3}`;
        // Construct the HTML for the hex codes with individual colors
        hexCodesElement.innerHTML = `
            Gradient Colors: 
            <span style="color: ${color1};">${color1}</span>, 
            <span style="color: ${color2};">${color2}</span>, 
            <span style="color: ${color3};">${color3}</span>
    `;
    });
});