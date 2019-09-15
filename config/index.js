// 配置文件
module.exports ={
    AUTOADDFRIEND:false,//自动加好友功能  默认关闭
    AUTOADDROOM:false,//自动拉群功能 默认关闭
    AUTOREPLY:false,//自动聊天功能 默认关闭
    ONE:'http://wufazhuce.com/',////ONE的web版网站
    MOJI_HOST:'https://tianqi.moji.com/weather/china/', //中国墨迹天气url
    CITY:'guangdong',//收信者所在城市
    LOCATION:'shenzhen',//收信者所在区 （可以访问墨迹天气网站后，查询区的英文拼写）
    AIBOTAPI:'http://openapi.tuling123.com/openapi/api/v2',//图灵机器人API 注册地址http://www.turingapi.com/
    APIKEY:'3ef15eff85c6430f84181a65c48389d8',//图灵机器人apikey
    MEMORIAL_DAY:'2007/10/01', //你和收信者的纪念日
    NAME:'宝贝',//备注姓名
    NICKNAME:'不期而遇', //昵称
    SENDDATE:'30 * * * * *',//定时发送时间 每天8点15分30秒发送，规则见 /schedule/index.js
    ROOMNAME:'/^你的群名/i', //群名(请只修改中文，不要删除符号，这是正则)
    ADDFRIENDWORD:'/测试/i',//自动加好友触发的关键词(请只修改中文，不要删除符号，这是正则)
    ADDROOMWORD:'/加群/',//自动发送群图片触发关键词(请只修改中文，不要删除符号，这是正则)
    ROOMCODEURL:'http://image.bloggeng.com/qun.png',//群二维码url链接(与本地群二维码路径选填一个)
    ROOMLOCALPATH:'./static/qun.png',//本地群二维码图片路径（与群url选填一个）
    DEFAULTBOT: '1', //设置默认聊天机器人 0 天行机器人 1 图灵机器人 2 天行对接的图灵机器人，需要到天行机器人官网充值（50元/年，每天1000次）
    AUTOREPLYPERSON: ['宝贝','好友2备注'], //指定多个好友开启机器人聊天功能   指定好友的备注，最好不要带有特殊字符
  }
  