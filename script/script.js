const top_menu = document.querySelectorAll('.gnb li a')
const title = document.querySelectorAll('main > section')
console.log(top_menu, title)


top_menu[0].classList.add('active')
top_menu.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, title[i].offsetTop)
    })
})

let swiperContainer =document.querySelector('#projectContainer')
let swiper = new Swiper('#projectContainer', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 80,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
})

let swiperContainer02 =document.querySelector('#workContainer1')
let swiper02 = new Swiper('#workContainer1', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3,
    // 슬라이드 사이의 간격
    spaceBetween: 200,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    loop : true,
    autoplay :{delay:3000,},
    centeredSlides : true,
})

let swiperContainer03 =document.querySelector('#workContainer2')
let swiper03 = new Swiper('#workContainer2', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 4,
    // 슬라이드 사이의 간격
    spaceBetween: 0,
    // 한 번에 넘길 슬라이드 수
    loop : true,
    autoplay :{delay:2500,},
    slidesPerGroup: 1,
    centeredSlides : true,
})