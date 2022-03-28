const getGoods = () => {
    link = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
        const goodscontaner = document.querySelector('.long-goods-list');
        goodscontaner.innerHTML = '';
        goods.forEach((good) => {
            const goodblock = document.createElement('div');
            goodblock.classList.add('col-lg-3');
            goodblock.classList.add('col-sm-6');
            goodblock.innerHTML = `
                <div class="goods-card">
                    <span class="label ${good.label ? '' : 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="image: ${good.name}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="007">
                        <span class="button-price">$${good.price}</span>
                    </button>
                </div>
            `;
            goodscontaner.append(goodblock);
        })

    }

    const getdata = (val, category) => {
        fetch('/db/db.json')
            .then(res => res.json())
            .then(data => {
                const array = category ? data.filter((item) => item[category] === val) : data

                localStorage.setItem('goods', JSON.stringify(array));
                if (window.location.pathname !== '/goods.html')
                    window.location.href = '/goods.html';
                else {
                    renderGoods(array);
                }
            });
    };

    const vAll = document.querySelector('.more');
    if (vAll) {
        vAll.addEventListener('click', event => {
            event.preventDefault();
            const linkval = 'All';
            const linkcategory = null;
            getdata(linkval, linkcategory);
        });
    }
    link.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const linkval = element.textContent;
            const linkcategory = element.dataset.field;
            getdata(linkval, linkcategory);
        });
    });

    if (localStorage.getItem('goods') && window.location.pathname === '/goods.html') {
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }

};

getGoods();