<template>
  <div
    class="login-screen"
  >
    <img class="logo" :src="require(`@/assets/company.png`)" />
    <form @submit.prevent="login">
      <div class="container">
        <input type="email" v-model="email" placeholder="Enter Email" required/>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login-screen",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
    login(){
      window.location = "/pincode"
    }
  }
};
</script>
<style scoped>
.login-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
.logo {
  margin-top: -10px;
  margin-bottom: 15px;
  width: 290px;
  height: 137px;
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 18px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #CBDF80;;
  border-radius: 7px;
  box-sizing: border-box;
}

button {
  background-color: #5DA3DA;
  color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%), 0 6px 10px 0 rgb(0 0 0 / 10%);
  padding: 14px 20px;
  margin: 8px 0;
  font-size: 16px; 
  border: none;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
