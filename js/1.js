const recommends=document.querySelectorAll('.recommend')

recommends.forEach((recommend) => {
    const title = recommend.querySelector('.title');
    const h4 = title.querySelector('h4');
    const img = recommend.querySelector('img');
    
    recommend.addEventListener('mouseenter', function() {
        
        // 显示渐变方块
        title.style.bottom = '0';
        title.style.opacity = '1';
		
        setTimeout(() => {
            h4.style.transform = 'translateY(0)';
        }, 100);
    });
	
	recommend.addEventListener('mouseleave', function() {
        
        // 隐藏渐变方块
        title.style.bottom = '-100%';
        title.style.opacity = '0';
        
        // 重置位置
        h4.style.transform = 'translateY(20px)';
        
    });
});
