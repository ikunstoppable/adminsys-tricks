<template>
  <div>233 ={{ ip }}</div>
</template>

<script>
export default {
  data() {
    return {
      ip: "",
    };
  },
  methods: {
    getUserIP(onNewIP) {
      let MyPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;
      let pc = new MyPeerConnection({
        iceServers: [],
      });
      let noop = () => {};
      let localIPs = {};
      let ipRegex =
        /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
      let iterateIP = (ip) => {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
      };
      pc.createDataChannel("");
      pc.createOffer()
        .then((sdp) => {
          sdp.sdp.split("\n").forEach(function (line) {
            if (line.indexOf("candidate") < 0) return;
            line.match(ipRegex).forEach(iterateIP);
          });
          pc.setLocalDescription(sdp, noop, noop);
        })
        .catch((reason) => {
          console.log(reason);
        });
      pc.onicecandidate = (ice) => {
        console.log(ice.candidate);
        if (
          !ice ||
          !ice.candidate ||
          !ice.candidate.candidate ||
          !ice.candidate.candidate.match(ipRegex)
        )
          return;

        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
      };
    },
    getLocalIP(callback) {
      var pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel("");
      pc.createOffer(pc.setLocalDescription.bind(pc), () => {});
      pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate) return;
        var myIP = /([0-9]{1,3}(.[0-9]{1,3}){3})/.exec(
          ice.candidate.candidate
        )[1];
        callback(myIP);
        console.log(ice.candidate)
        pc.onicecandidate = () => {};
      };
    },
    getClinetIp() {},
  },
  mounted() {
    // this.getUserIP((ip) => {
    //   this.ip = ip;
    //   console.log(ip);
    // });
    this.getLocalIP((ip) => {
        console.log(ip)
    })
  },
};
</script>

<style>
</style>