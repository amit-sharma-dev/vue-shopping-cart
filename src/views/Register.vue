<template>
  <div class="form-card">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <span class="error" v-if="errors.username && !isUsernameValid">{{
          errors.username
        }}</span>
        <input
          type="text"
          id="username"
          v-model="form.username.value"
          @blur="validateField('username')"
        />

        <label for="email">Email:</label>
        <span class="error" v-if="errors.email && !isEmailValid">{{
          errors.email
        }}</span>
        <input
          type="email"
          id="email"
          v-model="form.email.value"
          @blur="validateField('email')"
        />

        <label for="password">Password:</label>
        <span class="error" v-if="errors.password && !isPasswordValid">{{
          errors.password
        }}</span>
        <input
          type="password"
          id="password"
          v-model="form.password.value"
          @blur="validateField('password')"
        />

        <label for="firstname">First Name:</label>
        <span class="error" v-if="errors.firstname && !isFirstnameValid">{{
          errors.firstname
        }}</span>
        <input
          type="firstname"
          id="firstname"
          v-model="form.firstname.value"
          @blur="validateField('firstname')"
        />

        <label for="lastname">Last Name:</label>
        <span class="error" v-if="errors.lastname && !isLastnameValid">{{
          errors.lastname
        }}</span>
        <input
          type="lastname"
          id="lastname"
          v-model="form.lastname.value"
          @blur="validateField('lastname')"
        />

      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
// import { mapState } from 'vuex';
import { useStore } from 'vuex'

// export default {
//     name: 'Register',
//     data(){
//     return {
//       form: {
//         username: null,
//         email: null,
//         password: null,
//         firstname: null,
//         lastname: null
//       },
//       errors: {}
//     }
//   },
//   computed: {
//     user() {
//        return this.$store.state.user;
//     },
//     isUsernameValid() {
//       return this.form.username.trim() !== "";
//     },
//     isPasswordValid() {
//       return this.form.password.trim() !== "";
//     },
//     isEmailValid() {
//       this.form.email.includes("@")
//     },
//     isFirstnameValid() {
//       return this.form.firstname.trim() !== "";
//     },
//     isLastnameValid() {
//       return this.form.firstname.trim() !== "";
//     }
//   },
//   methods: {
//     validateField(field) {
//       if (field === "username" && !isUsernameValid) {
//         this.errors.username = "Username is required.";
//       }
//       if (field === "email" && !isEmailValid) {
//         this.errors.email = "Invalid email address.";
//       }
//       if (field === "password" && !isPasswordValid) {
//         this.errors.password = "Invalid password.";
//       }
//       if (field === "firstname" && !isFirstnameValid) {
//         this.errors.firstname = "Invalid First Name.";
//       }
//       if (field === "lastname" && !isLastnameValid) {
//         this.errors.lastname = "Invalid Last Name.";
//       }
//     }
//   },
//   submitForm() {
//     const router = useRouter();
//     errors.value = {}; // Clear previous errors
//     this.validateField("username");
//     this.validateField("email");
//     this.validateField("password");
//     this.validateField("firstname");
//     this.validateField("lastname");

//     if (Object.keys(this.errors).length === 0) {
//       //if no errors are found
//       // Validation passed, handle form submission
//       console.log("Form submitted successfully!", this.form);
//       const user = {
//         email: this.form.email,
//         username: this.form.username, 
//         firstname: this.form.firstname, 
//         lastname: this.form.lastname
//       }
//       // const store = useStore();
//       // store.dispatch('loadUser', user);
//       localStorage.setItem("user", JSON.stringify(user));
//       router.push('/'); 
//       // Add logic to send data to the server if needed
//     } else {
//       console.log("Form has validation errors. Please correct them.");
//     }
//   }
// }

const form = {
  username: ref(""),
  email: ref(""),
  password: ref(""),
  firstname: ref(""),
  lastname: ref("")
};

const errors = ref({});

const isUsernameValid = computed(() => form.username.value.trim() !== "");
const isPasswordValid = computed(() => form.password.value.trim() !== "");
const isEmailValid = computed(() => form.email.value.includes("@"));
const isFirstnameValid = computed(() => form.firstname.value.trim() !== "");
const isLastnameValid = computed(() => form.firstname.value.trim() !== "");




const validateField = (field) => {
  if (field === "username" && !isUsernameValid.value) {
    errors.value.username = "Username is required.";
  }
  if (field === "email" && !isEmailValid.value) {
    errors.value.email = "Invalid email address.";
  }
  if (field === "password" && !isPasswordValid.value) {
    errors.value.password = "Invalid password.";
  }
  if (field === "firstname" && !isFirstnameValid.value) {
    errors.value.firstname = "Invalid First Name.";
  }
  if (field === "lastname" && !isLastnameValid.value) {
    errors.value.lastname = "Invalid Last Name.";
  }
};

const router = useRouter();
const submitForm = () => {
  errors.value = {}; // Clear previous errors
  validateField("username");
  validateField("email");
  validateField("password");
  validateField("firstname");
  validateField("lastname");

  if (Object.keys(errors.value).length === 0) {
    //if no errors are found
    // Validation passed, handle form submission
    console.log("Form submitted successfully!", form);
    const user = {
      email: form.email.value,
      username: form.username.value, 
      firstname: form.firstname.value, 
      lastname: form.lastname.value
    }
    // const store = useStore();
    // store.dispatch('loadUser', user);
    alert("Form submitted successfully!");
    localStorage.setItem("user", JSON.stringify(user));
    router.push('/'); 
    // Add logic to send data to the server if needed
  } else {
    console.log("Form has validation errors. Please correct them.");
  }
};
</script>

<style scoped>
.form-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;

  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
