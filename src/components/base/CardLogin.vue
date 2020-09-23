<template>
  <validation-observer ref="obs">
    <v-card
      id="card_login"
      color="primary"
    >
      <v-card-title>
        <h2 class="titulo mt-2">
          Pronto para planejar seu sossego?
        </h2>
        <h5 class="white--text mt-4">
          Agende uma consultoria sem compromisso pelo formulário abaixo!
        </h5>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row no-gutters>
            <v-col cols="12">
              <span class="white--text">Nome:</span>
              <base-v-text-field-with-validation
                v-model="formulario.nome"
                rules="required"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-1"
            >
              <span class="white--text">Email:</span>
              <base-v-text-field-with-validation
                v-model="formulario.email"
                rules="required|email"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-1"
            >
              <span class="white--text">Estado Civil:</span>
              <base-v-text-field-with-validation
                v-model="formulario.estado_civil"
                rules="required"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-1"
            >
              <span class="white--text">Profissão:</span>
              <base-v-text-field-with-validation
                v-model="formulario.profissao"
                rules="required"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-1"
            >
              <span class="white--text">Telefone/Whatsapp:</span>
              <base-v-text-field-with-validation
                v-model="formulario.telefone"
                v-mask="['(##) ####-####', '(##) #####-####']"
                rules="required"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
                type="tel"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-1"
            >
              <span class="white--text">Reenda Mensal:</span>
              <base-v-text-field-with-validation
                v-model="formulario.renda"
                rules="required|numeric"
                clearable
                background-color="input"
                color="#FFF"
                dark
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              class="d-flex justify-center mt-3"
            >
              <v-btn
                color="secondary"
                :loading="loading"
                :disabled="loading"
                rounded
                small
                @click="submit"
              >
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </validation-observer>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    components: {
    },
    data: () => ({
      formulario: {
        nome: '',
        email: '',
        estado_civil: '',
        profissao: '',
        telefone: '',
        renda: '',
      },
      loading: false,
      overlay: true,
    }),
    methods: {
      async submit () {
        const result = await this.$refs.obs.validate()
        if (result) {
          this.loading = true
          setTimeout(() => {
            this.limpaFormulario()
          }, 2000).bind(this)
        } else {
          this.setNotification({
            color: 'error',
            text: 'Por gentileza, preencha todos os campos.',
          })
        }
      },
      limpaFormulario () {
        this.loading = false
        this.formulario = {
          nome: '',
          email: '',
          estado_civil: '',
          profissao: '',
          telefone: '',
          renda: '',
        }
        this.setNotification({
          color: 'confirm',
          text: 'Cadastro realizado com sucesso!',
        })
        this.$nextTick(() => {
          this.$refs.obs.reset()
        })
      },
      ...mapMutations({
        setStateLoading: 'SET_LOADING',
        setNotification: 'SET_NOTIFICATION',
      }),
    },
  }
</script>

<style lang="scss" scoped>
    @import '@/sass/components/card-login';
</style>
