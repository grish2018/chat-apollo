<template>
  <div>
    Profile
    <a href="#" @click.prevent="logout">Logout</a>
    <div>
      <p>{{ currentUser.login }}</p>
      <p>{{ currentUser.email }}</p>
      <p>{{ currentUser.name }}</p>
      <router-link to="/profile/edit">Edit profil</router-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { onLogout } from "./../vue-apollo";
export default {
  name: "Profile",
  data() {
    return {
      currentUser: {},
    };
  },
  apollo: {
    currentUser: gql`
      query {
        currentUser {
          login
          email
          name
        }
      }
    `,
  },
  methods: {
    logout() {
      onLogout(this.$apollo.provider.defaultClient);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style></style>
