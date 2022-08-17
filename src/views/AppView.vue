<template>
  <div class="app-view">
    <div class="nav">
      <span>{{ page }}</span>
      <div class="nav-icons">
        <i
          v-if="page != 'Settings'"
          class="fa fa-cog"
          @click.preven="goTo('Settings')"
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-inbox"
          @click.preven="goTo('Inbox')"
          v-if="page != 'Inbox'"
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-plus"
          @click.preven="goTo('Capture')"
          v-if="page != 'Capture'"
          aria-hidden="true"
        ></i>
        <i
          v-if="page == 'Capture'"
          class="fa fa-refresh"
          aria-hidden="true"
        ></i>
        <div
          v-if="page == 'Maps' || page == 'Success!'"
          class="back"
          @click.preven="goTo('Capture')"
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Capture</span>
        </div>
        <i
          v-if="page == 'Settings'"
          @click.prevent="toggleAlert"
          class="fa fa-floppy-o"
          aria-hidden="true"
        ></i>
        <router-link class="link" to="/" exact>
          <i
            v-if="page == 'Settings'"
            class="fa fa-sign-out"
            aria-hidden="true"
          >
          </i>
        </router-link>
      </div>
    </div>
    <div v-if="page == 'Inbox'" class="inbox-list">
      <div class="list">
        <span>Paradise Spa (08/09/22)</span>
      </div>
      <div class="list">
        <span>Paradise Spa (08/09/22)</span>
      </div>
      <div class="list-first">
        <span>Hotel XYZ (08/19/22)</span>
      </div>
      <div class="list-expand">
        <span>Address: #123 Julia Vargas Ave. Pasig City</span>
        <span>Contact: Peter Hill</span>
        <span>Status: <span style="color: green">Synced</span></span>
      </div>
      <div class="list">
        <span>Paradise Spa (08/09/22)</span>
      </div>
      <div class="list-last">
        <span>Beach Hotel (08/08/22) </span>
      </div>
    </div>
    <div v-if="page == 'Capture'" class="content">
      <fieldset style="height: 33vh">
        <legend style="margin-bottom: -10px">Establishment</legend>
        <input placeholder="Stablishment Name" type="text" />
        <div class="fit-2">
          <textarea placeholder="Location..." name="Text1" rows="2"></textarea>
          <i
            @click.preven="goTo('Maps')"
            class="fa fa-plus-circle plus"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <a-checkbox-group v-model:value="value" style="margin-bottom: 7px">
            <a-row>
              <a-col style="width: 80px">
                <a-checkbox value="A">Hotel</a-checkbox>
              </a-col>
              <a-col style="width: 80px; margin-right: 10px;">
                <a-checkbox value="B">Laundry</a-checkbox>
              </a-col>
              <a-col style="width: 80px">
                <a-checkbox value="C">Spa</a-checkbox>
              </a-col>
              <a-col style="width: 80px">
                <a-checkbox value="E">Resort</a-checkbox>
              </a-col>
              <a-col style="width: 80px">
                <a-checkbox value="D">Others</a-checkbox>
              </a-col>
            </a-row>
            <a-row>
            </a-row>
          </a-checkbox-group>
        </div>
        <div class="fit-3">
          <label class="label">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
          <label class="label">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
          <label class="label">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
        </div>
      </fieldset>
      <fieldset style="margin-top: 0px; height: 20vh">
        <legend style="margin-bottom: -10px">Contact</legend>
        <input placeholder="Name" type="text" />
        <input style="margin-top: 10px" placeholder="Position" type="text" />
        <div class="input-fit" style="margin-top: 10px">
          <input
            class="fit"
            placeholder="Phone No."
            type="text"
            style="margin-right: 10px"
          />
          <input class="fit" placeholder="Email" type="text" />
        </div>
      </fieldset>
      <fieldset style="margin-top: 0px; height: 10vh;">
        <legend style="margin-bottom: -10px">Purpose</legend>
        <a-checkbox-group v-model:value="value" style="margin-bottom: 7px;">
          <a-row>
            <a-col style="margin-right: 0px">
              <a-checkbox value="x" style="font-size: 14px">Initial meetup</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox value="y" style="font-size: 13.5px">Quotation Inquiry</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox value="z">Site Visit</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </fieldset>
      <div style="display: flex; justify-content: center">
        <h3 style="margin-right: 30px" class="agent">Agent: Peter Hill</h3>
        <h3 class="agent">Location: Pasig City</h3>
      </div>
    </div>
    <div v-if="page == 'Settings'" class="settings">
      <div class="alert" v-if="showAlert">
        <span class="alert-head">Alert</span>
        <div class="alert-message">
          <span>Settings successfully saved</span>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            padding-right: 10px;
          "
        >
          <div></div>
          <a-button type="primary" @click.prevent="toggleAlert"> Ok </a-button>
        </div>
      </div>
      <div class="pin">
        <div class="pincode">
          <h4>Passcode</h4>
          <code-input
            @complete="completed1 = true"
            :fields="4"
            :fieldWidth="56"
            :fieldHeight="56"
            :required="true"
          />
        </div>
        <div class="pincode">
          <h4>Re-type Passcode</h4>
          <code-input
            @complete="completed2 = true"
            :fields="4"
            :fieldWidth="56"
            :fieldHeight="56"
            :required="true"
          />
        </div>
      </div>
    </div>
    <div v-if="page == 'Success!'" class="success">
      <i class="fa fa-check-circle" aria-hidden="true"></i>
      <span class="text-green">Lead successfully submitted!</span>
      <span class="text-italic">The following details have been captured:</span>
      <span class="text-stablishment">Hotel XYZ</span>
      <span class="text-address">Address: #123 st. Pasig, Manila </span>
      <span class="text-phone">Contact: John Doe (09121212121)</span>
      <div class="fit-4">
        <label class="label">
          <i class="fa fa-picture-o" aria-hidden="true"></i>
        </label>
        <label class="label">
          <i class="fa fa-picture-o" aria-hidden="true"></i>
        </label>
        <label class="label">
          <i class="fa fa-picture-o" aria-hidden="true"></i>
        </label>
      </div>
    </div>
    <div v-if="page == 'Maps'">
      <GoogleMap
        api-key="AIzaSyDpwLKQ0iJjdx77CNNSVZ2blN0_cJxDVg8"
        style="width: 100%; height: 66.5vh"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import CodeInput from "../components/CodeInput.vue";
