<template>
  <div class="main">
    <button @click.preven="printThis">Print</button>
    <div class="mobile-phone" id="printcontent">
      <div class="screen">
        <div class="head">
          <div class="brove">
            <span class="speaker"></span>
          </div>
        </div>
        <div class="phone-header">
          <div class="header-details">
            <span class="time">{{ time }}</span>
          </div>
          <div class="header-details">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <i class="fa fa-wifi" aria-hidden="true"></i>
            <i class="fa fa-signal" aria-hidden="true"></i>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
var htmlToImage = require("html-to-image");
export default {
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
      }).format();
    }, 1000);
  },
  methods: {
    printThis() {
      var node = document.getElementById("printcontent");
      htmlToImage.toCanvas(node).then(function (canvas) {
        // document.body.appendChild(canvas);
      });
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 90vh;
  font-family: "Audiowide", sans-serif;
}

.mobile-phone {
  margin: auto;
  padding: 10px 10px 30px;
  width: 325px;
  height: 700px;
  box-shadow: 0 0 20px #e2e2e2;
  border-radius: 30px;
  background: black;
}

.screen {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow-y: auto;
  position: relative;
  flex-direction: row;
}

.phone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
}

.header-details {
  display: flex;
  margin: 0px 25px;
  color: white;
}

.fa {
  margin-left: 7px;
}

.time {
  font-size: 14px;
}

.icon {
  width: 10px;
  height: 10px;
  background: black;
}

.brove {
  width: 125px;
  height: 25px;
  background: black;
  position: absolute;
  border-radius: 0 0 20px 20px;
  z-index: 2;
}

.head {
  display: flex;
  justify-content: center;
}

.speaker {
  width: 55px;
  height: 4px;
  background: #d2d2d2;
  display: block;
  margin: auto;
  margin-top: 5px;
}
</style>
