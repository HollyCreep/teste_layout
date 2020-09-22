<template>
  <v-overlay
    opacity="1"
    :value="overlay"
    color="#2d3a4b"
    style="text-align: center; z-index: 10"
  >
    <validation-observer ref="obs">
      <h1 class="titulo">
        Meu Estoque Digital
      </h1>
      <v-card-text class="pd-left">
        <v-form>
          <v-row>
            <v-col cols="12">
              <base-v-text-field-with-validation
                v-model="email"
                rules="required|email"
                label="Email"
                clearable
                flat
                solo
                prepend-inner-icon="mdi-account"
                background-color="#2d3a4b"
                color="#FFF"
                dark
                append-outer-icon=" "
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <base-v-text-field-with-validation
                v-model="password"
                rules="required|min:6|alpha_num"
                :type="pwdType"
                outlined
                clearable
                flat
                solo
                prepend-inner-icon="mdi-key"
                append-outer-icon="mdi-eye"
                label="Senha"
                background-color="#2d3a4b"
                color="#FFF"
                dark
                @click:append-outer="showPwd"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              class="d-flex justify-space-around ml-n5"
            >
              <v-btn
                color="primary"
                dark
                @click="showSignupModal"
              >
                Registrar
              </v-btn>
              <v-btn
                left
                color="primary"
                :loading="loading"
                :disabled="loading"
                @click="submit"
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </validation-observer>
  </v-overlay>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Login',
    components: {
    },
    data: () => ({
      email: '',
      password: '',
      loading: false,
      pwdType: 'password',
      overlay: true,
    }),
    methods: {
      async submit () {
        const result = await this.$refs.obs.validate()
        if (result) {
          this.loading = true
          var data = {
            email: this.email,
            password: this.password,
          }
          this.$http
            .post('auth/login', data, {
              emulateJSON: true,
            })
            .then(
              response => {
                this.login(response.data)
                this.loading = false
                this.$router.push({ name: 'Home' })
                this.setNotification({
                  color: 'success',
                  text: 'Bem vindo ' + response.data.name.split(' ')[0] + '!',
                })
              },
              error => {
                this.loading = false
                this.error = error
                this.setNotification({
                  color: 'error',
                  text: 'Login ou senha inválidos!',
                })
              },
            )
        }
      },
      showPwd () {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      ...mapMutations({
        showSignupModal: 'showSignupModal',
        setNotification: 'SET_NOTIFICATION',
        login: 'SET_LOGIN',
      }),
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login {
  background-color: $bg;
}

.pd-left {
  padding-left: 53px;
}
</style>