export default {
  name: "app-view",
  components: { GoogleMap, Marker, CodeInput },
  data() {
    return {
      completed1: false,
      completed2: false,
      page: "Capture",
      showAlert: false,
      center: { lat: 40.689247, lng: -74.044502 },
    };
  },
  methods: {
    goTo(page) {
      this.page = page;
    },
    toggleAlert() {
      this.showAlert = !this.showAlert;
    },
  },
};
</script>
<style scoped>
.alert {
  z-index: 9999;
  position: fixed;
  width: 230px;
  top: 120px;
  margin: 10% auto;
  padding: 6px;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid gray;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}
.alert-head {
  font-weight: bold;
}
.alert-message {
  padding: 10px;
  text-align: center;
}
.inbox-list {
  color: #595959;
}
.list-expand {
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 4;
  padding: 2px 10px;
}
.list {
  padding: 8px 10px;
  background: white;
  border-top: 2px solid rgba(0, 0, 0, 0.15);
}
.list-first {
  color: white;
  padding: 8px 10px;
  background-color: #a9abad;
}
.list-last {
  padding: 8px 10px;
  background: white;
  border-top: 2px solid rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
}
a:-webkit-any-link {
  color: black;
  text-decoration: none;
}
.map {
  padding: 10px;
}
.fa-search {
  font-size: 22px;
  color: #595959;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
}
.fa-sign-out {
  color: white;
}
.fa-floppy-o {
  color: white;
}
.settings {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}
.text-green {
  color: #81b625;
  margin-bottom: 5px;
  font-size: 15px;
}
.text-italic {
  font-style: italic;
  font-size: 15px;
  color: #595959;
  margin-bottom: 5px;
}
.text-stablishment {
  margin-top: 20px;
  font-weight: bold;
  color: #595959;
  font-size: 40px;
  margin-bottom: 5px;
}
.text-address {
  font-weight: 500;
  margin-bottom: 5px;
  color: #595959;
  font-size: 16px;
}
.text-phone {
  color: #595959;
  font-size: 16px;
}
.fa-check-circle {
  color: #81b625;
  font-size: 130px;
}

.pin {
  margin-top: 100px;
}
.pincode {
  margin-bottom: 20px;
}
.app-view {
  width: 100%;
  height: 100%;
  background-color: white;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 7px;
  padding-left: 15px;
  background-color: #5da3da;
  color: white;
  font-weight: 550;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}
.checkbox {
  display: flex;
  flex-direction: column;
}
.nav-icons {
  font-size: 18px;
  padding: 0px 15px;
}
.fa {
  margin: 0px 7px;
  cursor: pointer;
}
.content {
  padding: 8px 13px;
}
.plus {
  font-size: 50px;
  color: #5da3da;
}
.agent {
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #636363;
}
.input-fit {
  display: flex;
  flex-direction: row;
}
.input-fit > .fit {
  width: 120px;
}
.fit-2 {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.fit-3 {
  display: flex;
  justify-content: space-between;
}
.fit-4 {
  margin-top: 20px;
  padding: 0px 12px;
  width: 280px;
  display: flex;
  justify-content: space-between;
}
input {
  width: 250px;
  padding: 6px 10px;
  border: 1px solid #81b625;
  border-radius: 5px;
  line-height: 140%;
}
input::placeholder {
  font: 13px sans-serif;
}
h4 {
  color: #595959;
}
textarea::placeholder {
  font: 14px sans-serif;
}
.textarea-full {
  width: 239px;
}
.back {
  font-size: 16px;
  color: white;
  cursor: pointer;
}

.ant-checkbox-wrapper {
  color: #595959;
}

textarea {
  margin-top: 10px;
  padding: 6px 10px;
  border: 1px solid #81b625;
  border-radius: 5px;
  line-height: 140%;
}
fieldset {
  border: 1.5px solid #595959;
  box-sizing: border-box;
  grid-area: 1 / 1;
  padding: 12px;
  height: 30vh;
  border-radius: 5px;
}
label input {
  display: none;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5da3da;
  font: 1em Arial, sans-serif;
  color: #fff;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 65px;
  height: 65px;
  border-radius: 5px;
}

.fa-picture-o {
  font-size: 45px;
}
label:active {
  top: 2px;
  box-shadow: none;
}

legend {
  font-size: 16px;
  margin: 0;
  width: auto;
  color: #595959;
}
</style>
