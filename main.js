document.addEventListener('DOMContentLoaded', function() {
    // 이미지 경로 배열
    const images = [
        './imgs/jp1.jpg', './imgs/jp2.jpg', './imgs/jp3.jpg', './imgs/jp4.jpg',
        './imgs/jp5.jpg', './imgs/jp6.jpg', './imgs/jp7.jpg', './imgs/jp8.jpg'
    ];

    // 컨테이너 요소 선택
    const container = document.getElementById('image-container');

    // 두 개의 'favorites' 그룹으로 나누기
    const favoritesHTML = images.reduce((acc, src, index) => {
        // 4개씩 그룹화
        const groupIndex = Math.floor(index / 4);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(`<div class="lists"><img class="th_list_img profile" src="${src}" alt=""></div>`);
        return acc;
    }, []);

    // HTML 생성 및 삽입
    container.innerHTML = favoritesHTML
        .map(group => `<div class="favorites">${group.join('')}</div>`)
        .join('');
});
