/**
 *     LingChenTeam - Public website
 *     PingFenSystem
 */

function viewPf(){
    layui.use(function(){
        var rate = layui.rate;
        var layer = layui.layer;
        var $ = layui.$;
        var offseter= "rb";
        rate.render({ // eg2
            elem: '#hkpf',
            value: 3.5,
            half: true,
            text: true
          });

          layer.open({
            type: 1,
            offset: offseter,
            shade: false, // 不显示遮罩
            content: $('#ID-question-layer-wrapper') // 捕获的元素
          });
    })
}

function randomToViewPf(){
    var randomer = Math.random()*(20-10)+10;
    if(!randomer > 5){
        viewPf()
    }
}

randomToViewPf()