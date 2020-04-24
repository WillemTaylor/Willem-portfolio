<template>
  <div id="contact">
    <section class="contact">
      <div class="thanks" v-if="loading">
        <h1>Thanks! I've got your message and will get back to you soon.</h1>
      </div>
      <form v-else class="form-container" name="submit-to-google-sheet">
        <h1>Any queries, please get in touch:</h1>
        <p>
          <label for="name">
            Name *
            <br />
          </label>
          <input required type="text" id="name" name="name" />
          <br />

          <label for="email">
            Email Address *
            <br />
          </label>
          <input required type="text" id="email" name="email" value />
          <br />
          <span class="email-invalid" style="display:none"
            >Must be a valid email address</span
          >

          <label for="message">
            Message *
            <br />
          </label>
          <textarea
            required
            id="message"
            name="message"
            style="height: 150px;"
          ></textarea>
          <br />

          <input class="submit" value="SUBMIT" @click="handleFormSubmit()" />
          <br />
        </p>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    validEmail(email) {
      let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    },
    handleFormSubmit() {
      event.preventDefault();
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbxaEdLo1cDY9QJS235PfcJ7C3q25Hk0NubZ3YutyannfiAuWGU/exec';
      const form = document.forms['submit-to-google-sheet'];
      let email = event.target.parentElement.parentElement[1];

      if (email.value && !this.validEmail(email.value)) {
        // if email is not valid show error
        let invalidEmail = form.querySelector('.email-invalid');
        if (invalidEmail) {
          invalidEmail.style.display = 'block';
          return false;
        }
      } else {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((this.loading = true))
          .catch((error) => console.error('Error!', error.message));
      }
    },
  },
};
</script>
