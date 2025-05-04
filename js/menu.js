const filterBtns = document.querySelectorAll('.btn-category');

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === 'all'){
            displayMenuItems(menu);
        }else{
            displayMenuItems(menuCategory);
        }
    });
    const Category
}

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
} = e.currentTarget.dataset.id;
 = e.currentTarget.dataset.id;
    console.log(Category);
});
}); = e.currentTarget.dataset.id;
    console.log(Category);
});
}); 

