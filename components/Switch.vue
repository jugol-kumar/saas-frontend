<template>
  <label class="container m-0">
    <input
        class="input"
        type="checkbox"
        :checked="props.modelValue"
        @change="emit('update:modelValue', $event.target.checked)"
    />
    <span class="switch me-1"></span>
    {{ props.label }}
  </label>
</template>

<script setup>
let props = defineProps({
  modelValue:Boolean,
  label: {type: String,},
})
let emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.container{
  padding: 10px 0px;
  align-items: center;
  max-width: 50px;
}
/*.container {*/
/*    cursor: pointer;*/
/*    display: flex;*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*}*/
.label {
  margin-left: 12px;
  color: #1a202c;
  /* Show an ellipsis if the text takes more than one line */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Visually hide the checkbox input */
.input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.switch {
  --switch-container-width: 50px;
  --switch-size: calc(var(--switch-container-width) / 2);
  --light-gray: rgba(255, 255, 255, 0.100);
  --gray: rgba(255, 255, 255, 0.100);
  --dark-gray: rgba(255, 255, 255, 0.100);
  --teal: rgb(200, 8, 8);
  --dark-teal: rgb(200, 8, 8);
  /* Vertically center the inner circle */
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  /* Make the container element rounded */
  border-radius: var(--switch-size);
  background-color: var(--light-gray);
  /* In case the label gets really long, the toggle shouldn't shrink. */
  flex-shrink: 0;
  transition: background-color 0.25s ease-in-out;
}
.switch::before {
  content: "";
  position: absolute;
  /* Move a little bit the inner circle to the right */
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  /* Make the inner circle fully rounded */
  border-radius: 9999px;
  background-color: #fff;
  border: 2px solid var(--light-gray);
  transition: transform 0.375s ease-in-out;
}
.input:checked + .switch {
  background-color: var(--teal);
}
.input:checked + .switch::before {
  border-color: var(--teal);
  /* Move the inner circle to the right */
  transform: translateX(
      calc(var(--switch-container-width) - var(--switch-size))
  );
}
.input:focus + .switch::before {
  border-color: var(--gray);
}
.input:focus:checked + .switch::before {
  border-color: var(--dark-teal);
}
.input:disabled + .switch {
  background-color: var(--gray);
}
.input:disabled + .switch::before {
  background-color: var(--dark-gray);
  border-color: var(--dark-gray);
}
</style>