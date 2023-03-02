<template>
  <div>
    <h1>init props are: {{ firstnumber2 }} + {{ secondnumber2 }} </h1>
    <h1>Result is: {{ result }} </h1>

    <label>First Number</label>
    <input v-model="firstNumber" />
    <label>Second Number</label>
    <input v-model="secondNumber" />
    <label>Operator</label>

    <select v-model="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="/">/</option>
      <option value="*">*</option>
    </select>

    <button @click="calc">Calc</button>
  </div>
</template>
<script>
// @ is an alias to /src

// MVVM
// Model 
// View
// Binding

export default {
  name: "HomeView",
  props: ['firstnumber2', 'secondnumber2'],
  data() {
    return {
      firstNumber: '',
      secondNumber: '',
      operator: '',
      result: ''
    }
  },
  methods: {
    calc() {
      this.result = eval(this.firstNumber + this.operator + this.secondNumber)
    }
  },
  computed: {

  }
};
</script>

<style>
input,
select {
  margin: 30px 20px 0 0px;
  display: block;
}
</style>
