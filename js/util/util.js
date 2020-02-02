function getPathRootJump(){
    var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    var path_root = window.location.protocol + '//' + window.location.host + '/'+ webName + '/';
    return path_root;
}