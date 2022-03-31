/*
  �����ַ:http://wthrcdn.etouch.cn/weather_mini
  ���󷽷�:get
  �������:city(������)
  ��Ӧ����:������Ϣ

  1. ����س�
  2. ��ѯ����
  3. ��Ⱦ����
  */

var app=new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods:{
        searchWeather:function (){
            // console.log("������ѯ");
            // console.log(this.city);
            var that=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then(function (response){
                that.weatherList=response.data.data.forecast;
            }).catch(function (err){})
        },
        changeCity:function (city){
            this.city=city;
            this.searchWeather();
        }
    }
})