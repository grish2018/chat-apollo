<template>
  <div class="profile__wrapper">
    <div class="profile__logout">
      <strong>Name:{{ currentUser.email }}</strong
      ><a href="#" @click.prevent="logout">Logout</a>
    </div>
    <h1>Your Profile</h1>
    <div>
      <p><strong>Login:</strong>{{ currentUser.login }}</p>
      <p><strong>Name:</strong>{{ currentUser.email }}</p>
      <p><strong>Email:</strong>{{ currentUser.name }}</p>
      <router-link to="/profile/edit">Edit Profile</router-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { onLogout } from "./../vue-apollo";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  created() {
    this.getCurrentUser;
  },
};
</script>

<style>
.profile__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile__logout {
  position: absolute;
  right: 12px;
  top: 5px;
}
</style>
