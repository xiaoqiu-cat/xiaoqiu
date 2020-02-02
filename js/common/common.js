
const nav_header = () =>{
    const nav_html = `<div class="header-content">
                            <div class="logo">
                                <img src="http://qiniu.lovingxiaoqiu.cn/img/logo/logo-rose.jpg" alt="">
                                <span>
                                    小秋
                                </span>
                            </div>
                            <nav>
                                <ul>
                                    <li >首页</li>
                                    <li >光阴的故事</li>
                                    <li >读书日记</li>
                                    <li >触碰心灵的音符</li>
                                    <li >关于我</li>
                                </ul>
                            </nav>
                        </div>
                        `
    const _header = document.getElementById('header')
    _header.innerHTML = nav_html
}
const nav_footer = () =>{
    const footer_html = `<span>Copyright © 2018 XiaoQiu All Rights Reserved</span>
                         <span>|</span>
                         <a href="http://www.beian.miit.gov.cn" target="_blank">
                            皖ICP备18008515号
                         </a>`
    const _footer = document.getElementById('footer')
    
    _footer.innerHTML = footer_html
}
const nav_switch = () =>{
    const nav = document.getElementsByTagName('nav')[0].children[0]
    nav.addEventListener('click',function(e){
        const nav_name = e.target.innerText
        let url = getPathRootJump()
        switch (nav_name) {
            case '首页' : 
                url = '/index.html'
                break
            case '光阴的故事' : 
                url = '/view/story.html'
                break
            case '读书日记' : 
                url = '/view/read.html'
                break
            case '触碰心灵的音符' : 
                url = '/view/music.html'
                break
            case '关于我' : 
                url = '/view/about'
                break
            case '留言' : 
                url = '/view/message.html'
                break
            default :
                url = '/index.html'
        }
        window.location.href = url

    })
}
const nav_select_show = () =>{
    let url = window.location.href.split("/")
    const name = url[url.length-1].split('.')[0]    
    
    const nav = document.getElementsByTagName('nav')[0].children[0]
    const nav_json = [
        'index','story','read','music','about','message'
    ]
    for(i=0;i<nav_json.length;i++){
        if(nav_json[i] == name){
            
            nav.children[i].style.color = '#4395ff'
        }
    }
}



// 把共同的头部和底部 提取出来。
nav_header()
nav_footer()

// 点击导航跳转
nav_switch()

// 显示选中 tag
nav_select_show()






// 工具函数
function getPathRootJump(){
    var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    var path_root = window.location.protocol + '//' + window.location.host + '/'+ webName + '/';
    return path_root;
}
