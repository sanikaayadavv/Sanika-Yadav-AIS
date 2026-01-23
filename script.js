const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 400;

let drawing = false;

// Start drawing
canvas.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath();
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    drawing = false;
});

// Draw on canvas
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#333";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
});

// Clear canvas
document.getElementById("clearBtn").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
