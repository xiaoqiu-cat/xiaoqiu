    // 轮播图
    let lis = document.getElementsByClassName('banner-item')
    let index = 0
    const animate = (obj,timer) =>{
            setInterval(() => {
                obj[index].style.zIndex = 0
                obj[index].style.opacity = 0

                index++
                if (index == lis.length) {
                    index = 0
                }
                obj[index].style.zIndex = 1
                obj[index].style.opacity = 1
            }, timer)
    }
    animate(lis, 5000)