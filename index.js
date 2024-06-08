document.addEventListener('DOMContentLoaded', () => {
    const updateTotal = () => {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            total += price * quantity;
        });
        document.getElementById('total-price').innerText = total.toFixed(2);
    };

    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const quantityElement = e.target.previousElementSibling;
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = ++quantity;
            updateTotal();
        });
    });

    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const quantityElement = e.target.nextElementSibling;
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantityElement.innerText = --quantity;
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            updateTotal();
        });
    });

    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.classList.toggle('liked');
        });
    });

    updateTotal();
});
