<template>
  <div class="app-view">
    <div class="nav">
      <span>Capture</span>
      <div class="nav-icons">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <i class="fa fa-refresh" aria-hidden="true"></i>
      </div>
    </div>
    <div class="content">
      <fieldset style="height: 27vh">
        <legend>Establishment</legend>
        <input placeholder="Stablishment Name" type="text" />
        <div class="fit-2">
          <textarea placeholder="Location..." name="Text1" rows="3"></textarea>
          <i class="fa fa-plus-circle plus" aria-hidden="true"></i>
        </div>
        <div class="fit-3">
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
      </fieldset>
      <fieldset style="margin-top: 10px">
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
      <h3 class="agent">Agent: Peter Hill</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-view",
  components: {},
};
</script>
<style scoped>
.app-view {
  width: 100%;
  height: 100%;
  background-color: white;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 10px;
  padding-left: 15px;
  background-color: white;
  color: #0c2d48;
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
  font-size: 60px;
  color: green;
}
.agent {
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #0c2d48;
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
  justify-content: center;
  margin-bottom: 10px;
}
.fit-3 {
  display: flex;
  justify-content: space-between;
}
input {
  width: 239px;
  padding: 6px 10px;
  border: 2px solid #2e8bc0;
  border-radius: 5px;
  line-height: 140%;
}
input::placeholder {
  font: 13px sans-serif;
}
textarea::placeholder {
  font: 14px sans-serif;
}
.textarea-full {
  width: 239px;
}
textarea {
  margin-top: 10px;
  padding: 6px 10px;
  border: 2px solid #2e8bc0;
  border-radius: 5px;
  line-height: 140%;
}
fieldset {
  border: 2px solid #8bcd50;
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
  background: #8bcd50;
  box-shadow: 2px 2px 2px #aaa;
  font: 1em Arial, sans-serif;
  color: #fff;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 80px;
  height: 70px;
  border-radius: 5px;
}

.fa-picture-o{
  font-size: 45px;
}
label:active {
  top: 2px;
  box-shadow: none;
}

legend {
  color: #2e8bc0;
}
</style>
