<template>
  <div class="app-view">
    <div class="nav">
      <span>{{ page }}</span>
      <div class="nav-icons">
        <i
          v-if="page == 'Capture'"
          class="fa fa-cog"
          @click.preven="goTo('Settings')"
          aria-hidden="true"
        ></i>
        <i
          v-if="page == 'Capture'"
          class="fa fa-refresh"
          aria-hidden="true"
        ></i>
        <div
          v-if="page == 'Maps' || page == 'Capture Success!'"
          class="back"
          @click.preven="goTo('Capture')"
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>Capture</span>
        </div>
        <i
          v-if="page == 'Settings' && this.completed1 && completed2"
          @click.preven="goTo('Capture')"
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
    <div v-if="page == 'Capture'" class="content">
      <fieldset style="height: 27vh">
        <legend>Establishment</legend>
        <input placeholder="Stablishment Name" type="text" />
        <div class="fit-2">
          <textarea placeholder="Location..." name="Text1" rows="3"></textarea>
          <i
            @click.preven="goTo('Maps')"
            class="fa fa-plus-circle plus"
            aria-hidden="true"
          ></i>
        </div>
        <div class="fit-3">
          <label>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
          <label>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
          <label>
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </label>
        </div>
      </fieldset>
      <fieldset style="margin-top: 10px; height: 29vh">
        <legend>Contact</legend>
        <input placeholder="Name" type="text" />
        <input style="margin-top: 10px" placeholder="Position" type="text" />
        <div class="input-fit" style="margin-top: 10px">
          <input
            class="fit"
            placeholder="Phone no."
            type="text"
            style="margin-right: 10px"
          />
          <input class="fit" placeholder="Email" type="text" />
        </div>
        <div class="fit-2">
          <textarea
            class="textarea-full"
            placeholder="Reason..."
            name="Text1"
            rows="3"
          ></textarea>
        </div>
      </fieldset>
      <button @click.preven="goTo('Capture Success!')">Save</button>
      <h3 class="agent">Agent: Peter Hill</h3>
    </div>
    <div v-if="page == 'Settings'" class="settings">
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
    <div v-if="page == 'Capture Success!'" class="success">
      <i class="fa fa-check-circle" aria-hidden="true"></i>
      <span class="text-green">Load successfully submitted!</span>
      <span class="text-italic">The Following Details have been captured</span>
      <span class="text-stablishment">Hotel XYZ</span>
      <span class="text-address">Address: #123 st. Pagig, Manila </span>
      <span class="text-phone">Contact: 09121212121</span>
      <div class="fit-4">
        <label>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          <input name="myImage" type="file" accept="image/*" />
        </label>
        <label>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          <input name="myImage" type="file" accept="image/*" />
        </label>
        <label>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
          <input name="myImage" type="file" accept="image/*" />
        </label>
      </div>
    </div>
    <div v-if="page == 'Maps'" class="map">
      <div class="search">
        <input class="fit" placeholder="Search Location" type="text" />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <GoogleMap
        api-key="AIzaSyDpwLKQ0iJjdx77CNNSVZ2blN0_cJxDVg8"
        style="width: 100%; height: 55vh"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
      <button>Use Location</button>
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
      center: { lat: 40.689247, lng: -74.044502 },
    };
  },
  methods: {
    goTo(page) {
      this.page = page;
    },
  },
};
</script>
<style scoped>
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
.fa-sign-out{
  color: #595959;
}
.fa-floppy-o{
  color: #595959;
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
  margin-top: 30px;
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
button {
  background-color: #5da3da;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
  border: none;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
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
  padding-top: 40px;
  padding-bottom: 10px;
  padding-left: 15px;
  background-color: white;
  color: #595959;
  font-weight: 550;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
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
  padding: 14px 13px;
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
  width: 103px;
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
  width: 280px;
  display: flex;
  justify-content: space-between;
}
input {
  width: 239px;
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
  background-color: #5da3da;
  padding: 3px 8px;
  padding-right: 15px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
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

label {
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
  width: 75px;
  height: 70px;
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
  color: #595959;
}
</style>
