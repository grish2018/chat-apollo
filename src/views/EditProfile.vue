<template>
  <div class="editProfile__form">
    <h1>Edit Profile</h1>
    <form action="" method="POST" @submit.prevent="editProfile">
      <input
        @blur="emailValidation"
        @input="validationTrue"
        type="text"
        value=""
        v-model="email"
        :placeholder="currentUser.email"
      />
      <div><p v-if="emaildNotValid">The email field is required</p></div>
      <input
        @blur="nameValidation"
        @input="validationTrue"
        type="text"
        value=""
        v-model="name"
        :placeholder="currentUser.name"
      />
      <div><p v-if="nameNotValid">The name field is required</p></div>
      <input type="submit" value="Save cahnges" />
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "EditProfile",
  data() {
    return {
      currentUser: {},
      email: "",
      name: "",
      nameNotValid: false,
      emaildNotValid: false,
    };
  },
  apollo: {
    currentUser: gql`
      query {
        currentUser {
          email
          name
        }
      }
    `,
  },
  methods: {
    editProfile() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($data: UpdateCurrentUserInput!) {
              updateCurrentUser(input: $data) {
                login
                email
                name
              }
            }
          `,
          variables: {
            data: {
              name: this.name,
              email: this.email,
            },
          },
        })
        .then((data) => {
          console.log(data);
          this.$router.push({ name: "profile" });
        })
        .catch((error) => {
          console.error(error);
        });
    },

    validationTrue() {
      this.nameNotValid = false;
      this.emaildNotValid = false;
    },
    nameValidation() {
      if (!this.name.trim()) {
        this.nameNotValid = true;
      } else {
        this.nameNotValid = false;
      }
    },
    emailValidation() {
      if (!this.email.trim()) {
        this.emaildNotValid = true;
      } else {
        this.emailNotValid = false;
      }
    },
  },
};
</script>

<style scoped>
.editProfile__form {
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 35%;
}
form {
  width: 100%;
  height: 100%;
}
form input,
form div {
  width: 100%;
  height: 9%;
  box-sizing: border-box;
}
form input[type="submit"] {
  background: rgb(53, 53, 131);
  font-size: 20px;
}
form p {
  color: red;
}
</style>
