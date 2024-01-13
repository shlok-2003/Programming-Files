let body = document.getElementById('body');
// body.innerHTML = `<div class="border-2 border-black border-solid bg-red-100 border-black h-[95%] w-[95%] rounded-lg"></div>`;

for (let i = 1; i <= 15; i++) {
    const div = document.createElement('div');
    div.classList.add(
        'border-2',
        'border-black',
        'border-solid',
        'bg-red-100',
        'border-black',
        'h-[98%]',
        'w-[98%]',
        'rounded-lg'
    );
    div.setAttribute('id', `div${i}`);
    div.innerHTML = `<p class="text-center text-xl font-bold">Div ${i}</p>`;

    div.addEventListener('click', () => {
        div.classList.toggle('bg-blue-100');
    });

    body.appendChild(div);
    body = document.getElementById(`div${i}`);
}

body = document.getElementById('div15');
const btn = document.createElement('button');
btn.classList.add(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded'
);
body.appendChild(btn);
