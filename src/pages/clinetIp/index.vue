<template>
  <div>ip</div>
</template>

<script>
export default {
  name: 'clinetIp',
  data() {
    return {};
  },
  mounted() {
    this.getUserIP()
  },
  methods: {
    getUserIP() {
      var RTCPeerConnection =
        window.RTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        window.mozRTCPeerConnection;
      if (RTCPeerConnection)
        (() => {
          var rtc = new RTCPeerConnection();
          rtc.createDataChannel(""); //创建一个可以发送任意数据的数据通道
          rtc.createOffer(
            (offerDesc) => {
              //创建并存储一个sdp数据
              rtc.setLocalDescription(offerDesc);
            },
            (e) => {
              console.log(e);
            }
          );
          rtc.onicecandidate = (evt) => {
            //监听candidate事件
            if (evt.candidate) {
              var ip_addr = evt.candidate.address;
              localStorage.setItem("ip_addr", ip_addr);
              console.log(ip_addr)
            }
          };
        })();
      else {
        console.log("目前仅测试了chrome浏览器OK");
      }
    },
  },
};
</script>

<style>
</style>