<!-- The user set his delevery informations in this component -->
<template>
  
  <div class="address-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" >
        <span v-if="errors.name" style="color: red;">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" >
        <span v-if="errors.email" style="color: red;">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="form.address" >
        <span v-if="errors.address" style="color: red;">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" v-model="form.city" >
        <span v-if="errors.city" style="color: red;">{{ errors.city }}</span>
      </div>

      <div class="form-group">
        <label for="zip">Zip</label>
        <input type="text" id="zip" v-model="form.zip" >
        <span v-if="errors.zip" style="color: red;">{{ errors.zip }}</span>
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" id="country" v-model="form.country" >
        <span v-if="errors.country" style="color: red;">{{ errors.country }}</span>
      </div>

      <button type="submit">Submit</button>

    </form>

  </div>

</template>

<script>
export default {

  name: 'DeliveryForm',
  
  props: {
    initialFormData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data(){
    return {
      form: { },
      errors: { }
    };
  },

  watch: {
    initialFormData: {
      immediate: true,
      handler(newVal){
        this.form = newVal;
        console.log('update DeliveryForm : '+ JSON.stringify(this.form));
      }
    }
  },


  methods: {
    submitForm(){
      if(this.validateForm()){
        this.$emit('submit-form', this.form);
      }
    },

    validateForm(){
      this.errors = {};
      if (!this.form.name) this.errors.name = 'Name is required.';
      if (!this.form.address) this.errors.address = 'Address is required.';
      if (!this.form.city) this.errors.city = 'City is required.';
      if (!this.form.zip) this.errors.zip = 'Zip Code is required.';
      if (!this.form.country) this.errors.country = 'Country is required.';


      return Object.keys(this.errors).length === 0;
    }

  }



}


</script>


<style scoped>
  .address-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>