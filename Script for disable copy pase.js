<script type="text/JavaScript">
    //courtesy of BoogieJack.com
    function killCopy(e){
    return false
}
    function reEnable(){
    return true
}
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}
</script>



// enter this script into your copy html header section